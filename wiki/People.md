{% liquid
unless people
  assign people = '{"match":{"person":true}}' | query_pages | sort: 'ref'
endunless
%}

<style>
.people-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  padding: 1rem 0;
}

@media (min-width: 768px) {
  .people-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
}

.person-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: #f9fafb;
  transition: transform 0.2s, box-shadow 0.2s;
  text-decoration: none;
  color: inherit;
}

.person-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.person-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 1rem;
  object-fit: cover;
}

.person-name {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.person-nickname {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
}

.person-intro {
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.4;
}
</style>

<div class="people-grid">
{% for person in people %}{% liquid
  assign slug = person.ref | split: '/' | last
  assign image = person.data.image
  unless image contains '://'
    assign image = 'https://api.dicebear.com/6.x/bottts-neutral/svg?seed=@' | append: slug
  endunless
%}
  <a href="/wiki/{{ person.ref }}" class="person-card">
    <img src="{{ image }}" alt="{{ person.data.person.name }}" class="person-avatar">
    <div class="person-name">{{ person.data.person.name }}</div>
    <div class="person-nickname">({{ person.data.person.nicknameTh }})</div>
    {% if person.data.person.intro %}
    <div class="person-intro">{{ person.data.person.intro }}</div>
    {% endif %}
  </a>
{% endfor %}
</div>

# How to Add Yourself

You can add yourself to this list by **creating a public profile.**

## Creating a Public Profile

1. Log in and go to your **Dashboard**.
2. Select the **Profile & Connections** section.
3. Make sure you have connected your GitHub account and joined the creators team (you can find more information on the Profile & Connections page).
4. Fill in your public profile information and then **Save Profile**.

Currently, the Profile & Connections page only supports editing some properties (e.g. name, intro, nickname). To add more properties, please edit the wiki page directly.

**If you need any help,** please feel free to ask for assistance in [our GitHub Discussions help category](https://github.com/orgs/creatorsgarten/discussions/categories/help).

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

## Adding Yourself to Event Contributor List

See [[EventContributorList]] page for more info on how to do that.

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
