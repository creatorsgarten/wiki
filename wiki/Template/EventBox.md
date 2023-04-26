{% liquid
assign n = name | default: 'sht1'
assign base = 'Events/' | concat: n | getpage
%}
{{ n }}