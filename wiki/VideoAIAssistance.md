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

# Creating chapters

The subtitles are converted to CSV format, and then fed into LLM using this prompt. The model of choice is currently **Gemini 1.5 Pro.**

```
You will be given a timed transcript of a video or audio recording. Your task is to generate chapters with timestamp information based on this transcript.

Here is the timed transcript:
<transcript>
TRANSCRIPT_HERE
</transcript>

Analyze the transcript and create meaningful chapters based on the content. Follow these guidelines:

1. Identify major topic changes or significant shifts in the conversation.
2. Create concise, descriptive titles for each chapter that summarize the main point or theme.
3. Use the timestamp of when a new topic or significant point begins as the chapter start time.
4. Aim for chapters that are neither too short (less than 30 seconds) nor too long (more than 5 minutes), unless the content warrants it.

Format your output as follows:
"[timestamp]": "[chapter title]"

For example:
"0:00": "Introduction and greetings"
"2:30": "Discussion of JavaScript projects"

Important notes:
- The first chapter must start at 0:00, regardless of the first timestamp in the transcript.
- Use quotation marks around both the timestamp and the chapter title.
- Use a colon and space after the timestamp.
- Separate each chapter entry with a new line.
- The chapter titles should be in the same language as the transcript.
- Try to summarize the key points in a 'too long; didn't read' manner. We want the viewers to get the gist of the contents just by reading the chapter titles (so they can dive into more details if they're really interested), rather forcing them to read the whole thing to get the point. For example, prefer "when conflicts arise, assume good faith" over "dealing with conflicts".
- Aim for a chapter every 45-120 seconds of transcript.
- Use Thai language.

Think through the transcript carefully, identifying key topics and transitions. Then, create your chapter list based on your analysis.

Provide your final output enclosed in <chapters> tags.
```