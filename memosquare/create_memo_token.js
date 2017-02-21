// GET request
$.ajaxSetup({
    beforeSend: function(xhr, settings) {
    	xhr.setRequestHeader("Authorization", "Token 6df9a0f3c17dd9052eee09482de9a3f33ecaeecd");
    }
});
$.ajax({
    url: "http://localhost:8000/memo/",
    xhrFields: {
        withCredentials: true // for authentication
    },
    crossDomain: false, // for is_ajax=True
    success: function (data) {
        console.log(data);
    },
    error: function (response) {
        console.log(response);
    }
});


// POST request
var memo = {
    title: 'dddzzewewzz123123',
    content: '<html><img src="http://nv1.tveta.naver.net/libs/1149/1149774/20161229162513-pgAXDR4V.jpg" /></html> <img src="http://img.naver.net/static/newsstand/up/2014/0715/330.gif" />',
    page: 'http://naver.com/',
    is_private: false,
    category_name: "zzx",
};
$.ajaxSetup({
    beforeSend: function(xhr, settings) {
    	xhr.setRequestHeader("Authorization", "Token 6df9a0f3c17dd9052eee09482de9a3f33ecaeecd");
    }
});
$.ajax({
    type: "POST",
    url: "http://localhost:8000/memo/",
    data: memo,
    xhrFields: {
        withCredentials: true // for authentication
    },
    crossDomain: false, // for is_ajax=True
    success: function (data) {
        console.log("success");
    },
    error: function (response) {
        console.log(response);
    }
});