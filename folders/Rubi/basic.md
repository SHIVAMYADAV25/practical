Yes. If your sir said the practical will have **basic C# programs like factorial, swapping, Armstrong, palindrome, etc.**, then you don't need to make an ASP.NET website for those unless he specifically asks for a web application.

For the practical, the easiest setup in **Visual Studio** is a **C# Console App**. You can create one project and run each program separately.

# 1. Create C# Console Project in Visual Studio

Open **Visual Studio 2022/2026**.

### Step 1

Click:

**Create a new project**

### Step 2

Search:

```text
Console App
```

Select:

**Console App**

Make sure the language is:

```text
C#
```

Click **Next**.

### Step 3

Project name:

```text
BasicPrograms
```

Click **Next**.

### Step 4

Choose your installed .NET version.

For example:

```text
.NET 8.0
```

or whatever your Visual Studio provides.

Click **Create**.

---

# 2. Your First Program — Factorial

Open:

```text
Program.cs
```

Delete everything and write:

```csharp
Console.Write("Enter a number: ");
int n = Convert.ToInt32(Console.ReadLine());

int fact = 1;

for (int i = 1; i <= n; i++)
{
    fact = fact * i;
}

Console.WriteLine("Factorial = " + fact);
```

## Run

Press:

```text
Ctrl + F5
```

Output:

```text
Enter a number: 5
Factorial = 120
```

### Logic

For `5`:

```text
5 × 4 × 3 × 2 × 1 = 120
```

---

# 3. Swap Two Numbers

Replace `Program.cs` with:

```csharp
Console.Write("Enter first number: ");
int a = Convert.ToInt32(Console.ReadLine());

Console.Write("Enter second number: ");
int b = Convert.ToInt32(Console.ReadLine());

Console.WriteLine("Before swapping:");
Console.WriteLine("a = " + a);
Console.WriteLine("b = " + b);

int temp = a;
a = b;
b = temp;

Console.WriteLine("After swapping:");
Console.WriteLine("a = " + a);
Console.WriteLine("b = " + b);
```

Output:

```text
Enter first number: 10
Enter second number: 20

Before swapping:
a = 10
b = 20

After swapping:
a = 20
b = 10
```

### Important logic

```csharp
int temp = a;
a = b;
b = temp;
```

---

# 4. Swap Without Third Variable

```csharp
Console.Write("Enter first number: ");
int a = Convert.ToInt32(Console.ReadLine());

Console.Write("Enter second number: ");
int b = Convert.ToInt32(Console.ReadLine());

a = a + b;
b = a - b;
a = a - b;

Console.WriteLine("After swapping:");
Console.WriteLine("a = " + a);
Console.WriteLine("b = " + b);
```

---

# 5. Even or Odd

```csharp
Console.Write("Enter a number: ");
int n = Convert.ToInt32(Console.ReadLine());

if (n % 2 == 0)
{
    Console.WriteLine("Even number");
}
else
{
    Console.WriteLine("Odd number");
}
```

Example:

```text
Enter a number: 7
Odd number
```

### Main logic

```csharp
n % 2 == 0
```

`%` gives the remainder.

---

# 6. Positive, Negative or Zero

```csharp
Console.Write("Enter a number: ");
int n = Convert.ToInt32(Console.ReadLine());

if (n > 0)
{
    Console.WriteLine("Positive");
}
else if (n < 0)
{
    Console.WriteLine("Negative");
}
else
{
    Console.WriteLine("Zero");
}
```

---

# 7. Largest of Two Numbers

```csharp
Console.Write("Enter first number: ");
int a = Convert.ToInt32(Console.ReadLine());

Console.Write("Enter second number: ");
int b = Convert.ToInt32(Console.ReadLine());

if (a > b)
{
    Console.WriteLine("Largest = " + a);
}
else
{
    Console.WriteLine("Largest = " + b);
}
```

---

# 8. Largest of Three Numbers

