{% assign subpages = page | default: ref | default: 'Coverage' | getsubpages -%}
{%- for subpage in subpages %}
- [[{{subpage.ref}}]]
{%- endfor -%}