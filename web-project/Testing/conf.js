//this is conf.js

exports.config = {
//{} means an object
//name, colon, value

    seleniumAddress: 'http://localhost:4444/wd/hub/',
    //provide and array of test suites to spec tests
    specs:['test1.js', 'test2.js']


}