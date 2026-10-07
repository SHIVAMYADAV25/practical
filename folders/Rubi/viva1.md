Absolutely. Since this is your **MCCSCT323 practical viva**, here is a much larger question bank, especially covering the areas an examiner can ask after seeing your code.

I’ll keep the answers **short enough to speak in viva**, but include the important follow-up questions.

# 🔥 Part 1 — Basic C# Questions

### 1. What is C#?
C# is a modern, object-oriented programming language developed by Microsoft.

### 2. What is .NET?
.NET is a development platform used to build and run applications.

### 3. Is C# the same as .NET?
No. C# is a programming language, while .NET is the platform on which applications can be developed and executed.

### 4. What is CLR?
CLR stands for **Common Language Runtime**. It executes .NET applications and provides services such as memory management, exception handling, and garbage collection.

### 5. What is CTS?
CTS stands for **Common Type System**. It defines how data types are declared and used in .NET.

### 6. What is CLS?
CLS stands for **Common Language Specification**. It defines rules that .NET languages can follow for interoperability.

### 7. What is managed code?
Code executed under the control of the CLR is called managed code.

### 8. What is unmanaged code?
Code that executes outside CLR management is called unmanaged code.

### 9. What is a namespace?
A namespace organizes related classes and avoids naming conflicts.

```csharp
namespace MyApplication
{
}
```

### 10. Why do we use `using`?

It allows us to use types from a namespace without writing the full namespace every time.

```csharp
using System;
```

---

# 🔥 Part 2 — Data Types

### 11. What is a data type?
A data type defines what kind of value a variable can store.

### 12. What is a value type?
A value type directly contains its value.

Examples:

```text
int
float
double
bool
char
struct
```

### 13. What is a reference type?
A reference type stores a reference to an object.

Examples:

```text
class
string
array
interface
delegate
```

### 14. What is the difference between `int` and `double`?

`int` stores whole numbers.

```csharp
int x = 10;
```

`double` stores floating-point numbers.

```csharp
double x = 10.5;
```

### 15. What is `bool`?

It stores:

```text
true
false
```

### 16. What is `char`?

It stores a single character.

```csharp
char grade = 'A';
```

### 17. What is `string`?

It stores a sequence of characters.

```csharp
string name = "Shivam";
```

---

# 🔥 Part 3 — Input/Output

### 18. What does `Console.Write()` do?

Displays output without automatically moving to a new line.

### 19. What does `Console.WriteLine()` do?

Displays output and moves to the next line.

### 20. What does `Console.ReadLine()` return?

It returns the user's input as a string.

### 21. Why do we convert input?

Because `Console.ReadLine()` returns a string.

```csharp
int n = Convert.ToInt32(Console.ReadLine());
```

### 22. What happens if the user enters text when `int` is expected?

Conversion can throw a `FormatException`.

### 23. What is parsing?

Converting a string representation into another data type.

Example:

```csharp
int n = int.Parse("10");
```

### 24. `Parse()` vs `Convert.ToInt32()`?

Both can convert strings to integers, but their behavior with `null` and invalid input differs. For basic programs, either can commonly be used depending on the requirement.

---

# 🔥 Part 4 — Operators

### 25. What are arithmetic operators?

```text
+  -  *  /  %
```

### 26. What is `%`?

Modulus operator. It returns the remainder.

```text
10 % 3 = 1
```

### 27. What is `++`?

Increment operator.

```csharp
i++;
```

means:

```text
i = i + 1
```

### 28. What is `--`?

Decrement operator.

```text
i = i - 1
```

### 29. What are relational operators?

```text
>
<
>=
<=
==
!=
```

### 30. What are logical operators?

```text
&&
||
!
```

### 31. Difference between `=` and `==`?

```text
=   assignment
==  comparison
```

Example:

```csharp
x = 10;
```

assigns 10.

```csharp
x == 10
```

checks whether x equals 10.

---

# 🔥 Part 5 — Basic Programming Logic

### 32. How do you find factorial?

Use multiplication from 1 to `n`.

