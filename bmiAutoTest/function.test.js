const myFunction = require("./bmi-AutoCalculator");

test("Checks if a person who is 45kg and 1.45m is 20 bmi", () => {
    expect(myFunction.bmi(45, 1.5)).toBe(20);
});