handleForm = ()=>{
    event.preventDefault()
    let city=frmcity.value
    let country=frmcountry.value

    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function()
    {
        if (this.readyState === 4 && this.status === 200) 
        {
            // Action to be performed when the document is read;
            let data = JSON.parse(xhr.responseText)
            monitor.innerHTML = xhr.responseText
            
            let desc=data.weather[0].description
            let windspeed =  data.wind.speed
            let weatherTemp = data.main.temp
   
   
            let report = document.createElement('h4')
            report.innerHTML =  `Weather Description: ${desc}`
            weatherOutput.appendChild(report)
            
            let temp = document.createElement('h4')
            temp.innerHTML = `Temperature in ${city} ${country}: ${Math.round(weatherTemp-273)}&deg;`
            weatherOutput.appendChild(temp)
   
            let wind = document.createElement('h4')
            wind.innerHTML = `Windspeed in ${city} ${country}: ${windspeed}`
            weatherOutput.appendChild(wind)
         }  
    }
     xhr.open('get', `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=48f2d5e18b0d2bc50519b58cce6409f1`)
     xhr.send()
}

btnGo.addEventListener('click', handleForm)




// console.log("test")
// console.log(frmcity.value)
// console.log(frmcountry.value)
// 

// function handleData()
// {

// event.preventDefault()


// }
// btnGo.addEventListener('click', handleData)
 


