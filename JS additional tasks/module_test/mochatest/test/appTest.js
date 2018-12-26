'use strict'

const expect = require('chai').expect;
const hello = require('../app')

describe('hello_function', function(){
    it('show hello', function(){
        const result = hello();
        expect(result).to.be.a('string');
        expect(result).equal('hello'); 
    })
});

