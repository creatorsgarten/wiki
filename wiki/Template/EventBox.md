{% liquid
assign n = name | default: 'sht1'
assign base = 'Events/' | append: n | getpage
%}
**[[{{ base.ref }}|{{ base.data.name | default: n }}]]**