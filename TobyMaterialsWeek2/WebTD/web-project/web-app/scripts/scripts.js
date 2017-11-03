// this is scripts.js
console.log('the page loaded ok')

// attach an event listener to the 'agree' button
handleClick = ()=>{ // same as function handleClick(){}
    console.log(event.target.id)
    alert('thank you for agreeing')
    // remove the event listener
    event.target.removeEventListener('click', handleClick)
    // remove the button!!
    event.target.setAttribute('style', 'display:none;')


}


// if we put the code at the bottom of the page
// then we do not need to use window.onload
btnAgree.addEventListener('click', handleClick)
// could also use document.getElementById('btnAgree')


// Manipulate the DOM

let products = [{name:'Pots', price:3.99},{name:'Dots', price:4.99},{name:'Spots', price:'1.99'}]

let numItems = products.length

for (let i=0; i<numItems; i++){
    let myProd = document.createElement('p')
        myProd.innerHTML = `${products[i].name} &euro;${products[i].price}`
    main.appendChild(myProd)
}

// handle the form
handleForm = ()=>{
    event.preventDefault()
    let fullName = `${fname.value} ${lname.value}`
    username.innerHTML = fullName
}

btnGo.addEventListener('click', handleForm) // or myForm 'submit'

