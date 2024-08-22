{% liquid
assign n = name | default: 'poom' | split: '/' | last
assign base = 'People/' | append: n | get_page
-%}[<span class="not-prose"><img src="{{ base.data.image }}"></span> {{ n }}](/wiki/{{ base.ref }})