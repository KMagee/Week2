// this is test1.js
describe('end to end testing', ()=>{
    beforeEach( ()=>{
        browser.get('https://juliemr.github.io/protractor-demo')
    } )

    it('should have a title', ()=>{
        expect( browser.getTitle() )
                            .toEqual( 'Super Calculator' )
    } )
})






