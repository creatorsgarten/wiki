:::lead
Some FFmpeg snippets for pre-processing [[Video|video]] files.
:::

# Preprocessing videos for editing in Final Cut Pro

It often happens that files downloaded from livestreams makes Final Cut Pro very laggy. One workaround is to [use ffmpeg to re-encode the file][ffmpeg-h265] once before editing. There will be a bit of quality hit, but the effect is minimal.

```sh
ffmpeg -i IN.mp4 -vcodec libx265 -tag:v hvc1 -crf 18 OUT.mp4
```

Note: **hvc1** tag is required for AVKit to playback properly.

[ffmpeg-h265]: https://trac.ffmpeg.org/wiki/Encode/H.265

:::Draft
# Using M1's GPU to preprocess video

By using `libx265` encoder might causes your Mac to ran out of CPU for a very long time. If you're able to sacrifice post-preprocessed massive file size for a faster speed. Then `hevc_videotoolbox` would be handy as well.

First do a `ffprobe` to determine input video's bitrate.

```sh
ffprobe -v quiet -select_streams v:0 -show_entries stream=bit_rate -of default=noprint_wrappers=1 IN.mp4
```

This command will answer video bitrate in *bits* unit.
:::

