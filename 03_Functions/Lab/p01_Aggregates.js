function aggregate(input) {
    let sum = input.reduce((a, b) => a + b);
    console.log('Sum = ' + sum);

    let min = input.reduce((a, b) => Math.min(a, b));
    console.log('Min = ' + min);

    let max = input.reduce((a, b) => Math.max(a, b));
    console.log('Max = ' + max);

    let product = input.reduce((a, b) => a * b);
    console.log('Product = ' + product);

    let join = input.reduce((a, b) => + a + b);
    console.log('Join = ' + join);
}