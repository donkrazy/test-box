from MemoSquare.models import *
from django.contrib.auth.models import User

user_list = User.objects.all()
for user in user_list:
    user_detail = user.detail
    code = user_detail.code
    username = user.username
    # exchange
    user.username = code
    user.first_name = username
    user.save()


detail_list = UserDetail.objects.all()
for user_detail in detail_list:
    user = user_detail.user
    code = user_detail.code
    username = user.username

    # exchange
    user.username = code
    user.first_name = username
    user.save()


detail_list = UserDetail.objects.all()
for user_detail in detail_list:
    user = user_detail.user
    username = user.username
    
    user.first_name = username
    user.save()


for detail in detail_list:
    if detail.provider == 'facebook':
        code = detail.img_url[27:42]
        user = detail.user
        user.username = code
        user.save()

