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

# Add yourself!

Fill in this form: {% render 'Grtn', path: 'memberform' %} and we will create a wiki page for you. Once we create the wiki page, you can edit it afterwards.

(Feel free to create the wiki page by yourself if you feel adventurous, by the way! Just that the schema isn’t well documented yet...)