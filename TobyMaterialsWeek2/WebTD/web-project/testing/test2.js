// this is test2.js
describe( 'end to end test of calulator', ()=>{
    beforeEach( ()=>{
        browser.get('https://juliemr.github.io/protractor-demo')
    } )

    it('should add 1+2 to make 3', ()=>{
        element( by.model('first') ).sendKeys(1)
        element( by.model('second') ).sendKeys(2)
        element( by.id('gobutton') ).click()

        expect( element( by.binding('latest') )
                        .getText() ).toEqual('3')
    } )                                                                    
} )