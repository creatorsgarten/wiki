:::lead
**Authgarten** is a central authentication system for Creatorsgarten projects.
:::

Event organizers and other initiatives can use Authgarten to authenticate Creatorsgarten members. It implements the OpenID Connect protocol and aims to be easily integrated into applications, especially [**Next Auth**](https://next-auth.js.org/).

- **Application Name** — This is the application name that is displayed to the user when redirecting.
- **Client ID** — This can be any URL. Recommended URL to GitHub repo that hosts the code.
- **Redirect URL(s)** — Allowed URL to redirect.

# Integration

Here’s an overview:

1. Integrate with OpenID Connect using this issuer: `https://creatorsgarten.org`. See sections below to learn how to integrate.

2. (Optional) If your app is a first-party app (built by Creatorsgarten team for use in an event), you can add app information to [`oauth.ts`](https://github.com/creatorsgarten/creatorsgarten.org/blob/main/src/constants/oauth.ts) and submit a pull request to skip the data consent request.

## NextAuth.js

- [See the example `[...nextauth].ts` configuration file.](https://github.com/dtinth/authgarten-example/blob/main/pages/api/auth/%5B...nextauth%5D.ts)
- [Try the demo.](https://authgarten-example.vercel.app/)

## Express

Use [`express-openid-connect`](https://www.npmjs.com/package/express-openid-connect) to protect your app. Just add the middleware and when user enters the app unauthenticated, they will be redirected to Authgarten.

```js
import { auth as oidc } from 'express-openid-connect'

app.use(
  oidc({
    issuerBaseURL: 'https://creatorsgarten.org',
    baseURL: 'http://localhost:3000',
    clientID: 'YOUR_CLIENT_ID',
    secret: 'LONG_RANDOM_STRING',
  }),
)
```

## Manual integration

1. Send user to `https://creatorsgarten.org/auth/authorize` with the following info:

    ```
    ?client_id=
    &scope=openid
    &response_type=id_token
    &redirect_uri=
    &state=
    ```

2. User will have to log in and give consent to share information.

    [See example](https://creatorsgarten.org/auth/authorize?client_id=example&scope=openid+email+https://eventpop.me/e/15113&response_type=id_token&redirect_uri=https://oauth.spacet.me)

3. If the user provides consent, then they will be redirected to `redirect_uri` with the following query parameters:

    ```
    ?state=
    &id_token=
    ```

    The `id_token` is a [JSON Web Token](https://jwt.io/).

    - You can decode it to get the user information.
    - You should verify the signature using the public key available at <https://creatorsgarten.org/.well-known/jwks>.
    - You should check these claims in the payload:
        - `iss` — Should be `https://creatorsgarten.org`
        - `aud` — Should be the `client_id` you specified
        - `exp` — Should be in the future

Here is an example code to decode the JWT.

```js
import { createRemoteJWKSet, jwtVerify } from 'jose'

const issuer = 'https://creatorsgarten.org'
const keySetUrl = new URL('https://creatorsgarten.org/.well-known/jwks')
const clientId = 'example'
const keySet = createRemoteJWKSet(keySetUrl)
function validate(jwt) {
  return jwtVerify(jwt, keySet, { issuer, audience: clientId })
}

const result = await validate('eyJhb.....')
console.log(result)
```

# OAuth Scopes

Each OAuth scope will add more claims to the resulting JWT, allowing you to request more information as needed.

| Scope | Affected Claim | Description |
| --- | --- | --- |
| `email` | `email` | Include the email associated with the Eventpop account. |
| `https://eventpop.me/e/<id>` | `eventpopTickets` | Include the ticket information that the user has with the specified event ID. Only works with Creatorsgarten events. |