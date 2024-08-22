{% liquid
assign n = name | default: 'poom' | split: '/' | last
assign base = 'People/' | append: n | get_page
-%}[<span class="not-prose" style="display:inline-flex;align-items:baseline"><img src="{{ base.data.image }}" style="width:18px;height:18px;border-radius:100%;display:inline-block;position:relative;top:3px;"></span> {{ n }}](/wiki/{{ base.ref }})