```csharp
int fact = 1;

for (int i = 1; i <= n; i++)
{
    fact *= i;
}
```

### 33. Why is factorial initialized to 1?

Because multiplication should start with the multiplicative identity `1`.

### 34. What is `0!`?

```text
1
```

### 35. How do you swap two numbers?

Using a temporary variable:

```csharp
int temp = a;
a = b;
b = temp;
```

### 36. Can you swap without a temporary variable?

Yes, for example using arithmetic:

```csharp
a = a + b;
b = a - b;
a = a - b;
```

### 37. What is an Armstrong number?

For a 3-digit Armstrong number, the sum of cubes of its digits equals the original number.

### 38. Why do we use `n % 10` in Armstrong?

To extract the last digit.

### 39. Why do we use `n / 10`?

To remove the last digit.

### 40. What is a palindrome?

A value that is the same forward and backward.

### 41. How do you check number palindrome?

Reverse the number and compare it with the original.

### 42. What is a prime number?

A number greater than 1 having exactly two positive divisors: 1 and itself.

### 43. Is 1 a prime number?

No.

### 44. Is 2 a prime number?

Yes. It is the smallest prime number and the only even prime number.

### 45. How do you check even/odd?

```csharp
if (n % 2 == 0)
```

### 46. How do you reverse a number?

Extract each digit using `% 10` and construct the reverse using:

```csharp
rev = rev * 10 + digit;
```

### 47. How do you calculate sum of digits?

```csharp
sum = sum + digit;
```

while repeatedly extracting digits.

---

# 🔥 Part 6 — Loops

### 48. What are the three main loops in C#?

```text
for
while
do-while
```

### 49. When do you use `for`?

When the number of iterations is generally known or controlled by a counter.

### 50. When do you use `while`?

When repetition depends mainly on a condition.

### 51. What is a do-while loop?

It executes the body at least once because the condition is checked after the body.

### 52. Difference between `while` and `do-while`?

`while` may execute zero times.

`do-while` executes at least once.

### 53. What is an infinite loop?

A loop whose terminating condition never becomes false.

### 54. What is `break`?

It terminates the current loop or switch.

### 55. What is `continue`?

It skips the current iteration and proceeds to the next iteration.

---

# 🔥 Part 7 — Arrays

### 56. What is an array?

An array stores multiple values of the same type.

### 57. What is the first index of an array?

`0`.

### 58. What is the last index?

```text
Length - 1
```

### 59. What is `Length`?

It gives the number of elements.

### 60. What is a multidimensional array?

An array with multiple dimensions.

```csharp
int[,] arr = new int[2, 3];
```

### 61. What is a jagged array?

An array containing arrays, where each inner array can have a different length.

### 62. Array vs List?

An array generally has fixed length, while `List<T>` dynamically grows or shrinks.

---

# 🔥 Part 8 — OOP Questions

These are **very important because OOP is Unit I**.

### 63. What is OOP?

Object-Oriented Programming is a programming approach based on objects and classes.

### 64. What are the four major OOP concepts?

```text
Encapsulation
Inheritance
Polymorphism
Abstraction
```

### 65. What is a class?

A class is a blueprint for creating objects.

### 66. What is an object?

An object is an instance of a class.

### 67. What is encapsulation?

Combining data and methods in a class and controlling access to the data.

### 68. What is inheritance?

A derived class can acquire accessible members from a base class.

### 69. What is polymorphism?

The ability for the same interface or operation to have different implementations/forms.

### 70. What is abstraction?

Showing essential features while hiding unnecessary implementation details.

### 71. What is method overloading?

Same method name with different parameter lists.

### 72. What is method overriding?

A derived class provides a new implementation of an inherited virtual/abstract member.

### 73. What is an interface?

An interface defines a contract that implementing types agree to follow.

### 74. Can a class implement multiple interfaces?

Yes.

### 75. Can a class inherit from multiple classes in C#?

No. C# does not support multiple class inheritance.

It can implement multiple interfaces.

---

# 🔥 Part 9 — Access Modifiers

### 76. What are access modifiers?

They control accessibility of types and members.

