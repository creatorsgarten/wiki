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

# Details (collapsible) block

Details blocks are useful for auxiliary information, esp. FAQ sections.

```
:::details[Summary here]
Details here
:::
```

:::details[Summary here]
Details here
:::

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
