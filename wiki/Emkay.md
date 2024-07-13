---
meetups:
- date: '2023-02-19'
  name: 'Post-Bangkok Open Source Hackathon MK.git'
  place: 'MK The Coast Bangna'
  url: https://www.facebook.com/dtinth/posts/pfbid02KpmSTWc1tkyzvEJHb2FVAbhB2kgR4KJcn8w1WV85vgnbU7B2DxhF7h5JGLKTXCE7l

- date: '2023-09-26'
  name: 'Post-LINE Conference Thailand 2023 MK.line.me'
  place: 'MK True Digital Park'
  url: https://www.facebook.com/dtinth/posts/pfbid0yGeef8LYWx261HVaL7DqRV3hgdfckqd5qhEDEvrZ3bY7xEfXC3YFHTizv4nJTLTyl

- date: '2023-10-21'
  name: 'Post-Hacktoberfest Thailand 2023 mk.hacktober.ts'
  place: 'MK Union Mall'
  url: https://www.facebook.com/rayriffy/posts/pfbid0E2ZMtBK6zNNMEYkxYwRcusigm12ZXfsLf6zNFwRS24LPxWd6TKoBpQJ3m2qCuPQbl

- date: '2023-11-29'
  name: 'Emkay.rs: Rust กับ WebAssembly เอาไปทำอะไรได้'
  place: 'MK Siam Square One'
  url: https://www.facebook.com/events/371474812018279

- date: '2024-07-14'
  name: 'Emkay.js at The Stipud Honkathack in Thailand Dan of Smile ครั้งที่ 8'
  place: 'MK Chamchuri Square'
  url: https://www.facebook.com/dtinth/posts/pfbid02MtRLG2xdPrPjcfmG1GdA3ZgczuVFeoVDfar9MpWsyAVBBsao1TCjYpH7Y7BFT9HLl
---

{% assign events = page.meetups | sort: 'date' | reverse %}
|  Date | Name | Place |
| ----- | ---- | ----- |{% for event in events %}
| {{ event.date }} | [{{ event.name }}]({{ event.url }}) | {{ event.place }} |{% endfor %}