---
websiteConfig:
  featureFlags:
    example: false
  events:
    upcoming:
      - event: functional
      - event: creativecodingmeetup
    recurring:
      - name: Hacktoberfest Thailand
        schedule: October
      - name: Stupid Hackathon in Thailand
        schedule: Late Q2 - Early Q3
---

{% for section in page.websiteConfig %}

# {{ section[0] }}

<table><thead><tr><th>Key</th><th>Value</th></tr></thead><tbody>
{%- for entry in section[1] %}
<tr><td>{{entry[0] | escape}}</td><td><tt>{{ entry[1] | json | escape }}</tt></td></tr>
{%- endfor %}
</tbody></table>

{% endfor %}