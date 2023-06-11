:::lead
We have a **YouTube channel** at <https://youtube.com/@creatorsgarten>.
:::

If you’ve given talks in our events, you can find your talk videos published on our channel.

# Help us grow our channel

- **Subscribe** — We are currently aiming for 1,000 subscribers. You can help us by [subscribing to the channel!](https://youtube.com/@creatorsgarten).

- **Like, comment, and share** — Any engagement with our videos will help our channel to reach more people.

- **Improve our video metadata** — All of our video metadata is [[GitOps|managed on GitHub]] at {% render 'GitHub', repo: 'videos' %}. Whether you’re the author of a talk or someone who just wants to contribute, you can help us improve the video metadata to increase audience engagement. [Watch this segment to learn how Creatorsgarten manage YouTube videos on GitHub.](https://www.youtube.com/watch?v=GR2tKv93BDY&t=1502s)

  For example, you can:

  - Customize the **video title** to make it more engaging.
  - Improve the **thumbnail** to make it stand out. [:Icon{icon=cib:figma} We work on thumbnail images in Figma.][thumbfig]
  - Add **timestamps** to highlight key points in your talk.
  - Add a **description** that summarizes the content of your talk.
  - Add **tags** to help viewers discover your talk.
  - Add **subtitles** to make sure everyone can understand your talk.
  - Include **links** to relevant resources.
  - **Localize** the title and description to [internationalize your video.](https://notes.dt.in.th/LocalTalkInternationalization)

  To make changes, [send us a pull request!](https://github.com/creatorsgarten/videos/blob/main/CONTRIBUTING.md) Once your PR is merged, the video metadata will be automatically updated.

# Livestream archives

Livestream archives can be found on the [:Icon{icon=cib:facebook} Creatorsgarten Facebook page](https://www.facebook.com/creatorsgarten/videos/) as well as on the [:Icon{icon=cib:youtube} Garten Streams playlist][streams] on YouTube.

# Common audio/video issues

## When livestreaming

- Audio too quiet. Check in OBS that when speaking, the sound level is in the yellow color zone [between -20 and -9 dB](https://www.reddit.com/r/Twitch/comments/nctu56/best_sound_levels_for_obs/)

- Audio output works in one channel only. Check in OBS and make sure that there are 2 volume bars (left and right channel). If the problem from the source signal cannot be fixed, go to Advanced Audio Settings and make it mono.

## When casting remote talks

- Sound echos. **Mute yourself** as much as possible when not speaking, so that sound flows in one way.

## When preparing VODs

- Video and audio not synchronizing. In a video editor software, detach the audio from video, so that they can be moved independently.

- Issues that interrupt the presentation. For example, connectivity problems, technical issues. They might be safe to cut out from the VOD.

- Audio output works in one channel only. To fix in post, convert the audio to mono.

- Microphone feedback loop and noise. To fix in post, if you have Final Cut Pro you can use the [Voice Isolation](https://support.apple.com/guide/final-cut-pro/enhance-audio-verc1fab873/mac#:~:text=of%20equalization%20presets.-,Voice%20Isolation,-%3A%20Prioritizes%20human) feature.

- Missing presentation slides. They can be added in post.

# Streaming

To keep convention of streaming for many events to be streamlined (for the sake of editing as well). We would like to encourage to do following steps.

1. Use [LiveKit](https://github.com/creatorsgarten/livekit) to create overlay for events, then adding into OBS by using browser capture.

   ![CleanShot 2023-05-09 at 03 40 17](https://user-images.githubusercontent.com/22584594/236905447-f2e92ea5-f75d-4198-a057-1320b2aa3ab1.png)

2. Use **h264 hardware encoder** with the maximum bitrate of **18000Kbps** for streaming. On avarage, we will output stream to the internet at 9000Kbps anyway.

   ![CleanShot 2023-05-09 at 03 44 01](https://user-images.githubusercontent.com/22584594/236906138-b45dc7e0-2611-4caa-8342-beb8cd36627e.png)

3. For recording, use **HEVC (h265) hardware encoder** for the best file efficiency with the same maximum bitrate of **18000Kbps** and record at the format of **mp4**.

   ![CleanShot 2023-05-09 at 03 48 57](https://user-images.githubusercontent.com/22584594/236907154-26f745a0-0f3f-497c-8ec1-1dd5959fcb59.png)

   ::Message[I have a lower-end machine (@rayriffy has an M1 Max while I have a normal M1 machine), so my recording quality is set to “Same as stream.” This makes OBS use 2x less load because only a single video encoder is used for both streaming and recording (instead of using separate encoders, consuming twice the resource).]{from=@dtinth}
   ::Message[On file format, there is a caveat of MP4 file format. I have once lost an entire recording due to a system crash (MP4 files are unrecoverable if it is not finalized), so nowadays I record as MKV instead, and then use the **Remux recording** feature to remux it into MP4.]{from=@dtinth}

4. Audio sample rate is set to **48kHz**, and video output resolution set to **1920x1080** with *common FPS values* of **60**

5. We would like to recommend using **Audio Hijack** with **Loopback** to the mix sound instead of using OBS’s mixer. This is for the best for streamer to only control audio levels in just one place. Additionally, Audio Hijack lets you **separately record** each audio source for future editing. Each venue will have different setup, so please plan ahead.

   ![CleanShot 2023-05-09 at 03 50 09](https://user-images.githubusercontent.com/22584594/236907486-5141eba5-41a0-44f5-9c60-48ef9c8ee8cf.png)

6. Main video feed that is either output from *ATEM Pro Mini* or *directly from Speaker Screen* must be extend to **3:2** ratio by height is counted from the top of the canvas to **the top of overlay navbar**. The rest of the space will be given to the camera itself. This convention is being made to make video thumbnail in each video to be consistant as well.

   ![2023-05-03 20-36-16-0001](https://user-images.githubusercontent.com/22584594/236909087-05c89d36-4018-4165-b5ab-508046951f1a.png)

   ::Message[Actual canvas that being output from ATEM is actually 3:2, but basically put ATEM canvas to full without cropping, the rest of available space goes to camera]{from=@rayriffy}

# Preparing videos

[Work on preparing VODs for some events are coordinated on Airtable.](https://airtable.com/shru5fGOzjhHHxo05)

Each talk goes through several stages before they are uploaded to the YouTube channel.

   1. **Source** — Obtain the source material, either recorded in OBS, or downloaded back from Facebook Live. Re-upload it to YouTube (unlisted) for easy viewing, and also upload it to OneDrive for easy downloading by teammates.

   2. **Timestamp** — Determine the time range within the source material that contains the talk.

        - It does not need to be precise, just a hint for other teammates on where to find the talk.

   3. **Slice** — Cut the source video around the time range and put it in its own file. This results in a smaller file that’s easier to work with.

        - This step can be automated. The [`cut`](https://github.com/creatorsgarten/videos/blob/main/bin/cut) script can be used to cut the video in a lossless manner using ffmpeg. It generates a `.source.mp4` file. One minute of padding is added to the video to account for imprecise timestamps in step 2.

   4. **Fix** — Perhaps the most resource-consuming part of this process. Watch the talk to identify the issues in the video, and fix them if possible.

        - Examples: Cut out the part where the talk is interrupted by a technical issue. Cut out the part where people are just passing the mic around. Apply noise reduction. Fix audio channel issues. Boost the audio level if source file is extremely quiet.

        - In simple cases, this can be done via a simple video editing software like iMovie.

        - There are some commonly-used [[FFmpeg|FFmpeg snippets]].

   5. **Upload** — The video is uploaded to YouTube as unlisted.

# Publishing videos

1. **Import into GitHub** — After the video is uploaded, import it into the {% render 'GitHub', repo: 'videos' %} repository. This will create the metadata files.

2. **Prepare the metadata** — Update the metadata files. When the files are updated, they will automatically be reflected in YouTube.

3. **Publish** — When the `published` property is set to `true`, then the video becomes Public on YouTube. (Otherwise it’s Unlisted.)

# Links

- {% render 'YouTube', user: 'creatorsgarten' %}
- [:Icon{icon=cib:figma} Thumbnail Figma][thumbfig]

[thumbfig]: https://www.figma.com/file/Lg0A78Zwm1T4rtcDljsIfK/Video-thumbnails?node-id=0-1&t=EIr6PBojoDVot7c5-0
[streams]: https://www.youtube.com/playlist?list=PLTuz2sLvbRpwkoLi0AYDwdABU5dhkoGIr
