curl --cookie "sessionid=s149hrv6iuwsitdv9hm6tsy4fsgqvqcy; csrftoken=7v5XbvKCR5bZYezqOgnrgCFm3rb2nldUzRIjxCWhDPN72nMqN4N0AxGE0MKOopqc" \
	-X POST \
	--header "X-CSRFTOKEN: 7v5XbvKCR5bZYezqOgnrgCFm3rb2nldUzRIjxCWhDPN72nMqN4N0AxGE0MKOopqc" \
	--header "Content-Type: application/json" \
	--data '{"title":"dzdfzdfddzz","content":"zzdfzdfz Dkjfk","page":"example.com","is_private": true}' \
	http://memosquare.com/memo/


curl -H 'Authorization: Token 6df9a0f3c17dd9052eee09482de9a3f33ecaeecd' http://localhost:8000/memo/ \
	 -X POST \