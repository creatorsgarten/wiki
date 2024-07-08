---
title: Creatorsgarten Wiki
quickLinks:
  - label: Recent Changes
    url: /wiki/Special/RecentChanges
  - label: List of Events
    url: /wiki/Events#full-event-list
  - label: List of Guilds
    url: /wiki/Guilds#list-of-guilds
  - label: People
    url: /wiki/People
  - label: How to create a new page
    url: /wiki/HowToUseWiki#how-to-create-a-new-page
---

> Connecting creators, making things

<!-- wysiwyg-ignore-start -->

:::lead
**[Creatorsgarten](https://creatorsgarten.org/)** is a collective of antidisciplinary creators. We bring people together to work on new ideas, trying new things and collaborate across disciplines. The wiki is our [[public by default|public]] knowledge base.
:::

<div style="margin:1em 0; display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; color: #0008">
{%- for link in page.quickLinks -%}<span>[<a href="{{link.url}}">{{link.label}}</a>]</span>{%- endfor -%}
</div>

- **What is Creatorsgarten?** See our [homepage](/), [[SelfIntroduction|self-introduction page]], and our [[DemocratizeCreationForAll|manifesto]].
- **What events are we running?** Check out our [events](/events) page.
- **Finding our logo?** Check out the [[brand assets]] page.

# For event organizers

- [[Events#full-event-list|Full event list]]
- [[Organizer notes]]
- [[Inventory]]
- [[Venues]]

:::warning[UNDER CONSTRUCTION]
Our wiki is under construction, please feel free to contribute!
:::

<!-- wysiwyg-ignore-end -->

# [[Join|How to join us]]

# About us

- [[SelfIntroduction|What is Creatorsgarten?]]
- [[DemocratizeCreationForAll|Manifesto: Democratize creation for all]]
- [[DigitalPresence|Our digital presence]]
- [[GardenZero|Garden Zero]]

# Projects

:::lead
See more information on [[Projects]] page
:::

- Contentsgarten
- Cluster.wiki
- Oknize
- Garden Gate
- Techcal.dev

# Events

:::lead
For a full list of events, see the [[Events]] page
:::

- How to host an event?
- All events

# Guilds

With a growing number of members across a diverse range of fields, Creatorsgarten decided to establish [[Guilds|guilds]] aligned with ongoing projects and member interests.

{% render 'GuildTable' %}

- // TODO: add details about [[HowToHostAnEvent]]

## Series

<!-- wysiwyg-ignore-start -->

| Name                                                      | Description                                                         |
| --------------------------------------------------------- | ------------------------------------------------------------------- |
| [[StupidHackTH\|The Stupid Hackathon in Thailand]]        |
| [[HacktoberfestThailand\|Hacktoberfest Thailand Chapter]] |
| [[Frontend\|Frontend Meetup Series]]                      |
| [[ScisartSeries\|Sciยศาสตร์ Night]]                       | To be hosted every August                                           |
| [[MetaEvents\|Meta Events]]                               | Workshops, Meetups, Hackathons for Creatorsgarten by Creatorsgarten |
| [[9PMUniversity\|มหาวิทยาลัยสามทุ่ม / 9PM University]]    | Originated by พ่อโจ้                                                |
| [[SciDojo\|SciDojo]]                                      | Originated by พ่อโจ้                                                |

<!-- wysiwyg-ignore-end -->

# Meta

## Knowledge base

- [[HowToUseWiki|How to use this wiki]]
- [[Discord|Discord community guide]]
- [[Videos|How we record our talks and manage our YouTube channel]]
- [[ManagingEventsWithMCOD|Managing events with MC/OD]]

## Database

- [[Inventory]]
- [[Finance]]
- [[Venues]]

## Special

- [[Special/AllPages|Alphabetical page list]]
- [[Special/RecentChanges|Recently-changed pages]]

# Tech Stack

This website ({% render 'GitHub', repo: 'creatorsgarten.org' %}) is built with [Astro](https://astro.build/).
This wiki is powered by [Contentsgarten](https://contentsgarten.netlify.app/wiki/MainPage) ({% render 'GitHub', repo: 'contentsgarten' %}), a headless wiki engine that uses a GitHub repository as a data storage ({% render 'GitHub', repo: 'wiki' %}).
They are deployed to [Deploys.app](https://www.deploys.app/).

# Discussions

## Header Box

<!-- wysiwyg-ignore-start -->

::Message[note: I think the spacing between each header is a bit too large, what do you all think?]{from=@chayapatr}
::Message[actually i think there should be _more_ spacing, see [Oliver Schöndorfer (2022). “The Right Space Around Headings in Web Typography”. _Pimp my Type._](https://pimpmytype.com/hugo-md/) notice how in the article there is 80px of space before each heading, while we have only 50px]{from=@dtinth}
::Message[Oh, nice article :D -- but actually, i mean the gap between headers like h1 and h2, not about header and text]{from=@chayapatr}
::Message[i reduced the space below the heading]{from=@dtinth}
::Message[Thank you very much!]{from=@chayapatr}

<!-- wysiwyg-ignore-end -->