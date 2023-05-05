> Connecting creators, making things

:::lead
**[Creatorsgarten](https://creatorsgarten.org/)** is a collective of creators. Through [workshops, meetups, hackathons, and much more](https://creatorsgarten.org/events/), we bring people together to work on new ideas, trying new things and collaborate across disciplines.
:::

**The Creatorsgarten Wiki** stores contents that are more frequently updated than the main [Creatorsgarten website][main-site].

[main-site]: https://creatorsgarten.org/

# About us

- [[SelfIntroduction|What is Creatorsgarten?]]
- [[Democratize Creation for All|Manifesto: Democratize creation for all]]
- [[Guilds|Guilds/Initiatives/Working Groups within Creatorsgarten]]
- [[DigitalPresence|Our digital presence]]

## Knowledge base
  - [[Audio video equipments]]
  - [[Discord|Discord community guide]]
  - [[Videos|How we record our talks and manage our YouTube channel]]
  - [[ManagingEventsWithMCOD|Managing events with MC/OD]]

## Special
- [[Special/AllPages|Alphabetical page list]]
- [[Special/RecentChanges|Recently-changed pages]]

# Guilds
With a growing number of members across a diverse range of fields, Creatorsgarten decided to establish [[Guilds|guilds]] aligned with ongoing projects and member interests
- **[[StupidHackTH|Stupid Hackathon Thailand]]**: the working group organizing the Stupid Hackathon in Thailand event series
- **[[ShowdownSpace|Showdown Space]]**: a group led by [[https://github.com/dtinth|@dtinth]], to hosts community tech events in the form of recreational tech contests and game shows.
- **[[BangkokOpenSource|Bangkok Open Source Initiative]]**: a collective to promote open-source culture and facilitate connections between creators, developers, and civic and government organizations
- **Tech Club Circle**: a working group that maintains the circle of computer clubs in Thailand
- **Creative Coders**: an interdisciplinary group of programmers and artists 

# Events

The wiki also contains information pages about our [events](/events/).

| Event | Links |
| --- | --- |
| [[Mathematics Night]] [TBD]
| {% render 'Event', name: 'algoravesilentdisco' %}
| {% render 'Event', name: 'functional' %}
| {% render 'Event', name: 'creativecodingmeetup' %} | [Organizer’s notes](/wiki/OrganizerNotes/creativecodingmeetup) &middot; [Feedback](/wiki/Feedback/creativecodingmeetup) |
| {% render 'Event', name: 'bangkok' %} | [Coverage](/wiki/Coverage/bangkok) &middot; [Feedback](/wiki/Feedback/bangkok) |
| {% render 'Event', name: 'golf1' %} | [Feedback](/wiki/Feedback/golf1) &middot; [Sponsorship](/wiki/Sponsorship/golf1) |
| {% render 'Event', name: 'sht7' %} | [Coverage](/wiki/Coverage/sht7) &middot; [Feedback](/wiki/Feedback/sht7) |
| {% render 'Event', name: 'sht6' %} | [Coverage](/wiki/Coverage/sht6) &middot; [Feedback](/wiki/Feedback/sht6) |
| {% render 'Event', name: 'sht5' %} | [Coverage](/wiki/Coverage/sht5) &middot; [Feedback](/wiki/Feedback/sht5) |
| {% render 'Event', name: 'sht4' %} | [Coverage](/wiki/Coverage/sht4) &middot; [Feedback](/wiki/Feedback/sht4) |
| {% render 'Event', name: 'sht3' %} | [Coverage](/wiki/Coverage/sht3) &middot; [Feedback](/wiki/Feedback/sht3) |
| {% render 'Event', name: 'sht2' %} | [Coverage](/wiki/Coverage/sht2) &middot; [Feedback](/wiki/Feedback/sht2) |
| {% render 'Event', name: 'sht1' %} | [Coverage](/wiki/Coverage/sht1) |

For a full list of events, along with their related pages, see the [[Events]] page.

# Editing Pages

- **Edit on GitHub:** All of the wiki contents is stored inside the {% render 'GitHub', repo: 'wiki' %} repository. This lets you manage the wiki contents using your favorite tools like VS Code or Obsidian. Changes will be reflected on the website in a few minutes.

- **Edit on Visual Studio Code for the Web:** [:Icon{icon="vscode-icons:file-type-vscode"} Click here to launch VS Code for the Web.](https://vscode.dev/github/creatorsgarten/wiki)

- **Edit directly on the website:** Click on the "Edit this page :Icon{icon="pixelarticons:edit"}" button to start editing. It is optimized for making quick and small changes. The editor is very rudimentary and not stable, so we recommend that you save your changes frequently to avoid conflicts and avoid losing your work.

## Getting notified of changes

- [Join the **Bangkok Open Source Discord** server](https://grtn.org/bkkoss-discord) and [join the “Creatorsgarten wiki changelog” thread](https://discord.com/channels/1062609208106832002/1085847407583055883), then you will receive notifications over Discord.

# Tech Stack

This website ({% render 'GitHub', repo: 'creatorsgarten.org' %}) is built with [Astro](https://astro.build/).
This wiki is powered by [Contentsgarten](https://contentsgarten.netlify.app/wiki/MainPage) ({% render 'GitHub', repo: 'contentsgarten' %}), a headless wiki engine that uses a GitHub repository as a data storage ({% render 'GitHub', repo: 'wiki' %}).
They are deployed to [Deploys.app](https://www.deploys.app/).
