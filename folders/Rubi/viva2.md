# Viva Questions and Answers (Practical 1 to 10)

## Practical 1: Simple Applications and Testing

1. **What is ASP.NET Web Forms?** An event-driven web framework with drag-and-drop server controls (TextBox, Button). It runs on .NET Framework.
2. **What is code-behind?** The `.aspx` file holds the design (HTML) and the `.aspx.cs` file holds the C# logic.
3. **What is `IsPostBack`?** A property that tells whether the page is loading for the first time or reloading after a button click.
4. **What does `Response.Write()` do?** It sends output text directly to the browser.
5. **Why use `RequiredFieldValidator`?** To make sure the user doesn't leave a field empty.
6. **Difference between `int.Parse` and `int.TryParse`?** `Parse` throws an exception on bad input. `TryParse` returns true/false instead.
7. **What is `Main()`?** The entry point of a console application.

## Practical 2: Testing Projects

1. **What is unit testing?** Testing a small piece of code (a method) in isolation to check it gives the correct output.
2. **Popular testing frameworks in .NET?** xUnit, NUnit, MSTest.
3. **`[Fact]` vs `[Theory]` in xUnit?** `[Fact]` is a fixed test. `[Theory]` runs the same test with different data using `[InlineData]`.
4. **What is the AAA pattern?** Arrange (setup), Act (call the method), Assert (verify the result).
5. **What does `Assert.Equal(expected, actual)` do?** Compares both values. The test fails if they don't match.
6. **What is mocking?** Replacing a real dependency (database, service) with a fake object, for example using the Moq library.
7. **What is TDD?** Test Driven Development: write the test first, then the code, then refactor.
8. **MSTest attributes?** `[TestClass]` and `[TestMethod]`.

## Practical 3: CRUD with EF Core and SQLite

1. **Full form of CRUD?** Create, Read, Update, Delete.
2. **What is an ORM?** Object Relational Mapper. It maps C# classes to database tables so you write less SQL. EF Core is an ORM.
3. **What is `DbContext`?** The class that represents a session with the database. Queries and `SaveChanges()` go through it.
4. **What does `DbSet<Student>` mean?** It represents the `Students` table in the database.
5. **What is a migration?** A way to convert model changes into database schema changes, done with `Add-Migration` and `Update-Database`.
6. **Code First vs Database First?** In Code First you write classes and the database is created from them. In Database First, classes are generated from an existing database.
7. **Why is a connection string needed?** It tells the application which database to use, here `Data Source=StudentDatabase.db`.
8. **Why SQLite?** It is a file-based embedded database, so no separate server installation is needed.
9. **What is scaffolding?** Automatically generating controllers and views from a model.
10. **What are `[Required]` and `[Range]`?** Data Annotation attributes for validation: a value is mandatory, or must fall within a range.

## Practical 4: Shopping Cart

1. **What is a session?** Temporary server-side storage of data for each user while they browse the site.
2. **How is the cart stored here?** As a JSON string in the session using `HttpContext.Session.SetString()`.
3. **Why serialize the cart to JSON?** Session can only store strings and byte arrays, not complex objects.
4. **Which methods are needed in Program.cs for session?** `AddDistributedMemoryCache()`, `AddSession()` and `UseSession()`.
5. **What does `RedirectToAction()` do?** Sends the user to another action method.
6. **What is `static` used for in the product list?** The list is shared by all users and persists while the app runs.
7. **Session vs Cookie?** Session data lives on the server; cookie data lives in the user's browser.
8. **What does `asp-route-id` do?** It is a tag helper that passes the `id` value in the URL.

## Practical 5: Security

1. **Authentication vs Authorization?** Authentication verifies who you are (login). Authorization decides what you are allowed to do.
2. **What is ASP.NET Core Identity?** A built-in membership system for users, passwords, roles and login.
3. **What does `[Authorize]` do?** Restricts an action or controller to logged-in users only.
4. **What does `[AllowAnonymous]` do?** Allows access without login, even inside an `[Authorize]` controller.
5. **How do you restrict by role?** `[Authorize(Roles = "Admin")]`.
6. **Why is HTTPS used?** It encrypts data between browser and server.
7. **What is CSRF and how is it prevented?** Cross-Site Request Forgery is a forged request sent from another site. It is prevented with anti-forgery tokens (`[ValidateAntiForgeryToken]`).
8. **What is XSS?** Cross-Site Scripting, injecting malicious scripts into a page. Razor encodes output by default to prevent it.
9. **Why should passwords be hashed?** So that even if the database leaks, real passwords stay hidden. Identity hashes them automatically.
10. **What is cookie authentication?** After login, the server issues a cookie that proves the user's identity on later requests.

## Practical 6: URL Routing and Dependency Injection

