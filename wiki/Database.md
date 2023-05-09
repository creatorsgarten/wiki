:::lead
This wiki also works as a rudimentary database.
:::

# Storing data

A page can store arbitrary metadata in a YAML front matter. This frontmatter can be used in a various way:

- **To influence how the page is presented.** For example, the `title` property lets you customize the page title, and the `image` property lets you specify a URL to a square image that is displayed on the sidebar.
- **To organize data into a database.** Data can be consolidated in a single page (like [[WebsiteConfig]]) or stored in different pages (like [[Events]] pages).
- **To influence the website behavior.** For example, [[WebsiteConfig]] stores side-wide configuration.
- **To re-use a piece of content in the wiki content.** For example, [[Inventory]] stores the data inside the frontmatter, and Liquid tags are used to render that data in a presentable way.
- **To allow querying by an external system.** For example [[GRTN|grtn.org]] queries the data in this wiki to determine the short links that we have.

## Schema

The schema is defined in [`parseFrontMatter.ts`](https://github.com/creatorsgarten/creatorsgarten.org/blob/main/src/functions/parseFrontMatter.ts).