Common ones:

```text
public
private
protected
internal
```

### 77. What does `public` mean?

Accessible wherever the type/member is accessible.

### 78. What does `private` mean?

Accessible only within its containing type.

### 79. What does `protected` mean?

Accessible within the containing type and derived types.

### 80. What is `static`?

A static member belongs to the type rather than a particular object instance.

---

# 🔥 Part 10 — Constructor

### 81. What is a constructor?

A special member that runs when an object is initialized.

### 82. Does a constructor have a return type?

No.

### 83. Can constructors be overloaded?

Yes.

### 84. What is a default constructor?

A parameterless constructor.

---

# 🔥 Part 11 — Collections

### 85. What is a collection?

A collection stores and manages multiple objects/elements.

### 86. What is `List<T>`?

A dynamically sized generic collection.

### 87. What is a Stack?

A collection based on **LIFO**.

### 88. What is LIFO?

Last In, First Out.

### 89. What is a Queue?

A collection based on **FIFO**.

### 90. What is FIFO?

First In, First Out.

### 91. What is a Dictionary?

A collection of key-value pairs.

```csharp
Dictionary<int, string>
```

### 92. Can a Dictionary have duplicate keys?

No. Keys must be unique.

### 93. What is a HashSet?

A collection that stores unique elements.

---

# 🔥 Part 12 — Generics

### 94. What are generics?

Generics allow classes, methods, and other types to work with specified types while providing type safety.

Example:

```csharp
List<int>
List<string>
```

### 95. Why use generics?

They provide type safety and reusable code and can avoid unnecessary boxing in many value-type scenarios.

---

# 🔥 Part 13 — Delegates, Lambda and Events

### 96. What is a delegate?

A type-safe reference to a method.

### 97. What is a lambda expression?

A concise way to represent an anonymous function.

```csharp
x => x * 2
```

### 98. What is an event?

A mechanism for notifying subscribers when something happens.

### 99. Where are lambda expressions commonly used?

LINQ, delegates, event handlers, etc.

---

# 🔥 Part 14 — LINQ

### 100. What does LINQ stand for?

**Language Integrated Query.**

### 101. Why use LINQ?

To query and transform data in a concise, type-safe way.

### 102. What does `Where()` do?

Filters elements based on a condition.

### 103. What does `Select()` do?

Projects/transforms elements.

### 104. What does `OrderBy()` do?

Sorts elements in ascending order.

### 105. What does `FirstOrDefault()` do?

Returns the first matching element, or the default value if none exists.

---

# 🔥 Part 15 — Exception Handling

### 106. What is an exception?

An exception represents an error or unexpected condition during execution.

### 107. What is `try`?

Contains code that may throw an exception.

### 108. What is `catch`?

Handles an exception.

### 109. What is `finally`?

Contains code that normally executes after the try/catch processing, whether or not an exception occurred.

### 110. Can we have multiple catch blocks?

Yes.

### 111. What is `Exception`?

A base class for many .NET exceptions.

### 112. Give examples of exceptions.

```text
NullReferenceException
IndexOutOfRangeException
FormatException
DivideByZeroException
FileNotFoundException
```

---

# 🔥 Part 16 — Async / Await

### 113. Why is asynchronous programming useful?

It allows an application to avoid unnecessarily blocking while waiting for operations such as I/O.

### 114. What is `Task`?

It represents an asynchronous operation.

### 115. What is `async`?

It marks a method as asynchronous and enables use of `await`.

### 116. What is `await`?

It asynchronously waits for a task's completion.

### 117. Does `async` automatically create a new thread?

No. Asynchronous programming is not synonymous with creating a new thread.

---

# 🔥 Part 17 — File Handling

### 118. Which namespace is commonly used?

```csharp
System.IO
```

### 119. How do you create/write a file?

```csharp
File.WriteAllText("test.txt", "Hello");
```

### 120. How do you read a file?

```csharp
string data = File.ReadAllText("test.txt");
```

### 121. What is a stream?

A stream represents a sequence of data used for reading or writing.

---

# 🔥 Part 18 — ASP.NET Core

