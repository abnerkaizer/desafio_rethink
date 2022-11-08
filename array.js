const form = document.querySelector("form");
var pessoas = new Array();

function input(e){
	e.preventDefault();
	var aux = {name: form.name.value, 
	age: form.age.value,
	job: form.job.value,
	email: form.email.value,
	phone: form.phone.value,
	date: form.date.value}
	pessoas.push(aux);
	form.reset();
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
		pessoas[i] = {id: i+1,name: pessoas[i].name, 
		age: pessoas[i].age, job: pessoas[i].job, 
		email: pessoas[i].email, 
		phone: pessoas[i].phone,
		date: pessoas[i].date}; 	
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