from html.parser import HTMLParser


class MyParse(HTMLParser):
	content_set = set()

	def handle_starttag(self, tag, attrs):
		if tag=="img":
			self.content_set.add(dict(attrs)["src"])

h=MyParse()
content = 'd dfadf sdf asdfasdf [<p> <hdftml>\n<body>\n<p>dfdfdf</p>\n<img src="http://shopping.phinf.naver.net/20161228_6/c3e65ed6-b34e-4123-92a5-a7e1d76acce0.jpg" />\n<img src="http://shopping.phinf.naver.net/20161228_6/c3e65ed6-b34e-4123-92a5-a7e1d76acce0.jpg" />\n</body>\n</html>'
h.feed(content)
print(h.content_set)