```csharp
Console.Write("Enter first number: ");
int a = Convert.ToInt32(Console.ReadLine());

Console.Write("Enter second number: ");
int b = Convert.ToInt32(Console.ReadLine());

Console.Write("Enter third number: ");
int c = Convert.ToInt32(Console.ReadLine());

if (a >= b && a >= c)
{
    Console.WriteLine("Largest = " + a);
}
else if (b >= a && b >= c)
{
    Console.WriteLine("Largest = " + b);
}
else
{
    Console.WriteLine("Largest = " + c);
}
```

---

# 9. Factorial Using `while`

Sometimes they may ask you to use a particular loop.

```csharp
Console.Write("Enter a number: ");
int n = Convert.ToInt32(Console.ReadLine());

int fact = 1;
int i = 1;

while (i <= n)
{
    fact = fact * i;
    i++;
}

Console.WriteLine("Factorial = " + fact);
```

---

# 10. Prime Number

```csharp
Console.Write("Enter a number: ");
int n = Convert.ToInt32(Console.ReadLine());

bool prime = true;

if (n <= 1)
{
    prime = false;
}

for (int i = 2; i < n; i++)
{
    if (n % i == 0)
    {
        prime = false;
        break;
    }
}

if (prime)
{
    Console.WriteLine("Prime number");
}
else
{
    Console.WriteLine("Not a prime number");
}
```

Example:

```text
Enter a number: 7
Prime number
```

---

# 11. Reverse a Number

This is **very important**.

```csharp
Console.Write("Enter a number: ");
int n = Convert.ToInt32(Console.ReadLine());

int rev = 0;

while (n > 0)
{
    int digit = n % 10;

    rev = rev * 10 + digit;

    n = n / 10;
}

Console.WriteLine("Reverse = " + rev);
```

For:

```text
1234
```

Output:

```text
4321
```

### Remember this logic

```csharp
digit = n % 10;
rev = rev * 10 + digit;
n = n / 10;
```

This same logic is used in **palindrome, Armstrong, digit sum**, etc.

---

# 12. Palindrome Number

```csharp
Console.Write("Enter a number: ");
int n = Convert.ToInt32(Console.ReadLine());

int original = n;
int rev = 0;

while (n > 0)
{
    int digit = n % 10;

    rev = rev * 10 + digit;

    n = n / 10;
}

if (original == rev)
{
    Console.WriteLine("Palindrome");
}
else
{
    Console.WriteLine("Not Palindrome");
}
```

Example:

```text
Enter a number: 121
Palindrome
```

Because:

```text
121 = 121
```

---

# 13. Armstrong Number ⭐

This is one you should definitely prepare.

Example:

```text
153
```

Because:

```text
1³ + 5³ + 3³
= 1 + 125 + 27
= 153
```

Code:

```csharp
Console.Write("Enter a number: ");
int n = Convert.ToInt32(Console.ReadLine());

int original = n;
int sum = 0;

while (n > 0)
{
    int digit = n % 10;

    sum = sum + (digit * digit * digit);

    n = n / 10;
}

if (original == sum)
{
    Console.WriteLine("Armstrong number");
}
else
{
    Console.WriteLine("Not an Armstrong number");
}
```

Output:

```text
Enter a number: 153
Armstrong number
```

### Important

This version is for **3-digit Armstrong numbers**, which is usually what basic practical questions expect.

---

# 14. Sum of Digits

```csharp
Console.Write("Enter a number: ");
int n = Convert.ToInt32(Console.ReadLine());

int sum = 0;

while (n > 0)
{
    int digit = n % 10;

    sum = sum + digit;

    n = n / 10;
}

Console.WriteLine("Sum of digits = " + sum);
```

For:

```text
1234
```

Output:

```text
Sum of digits = 10
```

---

# 15. Count Number of Digits

```csharp
Console.Write("Enter a number: ");
int n = Convert.ToInt32(Console.ReadLine());

int count = 0;

while (n > 0)
{
    n = n / 10;
    count++;
}

Console.WriteLine("Number of digits = " + count);
```

