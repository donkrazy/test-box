for url in c:
    try:
        Page.objects.get(url=url)
    except:
        list = Page.objects.filter(url=url)
        z = list[1:]
        for y in z:
            y.delete()

