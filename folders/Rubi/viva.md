Yes. Based on the **full MCCSCT323 syllabus + all 10 practicals you've shared + the basic C# questions your sir mentioned**, I would prepare your viva in **layers**.

Your examiner can ask from:
1. Basic C# programming
2. C# OOP and language concepts
3. Collections/LINQ/exceptions
4. Async/file handling
5. ASP.NET Core concepts
6. Your practical implementations
7. Small code/output/logic questions

Below is a **practical-exam-focused viva bank**, not just theoretical questions.

---

# MCCSCT323 C#.NET & ASP.NET Core — Viva Preparation

## PART 1 — 🔥 VERY IMPORTANT BASIC C# QUESTIONS

These are the questions I would learn first because your sir already said **factorial, swap, Armstrong, etc.**

### 1. What is C#?

**Answer:**  
C# is a modern, object-oriented programming language developed by Microsoft. It is mainly used with the .NET platform to build desktop, web, cloud, and other applications.

---

### 2. What is .NET?

**Answer:**  
.NET is a software development platform from Microsoft used to build and run applications.

---

### 3. What is the difference between C# and .NET?

**Answer:**

- **C#** → Programming language
- **.NET** → Platform/framework used to develop and run applications.

---

### 4. What is a variable?

A variable is a named memory location used to store a value.

```csharp
int age = 20;
```

Here:

- `int` → data type
- `age` → variable
- `20` → value

---

### 5. What are common data types in C#?

```text
int
float
double
decimal
char
string
bool
```

Example:

```csharp
int age = 20;
string name = "Rahul";
bool result = true;
```

---

### 6. What is `Console.ReadLine()`?

It reads input from the user as a **string**.

```csharp
string name = Console.ReadLine();
```

---

### 7. Why do we use `Convert.ToInt32()`?

Because `Console.ReadLine()` returns a string.

```csharp
int n = Convert.ToInt32(Console.ReadLine());
```

This converts the entered string into an integer.

---

### 8. What is `%`?

`%` is the **modulus operator**. It returns the remainder.

```csharp
10 % 3
```

Result:

```text
1
```

---

### 9. Why is `% 10` commonly used in reverse/Armstrong programs?

Because it extracts the **last digit**.

```csharp
int digit = n % 10;
```

For:

```text
153 % 10
```

we get:

```text
3
```

---

### 10. Why do we use `/ 10`?

It removes the last digit for an integer.

```csharp
153 / 10
```

becomes:

```text
15
```

This is why:

```csharp
digit = n % 10;
n = n / 10;
```

is commonly used for digit-based problems.

---

# PART 2 — 🔥 BASIC LOGIC QUESTIONS

## 11. How do you find factorial?

```csharp
int fact = 1;

for (int i = 1; i <= n; i++)
{
    fact = fact * i;
}
```

---

## 12. What is factorial of 5?

```text
5 × 4 × 3 × 2 × 1 = 120
```

---

## 13. How do you swap two numbers?

Using a temporary variable:

```csharp
int temp = a;
a = b;
b = temp;
```

---

## 14. Can you swap without a third variable?

Yes.

```csharp
a = a + b;
b = a - b;
a = a - b;
```

---

## 15. What is an Armstrong number?

For the basic 3-digit case, a number is Armstrong if the sum of the cubes of its digits equals the original number.

Example:

```text
153

1³ + 5³ + 3³
= 1 + 125 + 27
= 153
```

---

## 16. What is a palindrome?

A value that remains the same when reversed.

Example:

```text
121 → 121
```

---

## 17. How do you check palindrome?

Store the original number, reverse the number, then compare:

```csharp
if (original == rev)
```

---

## 18. How do you reverse a number?

```csharp
int rev = 0;

while (n > 0)
{
    int digit = n % 10;
    rev = rev * 10 + digit;
    n = n / 10;
}
```

---

## 19. How do you check even/odd?

```csharp
if (n % 2 == 0)
```

If remainder is `0`, it is even.

---

## 20. How do you check prime?

A prime number has exactly two factors:

