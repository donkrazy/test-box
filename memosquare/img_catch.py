from xml.etree import ElementTree
import random
import urllib.request
from uuid import uuid4
from django.utils import timezone
from MemoSquare.settings import MEDIA_ROOT
import os

def catch_src(content):
	content_html = ElementTree.fromstring(content)
	src_list = []
	for item in content_html.findall('*/img'):
	    src_list.append(item.attrib['src'])
	return src_list

# Not create Memo_image foreign key, just stack images
def save_image(src):
    extension = os.path.splitext(src)[-1].lower()
    try:
        format = {
            '.jpg': 'jpeg',
            '.jpeg': 'jpeg',
            '.png': 'png',
            '.gif': 'gif',
        }[extension]
    except KeyError:
        format = 'png'

	random_name = uuid4().hex
	dir_path = MEDIA_ROOT + timezone.now().strftime('/%y/%m/%d/') + random_name + format
	
	# Need to async..?
	image = urllib.request.urlretrieve(src, dir_path)
	return random_name

def catch_save(content):
	src_list = catch_src(content)
	replace_table = []
	for src in src_list:
		src_saved = save_image(src)
		replace_table.append((src, src_saved))

	# Assume that there is no duplicated img src
	for src, src_saved in replace_table:
		content = content.replace(src, src_saved)

	return content

content = '<html>\n<body>\n<p>dfdfdf</p>\n<img src="http://shopping.phinf.naver.net/20161228_6/c3e65ed6-b34e-4123-92a5-a7e1d76acce0.jpg" />\n<img src="http://shopping.phinf.naver.net/20161228_6/c3e65ed6-b34e-4123-92a5-a7e1d76acce0.jpg" />\n</body>\n</html>'
print(catch_save(content))
