function bmiCalculate(kg, height) {
    return kg / height / height;
}

function test() {
    const result = bmiCalculate(45, 1.5);
    const expected = 20;

    console.assert(
        result === expected,
        `The result ${result} doesn't match the expected value ${expected}.`
    )

}

test();