```text
1 and itself
```

Example:

```text
2, 3, 5, 7, 11
```

---

# PART 3 — LOOPS

### 21. What are loops in C#?

Loops repeatedly execute a block of code.

Main loops:

```text
for
while
do-while
```

---

### 22. Difference between `for` and `while`?

**for** is commonly used when the number of iterations is known.

```csharp
for (int i = 1; i <= 10; i++)
```

**while** is commonly used when the condition controls how long the loop runs.

```csharp
while (n > 0)
```

---

### 23. What does `i++` mean?

It increases `i` by 1.

```text
i = i + 1
```

---

### 24. What is `break`?

It immediately exits a loop or switch.

```csharp
break;
```

---

### 25. What is `continue`?

It skips the current iteration and moves to the next iteration.

---

# PART 4 — ARRAYS ⭐

Arrays are explicitly in **Unit I**, so prepare these.

### 26. What is an array?

An array stores multiple values of the same type.

```csharp
int[] numbers = { 10, 20, 30, 40 };
```

---

### 27. What is the index of the first element?

```text
0
```

So:

```csharp
numbers[0]
```

is `10`.

---

### 28. What is a multidimensional array?

An array having multiple dimensions.

Example:

```csharp
int[,] matrix = new int[2, 3];
```

---

### 29. What is a jagged array?

An array whose elements are themselves arrays, and each inner array can have a different size.

```csharp
int[][] arr = new int[2][];

arr[0] = new int[3];
arr[1] = new int[2];
```

---

### 30. Array vs List?

| Array | List |
|---|---|
| Fixed size | Dynamic size |
| Same type | Same type |
| `int[]` | `List<int>` |

---

# PART 5 — OOP ⭐⭐⭐

Your Unit I specifically contains OOP.

### 31. What is OOP?

Object-Oriented Programming is a programming approach based on objects and classes.

Main concepts:

```text
Encapsulation
Inheritance
Polymorphism
Abstraction
```

---

### 32. What is a class?

A class is a blueprint/template for creating objects.

```csharp
class Student
{
    public string Name;
}
```

---

### 33. What is an object?

An object is an instance of a class.

```csharp
Student s = new Student();
```

---

### 34. What is inheritance?

Inheritance allows one class to acquire members of another class.

```csharp
class Animal
{
    public void Eat()
    {
        Console.WriteLine("Eating");
    }
}

class Dog : Animal
{
}
```

---

### 35. What does `:` mean here?

```csharp
class Dog : Animal
```

It indicates inheritance.

---

### 36. What is an interface?

An interface defines a contract that a class can implement.

```csharp
interface IStudent
{
    void Display();
}
```

---

### 37. What is an abstract class?

A class that can contain abstract and non-abstract members and cannot normally be instantiated directly.

---

### 38. What is encapsulation?

Wrapping data and methods together and controlling access to the data.

---

### 39. What is polymorphism?

One interface/name can have multiple forms.

Common types:

```text
Compile-time → Method overloading
Runtime → Method overriding
```

---

### 40. What is a constructor?

A special method called when an object is created.

```csharp
class Student
{
    public Student()
    {
        Console.WriteLine("Constructor called");
    }
}
```

---

# PART 6 — CLASSES, STRUCTS, RECORDS, TUPLES

These are explicitly mentioned in Unit I.

### 41. Class vs Struct?

A **class** is a reference type.

A **struct** is a value type.

---

### 42. What is a record?

A record is a type designed particularly for storing data and supports value-based equality.

Example:

```csharp
public record Student(int Id, string Name);
```

---

### 43. What is a tuple?

A tuple allows multiple values to be grouped together.

```csharp
var student = (101, "Rahul");
```

---

### 44. What is deconstruction?

Extracting tuple/object values into separate variables.

```csharp
var student = (101, "Rahul");

var (id, name) = student;
```

---

# PART 7 — COLLECTIONS ⭐⭐

Unit II specifically includes Collections.

### 45. What is a collection?

A collection stores and manages multiple objects.

---

### 46. What is `List<T>`?

