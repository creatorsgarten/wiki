:::lead
**Authgarten** is a central authentication system for Creatorsgarten projects.
:::

Event organizers and other initiatives can use Authgarten to authenticate Creatorsgarten members. It implements the OpenID Connect protocol and aims to be easily integrated into applications, especially [**Next Auth**](https://next-auth.js.org/).

- **Application Name** — This is the application name that is displayed to the user when redirecting.
- **Client ID** — This can be any URL. Recommended URL to GitHub repo that hosts the code.
- **Redirect URL(s)** — Allowed URL to redirect.

# Integration

1. Add your app information to [`oauth.ts`](https://github.com/creatorsgarten/creatorsgarten.org/blob/main/src/constants/oauth.ts) and submit a pull request.

2. Integrate with OpenID Connect with issuer: `https://creatorsgarten.org`

    Example authentication configuration:

    - **NextAuth.js** — [`[...nextauth].ts`](https://github.com/dtinth/authgarten-example/blob/main/pages/api/auth/%5B...nextauth%5D.ts), [Demo](https://authgarten-example.vercel.app/)