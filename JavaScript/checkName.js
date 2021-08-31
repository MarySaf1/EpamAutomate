let name = prompt("Введите Ваше имя", '');

function check(){
	if (name == 'Маша'){
		alert('Привет, ' + name);
	}else{
		alert("Нет такого имени")
	}

}

check();