faves = [];

function addfave(x){
	var article = [
	'Boyd, K. et al. "Finding Function in the Unknown." Proceedings - 2015 IEEE International Conference on Bioinformatics and Biomedicine, BIBM 2015.\n',
	'Wheeler, H. et al. "Survey of the Heritability and Sparse Architecture of Gene Expression Traits across Human Tissues." Ed. Stephen B Montgomery. PLOS Genetics 12.11 (2016): e1006423.1\n',
	'Zhou, X. et al. "Polygenic Modeling with Bayesian Sparse Linear Mixed Models." Ed. Peter M. Visscher. PLoS Genetics 9.2 (2013): e1003264. Web. 12 Oct. 2016.\n',
	'The International Schizophrenia Consortium. "Common Polygenic Variation Contributes to Risk of Schizophrenia and Bipolar Disorder." Nature 460 (2009).\n'
	]
	
	if (x == 0){
		article = article[0];
		faves.push(article);
	}
	else if (x == 1){
		article = article[1];
		faves.push(article);
	}
	else if (x == 2){
		article = article[2];
		faves.push(article);
	}
	else if (x == 3){
		article = article[3];
		faves.push(article);
	}
	
	console.log(faves);
	
	faves.toString();
	
	localStorage.setItem("faves", faves);
};

function postfave(){
	var faves = localStorage.getItem("faves");
	console.log(faves);
	if (faves.length > 1){
		faves = faves.toString();
		faves = faves.split('\n,');
		console.log(faves);
		for(i in faves){
			if(faves[i] != ""){
				var node = document.createElement("li");
				var textnode = document.createTextNode(faves[i]); 
				var br = document.createElement("br");
				node.appendChild(textnode);
				document.getElementById("favlist").appendChild(node);
				document.getElementById("favlist").appendChild(br);
			}
		}
	}
	else {
	var node = document.createElement("li");
	var textnode = document.createTextNode(faves); 
	node.appendChild(textnode);
	document.getElementById("favlist").appendChild(node); 
	}    
};

function read(){
	if(document.getElementById('Wheeler, H. et al.').checked) {
		console.log("Wheeler");
		$("#articles").html("<iframe width='100%' height='800px' src='Wheeler.pdf'></iframe>");
      }
    else if(document.getElementById('Boyd, K. et al.').checked) {
    	console.log("Boyd");
    	$("#articles").html("<iframe width='100%' height='800px' src='Boyd.pdf'></iframe>");
    }
    else if(document.getElementById('Zhou, X. et al.').checked) {
    	console.log("Zhou");
    	$("#articles").html("<iframe width='100%' height='800px' src='Zhou.pdf'></iframe>");
    }
    else {
    	console.log("ISC");
    	$("#articles").html("<iframe width='100%' height='800px' src='ISC.pdf'></iframe>");
    }
};