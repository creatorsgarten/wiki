---
websiteConfig:
  featureFlags:
    example: false
  events:
    recurring:
      - name: Hacktoberfest Thailand
        schedule: October
      - name: Stupid Hackathon in Thailand
        schedule: Late Q2 - Early Q3
      - name: Placeholder
        schedule: Biweekly
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
  announcements:
    creativeCodingMeetup:
      enabled: true
      message: "Current event: Creative coding meetup — Watch live on Facebook."
      link: https://creatorsgarten.org/wiki/CurrentEvent
      start: 2023-05-03T19:00:00+07:00
      end: 2023-05-03T22:00:00+07:00
    creativeCodingMeetupSoon:
      enabled: true
      message: "Upcoming event: Creative coding meetup on May 3rd @ 18:00. Live streaming is available."
      link: https://creatorsgarten.org/event/creativecodingmeetup
      start:
      end: 2023-05-03T22:00:00+07:00
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

If many announcements fulfill the criteria, only the first one will be shown.

You can preview the announcement by appending `?previewAnnouncement=<id>` to the URL. For example, `?previewAnnouncement=example`
{% endif %}

<table><thead><tr><th>Key</th><th>Value</th></tr></thead><tbody>
{%- for entry in section[1] %}
<tr><td>{{entry[0] | escape}}</td><td><pre style="margin:0"><code style="white-space:pre-wrap">{{ entry[1] | json | escape }}</code></pre></td></tr>
{%- endfor %}
</tbody></table>

{% endfor %}