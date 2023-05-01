> Connecting creators, making things

:::lead
**[Creatorsgarten](https://creatorsgarten.org/)** is a collective of creators. Through [workshops, meetups, hackathons, and much more](https://creatorsgarten.org/events/), we bring people together to work on new ideas, trying new things and collaborate across disciplines.
:::

**The Creatorsgarten Wiki** stores contents that are more frequently updated than the main [Creatorsgarten website][main-site].

[main-site]: https://creatorsgarten.org/

# Contents

- [[Special/RecentChanges|Recently-changed pages]]

- [[SelfIntroduction|What is Creatorsgarten?]]

- [[Democratize Creation for All|Our mission: Democratize creation for all]]

- [[Guilds]]

- [[DigitalPresence|Our digital presence]]

- [[Discord|Our Discord servers]]

- [[Managing events with MC-OD]]

- Information pages about our [events](https://creatorsgarten.org/events/)

  | Event | Links |
  | --- | --- |
  | [[Mathematics Night]] [TBD]
  | {% render 'Event', name: 'functional' %}
  | {% render 'Event', name: 'creativecodingmeetup' %} | [Organizer’s notes](/wiki/OrganizerNotes/creativecodingmeetup) |
  | {% render 'Event', name: 'bangkok' %} | [Coverage](/wiki/Coverage/bangkok) &middot; [Feedback](/wiki/Feedback/bangkok) |
  | {% render 'Event', name: 'golf1' %} | [Feedback](/wiki/Feedback/golf1) &middot; [Sponsorship](/wiki/Sponsorship/golf1) |
  | {% render 'Event', name: 'sht6' %} | [Coverage](/wiki/Coverage/sht6) &middot; [Feedback](/wiki/Feedback/sht6) |
  | {% render 'Event', name: 'sht5' %} | [Coverage](/wiki/Coverage/sht5) &middot; [Feedback](/wiki/Feedback/sht5) |
  | {% render 'Event', name: 'sht4' %} | [Coverage](/wiki/Coverage/sht4) &middot; [Feedback](/wiki/Feedback/sht4) |
  | {% render 'Event', name: 'sht3' %} | [Coverage](/wiki/Coverage/sht3) &middot; [Feedback](/wiki/Feedback/sht3) |
  | {% render 'Event', name: 'sht2' %} | [Coverage](/wiki/Coverage/sht2) &middot; [Feedback](/wiki/Feedback/sht2) |
  | {% render 'Event', name: 'sht1' %} | [Coverage](/wiki/Coverage/sht1) |

- Knowledge base
  - [[Audio video equipments]]
  - [[Videos|How we record our talks and manage our YouTube channel]]

- [[Special/AllPages|Alphabetical page list]]

# Editing Pages

- **Edit on GitHub:** All of the wiki contents is stored inside the {% render 'GitHub', repo: 'wiki' %} repository. This lets you manage the wiki contents using your favorite tools like VS Code or Obsidian. Changes will be reflected on the website in a few minutes.

- **Edit on Visual Studio Code for the Web:** [:Icon{icon="vscode-icons:file-type-vscode"} Click here to launch VS Code for the Web.](https://vscode.dev/github/creatorsgarten/wiki)

- **Edit directly on the website:** Click on the pencil icon (:Icon{icon="pixelarticons:edit"}) to start editing. It is optimized for making quick and small changes. The editor is very rudimentary and not stable, so we recommend that you save your changes frequently to avoid conflicts and avoid losing your work.

## Getting notified of changes

- [Join the **Bangkok Open Source Discord** server](https://grtn.org/bkkoss-discord) and [join the “Creatorsgarten wiki changelog” thread](https://discord.com/channels/1062609208106832002/1085847407583055883), then you will receive notifications over Discord.

# Tech Stack

This website ({% render 'GitHub', repo: 'creatorsgarten.org' %}) is built with [Astro](https://astro.build/).
This wiki is powered by [Contentsgarten](https://contentsgarten.netlify.app/wiki/MainPage) ({% render 'GitHub', repo: 'contentsgarten' %}), a headless wiki engine that uses a GitHub repository as a data storage ({% render 'GitHub', repo: 'wiki' %}).
They are deployed to [Deploys.app](https://www.deploys.app/).