A generic dynamic collection.

```csharp
List<int> numbers = new List<int>();
```

---

### 47. What is a Stack?

Stack follows:

```text
LIFO
```

**Last In, First Out**

Example:

```csharp
Stack<int> stack = new Stack<int>();
```

---

### 48. What is a Queue?

Queue follows:

```text
FIFO
```

**First In, First Out**

---

### 49. What is Dictionary?

Dictionary stores data as:

```text
Key → Value
```

Example:

```csharp
Dictionary<int, string> students = new Dictionary<int, string>();

students.Add(101, "Rahul");
```

---

### 50. What does `<T>` mean?

It represents a generic type parameter.

Example:

```csharp
List<int>
List<string>
```

---

# PART 8 — DELEGATES, LAMBDA, EVENTS

These are in Unit II.

### 51. What is a delegate?

A delegate is a type-safe reference to a method.

---

### 52. What is a lambda expression?

A short way of writing an anonymous function.

```csharp
x => x * 2
```

---

### 53. What is an event?

An event provides a mechanism for notifying other objects when something happens.

---

# PART 9 — LINQ ⭐⭐

### 54. What is LINQ?

LINQ stands for:

**Language Integrated Query**

It is used to query data from collections and other data sources.

---

### 55. Example of LINQ?

```csharp
var result = numbers.Where(x => x > 10);
```

---

### 56. What does `Where()` do?

It filters data based on a condition.

---

### 57. What does `Select()` do?

It projects/transforms each element into another form.

Example:

```csharp
var result = numbers.Select(x => x * 2);
```

---

# PART 10 — EXCEPTION HANDLING ⭐⭐

### 58. What is an exception?

An exception is an error that occurs during program execution.

---

### 59. What is `try-catch`?

It is used to handle exceptions.

```csharp
try
{
    int x = 10 / 0;
}
catch (Exception ex)
{
    Console.WriteLine(ex.Message);
}
```

---

### 60. What is `finally`?

`finally` executes whether an exception occurs or not, subject to control-flow termination cases.

```csharp
try
{
}
catch
{
}
finally
{
}
```

---

### 61. Why should we handle exceptions?

To prevent the application from unexpectedly terminating and to handle errors gracefully.

---

# PART 11 — ASYNC / AWAIT ⭐⭐

Unit III specifically has asynchronous programming.

### 62. What is asynchronous programming?

It allows a program to perform operations without unnecessarily blocking the current execution flow while waiting for an operation to complete.

---

### 63. What is `async`?

It marks a method as asynchronous.

```csharp
async Task MyMethod()
{
}
```

---

### 64. What is `await`?

`await` asynchronously waits for a task to complete.

```csharp
await Task.Delay(1000);
```

---

### 65. What is a Task?

`Task` represents an asynchronous operation.

---

# PART 12 — FILE HANDLING ⭐⭐

Unit III specifically includes files and streams.

### 66. How do you write to a file?

```csharp
File.WriteAllText("test.txt", "Hello");
```

---

### 67. How do you read a file?

```csharp
string data = File.ReadAllText("test.txt");
```

---

### 68. What namespace is commonly used for file operations?

```csharp
using System.IO;
```

---

### 69. What is a stream?

A stream represents a sequence of bytes/data used for reading or writing.

---

# PART 13 — ASP.NET CORE ⭐⭐⭐

This is extremely important because **half of your practical syllabus is ASP.NET Core-related.**

### 70. What is ASP.NET Core?

ASP.NET Core is a cross-platform framework for building modern web applications and web services.

---

### 71. What is MVC?

MVC stands for:

```text
Model
View
Controller
```

---

### 72. What is Model?

Model represents application data and related logic.

---

### 73. What is View?

View is responsible for presenting the UI.

Usually:

```text
.cshtml
```

---

### 74. What is Controller?

Controller handles requests, performs application logic, and returns a response/view.

---

### 75. What is `IActionResult`?

It represents the result returned by a controller action.

Examples:

```csharp
return View();
return Ok();
return NotFound();
return Redirect();
```

---

