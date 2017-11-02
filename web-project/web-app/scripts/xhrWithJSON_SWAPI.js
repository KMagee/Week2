let xhr = new XMLHttpRequest()
xhr.open('get', 'https://swapi.co/api/planets/1/')
xhr.addEventListener('readystatechange', handleData)

// event call-back listener
function handleData(){
	// check the ready state
	if(xhr.readyState === 4 && xhr.status === 200){
		// we are confident all the data has loaded ok
	
		let result = JSON.parse(xhr.responseText)
        monitor.innerHTML = xhr.responseText
        output.innerHTML = `Name =  ${result.name} Rotation Period = ${result.rotation_period}`

		// for (let i in result){ // or let i=0; i< result.length; i++
		// 	console.log(result[i])
		// 	let nextImage = document.createElement('img')
		// 	nextImage.setAttribute('src', `data/gallery/${result[i].filename}.jpg`)
		// 	//need the dollar sign inside backtick strings
		// 	nextImage.setAttribute('alt', result[i].desc)
		// 	nextImage.setAttribute('title', result[i].desc)
		// 	output.appendChild(nextImage)
		// }
	}
}
xhr.send() // here the request is actually made