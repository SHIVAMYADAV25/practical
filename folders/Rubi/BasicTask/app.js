// Even or Odd

import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (input) => {

    const n = Number(input);

    if (n % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }

    rl.close();
});

//ositive, Negative or Zero
rl.question("Enter a number: ", (input) => {

    const n = Number(input);

    if (n > 0) {
        console.log("Positive");
    } else if (n < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }

    rl.close();
});

//Largest of Two Numbers
rl.question("Enter first number: ", (a) => {

    rl.question("Enter second number: ", (b) => {

        a = Number(a);
        b = Number(b);

        if (a > b) {
            console.log(a, "is largest");
        } else if (b > a) {
            console.log(b, "is largest");
        } else {
            console.log("Both are equal");
        }

        rl.close();

    });

});

// Largest of Three Numbers
rl.question("Enter three numbers separated by space: ", (input) => {

    const [a, b, c] = input.split(" ").map(Number);

    if (a >= b && a >= c) {
        console.log(a, "is largest");
    } else if (b >= a && b >= c) {
        console.log(b, "is largest");
    } else {
        console.log(c, "is largest");
    }

    rl.close();
});

// Factorial

rl.question("Enter a number: ", (input) => {

    const n = Number(input);

    let factorial = 1;

    for (let i = 1; i <= n; i++) {
        factorial = factorial * i;
    }

    console.log("Factorial =", factorial);

    rl.close();
});

// Prime Number

rl.question("Enter a number: ", (input) => {

    const n = Number(input);

    let isPrime = true;

    if (n <= 1) {
        isPrime = false;
    }

    for (let i = 2; i < n; i++) {

        if (n % i === 0) {
            isPrime = false;
            break;
        }

    }

    if (isPrime) {
        console.log("Prime number");
    } else {
        console.log("Not a prime number");
    }

    rl.close();
});

//Print Prime Numbers from 1 to N

rl.question("Enter N: ", (input) => {

    const n = Number(input);

    for (let num = 2; num <= n; num++) {

        let prime = true;

        for (let i = 2; i < num; i++) {

            if (num % i === 0) {
                prime = false;
                break;
            }

        }

        if (prime) {
            console.log(num);
        }
    }

    rl.close();
});

// Palindrome Number
rl.question("Enter a number: ", (input) => {

    const n = Number(input);

    let temp = n;
    let reverse = 0;

    while (temp > 0) {

        const digit = temp % 10;

        reverse = reverse * 10 + digit;

        temp = Math.floor(temp / 10);
    }

    if (n === reverse) {
        console.log("Palindrome");
    } else {
        console.log("Not Palindrome");
    }

    rl.close();
});

// Armstrong Number
rl.question("Enter a number: ", (input) => {

    const n = Number(input);

    let temp = n;
    let sum = 0;

    while (temp > 0) {

        const digit = temp % 10;

        sum = sum + digit ** 3;

        temp = Math.floor(temp / 10);
    }

    if (sum === n) {
        console.log("Armstrong number");
    } else {
        console.log("Not an Armstrong number");
    }

    rl.close();
});

//Sum of Digits
rl.question("Enter a number: ", (input) => {

    let n = Number(input);

    let sum = 0;

    while (n > 0) {

        let digit = n % 10;

        sum += digit;

        n = Math.floor(n / 10);
    }

    console.log("Sum =", sum);

    rl.close();
});

//Reverse a Number
rl.question("Enter a number: ", (input) => {

    let n = Number(input);

    let reverse = 0;

    while (n > 0) {

        let digit = n % 10;

        reverse = reverse * 10 + digit;

        n = Math.floor(n / 10);
    }

    console.log("Reverse =", reverse);

    rl.close();
});

//Count Digits
rl.question("Enter a number: ", (input) => {

    let n = Number(input);

    let count = 0;

    while (n > 0) {

        n = Math.floor(n / 10);

        count++;
    }

    console.log("Number of digits =", count);

    rl.close();
});

