const pessoas = [
	{ name: "Fabiana Araújo", age: 33},
	{ name: "Gabriel Gomes", age: 25},
	{ name: "Fernando Henrique", age: 17},
	{ name: "Ana Luiza", age: 2},
	{ name: "Geralda do Nascimento", age: 93},
	{ name: "Miguel Souza", age: 70},
	{ name: "Antonio Miguel", age: 69},
];



for (let pessoa of pessoas) {   
	console.log(pessoa); 
}

name();
function name(name){
	for (let pessoa of pessoas) {
		if (pessoa.name == name) {
			console.log(pessoa);
		}
	}
}

console.log(names());
function names(){ 	
	var names = new Array(); 
	for (let pessoa of pessoas) { 		
		names.push(pessoa.name); 	
	} 	
	return names; 
}

insertId();
console.log(pessoas)
function insertId(){ 	
	for (var i = pessoas.length - 1; i >= 0; i--) { 		
		pessoas[i] = {id: i+1,name: pessoas[i].name, age: pessoas[i].age}; 	
	}
}


console.log(temIdade());
function temIdade(){ 	
	var names = new Array()
	for (let pessoa of pessoas) { 		
		if (pessoa.age>=18) { 			
			names.push(pessoa);
		} 	
	}
	return names;
}


console.log(mediaIdade());
function mediaIdade(){
	var soma = 0;
	for (let pessoa of pessoas) {
		soma += pessoa.age;
	}
	return soma/pessoas.length;
}