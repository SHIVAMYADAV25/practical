# Practical No. 5 — URL Routing and Dependency Injection

We will make this **step-by-step in Visual Studio 2026**, using **ASP.NET Core Web API**.

The practical has two main topics:

1. **URL Routing**
2. **Dependency Injection**

The final API will support:

```text
GET /api/students
GET /api/students/101
GET /api/students/101/details
GET /api/students/101/name
```

This follows the practical you provided. Pasted text

---

# 1. Create the Project

Open **Visual Studio 2026**.

Select:

> **Create a new project**

Search:

```text
ASP.NET Core Web API
```

Select:

> **ASP.NET Core Web API**

Click **Next**.

### Project Name

```text
RoutingDIExample
```

Click **Next**.

---

# 2. Configure Project

Select:

```text
Framework: .NET 10.0 (LTS)
Authentication Type: None
Configure for HTTPS: ✓
Enable OpenAPI support: ✓
Use controllers: ✓
```

Click:

**Create**

These are the settings specified in the supplied practical. Pasted text

---

# 3. Project Structure

Initially you should have:

```text
RoutingDIExample
│
├── Controllers
│
├── Properties
│
├── Program.cs
├── appsettings.json
└── RoutingDIExample.csproj
```

We will create:

```text
RoutingDIExample
│
├── Controllers
│   └── StudentController.cs
│
├── Services
│   ├── IStudentService.cs
│   └── StudentService.cs
│
├── Properties
│
├── Program.cs
├── appsettings.json
└── RoutingDIExample.csproj
```

---

# 4. Configure Program.cs

Open:

```text
Program.cs
```

Replace everything with:

```csharp
using RoutingDIExample.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddOpenApi();

builder.Services.AddScoped<IStudentService, StudentService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
```

The important Dependency Injection line is:

```csharp
builder.Services.AddScoped<IStudentService, StudentService>();
```

This registers `StudentService` with the DI container using the **Scoped** lifetime. Pasted text

---

# 5. Create StudentController

Right-click:

```text
Controllers
```

Select:

**Add → Controller**

Choose:

> **API Controller - Empty**

Click **Add**.

Name:

```text
StudentController.cs
```

Click **Add**.

---

# 6. First URL Route

Open:

```text
Controllers/StudentController.cs
```

For the first routing part, use:

```csharp
using Microsoft.AspNetCore.Mvc;

namespace RoutingDIExample.Controllers
{
    [ApiController]
    [Route("api/students")]
    public class StudentController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(
                "Student Management System is running."
            );
        }
    }
}
```

---

# 7. Test First Route

Run:

```text
Ctrl + F5
```

Suppose Visual Studio gives:

```text
https://localhost:7000
```

Open:

```text
https://localhost:7000/api/students
```

Expected:

```text
Student Management System is running.
```

The practical uses `/api/students` as the first route. Pasted text

---

# 8. Add Route Parameter

Now modify `StudentController.cs`.

Use:

```csharp
using Microsoft.AspNetCore.Mvc;

namespace RoutingDIExample.Controllers
{
    [ApiController]
    [Route("api/students")]
    public class StudentController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(
                "Student Management System is running."
            );
        }

        [HttpGet("{id}")]
        public IActionResult GetStudent(int id)
        {
            return Ok("Student ID: " + id);
        }
    }
}
```

---

# 9. Test Route Parameter

Open:

```text
https://localhost:7000/api/students/101
```

Expected:

```text
Student ID: 101
```

The route is:

```text
/api/students/{id}
```

Here:

```text
{id} = 101
```

The practical defines this exact route-parameter example. Pasted text

---

# 10. Add Custom Route

Now add another method:

```csharp
[HttpGet("{id}/details")]
public IActionResult GetStudentDetails(int id)
{
    return Ok(
        "Details of Student ID: " + id
    );
}
```

Your controller temporarily becomes:

```csharp
using Microsoft.AspNetCore.Mvc;

namespace RoutingDIExample.Controllers
{
    [ApiController]
    [Route("api/students")]
    public class StudentController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(
                "Student Management System is running."
            );
        }

        [HttpGet("{id}")]
        public IActionResult GetStudent(int id)
        {
            return Ok("Student ID: " + id);
        }

        [HttpGet("{id}/details")]
        public IActionResult GetStudentDetails(int id)
        {
            return Ok(
                "Details of Student ID: " + id
            );
        }
    }
}
```

---

# 11. Test Custom Route

Open:

```text
https://localhost:7000/api/students/101/details
```

Expected:

```text
Details of Student ID: 101
```

The practical uses the route:

```text
/api/students/{id}/details
```

for this test. Pasted text

---

# 12. Create Services Folder

Now we implement **Dependency Injection**.

Right-click the project:

```text
RoutingDIExample
```

Select:

**Add → New Folder**

Name:

```text
Services
```

---

# 13. Create IStudentService.cs

Right-click:

```text
Services
```

Select:

**Add → Class**

Name:

```text
IStudentService.cs
```

Click **Add**.

Replace the code with:

