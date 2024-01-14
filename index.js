// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'YOUR API', // PLACE YOUR API INSIDE SINGLE QUOTES 
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) => {
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			temp2.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed
			// wind_degrees.innerHTML = response.wind_degrees
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
		})
		.catch(err => console.error(err));

}

submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})

getWeather("chennai")

// ........................................................


window.addEventListener("load", () => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=gummidipundi', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			cloud_pct5.innerHTML = response.cloud_pct
			feels_like5.innerHTML = response.feels_like
			humidity5.innerHTML = response.humidity
			max_temp5.innerHTML = response.max_temp
			min_temp5.innerHTML = response.min_temp
			sunrise5.innerHTML = response.sunrise
			sunset5.innerHTML = response.sunset
			temp5.innerHTML = response.temp
			wind_speed5.innerHTML = response.wind_speed
			wind_degrees5.innerHTML = response.wind_degrees
		})
		.catch(err => console.error(err));
})

// ........................................................................

window.addEventListener("load", () => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New york', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			cloud_pct6.innerHTML = response.cloud_pct
			feels_like6.innerHTML = response.feels_like
			humidity6.innerHTML = response.humidity
			max_temp6.innerHTML = response.max_temp
			min_temp6.innerHTML = response.min_temp
			sunrise6.innerHTML = response.sunrise
			sunset6.innerHTML = response.sunset
			temp6.innerHTML = response.temp
			wind_speed6.innerHTML = response.wind_speed
			wind_degrees6.innerHTML = response.wind_degrees
		})
		.catch(err => console.error(err));
})

// ..............................................................................7
window.addEventListener("load", () => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=sydney', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			cloud_pct7.innerHTML = response.cloud_pct
			feels_like7.innerHTML = response.feels_like
			humidity7.innerHTML = response.humidity
			max_temp7.innerHTML = response.max_temp
			min_temp7.innerHTML = response.min_temp
			sunrise7.innerHTML = response.sunrise
			sunset7.innerHTML = response.sunset
			temp7.innerHTML = response.temp
			wind_speed7.innerHTML = response.wind_speed
			wind_degrees7.innerHTML = response.wind_degrees
		})
		.catch(err => console.error(err));
})

// ..............................................................................7
window.addEventListener("load", () => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			cloud_pct8.innerHTML = response.cloud_pct
			feels_like8.innerHTML = response.feels_like
			humidity8.innerHTML = response.humidity
			max_temp8.innerHTML = response.max_temp
			min_temp8.innerHTML = response.min_temp
			sunrise8.innerHTML = response.sunrise
			sunset8.innerHTML = response.sunset
			temp8.innerHTML = response.temp
			wind_speed8.innerHTML = response.wind_speed
			wind_degrees8.innerHTML = response.wind_degrees
		})
		.catch(err => console.error(err));
})
