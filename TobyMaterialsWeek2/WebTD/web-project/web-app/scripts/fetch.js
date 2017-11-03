fetch('data/photos.json')
.then( // here we asynchronously handle a promise
	(response) => {
		if (response.status !== 200) {
			console.log(`There was a problem. Status Code: ${response.status}`)
			return
		}
		response.json().then((data) => {
			let result = data
			for (let i in result) { // or let i=0 i< result.length i++
				let nextImage = document.createElement('img')
				nextImage.setAttribute('src', `data/gallery/${result[i].filename}.jpg`)
				nextImage.setAttribute('alt', result[i].desc)
				nextImage.setAttribute('title', result[i].desc)
			//	output.appendChild(nextImage)
			}
		})
	}
)
.catch((err) => { // here we handle any error in the promise 
	console.log('Fetch Error :-S', err)
})
