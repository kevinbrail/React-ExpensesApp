const add = (a,b) => a+b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;


test('should add two numbers', () => {
    const result = add(1,2);
    expect(result).toBe(3)
    // if (result !== 3) {
    //     throw new Error (`You added 1 and 2. The result was ${result}. Expect 3`);
    // }
});

test('Checks generate greeting with name', () => {
    const result = generateGreeting('Kevin');
    expect(result).toBe('Hello Kevin!')
});

test('Checks generate greeting with no name', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous!')
});