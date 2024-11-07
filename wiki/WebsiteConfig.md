---
websiteConfig:
  featureFlags:
    deviceAuthorization: true
    example: false
  events:
    recurring:
      - name: Hacktoberfest Thailand
        schedule: October
        url: /wiki/HacktoberfestThailand
      - name: Stupid Hackathon in Thailand
        schedule: Midyear
        url: /wiki/StupidHackTH
      - name: BKK.JS
        schedule: Quarterly
        url: https://bkk.js.org/
      - name: Bingsu.js
        schedule: Post meetups
        url: https://bingsu.js.org/
      - name: Onsen.js
        schedule: Work remotely from onsen
        url: /wiki/OnsenJS
      - name: Emkay
        schedule: Lightweight meetups at MK Restaurant
        url: /wiki/Emkay
  guilds:
    featured:
      - id: StupidHackTH
        name: Stupid Hackathon in Thailand
      - id: ShowdownSpace
        name: showdown.space
      - name: Tech Club Circle
      - id: BangkokOpenSource
        name: Bangkok Open Source
      - id: CreativeCoding
        name: Creative Coding
  integrations:
    services:
      - name: Outline
        description: Internal knowledge base
        url: https://outline.creatorsgarten.org
      - name: Wiki
        description: Public knowledge base
        url: /wiki
      - name: Grist
        description: Spreadsheet + database hybrid
        url: https://grist.creatorsgarten.org
      - name: Sign
        description: Cryptographically sign a message
        url: /dashboard/sign
      - name: Rallly
        description: 'Scheduling poll to find a time for meeting or running an event.'
        url: 'https://scheduling.creatorsgarten.org/'
  announcements:
    c:
      enabled: true
      message: "Current event: “เศรษฐกิจเอไอกับโลกไร้งาน”"
      link: https://creatorsgarten.org/wiki/CurrentEvent
      start: 2024-08-04T16:30:00+07:00
      end: 2024-08-04T22:00:00+07:00
    example:
      enabled: false
      message: "This is an example announcement."
      link: https://creatorsgarten.org/wiki/CurrentEvent
      start: 2023-01-01T00:00:00+07:00
      end: 2123-01-01T00:00:00+07:00
---

**Note:** Website configuration is cached. It can take up to 1 minute for changes to take effect.

{% for section in page.websiteConfig %}
{% assign name = section[0] %}

# {{ name }}

{% if name == 'announcements' %}
Announcements are for displaying site-wide banner at the top of the page. Useful for displaying current events.
Each announcement will be evaluated according to this criteria:

1. If `enabled` is false, it will not be shown.
2. If `start` is set and the time has not yet arrived, it will not be shown.
3. If `end` is set and the time has passed, it will not be shown.
4. Otherwise, it will be shown.

If many announcements fulfill the criteria, only the first one will be shown. Click on one of the announcement keys below to preview the announcement.
{% endif %}

<table><thead><tr><th>Key</th><th>Value</th></tr></thead><tbody>
{%- for entry in section[1] %}{% liquid
assign title = entry[0] | escape
if name == 'announcements'
  assign title = '<a href="?previewAnnouncement=' | append: title | append: '">' | append: title | append: '</a>'
endif
%}
<tr><td>{{ title }}</td><td><pre style="margin:0"><code style="white-space:pre-wrap">{{ entry[1] | json | escape }}</code></pre></td></tr>
{%- endfor %}
</tbody></table>

{% endfor %}