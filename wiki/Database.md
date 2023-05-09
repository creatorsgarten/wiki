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

# Querying data

## API

```
GET https://wiki.creatorsgarten.org/api/contentsgarten/search?input={}
```

The `input` property is a JSON object that represents [**filters**](#filtering-pages) to apply when searching for pages.

## Usage in Liquid

You can use the `query_pages` Liquid filter to query the database inside a wiki page. See [[Syntax#filters]] for more information.

For example, check out the source code of these pages to see how Liquid is used to generate a report based on wiki database:

- [[Inventory]]
- [[WebsiteConfig]]
- [[Template/EventTable]]

## Filtering pages

An empty filter `{}` will return all pages.
However, only the first 256 results are returned.
By adding these properties, you can narrow down the results:

| Property | Description |
| --- | --- |
| `match` | Only return pages with matching front matter value. |
| `prefix` | Only return pages whose page ref matches a given prefix. The prefix must end with a `/`. |
| `pageRef` | Only return pages with the given ref(s). May be a string or an array of strings. |

Here are some examples:

- `{"match":{"event.hosts":"showdown.space"}}` matches events whose [[ShowdownSpace|showdown.space]] is a host.
- `{"prefix":"Feedback/"}` matches all feedback pages.
- `{"pageRef":["WebsiteConfig","Inventory"]}` matches the [[WebsiteConfig]] and [[Inventory]] pages.

## Matching front matter value

You can find pages with a specific front matter value by using the `match` filter. It should be an object whose key is the property path, and value is the matching criteria.

:::tip
When the page data is being indexed, all scalar values are converted to strings. Therefore, when searching, you are searching against the _string representation_ of that value.
For example, if you stored `true` in the front matter, it will be converted to `"true"` when indexed. When matching, you must use `"true"` to match it.
:::

The matching criteria can be:

- A string — Will match if the value’s string representation matches the given string. If the value is an array, it will match if any of the array items’ string representation matches the given string.
- An array of string — Like the string criteria, but will match if any of the strings in the array matches the value’s string representation.
- `true` — Will match if the value is defined on the front matter.
