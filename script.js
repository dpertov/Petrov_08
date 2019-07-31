var padstring = function addsymbol (name, resultLength, sideRight,symbol) {
	sideRight = sideRight || false;
	resultLength = resultLength || 10;
	symbol = symbol || '*';
	if (name.length >= resultLength) {
		return name;
	}
	else {
		
		sideRight ? name =  name + symbol : name = symbol + name;
		console.log(name);
		return addsymbol (name,resultLength,sideRight,symbol);
	}
}
	
var userName = prompt('Введите имя');
var len = +prompt ('Введите общее количество символов');
var symbol = prompt ('Введите символ для подставления в имя');
var isRight = confirm ('Подставляем символ после имени?');
alert('результат = ' + padstring(userName,len,isRight, symbol));

