$.ajax({
	'url': 'http://memosquare.com/memo/4/lock/',
	"method":"POST", 
	'data': {"csrfmiddlewaretoken": csrftoken, },
	"success": function(response){console.log(response)}
})