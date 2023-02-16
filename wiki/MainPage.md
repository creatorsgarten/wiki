**The Creatorsgarten Wiki** stores contents that are more frequently updated than the main [Creatorsgarten website](https://creatorsgarten.org/). Each page can be edited directly on the wiki or [on GitHub][repo].

- The contents of the wiki lives in the [wiki GitHub repository][repo].
- To see the list of all pages, check out [Special/AllPages](/wiki/Special/AllPages).

[repo]: https://github.com/creatorsgarten/wiki

# Editing Pages

If a page has a pencil icon (<iconify-icon icon="mdi:lead-pencil"></iconify-icon>) next to the title, then it is a wiki page that can be edited. You can edit wiki pages in many different ways.

- **Edit directly on the website:** Click on the pencil icon to start editing. It is optimized for making quick and small changes, and the editor is not that stable. We recommend that you save your changes frequently to avoid conflicts and avoid losing your work.

- **Edit on GitHub:** You can also make changes to the files in the [wiki repo][repo] and it will be reflected on this website immediately. If you are not an organization member, you can submit a pull request to make an external contribution to this wiki.

# Tech Stack

This wiki is powered by [Contentsgarten](https://contentsgarten.netlify.app/wiki/MainPage), a headless wiki engine that uses a GitHub repository as a data storage. The frontend is powered by [Astro](https://astro.build/) (same as our main website, but unlike the website which is statically-generated, the wiki is using SSR). The source code for both Contentsgarten and this wiki is [hosted on the Contentsgarten GitHub monorepo](https://github.com/creatorsgarten/contentsgarten/tree/main/creatorsgarten).