# PART 14 — YOUR PRACTICAL 9: CONTROLLERS AND VIEWS ⭐⭐⭐

You should absolutely know these because it is directly in your practical list.

### 76. How does `StudentController` connect to the View?

If you have:

```text
StudentController
```

MVC looks in:

```text
Views/Student/
```

For:

```csharp
return View();
```

inside:

```csharp
Index()
```

it looks for:

```text
Views/Student/Index.cshtml
```

---

### 77. What is `ViewBag`?

`ViewBag` is used to pass data from Controller to View.

Example:

```csharp
ViewBag.Name = "Rahul";
```

View:

```cshtml
@ViewBag.Name
```

---

### 78. What does `return View()` do?

It returns the corresponding Razor view to the browser.

---

### 79. What is Razor?

Razor is the view syntax used in `.cshtml` files that allows C# code to be embedded into HTML.

Example:

```cshtml
<h1>@ViewBag.Name</h1>
```

---

# PART 15 — RAZOR PAGES ⭐⭐⭐

Your Practical 10 uses Razor Pages.

### 80. What is Razor Pages?

Razor Pages is a page-focused programming model in ASP.NET Core.

---

### 81. What is `PageModel`?

The PageModel contains the page's C# logic.

Example:

```csharp
public class IndexModel : PageModel
```

---

### 82. What is `OnGet()`?

It handles an HTTP GET request.

```csharp
public void OnGet()
{
}
```

---

### 83. What is `OnPost()`?

It handles an HTTP POST request.

```csharp
public void OnPost()
{
}
```

---

### 84. What is `[BindProperty]`?

It allows form data to be bound to a PageModel property.

```csharp
[BindProperty]
public Student Student { get; set; }
```

---

# PART 16 — TAG HELPERS ⭐⭐⭐

Very likely because your Practical 10 specifically asks for them.

### 85. What are Tag Helpers?

Tag Helpers allow server-side C# functionality to be applied to HTML elements in Razor views.

---

### 86. What is `asp-for`?

It binds an HTML element to a model property.

```html
<input asp-for="Student.Name" />
```

---

### 87. What is `asp-validation-for`?

It displays validation messages associated with a model property.

```html
<span asp-validation-for="Student.Name"></span>
```

---

### 88. What does this do?

```html
<form method="post">
```

It submits form data using HTTP POST.

---

### 89. What does `_ViewImports.cshtml` do?

It provides common imports and configuration for Razor files.

For example:

```text
@addTagHelper *, Microsoft.AspNetCore.Mvc.TagHelpers
```

enables the built-in ASP.NET Core Tag Helpers.

---

# PART 17 — CRUD ⭐⭐⭐

Practical 3 explicitly says CRUD.

### 90. What is CRUD?

```text
C → Create
R → Read
U → Update
D → Delete
```

---

### 91. What is Entity Framework Core?

EF Core is an ORM for working with databases using .NET objects.

---

### 92. What is ORM?

ORM means:

**Object-Relational Mapping**

It maps application objects to database data.

---

### 93. What is `DbContext`?

`DbContext` represents a session with the database and provides access to entities.

---

### 94. What is migration?

EF Core migrations are used to manage changes to the database schema based on model changes.

---

# PART 18 — SHOPPING CART ⭐⭐⭐

Practical 4.

### 95. What is a shopping cart?

It temporarily stores products selected by a user before checkout/order submission.

---

### 96. What is the purpose of a Cart model?

It represents the items currently in the cart and related information such as product and quantity.

---

### 97. Why use a Cart Service?

A service can centralize cart-related operations and separate cart logic from UI/controller code.

---

# PART 19 — SECURITY ⭐⭐⭐

Practical 5.

### 98. What is authentication?

Authentication answers:

> **Who are you?**

Example:

```text
Login using username/password
```

---

### 99. What is authorization?

Authorization answers:

> **What are you allowed to access?**

---

### 100. Authentication vs Authorization?

| Authentication | Authorization |
|---|---|
| Who are you? | What can you access? |
| Login | Permissions/roles |
| Identity | Access control |

