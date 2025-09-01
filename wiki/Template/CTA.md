{% assign text = text | default: 'Click here' %}<div>
<a href="{{ url }}" style="
display: block;
margin: 1rem 0;
text-align: center;
padding: 14px 28px;
border: 2px solid #667eea;
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
border-radius: 6px;
color: white;
text-decoration: none;
box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4), 0 4px 10px rgba(118, 75, 162, 0.2), inset 0px 1px 0 rgba(255, 255, 255, 0.5);
font-size: 1.6em;
">{{ text }}</a>
</div>