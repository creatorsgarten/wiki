Thank you for sponsoring [showdown.space](https://showdown.space/) events! We request the following information

```ts
{
  /** Sponsor’s name */
  name: string

  /** Banner image, size: 1200x480 */
  image: string

  /** URL to link to when clicking on banner */
  url: string

  /** Message to display below the banner */
  message: string

  /** Links to display below the banner, max 4 items */
  links: Array<{
    name: string
    url: string
  }>
}
```