---

### 101. What is `[Authorize]`?

It restricts access to authenticated users or users meeting specified authorization requirements.

Example:

```csharp
[Authorize]
public IActionResult Admin()
{
    return View();
}
```

---

### 102. What is a role?

A role groups users according to permissions.

Examples:

```text
Admin
User
```

---

# PART 20 — URL ROUTING ⭐⭐⭐

Practical 6.

### 103. What is routing?

Routing determines which endpoint/controller/action handles an incoming URL.

---

### 104. What is route parameter?

Example:

```text
/api/students/101
```

Here:

```text
101
```

can be the route parameter `id`.

```csharp
[HttpGet("{id}")]
public IActionResult GetStudent(int id)
```

---

### 105. What is this?

```csharp
[Route("api/students")]
```

It defines the route prefix for the controller.

---

### 106. What is `[HttpGet]`?

It indicates that an action handles HTTP GET requests.

---

### 107. What is `[HttpPost]`?

It indicates that an action handles HTTP POST requests.

---

# PART 21 — DEPENDENCY INJECTION ⭐⭐⭐

This is **very important** because Practical 6 specifically asks for it.

### 108. What is Dependency Injection?

Dependency Injection is a technique where required dependencies are provided to a class instead of the class creating them itself.

---

### 109. Why use Dependency Injection?

It reduces tight coupling and makes code easier to maintain and test.

---

### 110. What is constructor injection?

Dependency is supplied through the constructor.

Example:

```csharp
public StudentController(IStudentService studentService)
{
    _studentService = studentService;
}
```

---

### 111. What is `AddScoped()`?

```csharp
builder.Services.AddScoped<IStudentService, StudentService>();
```

It registers the service with **scoped lifetime**.

In a web application, a scoped service generally has one instance per request.

---

### 112. What are the common DI lifetimes?

```text
Transient
Scoped
Singleton
```

### Easy memory:

```text
Transient → new instance whenever requested
Scoped    → one instance per request
Singleton → one instance for application lifetime
```

---

# PART 22 — CACHING ⭐⭐⭐

Your Practical 7.

### 113. What is caching?

Caching temporarily stores data so it can be reused faster.

---

### 114. Why use caching?

To:

- improve performance
- reduce repeated processing
- reduce unnecessary database/API work

---

### 115. What is `Cache.Insert()` in Web Forms?

It inserts an item into the ASP.NET application cache.

```csharp
Cache.Insert("IMAX", Table1, null,
    DateTime.Now.AddSeconds(30),
    TimeSpan.Zero);
```

---

### 116. What is cache expiration?

It is the time after which a cached item is removed/considered expired.

In your practical:

```csharp
DateTime.Now.AddSeconds(30)
```

means approximately 30 seconds.

---

### 117. Session vs Cache?

**Session** → generally user-specific data.

**Cache** → reusable application-level cached data.

For your movie practical:

```text
Session → selected theatre
Cache   → theatre/movie table data
```

---

# PART 23 — REST API ⭐⭐⭐

Practical 8 + Unit V.

### 118. What is REST?

REST stands for:

**Representational State Transfer**

It is an architectural style commonly used for web APIs.

---

### 119. What is a RESTful Web Service?

A web service that follows REST principles and commonly uses HTTP methods to operate on resources.

---

### 120. What are common HTTP methods?

```text
GET     → Retrieve
POST    → Create
PUT     → Replace/update
PATCH   → Partial update
DELETE  → Delete
```

---

### 121. What is HTTP status code `200`?

**OK** — request succeeded.

---

### 122. What is `201`?

**Created** — resource was successfully created.

---

### 123. What is `400`?

**Bad Request** — request is invalid.

---

### 124. What is `401`?

**Unauthorized** — authentication is required or failed.

---

### 125. What is `403`?

**Forbidden** — the server understood the request but refuses access.

---

### 126. What is `404`?

**Not Found** — requested resource was not found.

---

### 127. What is `500`?

**Internal Server Error** — server encountered an unexpected error.

---

