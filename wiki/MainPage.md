> Connecting creators, making things

:::lead
**[Creatorsgarten](https://creatorsgarten.org/)** is a collective of creators. Through [workshops, meetups, hackathons, and much more](https://creatorsgarten.org/events/), we bring people together to work on new ideas, trying new things and collaborate across disciplines.
:::

**The Creatorsgarten Wiki** stores contents that are more frequently updated than the main [Creatorsgarten website][main-site].

[main-site]: https://creatorsgarten.org/
[repo]: https://github.com/creatorsgarten/wiki

# Contents

- [[Special/AllPages|Alphabetical page list]]

- [Event](https://creatorsgarten.org/events/) information

  | Event | Links |
  | --- | --- |
  | [Bangkok Open Source Hackathon](https://grtn.org/bangkok) | [Coverage](/wiki/Coverage/bangkok) [Feedback](/wiki/Feedback/bangkok) |

# Editing Pages

If a page has a pencil icon (:Icon{icon="mdi:lead-pencil"}) next to the title, then it is a wiki page that can be edited.

- **Edit directly on the website:** Click on the pencil icon to start editing. It is optimized for making quick and small changes, and the editor is not that stable. We recommend that you save your changes frequently to avoid conflicts and avoid losing your work.

- **Edit on GitHub:** You can also make changes to the files in the [wiki repo][repo] and it will be reflected on this website immediately. If you are not an organization member, you can submit a pull request to make an external contribution to this wiki.

# Tech Stack

This wiki is powered by [Contentsgarten](https://contentsgarten.netlify.app/wiki/MainPage), a headless wiki engine that [uses a GitHub repository as a data storage][repo]. The frontend is powered by [Astro](https://astro.build/)[^astro]. The source code for both Contentsgarten and this wiki is [hosted on the Contentsgarten GitHub monorepo](https://github.com/creatorsgarten/contentsgarten/tree/main/creatorsgarten).

[^astro]: Our [main website][main-site] is also built with Astro, but unlike the main website which is statically-generated, the wiki is using server-side rendering (SSR) to allow updating the contents without rebuilding the site.