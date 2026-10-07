# Practical No. 8 — Creating RESTful Services

We will make this **exactly in Visual Studio 2026 using ASP.NET Core Web API**, with **Swagger** for testing.

The application will perform:

- GET — Get all students
- GET — Get student by ID
- POST — Add student
- PUT — Update student
- DELETE — Delete student

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

### Project name

```text
StudentRESTAPI
```

Click **Next**.

For Framework select:

```text
.NET 8.0
```

Keep:

```text
Configure for HTTPS     ✓
Enable OpenAPI support  ✓
```

Authentication:

```text
None
```

Click **Create**.

---

# 2. Project Structure

Initially you will have something similar to:

```text
StudentRESTAPI
│
├── Controllers
│
├── Program.cs
├── appsettings.json
└── StudentRESTAPI.csproj
```

We will create:

```text
StudentRESTAPI
│
├── Controllers
│   └── StudentsController.cs
│
├── Models
│   └── Student.cs
│
├── Program.cs
├── appsettings.json
└── StudentRESTAPI.csproj
```

---

# 3. Create Models Folder

Right-click the project:

```text
StudentRESTAPI
```

Select:

**Add → New Folder**

Name it:

```text
Models
```

---

# 4. Create Student Model

Right-click:

```text
Models
```

Select:

**Add → Class**

Name:

```text
Student.cs
```

Click **Add**.

Replace the code with:

```csharp
namespace StudentRESTAPI.Models
{
    public class Student
    {
        public int Id { get; set; }

        public string Name { get; set; } = string.Empty;

        public string Course { get; set; } = string.Empty;

        public int Age { get; set; }
    }
}
```

---

# 5. Create Students Controller

Right-click:

```text
Controllers
```

Select:

**Add → Controller**

Select:

> **API Controller - Empty**

Click **Add**.

Name:

```text
StudentsController.cs
```

Click **Add**.

Replace everything with:

```csharp
using Microsoft.AspNetCore.Mvc;
using StudentRESTAPI.Models;

namespace StudentRESTAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentsController : ControllerBase
    {
        private static readonly List<Student> students = new()
        {
            new Student
            {
                Id = 1,
                Name = "Rahul",
                Course = "MCA",
                Age = 22
            },

            new Student
            {
                Id = 2,
                Name = "Priya",
                Course = "MCA",
                Age = 21
            }
        };

        // GET: api/students
        [HttpGet]
        public IActionResult GetAllStudents()
        {
            return Ok(students);
        }

        // GET: api/students/1
        [HttpGet("{id}")]
        public IActionResult GetStudent(int id)
        {
            var student =
                students.FirstOrDefault(s => s.Id == id);

            if (student == null)
            {
                return NotFound();
            }

            return Ok(student);
        }

        // POST: api/students
        [HttpPost]
        public IActionResult CreateStudent(Student student)
        {
            student.Id = students.Count + 1;

            students.Add(student);

            return CreatedAtAction(
                nameof(GetStudent),
                new { id = student.Id },
                student
            );
        }

        // PUT: api/students/1
        [HttpPut("{id}")]
        public IActionResult UpdateStudent(
            int id,
            Student updatedStudent)
        {
            var student =
                students.FirstOrDefault(s => s.Id == id);

            if (student == null)
            {
                return NotFound();
            }

            student.Name = updatedStudent.Name;
            student.Course = updatedStudent.Course;
            student.Age = updatedStudent.Age;

            return Ok(student);
        }

        // DELETE: api/students/1
        [HttpDelete("{id}")]
        public IActionResult DeleteStudent(int id)
        {
            var student =
                students.FirstOrDefault(s => s.Id == id);

            if (student == null)
            {
                return NotFound();
            }

            students.Remove(student);

            return NoContent();
        }
    }
}
```

---

# 6. Program.cs

Open:

```text
Program.cs
```

Use:

```csharp
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddOpenApi();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.MapControllers();

app.Run();
```

### Important

Depending on the Web API template in your Visual Studio installation, OpenAPI/Swagger setup may be slightly different.

If your template already generated:

```csharp
builder.Services.AddOpenApi();
```

and:

```csharp
app.MapOpenApi();
```

keep them.

If your practical specifically requires the **Swagger UI** (`/swagger`), use the Swashbuckle setup below instead.

---

# 7. If Swagger UI Is Not Available

Open:

**Tools → NuGet Package Manager → Package Manager Console**

Install:

```powershell
Install-Package Swashbuckle.AspNetCore
```

Then use this `Program.cs`:

```csharp
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapControllers();

app.Run();
```

For your practical, I recommend this **Swashbuckle version** because it gives the familiar:

```text
/swagger
```

Swagger UI.

---

# 8. Final Project Structure

Your project should look like:

```text
StudentRESTAPI
│
├── Controllers
│   └── StudentsController.cs
│
├── Models
│   └── Student.cs
│
├── Program.cs
│
├── appsettings.json
│
└── StudentRESTAPI.csproj
```

---

# 9. Run the Application

Press:

```text
Ctrl + F5
```

If using Swagger UI, open:

```text
/swagger
```

You should see:

```text
Students
```

with:

```text
GET     /api/Students
GET     /api/Students/{id}
POST    /api/Students
PUT     /api/Students/{id}
DELETE  /api/Students/{id}
```

---

# 10. Test GET — All Students

In Swagger:

```text
GET /api/Students
```

Click:

**Try it out**

Then:

**Execute**