### 122. What is ASP.NET Core?

A cross-platform framework for building modern web applications, APIs, and services.

### 123. What is middleware?

Middleware is a component in the HTTP request/response pipeline.

### 124. What is `Program.cs`?

It is commonly used to configure services and build/configure the ASP.NET Core application pipeline.

### 125. What is `appsettings.json`?

A common configuration file for application settings.

### 126. What is Kestrel?

Kestrel is the cross-platform web server used by ASP.NET Core applications.

---

# 🔥 Part 19 — MVC

### 127. What is MVC?

```text
Model
View
Controller
```

### 128. What is Model?

Represents application data/domain information.

### 129. What is View?

Responsible for presentation/UI.

### 130. What is Controller?

Handles requests and coordinates application behavior before returning a response.

### 131. What is `IActionResult`?

A common abstraction representing the result of a controller action.

### 132. What is `ViewBag`?

A dynamic mechanism for passing data from a controller to a view.

### 133. What is Razor?

The Razor syntax allows C# code to be embedded into HTML-based `.cshtml` files.

---

# 🔥 Part 20 — Your StudentMVCApp Practical

### 134. Why did you create `StudentController`?

To handle student-related requests and return student views.

### 135. Why is it called `StudentController`?

By MVC convention, controller classes normally end with `Controller`.

### 136. Where does `StudentController` look for its views?

Normally:

```text
Views/Student/
```

### 137. What happens with:

```csharp
return View();
```

inside `Index()`?

MVC conventionally looks for:

```text
Views/Student/Index.cshtml
```

### 138. What is `ViewBag.Name`?

It stores the student's name for use by the view.

### 139. How does the view access it?

```cshtml
@ViewBag.Name
```

### 140. Why is the file extension `.cshtml`?

It represents a Razor view/page containing HTML with Razor syntax.

---

# 🔥 Part 21 — Razor Pages

### 141. What is Razor Pages?

A page-focused web UI programming model in ASP.NET Core.

### 142. MVC vs Razor Pages?

MVC organizes around:

```text
Controller + View + Model
```

Razor Pages organizes around individual pages with a `.cshtml` page and usually a `.cshtml.cs` PageModel.

### 143. What is `Index.cshtml.cs`?

It contains the C# PageModel logic for the Razor Page.

### 144. What is `Index.cshtml`?

It contains the UI and Razor markup.

### 145. What is `OnGet()`?

Handler for GET requests.

### 146. What is `OnPost()`?

Handler for POST requests.

### 147. What is `[BindProperty]`?

It enables model binding to the specified PageModel property.

---

# 🔥 Part 22 — Tag Helpers

### 148. What is a Tag Helper?

A server-side feature that helps generate/modify HTML elements in Razor.

### 149. What is:

```html
<input asp-for="Student.Name">
```

It binds the input to `Student.Name`.

### 150. What is:

```html
<span asp-validation-for="Student.Name"></span>
```

It displays validation information for that property when validation rules generate messages.

### 151. Why do we use `_ViewImports.cshtml`?

To define imports and Razor directives that apply to Razor files in its scope.

### 152. What enables built-in Tag Helpers?

```cshtml
@addTagHelper *, Microsoft.AspNetCore.Mvc.TagHelpers
```

---

# 🔥 Part 23 — CRUD + EF Core

### 153. What is CRUD?

```text
Create
Read
Update
Delete
```

### 154. What is Entity Framework Core?

An ORM for .NET applications.

### 155. What is ORM?

Object-Relational Mapping.

### 156. What is `DbContext`?

It represents the database session/context and provides access to entity sets.

### 157. What is `DbSet`?

It represents a collection of entities of a particular type managed by the context.

### 158. What is migration?

A mechanism for applying model/schema changes to the database.

### 159. Why use EF Core instead of writing all SQL manually?

It provides object-oriented database access and can reduce the amount of database plumbing code.

---

# 🔥 Part 24 — Security

### 160. What is authentication?

Determines the identity of a user.

### 161. What is authorization?

Determines what an authenticated user is allowed to do.

