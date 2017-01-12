var fd = new FormData();
fd.set('image', 'data:image/jpeg;base64,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')
fd.set('left', 0);
fd.set('upper', 0);
fd.set('right', 200);
fd.set('lower', 100);
var xhr = new XMLHttpRequest();
xhr.open('POST', '/upload/', true);
xhr.setRequestHeader("X-CSRFToken", csrf_token);
xhr.onreadystatechange = function () {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        	console.log(xhr.responseText);
        }
    };
xhr.send(fd);