{% liquid
unless people
  assign people = '{"match":{"person":true}}' | query_pages | sort: 'ref'
endunless
%}
| Slug | Name |
| ----- | ---- |{% for person in people %}{% liquid
assign slug = person.ref | split: '/' | last
%}
| [[People/{{slug}}]] | **{{person.data.person.name}} ({{person.data.person.nicknameTh}}),** {{person.data.person.intro}} |{% endfor %}

# Add yourself!

Fill in this form: {% render 'Grtn', path: 'memberform' %} and we will create a wiki page for you. Once we create the wiki page, you can edit it afterwards. Note that you need a GitHub account.

…or feel free to create the wiki page by yourself if you feel adventurous, by the way!

# Template

```
---
image:
person:
  name:
  intro:
  nickname:
  nicknameTh:
  github:
  instagram:
  x:
  facebook:
  linkedin:
  youtube:
  site:
---
```