let assert = require("assert");
let greet = require("../greet");

describe('The greet function', function(){

    it('should greet Rotenda correctly', function(){
        assert.equal('Hello, Rotenda', greet('Rotenda'));
    });
    it('should greet Londani correctly', function(){
        
        assert.equal('Hello, Londani', greet('Londani'));
    });
});