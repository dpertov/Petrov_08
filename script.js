var padstring = function addsymbol (name, resultLength, sideRight) {
	sideRight = sideRight || false;
	resultLength = resultLength || 10;
	
	if (name.length >= resultLength) {
		return name;
	}
	else {
		var o = '*';
		sideRight ? name =  name + o : name = o + name;
		console.log(name);
		return addsymbol (name,resultLength,sideRight);
	}
}
	
var userName = prompt('Введите имя');
var len = +prompt ('Введите общее количество символов');
var isRight = confirm ('Подставляем звездочки после имени?');
alert('результат = ' + padstring(userName,len,isRight));

