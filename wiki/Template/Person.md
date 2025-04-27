{% liquid
assign n = name | default: 'poom' | split: '/' | last
assign base = 'People/' | append: n | get_page
assign image = base.data.image
unless image contains '://'
  assign image = 'https://api.dicebear.com/6.x/bottts-neutral/svg?seed=@' | append: n
endunless
-%}[<span class="not-prose" style="display:inline-flex;align-items:baseline;gap:0.5ex"><span style="align-self:center"><img src="{{ image }}" style="width:21px;height:21px;border-radius:100%;border:0.5px solid black"></span> {{ n }}</span>](/wiki/{{ base.ref }})