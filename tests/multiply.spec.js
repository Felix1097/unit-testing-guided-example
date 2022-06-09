const { multiply } = require("./../calculator.js");

describe("Multiply", () => {
    test ("The value returned should be the result of the multiplication of both values.", () =>{
        const result = multiply(1,2);
        expect(result).toBe(2)
    });

    test(" The value returned should be a negative number.", () =>{
        const  result = multiply(-5, 10);
        expect(result).toBe(-50);
    });

    test("The value returned should be 0 (any number multiplied by 0 equals 0, It's up to you to decide what values the multiply function should be called with, and what values are expected as a result." , () =>{
        const result = multiply(1,0);
        const result1 = multiply(0,1);
        
        expect(result).toBe(0);
        expect(result1).toBe(0);
        })
});