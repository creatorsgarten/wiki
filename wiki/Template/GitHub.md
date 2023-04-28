{% liquid
assign repo = repo | default: 'contentsgarten'
unless repo contains '/'
  assign repo = 'creatorsgarten/' | append: repo
endunless
-%}
[:Icon{icon=codicon:github} {{ repo }}](https://github.com/{{ repo }})