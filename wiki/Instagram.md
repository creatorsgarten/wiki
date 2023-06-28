---
thing: other stuff
links:
  - title: Late submissions
    description: The โง่ Hackathon ครั้งที่ 7 แห่งประเทศ Thailand
    url: https://airtable.com/shrUMPuXyTehMn7J4
  - title: Functional Meetup #2
    description: elm for frontend developers
    url:  https://www.eventpop.me/e/15503/elm
  - title: The โง่ Hackathon ครั้งที่ 7 แห่งประเทศ Thailand
    url: https://stupid.hackathon.in.th/7/
    bg: '#FFBA00'
    fg: '#000000'
  - title: The Stupid Hackathon in Thailand
    url: https://stupid.hackathon.in.th/
    bg: '#e6e6e6'
    fg: '#000000'
  - title: Facebook
    url: https://grtn.org/fb
    bg: '#1877f2'
    icon: 'ic:baseline-facebook'
  - title: Discord
    url: https://grtn.org/dc
    bg: '#5865f2'
    icon: 'ic:baseline-discord'
  - title: YouTube
    url: https://grtn.org/yt
    bg: '#ff0000'
    icon: 'mdi:youtube'
---

:::lead
A compilation of helpful links provided by [Creatorsgarten](https://creatorsgarten.org/).
:::

<div style="display: flex; flex-direction: column; gap: 0.75rem">
{%- for link in page.links -%}
{%- assign bg = link.bg | default: '#1c1916' -%}
{%- assign fg = link.fg | default: '#ffffff' -%}
{%- assign icon = link.icon | default: 'clarity:world-line' -%}
<a href="{{link.url}}" style="padding: 0.25rem 0.5rem; display: flex; text-align: center; border-radius: 0.25rem; background: {{ bg }}; color: {{ fg }};">
<span style="font-size: 1.5em; display: flex; align-items: center; flex: none"><iconify-icon icon="{{ icon }}"></iconify-icon></span>
<span style="flex: 1; padding: 0.25rem; display: block;"><strong>{{link.title}}</strong>
{%- if link.description -%}
<br><span style="opacity: 0.8">{{ link.description }}</span>
{%- endif -%}
</span>
<span style="font-size: 1.5em; display: flex; align-items: center; flex: none"><iconify-icon icon="mdi:chevron-right"></iconify-icon></span>
</a>
{%- endfor -%}
</div>