Expected response:

```json
[
  {
    "id": 1,
    "name": "Rahul",
    "course": "MCA",
    "age": 22
  },
  {
    "id": 2,
    "name": "Priya",
    "course": "MCA",
    "age": 21
  }
]
```

Status:

```text
200 OK
```

---

# 11. Test GET — Student by ID

Select:

```text
GET /api/Students/{id}
```

Click:

**Try it out**

Enter:

```text
1
```

Click:

**Execute**

Expected:

```json
{
  "id": 1,
  "name": "Rahul",
  "course": "MCA",
  "age": 22
}
```

Status:

```text
200 OK
```

---

## Test a student that doesn't exist

Enter:

```text
10
```

Execute.

Expected:

```text
404 Not Found
```

Because student ID `10` does not exist.

---

# 12. Test POST — Create Student

Select:

```text
POST /api/Students
```

Click:

**Try it out**

Enter:

```json
{
  "name": "Amit",
  "course": "MCA",
  "age": 23
}
```

Click:

**Execute**

Expected:

```json
{
  "id": 3,
  "name": "Amit",
  "course": "MCA",
  "age": 23
}
```

Status:

```text
201 Created
```

### Why 201?

Because a new resource was successfully created.

---

# 13. Test GET Again

Now execute:

```text
GET /api/Students
```

You should see:

```json
[
  {
    "id": 1,
    "name": "Rahul",
    "course": "MCA",
    "age": 22
  },
  {
    "id": 2,
    "name": "Priya",
    "course": "MCA",
    "age": 21
  },
  {
    "id": 3,
    "name": "Amit",
    "course": "MCA",
    "age": 23
  }
]
```

---

# 14. Test PUT — Update Student

Select:

```text
PUT /api/Students/{id}
```

Click:

**Try it out**

Enter ID:

```text
1
```

Request body:

```json
{
  "name": "Rahul Sharma",
  "course": "MCA",
  "age": 23
}
```

Click:

**Execute**

Expected:

```json
{
  "id": 1,
  "name": "Rahul Sharma",
  "course": "MCA",
  "age": 23
}
```

Status:

```text
200 OK
```

---

# 15. Test DELETE

Select:

```text
DELETE /api/Students/{id}
```

Click:

**Try it out**

Enter:

```text
2
```

Click:

**Execute**

Expected status:

```text
204 No Content
```

Student `2` has been deleted.

---

# 16. Verify DELETE

Run:

```text
GET /api/Students
```

Now student `2` should not appear.

You should have something like:

```json
[
  {
    "id": 1,
    "name": "Rahul Sharma",
    "course": "MCA",
    "age": 23
  },
  {
    "id": 3,
    "name": "Amit",
    "course": "MCA",
    "age": 23
  }
]
```

---

# 17. REST API Table — Learn This

| HTTP Method | URL | Operation | Status |
|---|---|---|---|
| GET | `/api/students` | Get all students | 200 |
| GET | `/api/students/1` | Get student | 200 |
| POST | `/api/students` | Create student | 201 |
| PUT | `/api/students/1` | Update student | 200 |
| DELETE | `/api/students/1` | Delete student | 204 |
| GET | `/api/students/10` | Student not found | 404 |

---

# 18. Important Code for Viva

### `[ApiController]`

```csharp
[ApiController]
```

Indicates that this class is an API controller and enables API-specific behavior.

---

### `[Route("api/[controller]")]`

```csharp
[Route("api/[controller]")]
```

Defines the URL.

Because the controller is:

```text
StudentsController
```

the route becomes:

```text
/api/Students
```

---

### GET

```csharp
[HttpGet]
```

Used to retrieve data.

---

### GET by ID

```csharp
[HttpGet("{id}")]
```

Example:

```text
/api/Students/1
```

---

### POST

```csharp
[HttpPost]
```

Used to create a new student.

---

### PUT

```csharp
[HttpPut("{id}")]
```

Used to update an existing student.

---

### DELETE

```csharp
[HttpDelete("{id}")]
```

Used to delete a student.

---

# 19. Important HTTP Status Codes

### 200 OK

Request was successful.

```csharp
return Ok(student);
```

### 201 Created

New resource was created.

```csharp
return CreatedAtAction(...);
```

### 204 No Content

Request succeeded but there is no response body.

```csharp
return NoContent();
```

### 404 Not Found

Requested resource does not exist.

```csharp
return NotFound();
```

---

# 20. What is REST?

**REST** stands for:

> **Representational State Transfer**

It is an architectural style for designing web services.

In our application:

```text
Student = Resource
```

We use HTTP methods to perform operations:

```text
GET     → Read
POST    → Create
PUT     → Update
DELETE  → Delete
```

Easy way to remember for viva:

```text
GET     → Give me data
POST    → Create data
PUT     → Change data
DELETE  → Remove data
```

---

# 21. One Important Point for Your Practical

This version stores students in:

```csharp
private static readonly List<Student> students
```

So **there is no database** in this practical.

The data exists only while the application is running.

If you stop and restart the application, it returns to:

```text
1 → Rahul
2 → Priya
```

This is actually useful for the practical because you don't need SQL Server or Entity Framework.

### Final practical flow

```text
Swagger
   │
   ├── GET     → Read students
   │
   ├── POST    → Add student
   │
   ├── PUT     → Update student
   │
   └── DELETE  → Delete student
```

This is the complete **Practical No. 8 RESTful Student Service** setup for Visual Studio.