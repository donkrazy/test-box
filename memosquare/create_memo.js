$.ajax({
    type: "GET",
    url: "/memo/csrf_test/",
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
            title: 'dddzzewewzz123123',
            content: '<html><img src="http://nv1.tveta.naver.net/libs/1149/1149774/20161229162513-pgAXDR4V.jpg" /></html> <img src="http://img.naver.net/static/newsstand/up/2014/0715/330.gif" />',
            page: 'http://navernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernavernaver.com/',
            is_private: false,
            category_name: "    ",
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
            url: "/memo/",
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