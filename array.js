const form = document.querySelector("form");
var pessoas = [
	{ name: "Fabiana Araújo", age: 33},
	{ name: "Gabriel Gomes", age: 25},
	{ name: "Fernando Henrique", age: 17},
	{ name: "Ana Luiza", age: 2},
	{ name: "Geralda do Nascimento", age: 93},
	{ name: "Miguel Souza", age: 70},
	{ name: "Antonio Miguel", age: 69},
];

function input(e){
	e.preventDefault();
	var aux = {name: form.fullname.value, 
	age: form.age.value,
	job: form.job.value,
	email: form.email.value,
	phone: form.phonenumber.value,
	date: form.date.value}
	pessoas.push(aux);
	getPessoas();
}

function getPessoas(){
	for (let pessoa of pessoas) {   
		console.log(pessoa); 
	}
}

function name(name){
	for (let pessoa of pessoas) {
		if (pessoa.name == name) {
			console.log(pessoa);
		}
	}
}

function names(){ 	
	var names = new Array(); 
	for (let pessoa of pessoas) { 		
		names.push(pessoa.name); 	
	} 	
	return names; 
}

function insertId(){ 	
	for (var i = pessoas.length - 1; i >= 0; i--) { 		
		pessoas[i] = {id: i+1,name: pessoas[i].name, age: pessoas[i].age}; 	
	}
}


function temIdade(){ 	
	var names = new Array()
	for (let pessoa of pessoas) { 		
		if (pessoa.age>=18) { 			
			names.push(pessoa);
		} 	
	}
	return names;
}


function mediaIdade(){
	var soma = 0;
	for (let pessoa of pessoas) {
		soma += pessoa.age;
	}
	return soma/pessoas.length;
}
form.addEventListener("submit",input);