# PART 24 — YOUR `StudentController` PRACTICAL ⭐⭐⭐

If your sir asks:

> "Explain your URL routing and dependency injection practical."

You can answer:

> "I created an ASP.NET Core Web API application called RoutingDIExample. I created a StudentController with routes such as `/api/students`, `/api/students/{id}`, and `/api/students/{id}/details`. I created an `IStudentService` interface and `StudentService` implementation. I registered the service using `AddScoped` and injected it into the controller through constructor injection."

That's a **very good practical answer**.

---

# PART 25 — ASP.NET CORE PLATFORM FEATURES

Your Unit V specifically includes these.

### 128. What is configuration?

Configuration stores application settings such as connection strings and other settings.

Common file:

```text
appsettings.json
```

---

### 129. What is logging?

Logging records information about application execution, warnings, errors, etc.

---

### 130. What is middleware?

Middleware is software in the HTTP request/response pipeline that can inspect, modify, or handle requests and responses.

---

### 131. What is HTTPS?

HTTPS is HTTP secured using TLS encryption.

---

### 132. What are cookies?

Cookies are small pieces of data stored by the browser and sent with requests to the relevant site.

---

### 133. What is Session?

Session is used to maintain user-specific state across multiple requests.

---

# PART 26 — BLAZOR ⭐⭐

Unit IV explicitly mentions Blazor.

### 134. What is Blazor?

Blazor is a .NET web UI framework that allows developers to build interactive web UIs using C# and Razor.

---

### 135. What is an eCommerce application?

An application that allows users to browse products, add products to a cart, and place orders.

---

### 136. What features did your syllabus mention?

Remember:

```text
Products
Product list
Pagination
Navigation
Shopping Cart
Orders
Administration
Catalog Management
Identity
Authorization
Deployment
```

---

# PART 27 — QUESTIONS THEY CAN ASK BY SHOWING YOUR CODE

This is **very important for practical viva**.

Suppose you write:

```csharp
int n = Convert.ToInt32(Console.ReadLine());
```

Sir can ask:

> Why `Convert.ToInt32()`?

Answer:

> `Console.ReadLine()` returns a string, so I convert it into an integer.

---

If you write:

```csharp
n % 10
```

Sir:

> Why `% 10`?

Answer:

> It extracts the last digit of the number.

---

If you write:

```csharp
n = n / 10;
```

Sir:

> Why divide by 10?

Answer:

> It removes the last digit for an integer.

---

If you write:

```csharp
for (int i = 1; i <= n; i++)
```

Sir:

> Explain this loop.

Answer:

> `i` starts from 1, continues while `i <= n`, and increases by 1 after each iteration.

---

If you write:

```csharp
if (n % 2 == 0)
```

Sir:

> Why?

Answer:

> If a number divided by 2 has remainder zero, it is even.

---

# 🔥 30 QUESTIONS I WOULD DEFINITELY MEMORIZE

If you have **very little time**, learn these first:

| # | Question |
|---:|---|
| 1 | What is C#? |
| 2 | What is .NET? |
| 3 | C# vs .NET? |
| 4 | What is a variable? |
| 5 | What is `Console.ReadLine()`? |
| 6 | Why `Convert.ToInt32()`? |
| 7 | What is `%`? |
| 8 | Explain factorial |
| 9 | Explain swapping |
| 10 | Explain Armstrong |
| 11 | Explain palindrome |
| 12 | Explain reverse number |
| 13 | What is prime number? |
| 14 | What is array? |
| 15 | What is class? |
| 16 | What is object? |
| 17 | What is inheritance? |
| 18 | What is interface? |
| 19 | What is exception handling? |
| 20 | What is LINQ? |
| 21 | What is ASP.NET Core? |
| 22 | What is MVC? |
| 23 | What is Controller? |
| 24 | What is View? |
| 25 | What is Razor? |
| 26 | What is Razor Pages? |
| 27 | What is Tag Helper? |
| 28 | What is Dependency Injection? |
| 29 | What is routing? |
| 30 | What is caching? |

---

