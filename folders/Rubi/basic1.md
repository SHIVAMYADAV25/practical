Ahh, got you 😄 — you **don't want viva questions**. You want **more basic C# coding questions** that your sir can give in the practical, like:

> "Write a program to calculate area of rectangle using `l × b`."

Since you're preparing in Visual Studio Console App, here is a **large practice list**, from very easy → medium → common practical questions.

# 🔥 C# Basic Coding Questions to Practice

## Level 1 — Very Basic Formula Programs

These are the easiest and very likely if your sir wants basic logic.

### 1. Area of Rectangle

**Formula:**

```text
Area = length × breadth
```

```csharp
Console.Write("Enter length: ");
double l = Convert.ToDouble(Console.ReadLine());

Console.Write("Enter breadth: ");
double b = Convert.ToDouble(Console.ReadLine());

double area = l * b;

Console.WriteLine("Area = " + area);
```

---

### 2. Perimeter of Rectangle

**Formula:**

```text
Perimeter = 2 × (length + breadth)
```

```csharp
Console.Write("Enter length: ");
double l = Convert.ToDouble(Console.ReadLine());

Console.Write("Enter breadth: ");
double b = Convert.ToDouble(Console.ReadLine());

double perimeter = 2 * (l + b);

Console.WriteLine("Perimeter = " + perimeter);
```

---

### 3. Area of Square

**Formula:**

```text
Area = side × side
```

```csharp
Console.Write("Enter side: ");
double side = Convert.ToDouble(Console.ReadLine());

double area = side * side;

Console.WriteLine("Area = " + area);
```

---

### 4. Perimeter of Square

**Formula:**

```text
Perimeter = 4 × side
```

```csharp
Console.Write("Enter side: ");
double side = Convert.ToDouble(Console.ReadLine());

double perimeter = 4 * side;

Console.WriteLine("Perimeter = " + perimeter);
```

---

### 5. Area of Triangle

**Formula:**

```text
Area = 1/2 × base × height
```

In C#, be careful with integer division. Use `0.5`:

```csharp
Console.Write("Enter base: ");
double b = Convert.ToDouble(Console.ReadLine());

Console.Write("Enter height: ");
double h = Convert.ToDouble(Console.ReadLine());

double area = 0.5 * b * h;

Console.WriteLine("Area = " + area);
```

---

### 6. Area of Circle

**Formula:**

```text
Area = π × r × r
```

```csharp
Console.Write("Enter radius: ");
double r = Convert.ToDouble(Console.ReadLine());

double area = Math.PI * r * r;

Console.WriteLine("Area = " + area);
```

---

### 7. Circumference of Circle

**Formula:**

```text
Circumference = 2 × π × r
```

```csharp
Console.Write("Enter radius: ");
double r = Convert.ToDouble(Console.ReadLine());

double circumference = 2 * Math.PI * r;

Console.WriteLine("Circumference = " + circumference);
```

---

# Level 2 — Simple Mathematical Programs

### 8. Simple Interest

**Formula:**

```text
SI = (P × R × T) / 100
```

```csharp
Console.Write("Enter Principal: ");
double p = Convert.ToDouble(Console.ReadLine());

Console.Write("Enter Rate: ");
double r = Convert.ToDouble(Console.ReadLine());

Console.Write("Enter Time: ");
double t = Convert.ToDouble(Console.ReadLine());

double si = (p * r * t) / 100;

Console.WriteLine("Simple Interest = " + si);
```

---

### 9. Total Amount

```text
Amount = Principal + Simple Interest
```

```csharp
double amount = p + si;

Console.WriteLine("Total Amount = " + amount);
```

---

### 10. Compound Interest

**Formula:**

```text
A = P(1 + R/100)^T

CI = A - P
```

```csharp
Console.Write("Enter Principal: ");
double p = Convert.ToDouble(Console.ReadLine());

Console.Write("Enter Rate: ");
double r = Convert.ToDouble(Console.ReadLine());

Console.Write("Enter Time: ");
double t = Convert.ToDouble(Console.ReadLine());

double amount = p * Math.Pow((1 + r / 100), t);

double ci = amount - p;

Console.WriteLine("Compound Interest = " + ci);
```

---

### 11. Average of Three Numbers

```text
Average = (a + b + c) / 3
```

```csharp
Console.Write("Enter a: ");
double a = Convert.ToDouble(Console.ReadLine());

Console.Write("Enter b: ");
double b = Convert.ToDouble(Console.ReadLine());

Console.Write("Enter c: ");
double c = Convert.ToDouble(Console.ReadLine());

double avg = (a + b + c) / 3;

Console.WriteLine("Average = " + avg);
```

