---
thing: other stuff
---

Use this sandbox to test out Markdown and {{page.thing}}.

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

::Message[this is a message]{from=dtinth}

# Draft

:::Draft
<span onmouseover="console.log('meow')">Use the Draft component to jot down stuff</span>
:::

# RatingTally

A RatingTally is used to display ratings in [[Feedback]] pages.

::RatingTally{tally="8=4,9=1,10=4"}

Minimum and maximum values can be set.

::RatingTally{min=0 max=4 tally="2=1,3=2,4=3"}
