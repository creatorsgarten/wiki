{% assign subpages = of | getsubpages -%}
{%- for subpage in subpages %}
- [[{{subpage.ref}}]]
{%- endfor -%}