$.ajax({
    type: "GET",
    url: "http://memo-square.com/memo/csrf_test/",
    xhrFields: {
        withCredentials: true // for authentication
    },
    crossDomain: false, // for is_ajax=True
    /*
	http://stackoverflow.com/questions/7755899/django-says-is-ajax-is-false-on-a-jquery-ajax-request
    */
    success: function (data) {
    	var csrftoken = data;
        var memo = {
            "title": 'dddzz',
            "content": 'zzz',
            "page": 'http://naver.com/',
            "is_private": "True",
            "category": "new cteate",
            "csrfmiddlewaretoken": data
        };
        function csrfSafeMethod(method) {
            // these HTTP methods do not require CSRF protection
            return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
        }
        $.ajaxSetup({
            beforeSend: function(xhr, settings) {
                if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                    xhr.setRequestHeader("X-CSRFToken", csrftoken);
                }
            }
        });
        $.ajax({
            type: "POST",
            url: "http://memo-square.com/memo/",
            data: memo,
            xhrFields: {
                withCredentials: true // for authentication
            },
            success: function (data) {
                console.log("success");
            },
            error: function (response) {
                console.log(response);
            }
        });
    },
    error: function (response) {
        console.log(response);
    }
});