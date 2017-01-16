$.ajax({
	'url': '/memo/67/like/',
	"method":"POST", 
	'data': {"csrfmiddlewaretoken": csrf_token, },
	"success": function(response){console.log(response)}
})