---
thing: other stuff
links:
  - title: A
    url: /
  - title: B
    url: /
  - title: Facebook
    url: https://grtn.org/fb
    bg: #1877f2
  - title: Discord
    url: https://grtn.org/dc
    bg: #5865f2
---

Use this sandbox to test out Markdown and {{page.thing}}.

# Links

<div style="display: flex; flex-direction: column; gap: 0.5rem">
{%- for link in page.links -%}
{%- assign bg = link.bg | default: '#1c1916' -%}
<a href="{{link.url}}" style="padding: 0.5rem; display: flex; text-align: center; border-radius: 0.25rem; background: {{ bg }}; color: #fff;"><span style="flex: 1">{{link.title}}</span></a>
{%- endfor %}
</div>

# Container blocks

:::info
This is an info box
:::

:::warning
This is a warning box
:::

:::tip
This is a tip box
:::

:::danger
This is a danger box
:::

:::details[Summary here]
Details here
:::

# Discussion

::Message[**"this"** is a message]{from=dtinth}

:::Message{from=dtinth}
this is another message \
that spans multiple lines
:::

# Draft

:::Draft
<span onmouseover="console.log('meow')">Use the Draft component to jot down stuff</span>
:::

# RatingTally

A RatingTally is used to display ratings in [[Feedback]] pages.

::RatingTally{tally="8=4,9=1,10=4"}

Minimum and maximum values can be set.

::RatingTally{min=0 max=4 tally="2=1,3=2,4=3"}
