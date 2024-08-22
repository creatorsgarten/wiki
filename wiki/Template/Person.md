{% liquid
assign n = name | default: 'poom' | split: '/' | last
assign base = 'People/' | append: n | get_page
-%}[<span class="not-prose"><img src="{{ base.data.image }}" style="width:16px;height:16px"></span> {{ n }}](/wiki/{{ base.ref }})