# Ideas

- Merge wiki and main website
- Set up authentication system

# Links

- Figma link: <https://www.figma.com/file/px5xY5kdhBYL0d47Kjccme?node-id=2:3>
- Wiki API: <https://wiki.creatorsgarten.org/api>
   - Internal URL: `http://creatorsgarten-wiki-777539814434701345.internal.rcf2.deploys.app`

# Scratchpad

:::Draft

## Development

Copy `.env.example` to `.env` and fill in the values. For the JWT keypair, you can generate one by running this in a Node.js REPL:

```js
await require('jose').generateKeyPair('RS256').then(k => ({
  JWT_PRIVATE_KEY: k.privateKey.export({ format: 'pem', type: 'pkcs1' }),
  JWT_PUBLIC_KEY: k.publicKey.export({ format: 'pem', type: 'spki' }),
})).then(e => console.log(Object.entries(e).map(([k, v]) => `${k}=${JSON.stringify(v)}`).join('\n')))
```

Please note that JWTs generated with a development keypair cannot be used to edit the wiki in production.

:::