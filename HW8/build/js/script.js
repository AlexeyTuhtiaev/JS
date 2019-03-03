//Создаем массив объектов
var weatherItems = [];

document.addEventListener('DOMContentLoaded', function () {

	//api.openweathermap.org/data/2.5/forecast?q={city name},{country code}
	var url = "http://api.openweathermap.org/data/2.5/forecast?q=Minsk&APPID=03fb54ebf904aeecf7fbb0e169f0c7ad";
	var weatherRespond = getWeatherRespond(url);

	if	(weatherRespond.status == 200){
		addWeatherItemsToList(weatherRespond);
	}else{
		alert("Error " + xhr.statusText);
	}

	createWeatherList(weatherItems);
})

function addWeatherItemsToList(response){
	var responseText = response.responseText;
	var json = JSON.parse(responseText);
	var jsonItems = json.list;

	for(var i = 0; i < jsonItems.length; i+=8){
		currentJsonItem = jsonItems[i];
		var currentItem = new WeatherItem(json.city.name, null, currentJsonItem.wind.speed, null);
		weatherItems.push(currentItem);
	}
}

//get respond
function getWeatherRespond(url){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, false);	
	xhr.send();
	return xhr;
}

//конструктор
function WeatherItem(city, date, windSpeed, temperature ) {
	this.city = city;
	this.date = date;
	this.windSpeed = windSpeed;
	this.temperature = temperature;
}

//выводит объекты
function createWeatherList() {
	var sectionList = document.querySelector(".list .wripper");
	sectionList.textContent = "";

	weatherItems.map(function(weatherItem, index) {
		var item = createListItem(weatherItem);
		sectionList.appendChild(item);
	});
}

//выводит один объект
function createListItem(weatherItem){
	
	var sectionList = document.querySelector(".list .wripper");
	var item = document.createElement("div");
	item.className="item";
	var mainBlock = document.createElement("div");
	mainBlock.className="mainBlock";
	
	//City
	var sityDiv = document.createElement("div");
	var sitySpanTitle = document.createElement("span");
	sitySpanTitle.className="title";
	sitySpanTitle.textContent = "Sity: ";
	sityDiv.appendChild(sitySpanTitle);
	var sitySpanName = document.createElement("span");
	sitySpanName.textContent = weatherItem.city;
	sityDiv.appendChild(sitySpanName);
	mainBlock.appendChild(sityDiv);

	//Wind
	var windDiv = document.createElement("div");
	var windSpanTitle = document.createElement("span");
	windSpanTitle.className="title";
	windSpanTitle.textContent = "Wind's Speed: ";
	windDiv.appendChild(windSpanTitle);
	var windSpeedValue = document.createElement("span");
	windSpeedValue.textContent = weatherItem.windSpeed;
	windDiv.appendChild(windSpeedValue);
	mainBlock.appendChild(windDiv);
	
	item.appendChild(mainBlock);
	return item;
}