---

### 12. Sum and Product of Two Numbers

```csharp
Console.Write("Enter a: ");
int a = Convert.ToInt32(Console.ReadLine());

Console.Write("Enter b: ");
int b = Convert.ToInt32(Console.ReadLine());

Console.WriteLine("Sum = " + (a + b));
Console.WriteLine("Product = " + (a * b));
```

---

# Level 3 — Conversion Programs

### 13. Celsius to Fahrenheit

**Formula:**

```text
F = (C × 9/5) + 32
```

```csharp
Console.Write("Enter Celsius: ");
double c = Convert.ToDouble(Console.ReadLine());

double f = (c * 9 / 5) + 32;

Console.WriteLine("Fahrenheit = " + f);
```

---

### 14. Fahrenheit to Celsius

```text
C = (F - 32) × 5/9
```

```csharp
Console.Write("Enter Fahrenheit: ");
double f = Convert.ToDouble(Console.ReadLine());

double c = (f - 32) * 5 / 9;

Console.WriteLine("Celsius = " + c);
```

---

### 15. Kilometers to Meters

```text
1 km = 1000 m
```

```csharp
Console.Write("Enter kilometers: ");
double km = Convert.ToDouble(Console.ReadLine());

double meters = km * 1000;

Console.WriteLine("Meters = " + meters);
```

---

### 16. Meters to Kilometers

```csharp
Console.Write("Enter meters: ");
double meters = Convert.ToDouble(Console.ReadLine());

double km = meters / 1000;

Console.WriteLine("Kilometers = " + km);
```

---

### 17. Hours to Minutes

```text
1 hour = 60 minutes
```

```csharp
Console.Write("Enter hours: ");
double hours = Convert.ToDouble(Console.ReadLine());

double minutes = hours * 60;

Console.WriteLine("Minutes = " + minutes);
```

---

### 18. Minutes to Seconds

```text
1 minute = 60 seconds
```

```csharp
Console.Write("Enter minutes: ");
double minutes = Convert.ToDouble(Console.ReadLine());

double seconds = minutes * 60;

Console.WriteLine("Seconds = " + seconds);
```

---

# Level 4 — Basic Conditional Programs

### 19. Check Even or Odd

```text
n % 2 == 0 → Even
```

---

### 20. Check Positive/Negative/Zero

```text
n > 0  → Positive
n < 0  → Negative
n == 0 → Zero
```

---

### 21. Find Largest of Two Numbers

```csharp
if (a > b)
    Console.WriteLine(a);
else
    Console.WriteLine(b);
```

---

### 22. Find Smallest of Two Numbers

```csharp
if (a < b)
    Console.WriteLine(a);
else
    Console.WriteLine(b);
```

---

### 23. Find Largest of Three Numbers

Use:

```csharp
if
else if
else
```

---

### 24. Check Voting Eligibility

```text
Age >= 18 → Eligible
Age < 18 → Not eligible
```

```csharp
Console.Write("Enter age: ");
int age = Convert.ToInt32(Console.ReadLine());

if (age >= 18)
{
    Console.WriteLine("Eligible for voting");
}
else
{
    Console.WriteLine("Not eligible");
}
```

---

### 25. Check Pass or Fail

For example, if passing marks are 40:

```csharp
Console.Write("Enter marks: ");
int marks = Convert.ToInt32(Console.ReadLine());

if (marks >= 40)
{
    Console.WriteLine("Pass");
}
else
{
    Console.WriteLine("Fail");
}
```

---

### 26. Grade Calculation

Example:

```text
90+ → A
80+ → B
70+ → C
60+ → D
Below 60 → F
```

```csharp
Console.Write("Enter marks: ");
int marks = Convert.ToInt32(Console.ReadLine());

if (marks >= 90)
    Console.WriteLine("Grade A");
else if (marks >= 80)
    Console.WriteLine("Grade B");
else if (marks >= 70)
    Console.WriteLine("Grade C");
else if (marks >= 60)
    Console.WriteLine("Grade D");
else
    Console.WriteLine("Grade F");
```

---

# Level 5 — Switch Programs

### 27. Calculator

```text
+ → Addition
- → Subtraction
* → Multiplication
/ → Division
```

Use:

```csharp
switch (op)
```

---

### 28. Day Number → Day Name

```text
1 → Monday
2 → Tuesday
...
7 → Sunday
```

Use `switch`.

---

### 29. Month Number → Month Name

```text
1 → January
2 → February
...
12 → December
```

---

### 30. Menu-Based Calculator