Example:

```text
Enter a number: 12345
Number of digits = 5
```

---

# 16. Fibonacci Series ⭐

```csharp
Console.Write("Enter number of terms: ");
int n = Convert.ToInt32(Console.ReadLine());

int a = 0;
int b = 1;

Console.WriteLine("Fibonacci Series:");

for (int i = 1; i <= n; i++)
{
    Console.Write(a + " ");

    int c = a + b;

    a = b;
    b = c;
}
```

Input:

```text
7
```

Output:

```text
Fibonacci Series:
0 1 1 2 3 5 8
```

---

# 17. Multiplication Table

```csharp
Console.Write("Enter a number: ");
int n = Convert.ToInt32(Console.ReadLine());

for (int i = 1; i <= 10; i++)
{
    Console.WriteLine(n + " x " + i + " = " + (n * i));
}
```

Input:

```text
5
```

Output:

```text
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
...
5 x 10 = 50
```

---

# 18. Sum of First N Numbers

```csharp
Console.Write("Enter n: ");
int n = Convert.ToInt32(Console.ReadLine());

int sum = 0;

for (int i = 1; i <= n; i++)
{
    sum = sum + i;
}

Console.WriteLine("Sum = " + sum);
```

For `5`:

```text
1 + 2 + 3 + 4 + 5 = 15
```

---

# 19. Reverse a String

```csharp
Console.Write("Enter a string: ");
string str = Console.ReadLine();

string rev = "";

for (int i = str.Length - 1; i >= 0; i--)
{
    rev = rev + str[i];
}

Console.WriteLine("Reverse = " + rev);
```

Input:

```text
hello
```

Output:

```text
olleh
```

---

# 20. String Palindrome

```csharp
Console.Write("Enter a string: ");
string str = Console.ReadLine();

string rev = "";

for (int i = str.Length - 1; i >= 0; i--)
{
    rev = rev + str[i];
}

if (str == rev)
{
    Console.WriteLine("Palindrome");
}
else
{
    Console.WriteLine("Not Palindrome");
}
```

Input:

```text
madam
```

Output:

```text
Palindrome
```

---

# 21. Find Factorial Using Function

Your sir may ask **function/method** based questions.

```csharp
static int Factorial(int n)
{
    int fact = 1;

    for (int i = 1; i <= n; i++)
    {
        fact = fact * i;
    }

    return fact;
}

Console.Write("Enter a number: ");
int n = Convert.ToInt32(Console.ReadLine());

int result = Factorial(n);

Console.WriteLine("Factorial = " + result);
```

Remember:

```text
Input
 ↓
Method
 ↓
Processing
 ↓
Return
 ↓
Output
```

---

# 22. Check Leap Year

```csharp
Console.Write("Enter year: ");
int year = Convert.ToInt32(Console.ReadLine());

if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0))
{
    Console.WriteLine("Leap Year");
}
else
{
    Console.WriteLine("Not a Leap Year");
}
```

---

# 23. Simple Calculator

Very useful for understanding `switch`.

```csharp
Console.Write("Enter first number: ");
double a = Convert.ToDouble(Console.ReadLine());

Console.Write("Enter second number: ");
double b = Convert.ToDouble(Console.ReadLine());

Console.Write("Enter operator (+ - * /): ");
char op = Convert.ToChar(Console.ReadLine());

switch (op)
{
    case '+':
        Console.WriteLine("Result = " + (a + b));
        break;

    case '-':
        Console.WriteLine("Result = " + (a - b));
        break;

    case '*':
        Console.WriteLine("Result = " + (a * b));
        break;

    case '/':
        Console.WriteLine("Result = " + (a / b));
        break;

    default:
        Console.WriteLine("Invalid operator");
        break;
}
```

---

# 24. Check Vowel or Consonant

