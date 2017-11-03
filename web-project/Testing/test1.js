// JASMINE
//Assemble, Act, and Assert

//modern way of writing function =>
describe('end to end testing',()=>{

    
    //before each test - run this page
    beforeEach( () =>{
        browser.get('https://juliemr.github.io/protractor-demo/')

    })


    it('should have a title', () => {
        expect(browser.getTitle() )
                        .toEqual('Super Calculator') 

    })

})
