:::lead
**MultiStreaming** allows us to stream simultaneously to multiple platforms (YouTube and Facebook) using Oryx, eliminating the need for paid third-party multistreaming services.
:::

We have an [[Oryx]] instance running that handles stream forwarding to both YouTube and Facebook. This page documents how to use it for multistreaming.

## Prerequisites

- Oryx instance URL and access password (shared privately with relevant livestreaming teams)
- OBS configured and ready to stream
- Network connectivity

## Streaming Steps

### 1. Access Oryx

Go to the Oryx URL and enter the password, then click Submit.

### 2. Configure OBS

1. In Oryx, navigate to the **Streaming** tab
2. Under **RTMP: OBS or vMix**, go to **OBS configuration**
3. Follow the configuration instructions to set up OBS with the RTMP server details

### 3. Start Streaming

In OBS, click **Start Streaming** to begin sending your stream to Oryx.

### 4. Monitor Stream Health (Optional)

In Oryx, click on the link next to "Click to SRS console to see stream info", then click on **Streams** to inspect the incoming video in the SRS Console. This helps verify that the video is being received correctly.

### 5. Configure Forwarding

Go to the **Forward** tab in Oryx. The stream key and URLs for both YouTube and Facebook should already be configured.

### 6. Go Live on YouTube

Under **YouTube Creatorsgarten**, click **Start Live** to begin streaming to YouTube. The button will change to **Stop Live** once activated.

### 7. Go Live on Facebook

Under **Custom Creatorsgarten**, click **Start Live** to begin streaming to Facebook.

### 8. Check Live Status

Under **Live Status**, verify that both streams are active and healthy.

## Stopping the Stream

1. Stop streaming from OBS
2. In Oryx, click **Stop Live** for both forwarding targets:
   - YouTube Creatorsgarten
   - Custom Creatorsgarten

## Related Pages

- [[Livestreaming]] — General livestreaming setup and hardware
- [[Livegarten]] — Information about Creatorsgarten's livestreaming guild
- [[Videos]] — Post-stream video processing and publishing
- [[Oryx]] — Oryx streaming platform documentation
