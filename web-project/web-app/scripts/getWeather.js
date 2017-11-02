// create an instance of an HTTPRequest object



handleForm = ()=>{
    event.preventDefault()

    let xhr = new XMLHttpRequest()
    xhr.open('get', `http://api.openweathermap.org/data/2.5/weather?q=${frmcity.value},${frmcountry.value}&APPID=48f2d5e18b0d2bc50519b58cce6409f1`)
    let data = JSON.parse(xhr.responseText)
    monitor.innerHTML = xhr.responseText
    
    
    let userURL = `http://api.openweathermap.org/data/2.5/weather?q=${frmcity.value},${frmcountry.value}&APPID=48f2d5e18b0d2bc50519b58cce6409f1`
    username.innerHTML = userURL



   
}


              


btnGo.addEventListener('click', handleForm)




// console.log("test")
// console.log(frmcity.value)
// console.log(frmcountry.value)
// 

// function handleData()
// {

// event.preventDefault()

    
//     if(xhr.readyState === 4 && xhr.status === 200)
//     {

    xhr.send()


//         let desc=data.weather[0].description
//         let windspeed =  data.wind.speed
//         output.innerHTML =  windspeed + " " + desc 
       
//     }

    

// }
// btnGo.addEventListener('click', handleData)
 


