// Print odds 1-20
// Using a loop write code that will console.log all of the odd values from 1 up to 20.

for(var num = 1 ; num <= 20; num++){
    if(num % 2 !== 0){
        console.log(num);
    }
}


// Decreasing Multiples of 3
// Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.
for(var num = 100; num >=0; num--){
    if(num % 3 === 0){
        console.log(num)
    }
}

// Print the sequence
// Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.
var start = 4; //<< enter your starting number here!
var index = 6; //<< how long would you like your sequence to be?
var sequenceArr = [];
for(var num = 0; num < index; num++){
    sequenceArr.push(start);
    start = start - 1.5;
}
console.log(sequenceArr )
// console.log(sequenceArr)
// Sigma
// Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.
var sum = 0;
for(var num = 1; num <= 100; num++){
    sum += num;
}
console.log(sum);
// Factorial
// Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.
var fracResult = 1;
for(var num = 1; num <= 12; num++){
    fracResult *= num;
}
console.log(fracResult);

