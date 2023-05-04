:::lead
Some FFmpeg snippets for pre-processing [[Video|video]] files.
:::

# Preprocessing videos for editing in Final Cut Pro

It often happens that files downloaded from livestreams makes Final Cut Pro very laggy. One workaround is to [use ffmpeg to re-encode the file][ffmpeg-h264] once before editing. There will be a bit of quality hit, but the effect is minimal.

```
ffmpeg -i IN.mp4 -c:v libx264 -crf 18 -preset fast OUT.mp4
```

[ffmpeg-h264]: https://trac.ffmpeg.org/wiki/Encode/H.264
