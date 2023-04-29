> Connecting creators, making things

:::lead
**[Creatorsgarten](https://creatorsgarten.org/)** is a collective of creators. Through [workshops, meetups, hackathons, and much more](https://creatorsgarten.org/events/), we bring people together to work on new ideas, trying new things and collaborate across disciplines.
:::

**The Creatorsgarten Wiki** stores contents that are more frequently updated than the main [Creatorsgarten website][main-site].

[main-site]: https://creatorsgarten.org/
[repo]: https://github.com/creatorsgarten/wiki

# Contents

- [[Special/RecentChanges|Recently-changed pages]]

- [[SelfIntroduction|What is Creatorsgarten?]]

- [[Democratize Creation for All|Our mission: Democratize creation for all]]

- [[Initiatives|Our initiatives]]

- [[DigitalPresence|Our digital presence]]

- [[Discord|Our Discord servers]]

- [[Managing events with MC-OD]]

- Information pages about our [events](https://creatorsgarten.org/events/)

  | Event | Links |
  | --- | --- |
  | [[Mathematics Night]] [TBD]
  | [Functional Programming Meetup](/wiki/Events/functional)
  | [Creative Coding Meetup](https://grtn.org/e/creativecodingmeetup) | [Organizer’s notes](/wiki/OrganizerNotes/creativecodingmeetup) |
  | [Bangkok Open Source Hackathon](https://grtn.org/e/bangkok) | [Coverage](/wiki/Coverage/bangkok) &middot; [Feedback](/wiki/Feedback/bangkok) |
  | [Code Golf Party #1](https://grtn.org/e/golf1) | [Feedback](/wiki/Feedback/golf1) &middot; [Sponsorship](/wiki/Sponsorship/golf1) |
  | [The ៦th Stupid Hackathon in Thailand](https://grtn.org/e/sht6) | [Coverage](/wiki/Coverage/sht6) &middot; [Feedback](/wiki/Feedback/sht6) |
  | [The 5th StuP1d H@CK THaIL@Nd](https://grtn.org/e/sht5) | [Coverage](/wiki/Coverage/sht5) &middot; [Feedback](/wiki/Feedback/sht5) |
  | [stupid hackathon thailand the fourth / virtual 2020](https://grtn.org/e/sht4) | [Coverage](/wiki/Coverage/sht4) &middot; [Feedback](/wiki/Feedback/sht4) |
  | [The Stupid Hackathon Thailand #3](https://grtn.org/e/sht3) | [Coverage](/wiki/Coverage/sht3) &middot; [Feedback](/wiki/Feedback/sht3) |
  | [The Stupid Hackathon Thailand #2](https://grtn.org/e/sht2) | [Coverage](/wiki/Coverage/sht2) &middot; [Feedback](/wiki/Feedback/sht2) |
  | [The Stupid Hackathon Bangkok](https://grtn.org/e/sht1) | [Coverage](/wiki/Coverage/sht1) |

- Knowledge base
  - [[Audio video equipments]]
  - [[Videos|How we record our talks and manage our YouTube channel]]

- [[Special/AllPages|Alphabetical page list]]

# Editing Pages

If a page has a pencil icon (:Icon{icon="mdi:lead-pencil"}) next to the title, then it is a wiki page that can be edited.

- **Edit directly on the website:** Click on the pencil icon to start editing. It is optimized for making quick and small changes, and the editor is not that stable. We recommend that you save your changes frequently to avoid conflicts and avoid losing your work.

- **Edit on GitHub:** You can also make changes to the files in the [wiki repo][repo] and it will be reflected on this website immediately. If you are not an organization member, you can submit a pull request to make an external contribution to this wiki.

## Getting notified of changes

- [Join the **Bangkok Open Source Discord** server](https://grtn.org/bkkoss-discord) and [join the “Creatorsgarten wiki changelog” thread](https://discord.com/channels/1062609208106832002/1085847407583055883), then you will receive notifications over Discord.

# Tech Stack

This wiki is powered by [Contentsgarten](https://contentsgarten.netlify.app/wiki/MainPage), a headless wiki engine that [uses a GitHub repository as a data storage][repo]. The frontend is powered by [Astro](https://astro.build/)[^astro]. The source code for both Contentsgarten and this wiki is [hosted on the Contentsgarten GitHub monorepo](https://github.com/creatorsgarten/contentsgarten/tree/main/creatorsgarten).

[^astro]: Our [main website][main-site] is also built with Astro, but unlike the main website which is statically-generated, the wiki is using server-side rendering (SSR) to allow updating the contents without rebuilding the site.