from MemoSquare.models import *

user_list = UserDetail.objects.all()
for user_detail in user_list:
	if user_detail.provider == 'facebook':
		img_url = 'https://graph.facebook.com/%s/picture?width=300' % user_detail.code
		user_detail.img_url = img_url
		user_detail.save()
