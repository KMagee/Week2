// this is weatherService.js
getWeather=()=>{
event.preventDefault() // prevent the form from submitting
let city=frmCity.value // read the form values
let country = frmCountry.value
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=48f2d5e18b0d2bc50519b58cce6409f1`
fetch(url)
    .then( // here we asynchronously handle a promise
        (response) => {
            if (response.status !== 200) {
                console.log(`There was a problem. Status Code: ${response.status}`)
                return
            }
            response.json().then((data) => {
                console.log(data)
                let weatherDesc = data.weather[0].description
                let weatherTemp = data.main.temp
                // put the model into the view
                let report = document.createElement('h4')
                    report.innerHTML =  `Weather Description: ${weatherDesc}`
                    weatherOutput.appendChild(report)
                let temp = document.createElement('h4')
                    temp.innerHTML = `Temperature in ${city} ${country}: ${Math.round(weatherTemp-273)}&deg;`
                    weatherOutput.appendChild(temp)
            })
        }
    )
.catch((err) => { // here we handle any error in the promise 
	console.log('Fetch Error :-S', err)
    })
}
// add an event listener to the form (or to the button)
weatherForm.addEventListener('submit', getWeather)