```csharp
namespace RoutingDIExample.Services
{
    public interface IStudentService
    {
        object GetStudentDetails(int id);

        string GetStudentName(int id);
    }
}
```

This interface defines the operations that the Student Service will provide. Pasted text

---

# 14. Create StudentService.cs

Right-click:

```text
Services
```

Select:

**Add → Class**

Name:

```text
StudentService.cs
```

Click **Add**.

Replace everything with:

```csharp
namespace RoutingDIExample.Services
{
    public class StudentService : IStudentService
    {
        public object GetStudentDetails(int id)
        {
            if (id == 101)
            {
                return new
                {
                    Id = 101,
                    Name = "Rahul Sharma",
                    Course = "BCA"
                };
            }

            if (id == 102)
            {
                return new
                {
                    Id = 102,
                    Name = "Priya Patil",
                    Course = "BCA"
                };
            }

            if (id == 103)
            {
                return new
                {
                    Id = 103,
                    Name = "Amit Joshi",
                    Course = "BCA"
                };
            }

            return new
            {
                Message = "Student not found"
            };
        }

        public string GetStudentName(int id)
        {
            if (id == 101)
                return "Rahul Sharma";

            if (id == 102)
                return "Priya Patil";

            if (id == 103)
                return "Amit Joshi";

            return "Student not found";
        }
    }
}
```

---

# 15. Register Dependency Injection

We already added this in `Program.cs`:

```csharp
builder.Services.AddScoped<IStudentService, StudentService>();
```

This means:

```text
IStudentService
       ↓
StudentService
```

When ASP.NET Core needs an `IStudentService`, it creates/provides a `StudentService`.

---

# 16. Inject Service into Controller

Now replace the complete:

```text
Controllers/StudentController.cs
```

with the **final controller**:

```csharp
using Microsoft.AspNetCore.Mvc;
using RoutingDIExample.Services;

namespace RoutingDIExample.Controllers
{
    [ApiController]
    [Route("api/students")]
    public class StudentController : ControllerBase
    {
        private readonly IStudentService _studentService;

        public StudentController(
            IStudentService studentService)
        {
            _studentService = studentService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(
                "Student Management System is running."
            );
        }

        [HttpGet("{id}")]
        public IActionResult GetStudent(int id)
        {
            return Ok("Student ID: " + id);
        }

        [HttpGet("{id}/details")]
        public IActionResult GetStudentDetails(int id)
        {
            var student =
                _studentService.GetStudentDetails(id);

            return Ok(student);
        }

        [HttpGet("{id}/name")]
        public IActionResult GetStudentName(int id)
        {
            string name =
                _studentService.GetStudentName(id);

            return Ok(name);
        }
    }
}
```

The constructor:

```csharp
public StudentController(
    IStudentService studentService)
{
    _studentService = studentService;
}
```

is **Constructor Dependency Injection**.

The practical specifically uses this approach. Pasted text

---

# 17. Test Student Details

Run the application.

Open:

```text
https://localhost:7000/api/students/101/details
```

Expected JSON:

```json
{
  "id": 101,
  "name": "Rahul Sharma",
  "course": "BCA"
}
```

---

# 18. Test Student 102

Open:

```text
https://localhost:7000/api/students/102/details
```

Expected:

```json
{
  "id": 102,
  "name": "Priya Patil",
  "course": "BCA"
}
```

---

# 19. Test Student 103

Open:

```text
https://localhost:7000/api/students/103/details
```

Expected:

```json
{
  "id": 103,
  "name": "Amit Joshi",
  "course": "BCA"
}
```

---

# 20. Test Student Not Found

Open:

```text
https://localhost:7000/api/students/110/details
```

Expected:

```json
{
  "message": "Student not found"
}
```

The supplied practical uses `110` specifically for the not-found test. Pasted text

---

# 21. Get Only Student Name

We created:

```csharp
[HttpGet("{id}/name")]
public IActionResult GetStudentName(int id)
{
    string name =
        _studentService.GetStudentName(id);

    return Ok(name);
}
```

Now open:

```text
https://localhost:7000/api/students/101/name
```

Expected:

```text
Rahul Sharma
```

For student 102:

```text
https://localhost:7000/api/students/102/name
```

Expected:

```text
Priya Patil
```

The practical specifies this additional route and output. Pasted text

---

# 22. Final Program.cs

Your final `Program.cs` should be:

```csharp
using RoutingDIExample.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddOpenApi();

builder.Services.AddScoped<IStudentService, StudentService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
```

---

# 23. Final IStudentService.cs

Path:

```text
Services/IStudentService.cs
```

Code:

```csharp
namespace RoutingDIExample.Services
{
    public interface IStudentService
    {
        object GetStudentDetails(int id);

        string GetStudentName(int id);
    }
}
```

---

# 24. Final StudentService.cs

Path:

```text
Services/StudentService.cs
```

Code:

