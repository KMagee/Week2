console.log('page loaded ok')


// attach an event listener to the 'agree' button


handleClick = () => { //same as declaring "Function". Unlike a function, this must be declared before you use it. Lambda or Fat Arrow

    console.log(event.target.id)
    alert('Thank you for agreeing!')


    event.target.removeEventListener('click', handleClick)

    event.target.setAttribute('style', 'display: none;')

    
    
    
}

//window.onload = function(){
    

   // btnAgree.removeEventListener('click', handleClick)
 btnAgree.addEventListener('click', handleClick)
    // (which event =click, what action will we take handleClick=function)

    //}



    //handle the form
handleForm = ()=>{
    event.preventDefault()

    let fullName = `${fname.value} ${lname.value}`
    username.innerHTML = fullName
}

btnGo.addEventListener('click', handleForm)