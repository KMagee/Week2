//function init(){
	// create an instance of an HTTPRequest object
	let xhr = new XMLHttpRequest()
	xhr.open('get', 'data/photos.xml')
	xhr.onreadystatechange = function(){
		// check the ready state
		if(xhr.readyState === 4 && xhr.status === 200){
			// we are confident all the data has loaded ok
			let result = xhr.responseXML.getElementsByTagName('photos')
			let images = result[0].getElementsByTagName('image')
			let resultArray = xhr.responseXML.getElementsByTagName('image')
			
			// iterate over all the returned images
			let arrayLength = resultArray.length
			let outputLocation = document.getElementById('output')
			for (let i in resultArray){
				let nextTag = document.createElement('img')
				nextTag.setAttribute('src', 'data/gallery/' + resultArray[i].getAttribute('filename') + '.jpg')
				outputLocation.appendChild(nextTag)
			}
		}
	}
	xhr.send() // here the request is actually made
// }
// window.onload = init // NB no braces, we are just setting the event listener