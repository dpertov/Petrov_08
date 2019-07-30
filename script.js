var padstring = function addsymbol (name, resultLength, sideleft) {
	sideleft = sideleft || false;
	resultLength = resultLength || 10;
	
	if (name.length >= resultLength) {
		return name;
	}
	else {
		var o = '*';
		sideleft ? name = o + name : name = name + o;
		console.log(name);
		return addsymbol (name,resultLength,sideleft);
	}
}
	
var userName = prompt('Введите имя');
var len = +prompt ('Введите общее количество символов');
var isLeft = confirm ('Подставляем звездочки до имени?');
alert('результат = ' + padstring(userName,len,isLeft));