Example:

```text
1. Addition
2. Subtraction
3. Multiplication
4. Division
```

User selects an option.

This is a **very useful practical question** because it tests `switch`.

---

# Level 6 — Loop Programs

### 31. Print 1 to N

```text
Input: 5

1
2
3
4
5
```

---

### 32. Print N to 1

```text
Input: 5

5
4
3
2
1
```

---

### 33. Print Even Numbers 1–N

```text
2 4 6 8 10
```

---

### 34. Print Odd Numbers 1–N

```text
1 3 5 7 9
```

---

### 35. Sum 1 to N

```text
1 + 2 + ... + N
```

---

### 36. Multiplication Table

```text
5 × 1 = 5
5 × 2 = 10
...
5 × 10 = 50
```

---

### 37. Factorial

```text
5! = 120
```

---

### 38. Fibonacci Series

```text
0 1 1 2 3 5 8 ...
```

---

# Level 7 — Number Logic 🔥

These are **very important**.

### 39. Reverse a Number

```text
1234 → 4321
```

### 40. Palindrome Number

```text
121 → Palindrome
```

### 41. Armstrong Number

```text
153 → Armstrong
```

### 42. Prime Number

```text
7 → Prime
```

### 43. Sum of Digits

```text
1234 → 10
```

### 44. Count Digits

```text
12345 → 5
```

### 45. Product of Digits

```text
123 → 1 × 2 × 3 = 6
```

Code logic:

```csharp
int product = 1;

while (n > 0)
{
    int digit = n % 10;
    product = product * digit;
    n = n / 10;
}
```

### 46. First Digit of Number

Example:

```text
12345 → 1
```

### 47. Last Digit of Number

```text
12345 → 5
```

Logic:

```csharp
int last = n % 10;
```

---

# Level 8 — Special Number Programs

### 48. Perfect Number

A number is perfect if the sum of its proper divisors equals the number.

Example:

```text
6

1 + 2 + 3 = 6
```

---

### 49. Strong Number

A number is strong if the sum of factorials of its digits equals the number.

Example:

```text
145

1! + 4! + 5!
= 1 + 24 + 120
= 145
```

---

### 50. Automorphic Number

A number whose square ends with the number itself.

Example:

```text
25² = 625

625 ends with 25
```

---

### 51. Neon Number

A number whose square's digits sum to the original number.

Example:

```text
9² = 81

8 + 1 = 9
```

---

### 52. Harshad Number

A number divisible by the sum of its digits.

Example:

```text
18

1 + 8 = 9

18 % 9 = 0
```

---

# Level 9 — Mathematical Logic

### 53. Find power of a number

```text
2³ = 8
```

Using:

```csharp
Math.Pow(2, 3)
```

---

### 54. Find square of number

```text
n × n
```

---

### 55. Find cube

```text
n × n × n
```

---

### 56. Find square root

```csharp
Math.Sqrt(n)
```

---

### 57. Find absolute value

```csharp
Math.Abs(n)
```

---

### 58. Find maximum

```csharp
Math.Max(a, b)
```

---

### 59. Find minimum

```csharp
Math.Min(a, b)
```

---

# Level 10 — HCF / LCM 🔥

### 60. Find HCF/GCD

Example:

```text
12 and 18

HCF = 6
```

Simple approach:

```csharp
Console.Write("Enter first number: ");
int a = Convert.ToInt32(Console.ReadLine());

Console.Write("Enter second number: ");
int b = Convert.ToInt32(Console.ReadLine());

int hcf = 1;

for (int i = 1; i <= a && i <= b; i++)
{
    if (a % i == 0 && b % i == 0)
    {
        hcf = i;
    }
}

Console.WriteLine("HCF = " + hcf);
```

---

### 61. Find LCM

For two positive integers:

```text
LCM = (a × b) / HCF
```

```csharp
int lcm = (a * b) / hcf;

Console.WriteLine("LCM = " + lcm);
```

---

# Level 11 — Arrays 🔥

### 62. Input array elements

```text
Enter size
↓
Create array
↓
for loop
↓
take each element
```

---

### 63. Find largest element

```text
10 50 20 40

Largest = 50
```

---

### 64. Find smallest element

```text
10 50 20 40

Smallest = 10
```

---

### 65. Find sum of array

```text
10 + 20 + 30 = 60
```

---

### 66. Find average of array

```text
Average = Sum / Number of elements
```

---

### 67. Count even numbers in array

Example:

```text
1 2 3 4 5 6

Even = 3
```

---

### 68. Count odd numbers in array

Same logic using:

```csharp
arr[i] % 2 != 0
```

