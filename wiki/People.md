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

# How to Add Yourself

To add yourself to this list:

1. Log in and go to your **Dashboard**.
2. Open the **Profile & Connections** section.
3. Fill in your public profile information and then **Save Profile**.

Currently, the Profile & Connections page only supports editing some properties (e.g. name, intro, nickname). To add more properties, please edit the wiki page directly.

## Adding Social Links

To add social links (such as GitHub, Instagram, X, Facebook, LinkedIn, YouTube, or your website), edit your profile’s wiki page. In the `person` object, add the relevant property. Each property can be a single string or an array of strings, for example:

```yaml
person:
  github: myusername
  instagram: ['myinsta', 'anotherinsta']
  site: 'https://mywebsite.com'
```

## Setting Your Profile Picture

1. Go to your **Dashboard** and open the **Upload** section.
2. Upload your image. You will receive a URL (it must start with `https://usercontent.creatorsgarten.org/`).
3. Edit your profile’s wiki page and set the `image` property to this URL:

```yaml
image: https://usercontent.creatorsgarten.org/path/to/your/uploaded-image.png
```

# Profile Schema

Your profile page uses the following schema in the front matter:

```yaml
---
image: # (string) URL to your profile picture (must be from usercontent.creatorsgarten.org)
person:
  name: # (string) Your full name
  intro: # (string) Short introduction
  nickname: # (string) Nickname in English
  nicknameTh: # (string) Nickname in Thai
  github: # (string or array) GitHub username(s)
  instagram: # (string or array) Instagram handle(s)
  x: # (string or array) X (Twitter) handle(s)
  facebook: # (string or array) Facebook profile(s)
  linkedin: # (string or array) LinkedIn profile(s)
  youtube: # (string or array) YouTube channel(s)
  site: # (string or array) Website(s)
---
```

If you need help, feel free to ask in our community!
