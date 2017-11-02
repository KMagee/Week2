// create an instance of an HTTPRequest object

let xhr = new XMLHttpRequest()
xhr.open('get', `http://api.openweathermap.org/data/2.5/weather?q=galway,ie&APPID=48f2d5e18b0d2bc50519b58cce6409f1`)

handleForm = ()=>{
    event.preventDefault()
    

    
    if(xhr.readyState === 4 && xhr.status === 200)
    {

        let result = JSON.parse(xhr.responseText)
        monitor.innerHTML = xhr.responseText
        
        let desc=data.weather[0].description
        let windspeed =  data.wind.speed
        output.innerHTML =  windspeed + " " + desc 
    }
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
 


