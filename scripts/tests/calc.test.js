const operate = require('../calc.js');

describe('Testing addition', () => {

    test('adds 1 + 2 to equal 3', () => {
        expect(operate(1, 2,'+')).toBe(3);
    });
    
    test('adds -5 + -9 to equal -14', () => {
        expect(operate(-5, -9,'+')).toBe(-14);
    });

    test('adds 0.04 + 0.17 to equal 0.21', () => {
        expect(operate(0.04, 0.17,'+')).toBe(0.21);
    });
    
});

describe('Testing divison', () => {

    test('divide by 0', () => {
        expect(operate(1, 0,'/')).toBe("Infinity");
    });  

    test('Negative', () => {
        expect(operate(-1, 7,'/')).toBe(-.14);
    });

    
});