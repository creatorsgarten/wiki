---
title: grtn.org
grtnRedirects:
  edit: https://github.com/creatorsgarten/grtn.org/edit/main/_redirects
  ls: https://github.com/creatorsgarten/grtn.org/blob/main/_redirects
  links: https://github.com/creatorsgarten/grtn.org/blob/main/_redirects
  gh: https://github.com/creatorsgarten
  dc: https://discord.gg/fsZq57cmRk
  discord: https://discord.gg/fsZq57cmRk
  yt: https://www.youtube.com/@creatorsgarten
  youtube: https://www.youtube.com/@creatorsgarten
  fb: https://www.facebook.com/creatorsgarten
  facebook: https://www.facebook.com/creatorsgarten
  fbm: https://m.me/creatorsgarten
  ig: https://www.instagram.com/creatorsgarten/
  instagram: https://www.instagram.com/creatorsgarten/
  cal: https://calendar.google.com/calendar/u/0?cid=Y3JlYXRvcnNnYXJ0ZW5AZ21haWwuY29t
  bkk/discord: https://discord.gg/RHRmCrnhqF
  bkk/ideas/figjam: https://www.figma.com/file/JBJpOEG1ULhmcmYBTNazjA/Bangkok-Problems-%26-Ideas?node-id=0%3A1&t=YEDxATvWFfHWIq6m-1
  bkk/add-problem: https://airtable.com/shrDl3ny8O3DPJVB2
  bkk/add-idea: https://airtable.com/shrIlTdjaih0WgUVm
  bkk/problems: https://airtable.com/shrmXQB2PkVRRYCt2
  bkk/ideas: https://airtable.com/shr5KwjekDQYJkYfM
  bkk/db/ideas: https://airtable.com/invite/l?inviteId=invATbSQC9t3Vc6CT&inviteToken=870cbaaff21747f4947139974f75072d1f4d2649d2123bcb6ad0ab36d41c7f55
  press: https://www.notion.so/creatorsgarten/Press-68ac77c48d5849a29f32fae307fad0f1
  staff/notion: https://creatorsgarten.notion.site/Planner-fe442faccfa8414389c67872819ada77
  e: https://creatorsgarten.org/events
  e/:event: https://creatorsgarten.org/event/:event
  e/:event/v/:slug/edit: https://github.com/creatorsgarten/videos/blob/main/data/videos/:event/:slug.md?plain=1
  e/creativecodingmeetup/yt: https://www.youtube.com/playlist?list=PLTuz2sLvbRpy66hP5Cxm9XxSGQBoTULay
---

:::lead
**grtn.org** is a URL short link website for [Creatorsgarten](https://creatorsgarten.org)'s assets.
:::

It is [[GitOps|managed on GitHub]] at {% render 'GitHub', repo: 'grtn.org' %}.

# Quick links

- List of short links: {% render 'Grtn', path: 'ls' %}
- Edit links: {% render 'Grtn', path: 'edit' %}

---

# Rendering grtn.org links on this wiki

On this wiki, you can reference links to grtn.org by rendering [[Template/Grtn]].

```
{% raw %}{% render 'Grtn', path: 'ls' %}{% endraw %}
```

Result &rarr; {% render 'Grtn', path: 'ls' %}