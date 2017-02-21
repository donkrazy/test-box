$.ajax('http://memosquare.com/memo/all/', { 'success': function(response){console.log(response);}});

 $.ajax({
    url: 'http://memosquare.com/memo/',
    type: 'get',
    success: function(response){
      console.log(response);
    },
    error: function(e) {
      alert(e);
    }
  });


$.ajax({
	type: "GET",
	url: "http://memosquare.com/memo/",
	success: function(data) {
	  var memo = {
	    "title": 'test',
        "content": 'zzz',
	    "page": 'httpt.haver.com',
	    "is_private": "True",
	    "csrfmiddlewaretoken": data
	  };
	  $.ajax({
	    type: "POST",
	    url: "http://memosquare.com/memo/",
	    data: memo,
	    success: function(data) {
	      console.log("success");
	    },
	    error: function(response){
	      console.log(response);
	    }

	  });
	},
	error: function(response){
	  console.log(response);
	}
});


function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);

  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
}

var url = 'http://memosquare.com/memo/'

var xhr = createCORSRequest('GET', url);
if (!xhr) {
  throw new Error('CORS not supported');
}
xhr.send();

// Create the XHR object.
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}

// Helper method to parse the title tag from the response.
function getTitle(text) {
  return text.match('<title>(.*)?</title>')[1];
}

// Make the actual CORS request.
function makeCorsRequest() {
  // This is a sample server that supports CORS.
  var url = 'http://memosquare.com/memo/all';

  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }

  // Response handlers.
  xhr.onload = function() {
    var text = xhr.responseText;
    var title = getTitle(text);
    alert('Response from CORS request to ' + url + ': ' + title);
  };

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  xhr.send();
}

makeCorsRequest();