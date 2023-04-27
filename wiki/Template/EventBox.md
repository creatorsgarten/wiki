<div style="padding: 0.25em 1em; background: white; border-radius: 0.25rem; text-align: center; box-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);">
<div style="margin: -1em 0">

{% liquid
assign n = name | default: 'sht1' | split: '/' | last
assign base = 'Events/' | append: n | get_page
assign prefixes = 'Coverage,Feedback,OrganizerNotes,Sponsorship' | split: ','
-%}
**[[{{ base.ref }}|{{ base.data.name | default: base.data.title | default: n }}]]**
{%- liquid
for prefix in prefixes
  assign p = prefix | append: '/' | append: n | get_page
  if p.exists
    echo ' &middot; [' | append: prefix | append: '](/wiki/' | append: p.ref | append: ')'
  endif
endfor
%}

</div>
</div>