```csharp
Console.Write("Enter a character: ");
char ch = Convert.ToChar(Console.ReadLine());

if (ch == 'a' || ch == 'e' || ch == 'i' ||
    ch == 'o' || ch == 'u')
{
    Console.WriteLine("Vowel");
}
else
{
    Console.WriteLine("Consonant");
}
```

---

# 25. Print 1 to N

```csharp
Console.Write("Enter n: ");
int n = Convert.ToInt32(Console.ReadLine());

for (int i = 1; i <= n; i++)
{
    Console.WriteLine(i);
}
```

---

# 26. Print Even Numbers

```csharp
Console.Write("Enter n: ");
int n = Convert.ToInt32(Console.ReadLine());

for (int i = 1; i <= n; i++)
{
    if (i % 2 == 0)
    {
        Console.WriteLine(i);
    }
}
```

---

# 27. Print Odd Numbers

```csharp
Console.Write("Enter n: ");
int n = Convert.ToInt32(Console.ReadLine());

for (int i = 1; i <= n; i++)
{
    if (i % 2 != 0)
    {
        Console.WriteLine(i);
    }
}
```

---

# 28. Prime Numbers Between 1 and N

```csharp
Console.Write("Enter n: ");
int n = Convert.ToInt32(Console.ReadLine());

for (int num = 2; num <= n; num++)
{
    bool prime = true;

    for (int i = 2; i < num; i++)
    {
        if (num % i == 0)
        {
            prime = false;
            break;
        }
    }

    if (prime)
    {
        Console.Write(num + " ");
    }
}
```

---

# 29. Find Largest Element in Array

```csharp
Console.Write("Enter size of array: ");
int n = Convert.ToInt32(Console.ReadLine());

int[] arr = new int[n];

for (int i = 0; i < n; i++)
{
    Console.Write("Enter element: ");
    arr[i] = Convert.ToInt32(Console.ReadLine());
}

int largest = arr[0];

for (int i = 1; i < n; i++)
{
    if (arr[i] > largest)
    {
        largest = arr[i];
    }
}

Console.WriteLine("Largest = " + largest);
```

---

# 30. Sum of Array Elements

```csharp
Console.Write("Enter size: ");
int n = Convert.ToInt32(Console.ReadLine());

int[] arr = new int[n];

int sum = 0;

for (int i = 0; i < n; i++)
{
    Console.Write("Enter element: ");
    arr[i] = Convert.ToInt32(Console.ReadLine());

    sum = sum + arr[i];
}

Console.WriteLine("Sum = " + sum);
```

---

# ⭐ What You Should Prepare First

Since your sir specifically said **basic questions**, I would memorize these in this order:

### Must know

```text
1. Factorial
2. Swap two numbers
3. Even / Odd
4. Positive / Negative
5. Largest of 2
6. Largest of 3
7. Prime number
8. Reverse number
9. Palindrome
10. Armstrong
11. Sum of digits
12. Count digits
13. Fibonacci
14. Multiplication table
15. Sum of first N numbers
16. Calculator using switch
17. String reverse
18. String palindrome
19. Array sum
20. Array largest
```

### The most important pattern to understand

A huge number of these questions use this:

```csharp
while (n > 0)
{
    int digit = n % 10;

    // do something with digit

    n = n / 10;
}
```

For example:

**Reverse:**

```csharp
rev = rev * 10 + digit;
```

**Sum of digits:**

```csharp
sum = sum + digit;
```

**Armstrong:**

```csharp
sum = sum + digit * digit * digit;
```

So if you understand **`% 10` and `/ 10`**, you can solve many of the basic practical questions.

### One more important thing for your exam

If your sir says **"write a C# program"**, use the Console App procedure above.

If he says **"create a web application"**, then you need to use the appropriate ASP.NET project (Web Forms/MVC/Razor Pages) and put the logic into that application.

For your **basic factorial / Armstrong / palindrome / swap type questions**, the **Console App is the simplest and fastest way to practice and run them in Visual Studio**.