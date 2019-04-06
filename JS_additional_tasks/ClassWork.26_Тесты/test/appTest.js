const expect = require('chai').expect;
const hi = require('../app').greet;// указываем путь к файлу где лежит наш главный JS либо таким образом можно затянуть не всю библиотеку а только один какой-то метод
const arrFn = require('../app').reduceFunc;
const findNumber = require('../app').findNumber;

describe('hello', function(){
    it('hello test', function(){
        const result = hi();
        expect(result).to.be.a('string');
        expect(result).equal('hello');
    })
});

describe('reduce', function(){
    it('empty arr', function() {
        const result = arrFn([]);
        expect(result).to.be.a('number');
        expect(result).equal(0);
    })

    it('single el', function(){
        const result = arrFn([15]);
        expect(result).to.be.a('number');
        expect(result).equal(15);
    })

    it('full ar', function(){
        const result = arrFn([1, 2, 3]);
        expect(result).to.be.a('number');
        expect(result).equal(6);
    })

    it('obj', function(){
        const result = arrFn({});
        expect(result).to.be.a('boolean');
        expect(result).equal(false);
    })

    it('number', function(){
        const result = arrFn(6);
        expect(result).to.be.a('boolean');
        expect(result).equal(false);
    })

    it('string', function(){
        const result = arrFn('test');
        expect(result).to.be.a('boolean');
        expect(result).equal(false);
    })
});

describe('closest number', function() {
    it('only positive number', function() {
        const result = findNumber(5, 3, 20);
        expect(result).to.be.a('number');
        expect(result).equal(3);
    })

    it('only negative number', function() {
        const result = findNumber(-2, -5, -25);
        expect(result).to.be.a('number');
        expect(result).equal(-2);
    })

    it('differnt number', function() {
        const result = findNumber(-5, -1, -10, 2, 5, 10);
        expect(result).to.be.a('number');
        expect(result).equal(-1);
    })

    it('simple number', function() {
        const result = findNumber(50, 20, -2, 2, -10);
        expect(result).to.be.a('number');
        expect(result).equal(2);
    })
})