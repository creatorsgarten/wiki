{% liquid
assign n = name | default: 'poom' | split: '/' | last
-%}[<span class="not-prose" style="display:inline-flex;align-items:baseline;gap:0.5ex"><span style="align-self:center"><img src="/api/users/@{{ n }}/picture" style="width:18px;height:18px;border-radius:100%;border:0.5px solid black"></span> {{ n }}</span>](/wiki/users/{{ n }})