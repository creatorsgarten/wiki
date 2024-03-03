---
thing: other stuff
links:
  - title: a bit of thai tunes
    description: 5-6 April 2024 @ Museum Siam
    url: https://eventpop.me/s/thai
    icon: '{"body":"<g clip-path=\"url(#clip0_0_3)\">\n<path d=\"M0.5 96.4C0.5 62.6 0.499999 45.8 7.1 32.9C12.9 21.6 22.1 12.3 33.4 6.6C46.3 -1.43051e-06 63.2 0 96.9 0H104C137.8 0 154.6 -1.43051e-06 167.5 6.6C178.8 12.4 188.1 21.6 193.8 32.9C200.4 45.8 200.4 62.7 200.4 96.4V103.5C200.4 137.3 200.4 154.1 193.8 167C188 178.3 178.8 187.6 167.5 193.3C154.6 199.9 137.7 199.9 104 199.9H96.9C63.1 199.9 46.3 199.9 33.4 193.3C22.1 187.5 12.8 178.3 7.1 167C0.499999 154.1 0.5 137.2 0.5 103.5V96.4Z\" fill=\"white\"/>\n<path d=\"M106.1 119.4C103.1 120.2 101.4 122.5 100.7 125.6L99.8 129.6C99 133.4 95.6 136.1 91.7 136C87.8 136 86.4 133.1 87.1 129L90.1 115.5C90.1 115.5 104.6 114.8 118.3 110.9C140.9 104.4 151.2 95.6 156.1 87.7C163.3 76 163.3 62.2 154.2 52.1C145.4 42.4 131.2 36.1 114.4 36C78.5 35.8 44.1 64.5 37.5 99.7C31 135 54.8 163.8 90.7 164C122.3 164.1 152.8 141.9 164.1 112.5C165.7 108.4 162 104.1 157.9 105.2C157.9 105.2 124.5 114.5 106.1 119.4ZM100.8 67.8C101.5 64.4 104.9 61.6 108.4 61.6C111.9 61.6 114.3 64.4 113.6 67.8L106.5 100C105.9 103.1 103.5 105.4 100.5 105.8L92.1 107L100.8 67.8Z\" fill=\"#260176\"/>\n</g>\n<defs>\n<clipPath id=\"clip0_0_3\">\n<rect width=\"201\" height=\"200\" fill=\"white\"/>\n</clipPath>\n</defs>","width":201,"height":201}'
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
<span style="font-size: 1.5em; display: flex; align-items: center; flex: none"><iconify-icon icon="{{ icon | escape }}"></iconify-icon></span>
<span style="flex: 1; padding: 0.25rem; display: block;"><strong>{{link.title}}</strong>
{%- if link.description -%}
<br><span style="opacity: 0.8">{{ link.description }}</span>
{%- endif -%}
</span>
<span style="font-size: 1.5em; display: flex; align-items: center; flex: none"><iconify-icon icon="mdi:chevron-right"></iconify-icon></span>
</a>
{%- endfor -%}
</div>