document.addEventListener('DOMContentLoaded', function () {
	var body = document.querySelector("body"); //получаем элемент body
	var divWripper = document.createElement("div"); // создаем div
	body.appendChild(divWripper);// добовляем div в body
	divWripper.className = "wripper";// присваиваем класс со стилями


	var linksArr = [
		'https://www.onliner.by/',
		'https://www.youtube.com/', 
		'https://vk.com/',
		'https://www.google.by/', 
		'https://yandex.by/' 
	];

	for (var i = 0; i < linksArr.length; i++) {
		var a = document.createElement("a"); // создаем элемент ссылки
		a.setAttribute("href", linksArr[i]); // присваеваем ей атрибут  
		var img = document.createElement("img"); // создаем элемент img
		img.setAttribute("src", "img/"+ (i+1)+ ".png"); //присваеваем атрибут src
		a.appendChild(img); 
		divWripper.appendChild(a);
	}

	
})