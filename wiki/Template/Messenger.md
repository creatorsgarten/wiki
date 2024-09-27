{%- assign user = user | default: 'creatorsgarten' -%}
{%- assign defaultName = '' | append: user -%}
{%- assign name = name | default: defaultName -%}
[:Icon{icon=jam:messenger} {{ name }}](https://m.me/{{ user }})