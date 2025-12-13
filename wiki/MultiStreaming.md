:::lead
**MultiStreaming** allows [us](Livegarten) to stream simultaneously to multiple platforms (YouTube and Facebook) using Oryx, eliminating the need for paid third-party multistreaming services.
:::

We have an [Oryx](https://github.com/ossrs/oryx) instance running that handles stream forwarding to both YouTube and Facebook. This page documents how to use it for multistreaming.

## Prerequisites

- Oryx instance URL and access password (shared privately with relevant livestreaming teams)
- Access to Facebook page (for going live to Facebook)
- Access to YouTube channel (for going live on YouTube)
- OBS configured and ready to stream
- Network connectivity

## Streaming Steps

### 1. Access Oryx

Go to the Oryx URL and enter the password, then click Submit.

![](https://usercontent.creatorsgarten.org/c/v1765637767/644c35a6802c02345887f156/image_rcw7dm.webp)

### 2. Configure OBS

1. In Oryx, navigate to the **Streaming** tab
2. Under **RTMP: OBS or vMix**, go to **OBS configuration**
3. Follow the configuration instructions to set up OBS with the RTMP server details

![](https://usercontent.creatorsgarten.org/c/v1765637806/644c35a6802c02345887f156/image_zo6oaa.webp)

### 3. Start Streaming

In OBS, click **Start Streaming** to begin sending your stream to Oryx.

### 4. Monitor Stream Health (Optional)

In Oryx, click on the link next to "Click to SRS console to see stream info", then click on **Streams** to inspect the incoming video in the SRS Console. This helps verify that the video is being received correctly.

![](https://usercontent.creatorsgarten.org/c/v1765637904/644c35a6802c02345887f156/image_hjljhb.webp)

### 5. Configure Forwarding

Go to the **Forward** tab in Oryx. The stream key and URLs for both YouTube and Facebook should already be configured.

### 6. Go Live on YouTube

Under **YouTube Creatorsgarten**, click **Start Live** to begin streaming to YouTube. The button will change to **Stop Live** once activated.

![](https://usercontent.creatorsgarten.org/c/v1765637958/644c35a6802c02345887f156/image_a700em.webp)

### 7. Go Live on Facebook

Under **Custom Creatorsgarten**, click **Start Live** to begin streaming to Facebook.

### 8. Check Live Status

Under **Live Status**, verify that both streams are active and healthy.

![](https://usercontent.creatorsgarten.org/c/v1765638017/644c35a6802c02345887f156/image_vv80zy.webp)

## Stopping the Stream

1. Stop streaming from OBS
2. In Oryx, click **Stop Live** for both forwarding targets:
   - YouTube Creatorsgarten
   - Custom Creatorsgarten