```csharp
namespace RoutingDIExample.Services
{
    public class StudentService : IStudentService
    {
        public object GetStudentDetails(int id)
        {
            if (id == 101)
                return new
                {
                    Id = 101,
                    Name = "Rahul Sharma",
                    Course = "BCA"
                };

            if (id == 102)
                return new
                {
                    Id = 102,
                    Name = "Priya Patil",
                    Course = "BCA"
                };

            if (id == 103)
                return new
                {
                    Id = 103,
                    Name = "Amit Joshi",
                    Course = "BCA"
                };

            return new
            {
                Message = "Student not found"
            };
        }

        public string GetStudentName(int id)
        {
            if (id == 101)
                return "Rahul Sharma";

            if (id == 102)
                return "Priya Patil";

            if (id == 103)
                return "Amit Joshi";

            return "Student not found";
        }
    }
}
```

---

# 25. Final StudentController.cs

Path:

```text
Controllers/StudentController.cs
```

Code:

```csharp
using Microsoft.AspNetCore.Mvc;
using RoutingDIExample.Services;

namespace RoutingDIExample.Controllers
{
    [ApiController]
    [Route("api/students")]
    public class StudentController : ControllerBase
    {
        private readonly IStudentService _studentService;

        public StudentController(
            IStudentService studentService)
        {
            _studentService = studentService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(
                "Student Management System is running."
            );
        }

        [HttpGet("{id}")]
        public IActionResult GetStudent(int id)
        {
            return Ok("Student ID: " + id);
        }

        [HttpGet("{id}/details")]
        public IActionResult GetStudentDetails(int id)
        {
            var student =
                _studentService.GetStudentDetails(id);

            return Ok(student);
        }

        [HttpGet("{id}/name")]
        public IActionResult GetStudentName(int id)
        {
            string name =
                _studentService.GetStudentName(id);

            return Ok(name);
        }
    }
}
```

---

# 26. Final Project Structure

```text
RoutingDIExample
│
├── Controllers
│   └── StudentController.cs
│
├── Services
│   ├── IStudentService.cs
│   └── StudentService.cs
│
├── Properties
│   └── launchSettings.json
│
├── Program.cs
├── appsettings.json
└── RoutingDIExample.csproj
```

This matches the final structure in your practical. Pasted text

---

# 27. URLs to Test

| URL | Purpose | Expected |
|---|---|---|
| `/api/students` | Test controller | Student Management System is running |
| `/api/students/101` | Route parameter | Student ID: 101 |
| `/api/students/101/details` | Get student details | Rahul Sharma, BCA |
| `/api/students/101/name` | Get student name | Rahul Sharma |
| `/api/students/110/details` | Test invalid student | Student not found |

---

# 28. Important Viva Questions

### Q1. What is URL Routing?

URL Routing maps an incoming URL to a controller action.

Example:

```text
/api/students/101
```

maps to:

```csharp
[HttpGet("{id}")]
public IActionResult GetStudent(int id)
```

---

### Q2. What is `{id}`?

It is a **route parameter**.

```text
/api/students/{id}
```

For:

```text
/api/students/101
```

the value of `id` is:

```text
101
```

---

### Q3. What is Dependency Injection?

Dependency Injection is a technique where required objects/services are provided to a class instead of the class creating them itself.

---

### Q4. What is an interface?

Here:

```csharp
IStudentService
```

defines what operations the student service provides.

---

### Q5. What is `StudentService`?

It is the actual implementation of:

```csharp
IStudentService
```

```csharp
public class StudentService : IStudentService
```

---

### Q6. What does `AddScoped` mean?

```csharp
builder.Services.AddScoped<IStudentService, StudentService>();
```

registers the service with the **Scoped lifetime**.

A scoped service is generally created once per HTTP request.

---

### Q7. What is Constructor Injection?

This:

```csharp
public StudentController(
    IStudentService studentService)
{
    _studentService = studentService;
}
```

is constructor dependency injection.

---

### Q8. Why use an interface?

It separates the controller from the implementation.

```text
Controller
    ↓
IStudentService
    ↓
StudentService
```

The controller doesn't need to directly create:

```csharp
new StudentService()
```

---

### Q9. What is `ControllerBase`?

`ControllerBase` is commonly used for API controllers where we return HTTP/API responses rather than MVC HTML Views.

---

### Q10. What does `Ok()` do?

```csharp
return Ok(student);
```

returns an HTTP:

```text
200 OK
```

response.

---

# ⭐ Most Important for Viva

Remember these four:

### Routing

```csharp
[Route("api/students")]
```

### Route parameter

```csharp
[HttpGet("{id}")]
```

### Dependency Injection registration

```csharp
builder.Services.AddScoped<IStudentService, StudentService>();
```

### Constructor Injection

```csharp
public StudentController(
    IStudentService studentService)
{
    _studentService = studentService;
}
```

And remember the overall flow:

```text
Browser
   ↓
/api/students/101/details
   ↓
StudentController
   ↓
_studentService
   ↓
IStudentService
   ↓
StudentService
   ↓
Student Details
   ↓
JSON Response
```

That completes the **URL Routing + Dependency Injection practical** using Visual Studio 2026.

Install-Package Swashbuckle.AspNetCore

using RoutingDIExample.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

// Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Dependency Injection
builder.Services.AddScoped<IStudentService, StudentService>();

var app = builder.Build();

// Swagger
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();