# 🔥 Questions Directly From Your 10 Practicals

You should also memorize this set:

### Practical 1–2
- What is a C# application?
- What is a test project?
- Why do we test applications?
- What is a unit test?

### Practical 3 — CRUD
- What is CRUD?
- What is EF Core?
- What is ORM?
- What is DbContext?
- What is migration?
- What is a model/entity?

### Practical 4 — Cart
- What is shopping cart?
- What is cart item?
- Why use a cart service?
- How do you add an item?
- How do you remove an item?

### Practical 5 — Security
- Authentication vs authorization?
- What is Identity?
- What is `[Authorize]`?
- What is a role?
- What is Admin/User authorization?

### Practical 6 — Routing + DI
- What is routing?
- What is `[Route]`?
- What is `[HttpGet]`?
- What is route parameter?
- What is DI?
- What is constructor injection?
- What is `AddScoped()`?
- What are Transient/Scoped/Singleton?

### Practical 7 — Caching
- What is caching?
- Why caching?
- What is `Cache.Insert()`?
- What is cache expiration?
- Session vs Cache?

### Practical 8 — REST
- What is REST?
- What is REST API?
- GET/POST/PUT/PATCH/DELETE?
- What is 200?
- What is 201?
- What is 400?
- What is 401?
- What is 403?
- What is 404?
- What is 500?

### Practical 9 — MVC
- What is MVC?
- Model?
- View?
- Controller?
- `IActionResult`?
- `ViewBag`?
- `return View()`?
- What is Razor?
- How does StudentController find Student/Index.cshtml?

### Practical 10 — Razor Pages
- What is Razor Pages?
- What is PageModel?
- `OnGet()`?
- `OnPost()`?
- `[BindProperty]`?
- What is Tag Helper?
- `asp-for`?
- `asp-validation-for`?
- `_ViewImports.cshtml`?

---

# 🧠 One-page memory map

Before entering the viva, remember this:

```text
C#
│
├── Basic Logic
│   ├── Factorial
│   ├── Swap
│   ├── Prime
│   ├── Armstrong
│   ├── Palindrome
│   ├── Reverse
│   ├── Fibonacci
│   └── Arrays
│
├── OOP
│   ├── Class
│   ├── Object
│   ├── Inheritance
│   ├── Interface
│   ├── Polymorphism
│   └── Encapsulation
│
├── Collections
│   ├── List
│   ├── Stack
│   ├── Queue
│   └── Dictionary
│
├── LINQ
│   ├── Where
│   └── Select
│
├── Errors
│   └── try / catch / finally
│
├── Async
│   ├── Task
│   ├── async
│   └── await
│
├── Files
│   ├── Read
│   └── Write
│
└── ASP.NET Core
    │
    ├── MVC
    │   ├── Model
    │   ├── View
    │   └── Controller
    │
    ├── CRUD / EF Core
    │
    ├── Security
    │   ├── Authentication
    │   └── Authorization
    │
    ├── Routing
    │
    ├── Dependency Injection
    │
    ├── Caching
    │
    ├── REST API
    │
    ├── Razor Pages
    │
    ├── Tag Helpers
    │
    └── Blazor
```

## Most likely practical-viva strategy

Because your syllabus has **10 practicals**, don't try to memorize every line of theory. For **each practical**, know these 5 things:

**1. What was the question?**  
**2. What project/template did you create?**  
**3. What files/classes did you create?**  
**4. What is the main concept being demonstrated?**  
**5. Explain 2–3 important lines of your code.**

For example, for your **Caching practical**:

> **Question:** Create application demonstrating caching.  
> **Technology:** ASP.NET Web Forms.  
> **Files:** `Movieticket.aspx`, `Movieticket.aspx.cs`, `Response_movie1.aspx`, `Response_movie1.aspx.cs`.  
> **Session:** Stores selected theatre.  
> **Cache:** Stores the generated table.  
> **Expiration:** 30 seconds.  
> **Important line:** `Cache.Insert(...)`.

That is exactly the kind of answer that will help if the examiner points at your code and asks **"Explain this."**