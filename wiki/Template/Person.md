{% liquid
assign n = name | default: 'poom' | split: '/' | last
assign base = 'People/' | append: n | get_page
-%}[<span class="not-prose"><img src="{{ base.data.image }}" style="width:18px;height:18px;border-radius:100%"></span> {{ n }}](/wiki/{{ base.ref }})