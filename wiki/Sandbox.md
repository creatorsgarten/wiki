---
thing: other stuff
links:
  - title: A
    url: /
  - title: B
    url: /
  - title: C
    url: /
  - title: D
    url: /
---

Use this sandbox to test out Markdown and {{page.thing}}.

# Links

<div style="display: flex; flex-direction: column; gap: 0.5rem">
{%- for link in page.links -%}
<a href="{{link.url}}">{{link.title}}</a>
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
