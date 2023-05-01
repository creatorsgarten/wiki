:::lead
**grtn.org** is a URL short link website for [Creatorsgarten](https://creatorsgarten.org)'s assets.
:::

It is [[GitOps|managed on GitHub]] at {% render 'GitHub', repo: 'grtn.org' %}.

# Quick links

- List of short links: {% render 'Grtn', path: 'ls' %}
- Edit links: {% render 'Grtn', path: 'edit' %}

---

# Rendering grtn.org links on this wiki

On this wiki, you can reference links to grtn.org by rendering [[Template/Grtn]].

```
{% raw %}{% render 'Grtn', path: 'ls' %}{% endraw %}
```

Result &rarr; {% render 'Grtn', path: 'ls' %}