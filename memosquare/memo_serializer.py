# For materialize extended navbar, only accept ajax request
if not request.is_ajax():
    return HttpResponseBadRequest()

#Don't pass the 'fields' arg up to the superclass
fields = kwargs.pop('fields', None)

# Instantiate the superclass normally
super(MemoSerializer, self).__init__(*args, **kwargs)

if fields is not None:
    is_clipped = kwargs['pk'] == kwargs['context']['request'].user.pk
    self.fields['is_clipped'] = is_clipped


def __init__(self, *args, **kwargs):
super(MemoSerializer, self).__init__(*args, **kwargs)
if 'request' in self.context:
    request = self.context['request']
    is_clipped = True
    print(self.fields)
    self.fields['is_clipped'] = serializers.BooleanField(default=is_clipped)
