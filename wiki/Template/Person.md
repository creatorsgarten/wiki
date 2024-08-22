{% liquid
assign n = name | default: 'poom' | split: '/' | last
assign base = 'People/' | append: n | get_page
-%}[<img src="{{ base.data.image }}" width="16" height="16" style="border-radius: 100%" class="not-prose"> {{ n }}](/wiki/{{ base.ref }})