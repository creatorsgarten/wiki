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
    staging: Whee!
    production:
---

{% for section in page.websiteConfig %}

# {{ section[0] }}

<table><thead><tr><th>Key</th><th>Value</th></tr></thead><tbody>
{%- for entry in section[1] %}
<tr><td>{{entry[0] | escape}}</td><td><tt>{{ entry[1] | json | escape }}</tt></td></tr>
{%- endfor %}
</tbody></table>

{% endfor %}