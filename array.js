const pessoas = [
	{ name: "Fabiana", age: 33},
	{ name: "Gabriel", age: 25},
	{ name: "Fernando", age: 17},
	{ name: "Ana", age: 2},
	{ name: "Geralda", age: 93},
	{ name: "Miguel", age: 70},
	{ name: "Antonio", age: 69},
];



for (let pessoa of pessoas) {   console.log(pessoa); }

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

temIdade();
function temIdade(){ 	
	for (let pessoa of pessoas) { 		
		if (pessoa.age>=18) { 			
			console.log(pessoa); 		
		} 	
	}
}

mediaIdade();

function mediaIdade(){
	var soma = 0;
	for (let pessoa of pessoas) {
		soma += pessoa.age;
	}
	console.log(soma/pessoas.length);
}