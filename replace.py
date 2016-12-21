import re
content = '<div><p>fsn<br>dd</p></div>'
# content = re.sub(r'<p.*?>', '', content)
content = re.sub(r'</p>|</?br>', '\n', content)
# content = re.sub(r'</?br>', '\n', content)
content = re.sub(r'<.*?>', '', content)
print(content)


{{ memo.content  | safe | linebreaksbr | truncatechars:200 }}
<p class="list-content">{{ memo.content | truncatechars:200 | linebreaksbr }}</p>
