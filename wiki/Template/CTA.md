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
box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4), 0 4px 10px rgba(118, 75, 162, 0.2);
">{{ text }}</a>
</div>