{% liquid
unless people
  assign people = '{"match":{"person":true}}' | query_pages | sort: 'ref'
endunless
%}

<div class="people-grid">
{% for person in people %}{% liquid
assign slug = person.ref | split: '/' | last
%}
  <div class="person-card">
    <a href="/People/{{slug}}" class="person-link">
      {% if person.data.image %}
        <div class="person-image">
          <img src="{{ person.data.image }}" alt="{{ person.data.person.name }}" loading="lazy">
        </div>
      {% else %}
        <div class="person-image person-image-placeholder">
          <span>{{ person.data.person.nickname | default: person.data.person.name | slice: 0, 1 | upcase }}</span>
        </div>
      {% endif %}
      <div class="person-info">
        <div class="person-name">{{ person.data.person.name }}</div>
        {% if person.data.person.nicknameTh %}
          <div class="person-nickname">({{ person.data.person.nicknameTh }})</div>
        {% endif %}
        {% if person.data.person.intro %}
          <div class="person-intro">{{ person.data.person.intro }}</div>
        {% endif %}
      </div>
    </a>
  </div>
{% endfor %}
</div>

<style>
.people-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.person-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
}

.person-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.person-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

.person-image {
  height: 200px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.person-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.person-image-placeholder {
  background-color: #6366f1;
  color: white;
  font-size: 3rem;
  font-weight: bold;
}

.person-info {
  padding: 15px;
}

.person-name {
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 1.1rem;
  color: #333;
}

.person-nickname {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 5px;
}

.person-intro {
  font-size: 0.9rem;
  color: #555;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

@media (max-width: 600px) {
  .people-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px;
  }
  
  .person-image {
    height: 150px;
  }
  
  .person-info {
    padding: 10px;
  }
  
  .person-name {
    font-size: 1rem;
  }
}
</style>

# How to Add Yourself
To add yourself to this list:
1. Log in and go to your **Dashboard**.
2. Select the **Profile & Connections** section.
3. Make sure you have connected your GitHub account and joined the creators team (you can find more information on the Profile & Connections page).
4. Fill in your public profile information and then **Save Profile**.
Currently, the Profile & Connections page only supports editing some properties (e.g. name, intro, nickname). To add more properties, please edit the wiki page directly.

## Adding Social Links
To add social links (such as GitHub, Instagram, X, Facebook, LinkedIn, YouTube, or your website), edit your profile's wiki page. In the `person` object, add the relevant property. Each property can be a single string or an array of strings, for example:
```yaml
person:
  github: myusername
  instagram: ['myinsta', 'anotherinsta']
  site: 'https://mywebsite.com'
```

## Setting Your Profile Picture
1. Go to your **Dashboard** and open the **Upload** section.
2. Upload your image. You will receive a URL (it must start with `https://usercontent.creatorsgarten.org/`).
3. Edit your profile's wiki page and set the `image` property to this URL:
```yaml
person:
  # other properties...
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

# How to Add Yourself

To add yourself to this list:

1. Log in and go to your **Dashboard**.
2. Select the **Profile & Connections** section.
3. Make sure you have connected your GitHub account and joined the creators team (you can find more information on the Profile & Connections page).
4. Fill in your public profile information and then **Save Profile**.

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
