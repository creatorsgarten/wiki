<nav style="padding: 0.25em 1em; background: #f4f4f4; border-radius: 0.25rem; text-align: center; border: 2px solid #f4f4f4; color:black;">
<div style="margin: -1em 0">

{% liquid
assign n = name | default: 'sht1' | split: '/' | last
assign prefixes = 'Coverage,FAQ,Feedback,OrganizerNotes,Sponsorship' | split: ','
assign eventsWithVideos = 'wind2,bkkjs20,algorave,bkkjs19,github1,cssmeetup0823,typescript1,mathsatsundown,sideproject,bkkjs18,functional2,reactmeetup0623,msbuild2023,functional,vscodeday2023,creativecodingmeetup,bangkok,bkkjs17,hacktoberfest2022,reactmeetup0922,scisart,svelte1'
-%}
**{% render 'Event', name: name %}**
{%- liquid
for prefix in prefixes
  assign p = prefix | append: '/' | append: n | get_page
  if p.exists
    echo ' &middot; [' | append: prefix | append: '](/wiki/' | append: p.ref | append: ')'
  endif
endfor
if eventsWithVideos contains n
  echo ' &middot; [Videos](/videos/' | append: n | append: ')'
endif
%}

</div>
</nav>