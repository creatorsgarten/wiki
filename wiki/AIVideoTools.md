---
title: AI Video Tools
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

The subtitles file is converted to CSV format using the [`vtt_to_csv`](https://github.com/dtinth/autosub/blob/main/scripts/vtt_to_csv.ts) script, and then fed into LLM using this prompt. The model of choice is currently **Gemini 1.5 Pro** due to its fluency in Thai language.

```
You will be given a timed transcript of a video or audio recording. Your task is to generate chapters with timestamp information based on this transcript.

Here is the timed transcript:
<transcript>
__TRANSCRIPT_HERE__
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

# Creating description

Using the same CSV transcript, and then fed into LLM using this prompt. The model of choice is currently **Claude 3.5 Sonnet** or **Gemini 1.5 Pro.** Compare their output and choose the best one.

```
You are tasked with crafting a description in Thai language based on a given talk transcript. It will be used in the description of the video recording for the meetup's session. Follow these steps carefully:

1. First, read through the entire transcript provided below:

<transcript>
__TRANSCRIPT_HERE__
</transcript>

2. Analyze the transcript, paying attention to:
   - The main topic or theme of the talk
   - The speaker's background or credentials (if mentioned)

3. Based on your analysis, create a concise yet informative description in Thai language. The description should:
   - Summarize the main topic and purpose of the talk.
   - Be engaging and encourage viewers to watch the full video. Do not give away the whole talk (we have a summary section for that already).
   - Do not be overly enthusiastic or hard sell too much, just let the reader know what the session is about
   - Avoid words that exaggerate like สุดล้ำ, น่าทึ่ง or exclamation marks. Let the content speak for itself.
   - Be between 100-150 words in length.

4. Ensure that the description is written in fluent, natural Thai language, appropriate for a general audience interested in the topic.
   - For English words, if it is a common word, then spell it using lowercase (e.g. oscillator). If it is a proper noun, capitalize it properly (e.g. Google Chrome). If it's an API name or part of computer code, use verbatim capitalization (e.g. getElementById).
   - Usage of ๆ: Do not add a space before ๆ. Add a space after ๆ.

5. Do not include timestamps or specific time references from the transcript in your description.

6. Present your final session description within <description> tags.

Here are some examples of good description.

- "โลกไร้งาน? อนาคตที่ AI อาจเข้ามาแทนที่แรงงานมนุษย์ ฟังมุมมองเชิงเศรษฐศาสตร์จากอาจารย์ผู้เชี่ยวชาญ ถึงผลกระทบของ AI ต่อตลาดแรงงานในประเทศไทย พร้อมแนวทางรับมือและการปรับตัวเพื่อเตรียมพร้อมสำหรับอนาคต การลงทุนในทักษะ การสร้างงานใหม่ และบทบาทของรัฐบาลในการช่วยเหลือประชาชน รวมถึงการพูดคุยถึงแนวคิด UBI หรือรายได้พื้นฐานถ้วนหน้า และการสร้างสมดุลระหว่างชีวิตและการทำงาน มาร่วมหาคำตอบและเตรียมพร้อมรับมือกับโลกที่กำลังเปลี่ยนแปลงไป"
- "พบกับคุณเอ็ม อดีต UX Designer ผู้ผันตัวมาเป็น frontend developer กับประสบการณ์กว่า 3-4 ปี ในหัวข้อ "JavaScript Mental Model" ที่จะพาคุณดำดิ่งสู่โลกของ JavaScript ตั้งแต่พื้นฐานความสำคัญของภาษา ไปจนถึงแนวคิดเชิงลึกที่มักถูกมองข้าม คุณเอ็มจะอธิบายถึงความเข้าใจผิดที่พบบ่อย พร้อมยกตัวอย่างโค้ดและภาพประกอบที่เข้าใจง่าย ช่วยให้คุณเห็นภาพการทำงานของ JavaScript อย่างชัดเจน ไม่ว่าคุณจะเป็นนักพัฒนาหน้าใหม่ หรือผู้ที่ต้องการทบทวนความรู้ วิดีโอนี้จะช่วยเสริมสร้างความเข้าใจพื้นฐาน JavaScript ให้แข็งแกร่งยิ่งขึ้น เพื่อต่อยอดสู่การเขียนโค้ดอย่างมืออาชีพ"
- "อาจารย์สมทิพ วัฒนพงษ์วานิช จากคณะเศรษฐศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย นำเสนอมุมมองเกี่ยวกับผลกระทบของ AI ต่อตลาดแรงงานในยุคเศรษฐกิจดิจิทัล อาจารย์อธิบายทฤษฎีทางเศรษฐศาสตร์ที่เกี่ยวข้อง วิเคราะห์สถานการณ์ตลาดแรงงานไทยในปัจจุบัน และนำเสนอความท้าทายที่ประเทศไทยกำลังเผชิญ เช่น การขาดแคลนแรงงานทักษะสูง และประชากรสูงวัย นอกจากนี้ยังยกตัวอย่างนโยบาย upskilling และ reskilling ที่ประสบความสำเร็จจากประเทศอินโดนีเซีย เพื่อเป็นแนวทางในการพัฒนาทรัพยากรมนุษย์ของไทย วิดีโอนี้เหมาะสำหรับผู้ที่สนใจเรื่องเศรษฐกิจ การศึกษา และอนาคตของตลาดแรงงานในยุค AI"
- "พบกับคุณออม นักพัฒนา framework Elysia ที่จะมาเล่าถึงเบื้องหลังการพัฒนา framework ของตัวเอง พร้อมสาธิตการใช้งานฟีเจอร์ที่น่าสนใจอย่าง end-to-end type safety ที่ช่วยแก้ปัญหาการ sync type ระหว่าง frontend และ backend คุณออมจะพาไปดูกลไกการทำงานของฟีเจอร์นี้ ตั้งแต่การใช้งาน JavaScript Proxy ไปจนถึงเทคนิคการ ‘แก๊สไลท์’ ผู้ใช้งาน ฟังเรื่องราวการพัฒนา framework และเรียนรู้แนวคิดการแก้ปัญหาเชิงวิศวกรรมที่น่าสนใจจากประสบการณ์ตรงของคุณออมได้ในวิดีโอนี้"

Remember, the goal is to create a compelling teaser that accurately represents the content of the talk and encourages viewers to watch the full video.
```

# Creating title

Using the generated video description and chapters (and optionally a transcript), we can use LLM to generate title ideas. The model of choice is currently **Claude 3.5 Sonnet** or **Gemini 1.5 Pro.** It will generate a few ideas, so it is up to you to pick one.

```
You are tasked with creating an engaging and concise title for a YouTube video based on the following information:

<info>
__INFO_HERE__
</info>

Your goal is to create a compelling YouTube video title that is no longer than 75 characters. This title should capture the essence of the talk and entice viewers to watch the video.

Guidelines for creating an effective YouTube title:
1. Be concise and attention-grabbing
2. Include keywords related to the main topic
3. Avoid clickbait or misleading information
4. Consider using numbers or questions if relevant
5. Highlight the unique aspect or main takeaway of the talk

Analyze the provided information, focusing on the main themes, key points, and any unique perspectives presented in the talk.

Based on your analysis, create a title in Thai language that best represents the content and appeal of the video while adhering to the 75-character limit. Give us 5 ideas.

The name of the speaker will be added afterwards, so do not include them in your answer.

Provide your proposed YouTube video titles within 5 <title> tags. Do not include any explanation or justification for your title choice.
```