---

### 69. Search an element

Example:

```text
Array: 10 20 30 40

Search: 30

Found
```

---

### 70. Count occurrence of an element

Example:

```text
1 2 2 3 2

2 occurs 3 times
```

---

### 71. Reverse an array

```text
1 2 3 4 5

5 4 3 2 1
```

---

### 72. Sort an array

You can practice both:

```csharp
Array.Sort(arr);
```

and manual sorting.

---

# Level 12 — String Programs 🔥

### 73. Find string length

```csharp
Console.WriteLine(str.Length);
```

---

### 74. Convert string to uppercase

```csharp
str.ToUpper()
```

---

### 75. Convert string to lowercase

```csharp
str.ToLower()
```

---

### 76. Reverse a string

```text
hello → olleh
```

---

### 77. String palindrome

```text
madam → Palindrome
```

---

### 78. Count vowels

Example:

```text
hello

Vowels = 2
```

---

### 79. Count consonants

```text
hello

Consonants = 3
```

---

### 80. Count spaces

Example:

```text
Hello World

Spaces = 1
```

---

### 81. Count words

Example:

```text
Hello World C Sharp

Words = 4
```

---

### 82. Check whether two strings are equal

```csharp
if (str1 == str2)
```

---

### 83. Check whether a character is vowel

```csharp
if (ch == 'a' || ch == 'e' || ch == 'i' ||
    ch == 'o' || ch == 'u')
```

---

# Level 13 — Pattern Programs ⭐⭐⭐

These are common beginner practical questions.

### 84. Print:

```text
*
**
***
****
*****
```

Code:

```csharp
for (int i = 1; i <= 5; i++)
{
    for (int j = 1; j <= i; j++)
    {
        Console.Write("*");
    }

    Console.WriteLine();
}
```

---

### 85. Print:

```text
*****
****
***
**
*
```

---

### 86. Print:

```text
1
12
123
1234
12345
```

---

### 87. Print:

```text
1
22
333
4444
55555
```

---

### 88. Print:

```text
12345
1234
123
12
1
```

---

### 89. Print square:

```text
*****
*****
*****
*****
*****
```

---

# Level 14 — Date / Time

### 90. Display current date

```csharp
Console.WriteLine(DateTime.Now);
```

### 91. Display current date only

```csharp
Console.WriteLine(DateTime.Now.ToShortDateString());
```

### 92. Display current time

```csharp
Console.WriteLine(DateTime.Now.ToShortTimeString());
```

### 93. Find age from birth year

```text
Current Year - Birth Year
```

For a more accurate age, account for whether the birthday has occurred this year.

---

# Level 15 — Basic Functions

### 94. Create a function to add two numbers

```csharp
static int Add(int a, int b)
{
    return a + b;
}

Console.Write("Enter a: ");
int a = Convert.ToInt32(Console.ReadLine());

Console.Write("Enter b: ");
int b = Convert.ToInt32(Console.ReadLine());

Console.WriteLine("Sum = " + Add(a, b));
```

---

### 95. Function for factorial

```text
Factorial(n)
```

---

### 96. Function to check prime

```text
IsPrime(n)
```

---

### 97. Function to check palindrome

```text
IsPalindrome(n)
```

---

# 🔥 Most Important Practice Set

If your sir is giving **very basic coding questions**, I would practice these **40 first**:

```text
01. Area of rectangle
02. Perimeter of rectangle
03. Area of square
04. Area of triangle
05. Area of circle
06. Simple interest
07. Average
08. Celsius → Fahrenheit
09. Swap two numbers
10. Even / Odd

11. Positive / Negative
12. Largest of 2
13. Largest of 3
14. Voting eligibility
15. Pass / Fail
16. Grade
17. Calculator
18. Day using switch
19. Month using switch
20. Print 1 to N

21. Sum 1 to N
22. Factorial
23. Fibonacci
24. Prime
25. Reverse number
26. Palindrome
27. Armstrong
28. Sum of digits
29. Count digits
30. Product of digits

31. HCF
32. LCM
33. Perfect number
34. Strong number
35. Array sum
36. Array largest
37. Array smallest
38. Array search
39. String reverse
40. String palindrome
```

And then practice:

```text
41. Vowel count
42. Consonant count
43. Word count
44. Array sorting
45. Array reverse
46. Even/odd array count
47. Duplicate count
48. Star patterns
49. Number patterns
50. Functions
```

This is much closer to what you meant: **actual programs/formula-based questions**, rather than viva theory. The basic set also matches the practical-style coding material you've been working through in Visual Studio. Pasted text