### 162. What is ASP.NET Core Identity?

A framework for handling user accounts, authentication, roles, and related identity functionality.

### 163. What is `[Authorize]`?

It restricts access to authenticated users or users satisfying specified authorization requirements.

### 164. What is a role?

A named group used to represent permissions/access categories.

### 165. Example?

```text
Admin
User
```

---

# 🔥 Part 25 — Routing

### 166. What is routing?

Routing matches an incoming request URL to an endpoint.

### 167. What is attribute routing?

Defining routes using attributes such as:

```csharp
[Route("api/students")]
```

### 168. What does `[HttpGet]` mean?

The action handles GET requests.

### 169. What does `[HttpPost]` mean?

The action handles POST requests.

### 170. What does `{id}` mean?

It represents a route parameter.

Example:

```text
/api/students/101
```

Here:

```text
id = 101
```

---

# 🔥 Part 26 — Dependency Injection

### 171. What is Dependency Injection?

Providing an object's required dependencies from outside rather than having the object construct them itself.

### 172. Why use DI?

To reduce tight coupling and improve maintainability and testability.

### 173. What is constructor injection?

Dependency is supplied through a constructor.

### 174. What is:

```csharp
builder.Services.AddScoped<IStudentService, StudentService>();
```

It registers `StudentService` as the implementation of `IStudentService` with scoped lifetime.

### 175. What is Singleton?

One instance is generally used for the application's service container lifetime.

### 176. What is Transient?

A new service instance is generally created each time it is requested.

### 177. What is Scoped?

One instance is generally created per request scope in a web application.

---

# 🔥 Part 27 — Caching

### 178. What is caching?

Temporarily storing reusable data to improve performance.

### 179. Why cache data?

To avoid unnecessary repeated work and improve response time.

### 180. What did your Movie Ticket practical use?

It used:

```text
Session
Cache
ASP.NET Web Forms
```

### 181. What was stored in Session?

The selected theatre.

```csharp
Session["Theatre"] = ListBox1.Text;
```

### 182. What was stored in Cache?

The generated movie/theatre table.

### 183. What does this check?

```csharp
if (Cache["IMAX"] == null)
```

It checks whether the IMAX cache entry exists.

### 184. What does `Cache.Insert()` do?

Adds an item to the application cache.

### 185. Why 30 seconds?

The practical sets the cache expiration to 30 seconds.

---

# 🔥 Part 28 — REST API

### 186. What is REST?

Representational State Transfer.

### 187. What is an API?

An interface through which software components communicate.

### 188. What is a REST API?

An HTTP-based API designed around resources and standard HTTP methods.

### 189. What is GET?

Retrieve data.

### 190. What is POST?

Create/submit data.

### 191. What is PUT?

Replace/update a resource.

### 192. What is PATCH?

Partially update a resource.

### 193. What is DELETE?

Delete a resource.

### 194. What is JSON?

JavaScript Object Notation. It is a lightweight data-interchange format commonly used in web APIs.

---

# 🔥 Part 29 — HTTP Status Codes

You specifically asked about status codes before, so **learn these very well**:

### 195. 200?

OK.

### 196. 201?

Created.

### 197. 204?

No Content.

### 198. 400?

Bad Request.

### 199. 401?

Unauthorized.

### 200. 403?

Forbidden.

### 201. 404?

Not Found.

### 202. 409?

Conflict.

### 203. 500?

Internal Server Error.

---

# 🔥 Part 30 — Blazor

### 204. What is Blazor?

A .NET web UI framework for building interactive web interfaces with C# and Razor.

### 205. What is the purpose of your Blazor eCommerce practical?

To build an eCommerce application involving product management, navigation, shopping cart, orders, administration, security, and deployment.

### 206. What is pagination?

Dividing a large set of records into smaller pages.

### 207. Why use pagination?

To avoid displaying/loading a very large number of records at once.

### 208. What is catalog management?

Managing products and related product information.

---

# 🚨 Examiner Can Ask "Why?" Questions

These are often more important than definitions.

### 209. Why use MVC?

