{% assign text = text | default: 'Click here' %}<div>
<a href="{{ url }}" style="
display: block;
margin: 1rem 0;
text-align: center;
border-radius: 6px;
padding: 14px 28px;
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
color: white;
text-decoration: none;
">{{ text }}</a>
</div>