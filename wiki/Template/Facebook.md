{%- assign user = user | default: 'creatorsgarten' -%}
{%- assign defaultName = '@' | append: user -%}
{%- assign name = name | default: defaultName -%}
[:Icon{icon=cib:facebook} {{ name }}](https://www.facebook.com/{{ user }})