1. **What is routing?** Mapping a URL to a controller action.
2. **Types of routing?** Conventional routing (`MapControllerRoute`) and attribute routing (`[Route]`).
3. **Default route pattern?** `{controller=Home}/{action=Index}/{id?}`.
4. **What does `{id?}` mean?** The `id` parameter is optional.
5. **What is a route constraint?** A rule on a route parameter, e.g. `{id:int}`.
6. **What is Dependency Injection (DI)?** A design pattern where a class receives its dependencies from outside instead of creating them itself.
7. **Why use DI?** Loose coupling, easier testing and better maintainability.
8. **Service lifetimes?** `Transient` (new instance every time), `Scoped` (one per request), `Singleton` (one for the whole app).
9. **How do you register a service?** `builder.Services.AddScoped<IService, Service>();`.
10. **What is constructor injection?** The service is received as a constructor parameter, and the framework supplies it.

## Practical 7: Caching

1. **What is caching?** Storing frequently used data temporarily so it can be served faster without recomputing or re-fetching.
2. **Types of caching in ASP.NET Core?** In-memory cache, distributed cache, response caching.
3. **What is `IMemoryCache`?** The interface for storing data in the server's memory.
4. **Which methods are used?** `Set()`, `Get()`, `TryGetValue()`, `Remove()`, `GetOrCreate()`.
5. **Absolute vs sliding expiration?** Absolute expires at a fixed time after creation. Sliding resets the timer each time the item is accessed.
6. **How do you enable memory cache?** `builder.Services.AddMemoryCache();`.
7. **What is distributed cache?** A cache shared by multiple servers, e.g. Redis or SQL Server.
8. **What is `[ResponseCache]`?** An attribute that sets HTTP caching headers for an action's response.
9. **What are the drawbacks of caching?** Stale data and extra memory usage.
10. **What is cache invalidation?** Removing or refreshing cached data when the original data changes.

## Practical 8: RESTful Services (Web API)

1. **What is REST?** Representational State Transfer, an architecture style for web services using HTTP.
2. **What are the HTTP methods?** GET (read), POST (create), PUT (update), DELETE (delete).
3. **What is a Web API?** A framework for building HTTP services that return data, usually JSON.
4. **What does `[ApiController]` do?** Enables API behaviors like automatic model validation and binding.
5. **What is `ControllerBase`?** The base class for API controllers (no view support, unlike `Controller`).
6. **Common HTTP status codes?** 200 OK, 201 Created, 400 Bad Request, 404 Not Found, 500 Server Error.
7. **What do `Ok()` and `NotFound()` return?** Status codes 200 and 404 respectively.
8. **What is `[Route("api/[controller]")]`?** Attribute routing; `[controller]` is replaced by the controller name.
9. **PUT vs POST?** POST creates a new resource. PUT updates an existing one.
10. **What is JSON?** JavaScript Object Notation, a lightweight text format for exchanging data.
11. **What is Swagger/OpenAPI?** A tool that documents and lets you test API endpoints.
12. **How do you test an API?** Using Swagger, Postman, or a `.http` file in Visual Studio.

## Practical 9: Controllers and Views

1. **What is MVC?** Model-View-Controller, a pattern that separates data (Model), UI (View) and logic (Controller).
2. **Role of the Controller?** Handles the request, works with the model and returns a view or result.
3. **What is an `IActionResult`?** The return type of an action that can be a View, Redirect, JSON, etc.
4. **How is data passed from controller to view?** Using a model, `ViewBag`, `ViewData` or `TempData`.
5. **ViewBag vs ViewData?** Both pass data to a view. `ViewData` is a dictionary, `ViewBag` is dynamic. Both last only for the current request.
6. **What is `TempData`?** Data that survives one redirect.
7. **What is Razor?** A syntax for writing C# code inside HTML using `@`.
8. **What is a strongly typed view?** A view declared with `@model`, which gives compile-time checking.
9. **What are layout and partial views?** A layout is a common page template (`_Layout.cshtml`). A partial view is a reusable piece of UI.
10. **What is model binding?** Automatically mapping form or URL values to action parameters or model properties.
11. **What is `_ViewImports.cshtml`?** A file that holds shared `@using` and `@addTagHelper` directives.

## Practical 10: Razor Pages and Tag Helpers

1. **What are Razor Pages?** A page-based model where each page has a `.cshtml` file and a `.cshtml.cs` PageModel.
2. **Razor Pages vs MVC?** Razor Pages combines the view and its logic per page. MVC separates them into controllers and views.
3. **What is a PageModel?** The class behind a Razor Page that holds handler methods and properties.
4. **What is the `@page` directive?** It marks the file as a Razor Page.
5. **What are handler methods?** `OnGet()` and `OnPost()`, which run for GET and POST requests.
6. **What does `[BindProperty]` do?** Binds posted form values to the property.
7. **What are Tag Helpers?** Server-side code that creates or modifies HTML elements, such as `asp-for`, `asp-action` and `asp-route-id`.
8. **What does `asp-for` do?** Binds an input or label to a model property.
9. **What does `asp-validation-for` do?** Displays the validation error message for a property.
10. **How are Tag Helpers enabled?** With `@addTagHelper *, Microsoft.AspNetCore.Mvc.TagHelpers` in `_ViewImports.cshtml`.
11. **Where do Razor Pages live?** In the `Pages` folder.
12. **What does `app.MapRazorPages()` do?** Maps Razor Page endpoints in the request pipeline.

Good luck with the exam! I can also make a short list of the most commonly asked 10 questions, or write sample unit test code for Practical 2 if you want.