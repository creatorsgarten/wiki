---
title: Video AI Assistance
---

:::lead
This page documents how AI tools can be used to assist in creating subtitles, chapters, descriptions, and titles for our [[videos]].
:::

The process is as follows:

- **Create a transcript and subtitles for the video.**
- **Create chapters from the transcript.**
- **Create description from the transcript.**
- **Create title from video metadata.**

# Creating a transcript and subtitles

The workflow for auto-generating captions is detailed in {% render 'GitHub', repo: 'dtinth/autosub' %}. The generated caption should be human-reviewed afterwards.

Editing captions afterwards can be done using subtitle-editing tools such as:

- [Happy Scribe online subtitle editor](https://www.happyscribe.com/subtitle-tools/online-subtitle-editor)
- [Amara public](https://amara.org/subtitling-platform/)
- Google Sheets, with {% render 'GitHub', repo: 'dtinth/subtitle-spreadsheet' %}