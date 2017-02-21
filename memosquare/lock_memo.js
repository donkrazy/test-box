$.ajax({
	'url': '/memo/4/lock/',
	"method":"POST", 
	'data': {"csrfmiddlewaretoken": csrf_token, },
	"success": function(response){console.log(response)}
})