{% liquid
unless people
  assign people = '{"match":{"person":true}}' | query_pages | sort: 'ref'
endunless
%}
| Slug | Name |
| ----- | ---- |{% for person in people %}{% liquid
assign slug = person.ref | split: '/' | last
%}
| [[People/{{slug}}]] | {{person.data.person.name}} |{% endfor %}