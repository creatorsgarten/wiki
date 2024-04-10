:::lead
**Message signing** lets user generate a signature for a message, verified by Creatorsgarten’s servers.
:::

## Signing a message

To sign an arbitrary message,

1. Go to <https://creatorsgarten.org/dashboard/sign>
2. Type in the message to sign, for example, "hello world".
3. Click **Sign message** and you will get a signature.

Example signature looks like this:

```
grtn_v1_b94d27b9934d3e08a52e52d7_644c35a6802c02345887f156_6616f6372507e7e12f17c2b7_1af9dcc56879174816dbb6e9
```

## Asking people to sign a message

You can construct a URL with `?signMessage` query param, e.g.

```
https://creatorsgarten.org/dashboard/sign?signMessage=hello+world
```

When a person visit [this link](https://creatorsgarten.org/dashboard/sign?signMessage=hello+world), this will make them sign the message "hello world". If they want to use the signature, they can copy the signature.

## Verifying a signature

Make a GET request to `https://creatorsgarten.org/dashboard/sign/verify`, passing `?signature` query param, e.g.

```
https://creatorsgarten.org/dashboard/sign/verify?signature=grtn_v1_b94d27b9934d3e08a52e52d7_644c35a6802c02345887f156_6616f6372507e7e12f17c2b7_1af9dcc56879174816dbb6e9
```

If a signature is valid, you get an object back, like this:

```json
{
  "verified": true,
  "messageHash": "b94d27b9934d3e08a52e52d7",
  "userId": "644c35a6802c02345887f156",
  "timestamp": "2024-04-10T20:27:35.000Z",
  "nonce": "6616f6372507e7e12f17c2b7"
}
```

| Field | Description |
| --- | --- |
| `verified` | `true`, as the signature is valid |
| `messageHash` | SHA-256 hash of the message, truncated to 24 characters |
| `userId` | User ID of the person who signed the message (you can find your user ID in [/dashboard](/dashboard)) |
| `timestamp` | Timestamp of when the signature was created |
| `nonce` | Random nonce used to create the signature |