PASTEBINnew pastetrends  


weather solution example
 A GUEST   NOV 2ND, 2017   43  IN 179 DAYS

Not a member of Pastebin yet? Sign Up, it unlocks many cool features!
rawdownloadreport 2.52 KB
<!-- this is weatherTD.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Getting the Weather</title>
</head>
<body>
    <article id='main'>
        <section>
            <form id='weatherForm'>
                <input type="text"
                       id='frmCity'
                       value='Galway'
                       placeholder='enter city'/><br>
                <input type="text"
                       id='frmCountry'
                       value='ie'
                       placeholder='enter country'/><br>
                <button id='btnGetWeather'>Get Weather</button>
            </form>
        </section>
        <section id='weatherOutput'>
        </section>
    </article>
</body>
<script src='scripts/weatherService.js'></script>
</html>
 
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
 
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
RAW Paste Data

<!-- this is weatherTD.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Getting the Weather</title>
</head>
<body>
    <article id='main'>
        <section>
            <form id='weatherForm'>
                <input type="text"
                       id='frmCity' 
                       value='Galway'
                       placeholder='enter city'/><br>
                <input type="text" 
                       id='frmCountry' 
                       value='ie'
                       placeholder='enter country'/><br>
                <button id='btnGetWeather'>Get Weather</button>
            </form>
        </section>
        <section id='weatherOutput'>
        </section>
    </article>
</body>
<script src='scripts/weatherService.js'></script>
</html>

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

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

Pastebin PRO Autumn Special!
Get 40% OFF on Pastebin PRO accounts!
                
create new paste  /  dealsnew!  /  api  /  trends  /  syntax languages  /  faq  /  tools  /  privacy  /  cookies  /  contact  /  dmca  /  scraping  /  go  
Dedicated Server Hosting by Steadfast

Top
xSee the DocsBuild truly native mobile apps w/ JavaScript or Angular. Free & Open Source