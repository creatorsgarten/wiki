{% liquid
assign n = name | default: 'sht1' | split: '/' | last
assign prefixes = 'Coverage,FAQ,Feedback,OrganizerNotes,Sponsorship' | split: ','
assign printed = false
for prefix in prefixes
  assign p = prefix | append: '/' | append: n | get_page
  if p.exists
    if printed
      echo ' &middot; '
    endif
    echo '[' | append: prefix | append: '](/wiki/' | append: p.ref | append: ')'
    assign printed = true
  endif
endfor
%}