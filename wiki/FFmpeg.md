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
