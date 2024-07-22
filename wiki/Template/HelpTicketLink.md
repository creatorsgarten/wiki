{% liquid
assign titleUrlEncoded = template.title | default: 'Example title' | url_encode
assign bodyUrlEncoded = template.body | default: 'Example body' | url_encode
assign text = text | default: 'Create a discussion'
assign url = "https://github.com/orgs/creatorsgarten/discussions/new?category=help&title=" | append: titleUrlEncoded | append: "&body=" | append: bodyUrlEncoded
-%}
<a href="{{ url | escape }}" class="btn btn-primary">{{ text | escape }}</a>