//Fibonacci Series
rl.question("Enter number of terms: ", (input) => {

    const n = Number(input);

    let a = 0;
    let b = 1;

    for (let i = 1; i <= n; i++) {

        console.log(a);

        let next = a + b;

        a = b;
        b = next;
    }

    rl.close();
});

// Multiplication Table
rl.question("Enter a number: ", (input) => {

    const n = Number(input);

    for (let i = 1; i <= 10; i++) {

        console.log(`${n} × ${i} = ${n * i}`);

    }

    rl.close();
});

//Sum of First N Natural Numbers
rl.question("Enter N: ", (input) => {

    const n = Number(input);

    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    console.log("Sum =", sum);

    rl.close();
});

//GCD / HCF
rl.question("Enter two numbers: ", (input) => {

    let [a, b] = input.split(" ").map(Number);

    while (b !== 0) {

        let temp = b;

        b = a % b;

        a = temp;
    }

    console.log("GCD =", a);

    rl.close();
});

//LCM
rl.question("Enter two numbers: ", (input) => {

    const [a, b] = input.split(" ").map(Number);

    let x = a;
    let y = b;

    while (y !== 0) {

        let temp = y;
        y = x % y;
        x = temp;

    }

    const gcd = x;

    const lcm = Math.abs(a * b) / gcd;

    console.log("LCM =", lcm);

    rl.close();
});

//Swap Two Numbers
rl.question("Enter two numbers: ", (input) => {

    let [a, b] = input.split(" ").map(Number);

    [a, b] = [b, a];

    console.log("a =", a);
    console.log("b =", b);

    rl.close();
});

//Check Leap Year
rl.question("Enter year: ", (input) => {

    const year = Number(input);

    if (
        (year % 400 === 0) ||
        (year % 4 === 0 && year % 100 !== 0)
    ) {
        console.log("Leap year");
    } else {
        console.log("Not a leap year");
    }

    rl.close();
});

//Count Vowels

rl.question("Enter a string: ", (input) => {

    let count = 0;

    for (let char of input.toLowerCase()) {

        if ("aeiou".includes(char)) {
            count++;
        }

    }

    console.log("Vowels =", count);

    rl.close();
});

// Reverse a String
rl.question("Enter a string: ", (input) => {

    let reverse = "";

    for (let i = input.length - 1; i >= 0; i--) {

        reverse += input[i];

    }

    console.log("Reverse =", reverse);

    rl.close();
});

//String Palindrome

rl.question("Enter a string: ", (input) => {

    const reverse = input
        .split("")
        .reverse()
        .join("");

    if (input === reverse) {
        console.log("Palindrome");
    } else {
        console.log("Not Palindrome");
    }

    rl.close();
});

// find Largest Element in Array
rl.question("Enter numbers: ", (input) => {

    const arr = input.split(" ").map(Number);

    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] > largest) {
            largest = arr[i];
        }

    }

    console.log("Largest =", largest);

    rl.close();
});

// Find Smallest Element
rl.question("Enter numbers: ", (input) => {

    const arr = input.split(" ").map(Number);

    let smallest = arr[0];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] < smallest) {
            smallest = arr[i];
        }

    }

    console.log("Smallest =", smallest);

    rl.close();
});

// Sum of Array

rl.question("Enter numbers: ", (input) => {

    const arr = input.split(" ").map(Number);

    let sum = 0;

    for (let num of arr) {
        sum += num;
    }

    console.log("Sum =", sum);

    rl.close();
});

//Sort Array
rl.question("Enter numbers: ", (input) => {

    const arr = input.split(" ").map(Number);

    arr.sort((a, b) => a - b);

    console.log(arr);

    rl.close();
});

//Remove Duplicates
rl.question("Enter numbers: ", (input) => {

    const arr = input.split(" ").map(Number);

    const unique = [...new Set(arr)];

    console.log(unique);

    rl.close();
});