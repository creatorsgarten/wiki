<div style="padding: 0 1em; background: white; border: 1px solid #ccc; text-align: center">
<div style="margin: -0.5em 0">

{% liquid
assign n = name | default: 'sht2'
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