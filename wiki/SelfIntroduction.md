---
title: Self-Introduction
---

{% liquid
assign events = '{"match":{"event":true}}' | query_pages | sort: 'data.event.date' | reverse
assign eventCount = 0
for event in events
  unless event.data.unlisted
    assign eventCount = eventCount | plus: 1
  endunless
endfor
%}

## 🐈 Creatorsgarten is a collective of creative technologists committed to sparking new ideas and conversations.

<div style="color: white; font-weight: medium; border-radius: 4px; background-color: black;">
**Creatorsgarten** is a collective of [[people]], both professionals and students, who share a passion for discovering and creating new things. Since 2017, we have collaborated with a diverse group of fascinating people, including open-source communities, developers, educators, artists, and more, to explore new possibilities and co-create exciting projects together.
</div>

We have crafted [open-source](https://github.com/creatorsgarten) projects, advocated for innovative ideas within communities, and hosted over [{{eventCount}} community events](/events), which include meetups, hackathons, camps, and contests. More than 1,200 people have attended our events, and over 6,000 people follow us on [Facebook](https://grtn.org/fb). All of our events are free, thanks to the generous support of our sponsors and partners.

For more details about us and what we do, check out our website at [creatorsgarten.org](https://creatorsgarten.org/). Also check out our Facebook Page at [grtn.org/fb](https://grtn.org/fb).