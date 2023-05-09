:::lead
This page documents the supported syntax in this [wiki](/wiki).
:::

Feel free to try out syntax in [[Sandbox]] page.

# Callouts

```
:::info
This is an info box
:::

:::warning
This is a warning box
:::

:::tip
This is a tip box
:::

:::danger[BE CAREFUL]
This is a danger box
:::
```

:::info
This is an info box
:::

:::warning
This is a warning box
:::

:::tip
This is a tip box
:::

:::danger[BE CAREFUL]
This is a danger box
:::

# Details block

Details blocks are useful for auxiliary information, esp. FAQ sections. They are rendered as a collapsible section.

```
:::details[Summary here]
Details here
:::
```

:::details[Summary here]
Details here
:::

# Draft block

Draft blocks are useful for marking a piece of content as draft.

```
:::Draft
1x projector, 1x hdmi tx, 2x wireless mic, 1x mic rx, 1x mixer, 1x speaker, stereo
:::
```

:::Draft
1x projector, 1x hdmi tx, 2x wireless mic, 1x mic rx, 1x mixer, 1x speaker, stereo
:::

# Liquid

You can use Liquid [tags](https://liquidjs.com/tags/overview.html) and [filters](https://liquidjs.com/filters/overview.html) to add rudimentary logic to a wiki page.

{% raw %}
```
{% assign showdownSpaceEvents = '{"match":{"event.hosts":"showdown.space"}}' | query_pages %}
{% render 'PageList', pages: showdownSpaceEvents %}
```
{% endraw %}

{% assign showdownSpaceEvents = '{"match":{"event.hosts":"showdown.space"}}' | query_pages %}
{% render 'PageList', pages: showdownSpaceEvents %}

# Message

Messages are useful for discussing in the wiki.

```
::Message[**"this"** is a message]{from=person1}

:::Message{from=@dtinth}
this is another message \
that spans multiple lines \
also, when the `from=` attribute starts with an `@`, it is treated as GitHub username
:::
```

::Message[**"this"** is a message]{from=person1}

:::Message{from=@dtinth}
this is another message \
that spans multiple lines \
also, when the `from=` attribute starts with an `@`, it is treated as GitHub username
:::

# Template

Template lets you re-use content across multiple pages without having to duplicate content.
A template is a page inside the `Template` namespace.
To render a template, use the [{% raw %}`{% render %}`{% endraw %} Liquid syntax](https://liquidjs.com/tags/render.html) and specify the name of the template.
For a list of available template, see [[Template]].

## Event

Renders a link to the event.

{% raw %}
```
{% render 'Event', name: 'creativecodingmeetup' %}
```
{% endraw %}

{% render 'Event', name: 'creativecodingmeetup' %}

## EventBox

Renders a box for pages related to the event.

{% raw %}
```
{% render 'EventBox', name: 'creativecodingmeetup' %}
```
{% endraw %}

{% render 'EventBox', name: 'creativecodingmeetup' %}

## Facebook

Renders a link to a Facebook profile with an icon.

{% raw %}
```
{% render 'Facebook', user: 'creatorsgarten' %}
```
{% endraw %}

{% render 'Facebook', user: 'creatorsgarten' %}

## GitHub

Renders a link to a GitHub user or GitHub repo with an icon.

{% raw %}
```
{% render 'GitHub', user: 'creatorsgarten' %}
```
{% endraw %}

{% render 'GitHub', user: 'creatorsgarten' %}

{% raw %}
```
{% render 'GitHub', repo: 'creatorsgarten/wiki' %}
```
{% endraw %}

{% render 'GitHub', repo: 'creatorsgarten/wiki' %}

## Grtn

Renders a Grtn shortcut link.

{% raw %}
```
{% render 'Grtn', path: 'e' %}
```
{% endraw %}

{% render 'Grtn', path: 'e' %}

## Instagram

Renders a link to a Instagram profile with an icon.

{% raw %}
```
{% render 'Instagram', user: 'creatorsgarten' %}
```
{% endraw %}

{% render 'Instagram', user: 'creatorsgarten' %}

## YouTube

Renders a link to a YouTube channel with an icon.

{% raw %}
```
{% render 'YouTube', user: 'creatorsgarten' %}
```
{% endraw %}

{% render 'YouTube', user: 'creatorsgarten' %}

