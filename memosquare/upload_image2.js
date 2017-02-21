var data = new FormData($('form').get(0));
//image = $("<img />").attr('src','http://img.naver.net/static/www/u/2013/0731/nmms_224940510.gif');
var image = 'dddddddd';
data.append('file', image)
$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        xhr.setRequestHeader("X-CSRFToken", csrf_token);
    }
});
$.ajax({
    url: '/upload/ddd2.gif',
    type: 'PUT',
    data: data,
    cache: false,
    processData: false,
    contentType: false,
    success: function(data) {
        alert('success');
    }
});