{% liquid
assign n = name | default: 'poom' | split: '/' | last
assign base = 'People/' | append: n | get_page
-%}[<picture width="16" height="16" style="border-radius: 100%" class="not-prose"><source srcset="{{ base.data.image }}"></picture> {{ n }}](/wiki/{{ base.ref }})