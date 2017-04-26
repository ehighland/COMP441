function addfave(x){
	var articles = ['Boyd, K. et al.\n"Finding Function in the Unknown." Proceedings - 2015 IEEE International Conference on Bioinformatics and Biomedicine, BIBM 2015.',
	'Wheeler, H. et al.\n"Survey of the Heritability and Sparse Architecture of Gene Expression Traits across Human Tissues." Ed. Stephen B Montgomery. PLOS Genetics 12.11 (2016): e1006423.1',
	'Zhou, Xiang et al.\n"Polygenic Modeling with Bayesian Sparse Linear Mixed Models." Ed. Peter M. Visscher. PLoS Genetics 9.2 (2013): e1003264. Web. 12 Oct. 2016.',
	'The International Schizophrenia Consortium, et al.\n"Common Polygenic Variation Contributes to Risk of Schizophrenia and Bipolar Disorder." Nature 460 (2009).']
	
	var faves = []
	
	if (x == "Boyd"){
		faves.push(article[0]);
	}
	else if (x == "Wheeler"){
		faves.push(article[1]);
	}
	else if (x == "Zhou"){
		faves.push(article[2]);
	}
	else if (x == "ISC"){
		faves.push(article[3]);
	}
	
	return faves;
}

function postfave(){
	faves = addfave(x);
	
	for i in faves{
		var node = document.createElement("li");                 // Create a <li> node
		var textnode = document.createTextNode(i);         // Create a text node
		node.appendChild(textnode);                              // Append the text to <li>
		document.getElementById("favlist").appendChild(node);     // Append <li> to <ul> with id="myList"
	}
	
}
