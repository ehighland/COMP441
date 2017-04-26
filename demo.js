var http = require("http");

http.createServer(function (request, response) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');

function addfave(x){
	var articles = ['Boyd, K. et al.\n"Finding Function in the Unknown." Proceedings - 2015 IEEE International Conference on Bioinformatics and Biomedicine, BIBM 2015.',
	'Wheeler, H. et al.\n"Survey of the Heritability and Sparse Architecture of Gene Expression Traits across Human Tissues." Ed. Stephen B Montgomery. PLOS Genetics 12.11 (2016): e1006423.1',
	'Zhou, Xiang et al.\n"Polygenic Modeling with Bayesian Sparse Linear Mixed Models." Ed. Peter M. Visscher. PLoS Genetics 9.2 (2013): e1003264. Web. 12 Oct. 2016.',
	'The International Schizophrenia Consortium, et al.\n"Common Polygenic Variation Contributes to Risk of Schizophrenia and Bipolar Disorder." Nature 460 (2009).']
	
	var faves = []
	
	if (x == "Boyd"){
		faves.push(article[0])
	}
	else if (x == "Wheeler"){
		faves.push(article[1])
	}
	else if (x == "Zhou"){
		faves.push(article[2])
	}
	else if (x == "ISC"){
		faves.push(article[3])
	}
}