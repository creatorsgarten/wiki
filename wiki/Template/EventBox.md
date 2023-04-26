{%- liquid
assign n = name | default: 'sht1'
assign base = 'Events/' | append: n | getpage
assign prefixes = 'Coverage,Feedback,Sponsorship' | split: ','
-%}
**[[{{ base.ref }}|{{ base.data.name | default: n }}]]**
{%- liquid
for prefix in prefixes
  assign p = prefix | append: '/' | append: n | getpage
  if p.exists
    echo ' &middot; [' | append: prefix | append: '](/wiki/' | append: p.ref | append: ')'
  endif
endfor
-%}