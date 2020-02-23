const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const divide = (a, b) => a / b;

const multiply = (a, b) => a * b;


const describe = (desc, fn) => {
    console.log(desc);
    fn()
}

const it = (msg, fn) => describe(' ' + msg, fn);

const matchers = (exp) => ({
    toBe: (assertion) => {
        if (exp === assertion) {
            console.log('pass')
            return true
        } else {
            console.log('fail')
            return false
        }
    }
});

const expect = (exp) => matchers(exp);

/** Passed test cases */

describe('adder', () => {
    it('adds two numbers', () => {
        const result = add(1, 2);
        expect(result).toBe(3)
    })
});

describe('subtract', () => {
    it('subtract two numbers', () => {
        const result = subtract(2, 1);
        expect(result).toBe(1)
    })
});

describe('multiply', () => {
    it('multiply two numbers', () => {
        const result = multiply(2, 1);
        expect(result).toBe(2)
    })
});

describe('divide', () => {
    it('divide two numbers', () => {
        const result = divide(6, 3);
        expect(result).toBe(2)
    })
})


/** Failed test cases */
describe('adder', () => {
    it('adds two numbers', () => {
        const result = add(1, 2);
        expect(result).toBe(1)
    })
});

describe('subtract', () => {
    it('subtract two numbers', () => {
        const result = subtract(2, 1);
        expect(result).toBe(0)
    })
});

describe('multiply', () => {
    it('multiply two numbers', () => {
        const result = multiply(2, 1);
        expect(result).toBe(1)
    })
});

describe('divide', () => {
    it('divide two numbers', () => {
        const result = divide(6, 3);
        expect(result).toBe(3)
    })
})