To separate application concerns into Model, View, and Controller.

### 210. Why use Dependency Injection?

To reduce tight coupling.

### 211. Why use interfaces?

To define contracts and support loose coupling/abstraction.

### 212. Why use EF Core?

To simplify data access through an ORM.

### 213. Why use caching?

To improve performance by reusing previously generated data.

### 214. Why use sessions?

To maintain user-specific state across requests.

### 215. Why use Razor?

To combine HTML with server-side C# expressions/code in Razor files.

### 216. Why use Tag Helpers?

To make common HTML/server-side interactions easier and strongly tied to model metadata.

### 217. Why use async/await?

To avoid unnecessarily blocking while waiting for asynchronous operations.

### 218. Why use exception handling?

To handle runtime errors gracefully.

---

# 🚨 Examiner Can Give You Code and Ask "What Will It Output?"

### Example 1

```csharp
int x = 10;
int y = 3;

Console.WriteLine(x / y);
```

Answer:

```text
3
```

Because both are integers.

---

### Example 2

```csharp
Console.WriteLine(10 % 3);
```

Answer:

```text
1
```

---

### Example 3

```csharp
int x = 5;

if (x > 3)
    Console.WriteLine("A");
else
    Console.WriteLine("B");
```

Answer:

```text
A
```

---

### Example 4

```csharp
for (int i = 1; i <= 3; i++)
{
    Console.Write(i);
}
```

Answer:

```text
123
```

---

### Example 5

```csharp
int n = 123;
int digit = n % 10;

Console.WriteLine(digit);
```

Answer:

```text
3
```

---

# 🔥 Practical "Write This Now" Questions

Your examiner may not ask theory first. They may simply say:

> **Write a program for...**

Prepare these:

1. Factorial
2. Swap two numbers
3. Swap without third variable
4. Armstrong number
5. Palindrome number
6. Reverse number
7. Prime number
8. Even/odd
9. Positive/negative
10. Largest of two
11. Largest of three
12. Fibonacci
13. Sum of digits
14. Count digits
15. Multiplication table
16. Sum of first N numbers
17. Reverse string
18. String palindrome
19. Vowel/consonant
20. Leap year
21. Calculator using `switch`
22. Array sum
23. Array largest
24. Array smallest
25. Sort an array
26. Search an element
27. Count even/odd elements
28. Find duplicate elements
29. Factorial using function
30. Prime numbers between 1 and N

---

# ⭐ Final Priority for Your Viva

If your practical exam is very close, don't try to memorize all 220 questions equally.

## 🔴 Priority 1 — Must know perfectly

```text
C# vs .NET
CLR
Variables/data types
Console.ReadLine
Convert.ToInt32
Operators
if/else
for/while
Factorial
Swap
Prime
Armstrong
Palindrome
Reverse
Fibonacci
Arrays
Class/Object
Inheritance
Polymorphism
Interface
Exception handling
```

## 🟠 Priority 2 — ASP.NET Core

```text
ASP.NET Core
MVC
Model
View
Controller
Razor
IActionResult
ViewBag
CRUD
EF Core
DbContext
Authentication
Authorization
Routing
Dependency Injection
AddScoped
Caching
REST API
HTTP methods
HTTP status codes
Razor Pages
PageModel
OnGet
OnPost
BindProperty
Tag Helpers
```

## 🟡 Priority 3 — Syllabus theory

```text
Records
Structs
Tuples
Deconstruction
Pattern Matching
Partial Types
Generics
Delegates
Lambda
Events
Collections
LINQ
Tasks
Async/Await
Reflection
Parallel Programming
Streams
Blazor
Pagination
Identity
Deployment
PATCH
Content Formatting
```

**One very important exam trick:** when the examiner asks you to explain a program, don't only explain the final answer. Explain the **logic of the important line**.

For example, for Armstrong:

> "`n % 10` extracts the last digit, then I calculate the cube of that digit and add it to `sum`. After that `n / 10` removes the last digit. Finally, I compare `sum` with the original number."

That style of explanation usually demonstrates that **you understand the program rather than just memorized the code**.