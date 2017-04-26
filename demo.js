function addfave(x){
	var article = ['Boyd, K. et al. "Finding Function in the Unknown." Proceedings - 2015 IEEE International Conference on Bioinformatics and Biomedicine, BIBM 2015.\n',
	'Wheeler, H. et al. "Survey of the Heritability and Sparse Architecture of Gene Expression Traits across Human Tissues." Ed. Stephen B Montgomery. PLOS Genetics 12.11 (2016): e1006423.1\n',
	'Zhou, Xiang et al. "Polygenic Modeling with Bayesian Sparse Linear Mixed Models." Ed. Peter M. Visscher. PLoS Genetics 9.2 (2013): e1003264. Web. 12 Oct. 2016.\n',
	'The International Schizophrenia Consortium, et al."Common Polygenic Variation Contributes to Risk of Schizophrenia and Bipolar Disorder." Nature 460 (2009).\n']
	
	var faves = []
	
	if (x == "Boyd"){
		article0 = article[0];
		faves.concat(article0);
	}
	
	if (x == "Wheeler"){
		article1 = article[1];
		faves.concat(article1);
	}
	
	if (x == "Zhou"){
		article2 = article[2];
		faves.concat(article2);
	}
	
	if (x == "ISC"){
		article3 = article[3];
		faves.concat(article3);
	}
	
	console.log(faves);
	
	faves.toString();
	
	localStorage.setItem("faves", faves);
};

function postfave(){
	var faves = localStorage.getItem("faves");
	console.log(faves);
	var node = document.createElement("li");
	var textnode = document.createTextNode(faves); 
	node.appendChild(textnode);
	document.getElementById("favlist").appendChild(node);     
};