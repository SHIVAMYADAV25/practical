# Practical No. 9 — Creating Applications with Controllers and Views using ASP.NET Core MVC

We will make this **exactly in Visual Studio 2026 using ASP.NET Core MVC**.

The application will:

- Create an MVC project
- Create `StudentController`
- Create `Index()` action
- Create `Index.cshtml`
- Pass student data from Controller → View using `ViewBag`
- Create `Details()` action
- Create `Details.cshtml`
- Display student information

This follows the practical file you provided. Pasted text

---

# 1. Create the Project

Open **Visual Studio 2026**.

Select:

> **Create a new project**

Search:

```text
ASP.NET Core Web App (Model-View-Controller)
```

Select it and click **Next**.

### Project Name

```text
StudentMVCApp
```

Click **Next**.

---

# 2. Configure Project

Select:

```text
Framework: .NET 8.0
Authentication Type: None
Configure for HTTPS: ✓
Enable Docker: ✗
```

Then click:

**Create**

The practical specifies using the MVC project template and the latest stable .NET available in the installed Visual Studio. Pasted text

---

# 3. Initial Project Structure

You should have:

```text
StudentMVCApp
│
├── Controllers
│   └── HomeController.cs
│
├── Models
│
├── Views
│   ├── Home
│   │   ├── Index.cshtml
│   │   └── Privacy.cshtml
│   │
│   └── Shared
│       ├── _Layout.cshtml
│       └── _ValidationScriptsPartial.cshtml
│
├── wwwroot
│
├── Program.cs
└── StudentMVCApp.csproj
```

---

# 4. Create StudentController

Go to:

```text
Controllers
```

Right-click:

**Add → Controller**

Select:

> **MVC Controller - Empty**

Click **Add**.

Enter:

```text
StudentController
```

Click **Add**.

The file will be:

```text
Controllers/StudentController.cs
```

The practical specifically uses `StudentController` and two actions: `Index()` and `Details()`. Pasted text

---

# 5. StudentController.cs

Open:

```text
Controllers/StudentController.cs
```

Replace everything with:

```csharp
using Microsoft.AspNetCore.Mvc;

namespace StudentMVCApp.Controllers
{
    public class StudentController : Controller
    {
        public IActionResult Index()
        {
            ViewBag.RollNo = 101;
            ViewBag.Name = "Rahul Sharma";
            ViewBag.Course = "B.Sc. Computer Applications";
            ViewBag.Marks = 85;

            return View();
        }

        public IActionResult Details()
        {
            ViewBag.RollNo = 101;
            ViewBag.Name = "Rahul Sharma";
            ViewBag.Course = "B.Sc. Computer Applications";
            ViewBag.Email = "rahul@example.com";
            ViewBag.City = "Mumbai";
            ViewBag.Marks = 85;

            return View();
        }
    }
}
```

---

# 6. Create Student View Folder

Go to:

```text
Views
```

Right-click:

**Add → New Folder**

Name:

```text
Student
```

So now:

```text
Views
│
├── Home
├── Shared
└── Student
```

### Important

The controller is:

```text
StudentController
```

Therefore the View folder must be:

```text
Views/Student
```

**Not:**

```text
Views/Students
```

and not:

```text
Views/StudentController
```

The MVC convention maps `StudentController` to `Views/Student`. Pasted text

---

# 7. Create Index.cshtml

Right-click:

```text
Views/Student
```

Select:

**Add → New Item**

Search:

```text
Razor View
```

Create:

```text
Index.cshtml
```

The path must be:

```text
Views/Student/Index.cshtml
```

---

# 8. Index.cshtml Code

Replace everything with:

```html
@{
    ViewData["Title"] = "Student Information";
}

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />

    <title>Student Information</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
            margin: 40px;
        }

        .container {
            width: 500px;
            margin: auto;
            background-color: white;
            padding: 25px;
            border-radius: 10px;
            box-shadow: 0 0 10px #cccccc;
        }

        h1 {
            text-align: center;
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        td {
            padding: 10px;
            border: 1px solid #cccccc;
        }

        .label {
            font-weight: bold;
        }

        .button {
            display: block;
            width: 150px;
            margin: 20px auto 0;
            padding: 10px;
            text-align: center;
            background-color: #333333;
            color: white;
            text-decoration: none;
            border-radius: 5px;
        }
    </style>
</head>

<body>

    <div class="container">

        <h1>Student Information</h1>

        <table>

            <tr>
                <td class="label">
                    Roll Number
                </td>

                <td>
                    @ViewBag.RollNo
                </td>
            </tr>

            <tr>
                <td class="label">
                    Name
                </td>

                <td>
                    @ViewBag.Name
                </td>
            </tr>

            <tr>
                <td class="label">
                    Course
                </td>

                <td>
                    @ViewBag.Course
                </td>
            </tr>

            <tr>
                <td class="label">
                    Marks
                </td>

                <td>
                    @ViewBag.Marks
                </td>
            </tr>

        </table>

        <a class="button"
           href="/Student/Details">
            View Details
        </a>

    </div>

</body>
</html>
```

The original practical uses `ViewBag` to pass Roll Number, Name, Course and Marks to this view. Pasted text

---

# 9. Create Details.cshtml

Right-click:

```text
Views/Student
```

Select:

**Add → New Item**

Search:

```text
Razor View
```

Create:

```text
Details.cshtml
```

The path should be:

```text
Views/Student/Details.cshtml
```

---

# 10. Details.cshtml Code

Replace everything with:

```html
@{
    ViewData["Title"] = "Student Details";
}

<!DOCTYPE html>
<html>
<head>

    <meta charset="utf-8" />

    <title>Student Details</title>

    <style>

        body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
            margin: 40px;
        }

        .container {
            width: 500px;
            margin: auto;
            background-color: white;
            padding: 25px;
            border-radius: 10px;
            box-shadow: 0 0 10px #cccccc;
        }

        h1 {
            text-align: center;
        }

        p {
            padding: 8px;
            border-bottom: 1px solid #dddddd;
        }

        .label {
            font-weight: bold;
        }

        .back {
            display: block;
            text-align: center;
            margin-top: 20px;
        }

    </style>

</head>

<body>

    <div class="container">

        <h1>Student Details</h1>

        <p>
            <span class="label">
                Roll Number:
            </span>

            @ViewBag.RollNo
        </p>

        <p>
            <span class="label">
                Name:
            </span>

            @ViewBag.Name
        </p>

        <p>
            <span class="label">
                Course:
            </span>

            @ViewBag.Course
        </p>

        <p>
            <span class="label">
                Email:
            </span>

            @ViewBag.Email
        </p>

        <p>
            <span class="label">
                City:
            </span>

            @ViewBag.City
        </p>

        <p>
            <span class="label">
                Marks:
            </span>

            @ViewBag.Marks
        </p>

        <a class="back"
           href="/Student/Index">
            Back to Student Information
        </a>

    </div>

</body>
</html>
```

The Details view displays Roll Number, Name, Course, Email, City and Marks, matching the supplied practical. Pasted text

---

# 11. Check Program.cs

Open:

```text
Program.cs
```

Make sure it contains MVC configuration:

```csharp
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllersWithViews();

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();

app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
```

You don't need to add anything special for this practical.

---

# 12. Final Project Structure

Your final project should look like:

```text
StudentMVCApp
│
├── Controllers
│   ├── HomeController.cs
│   └── StudentController.cs
│
├── Models
│
├── Views
│   │
│   ├── Home
│   │   ├── Index.cshtml
│   │   └── Privacy.cshtml
│   │
│   ├── Student
│   │   ├── Index.cshtml
│   │   └── Details.cshtml
│   │
│   └── Shared
│       ├── _Layout.cshtml
│       └── _ValidationScriptsPartial.cshtml
│
├── wwwroot
│
├── Program.cs
├── appsettings.json
└── StudentMVCApp.csproj
```

This is the same structure specified in the practical. Pasted text

---

# 13. Build the Project

From Visual Studio:

**Build → Build Solution**

or press:

```text
Ctrl + Shift + B
```

Make sure:

```text
Build succeeded
```

---

# 14. Run the Application

Press:

```text
Ctrl + F5
```

or:

```text
F5
```

---

# 15. Open Student Page

If Visual Studio gives you:

```text
https://localhost:7000
```

open:

```text
https://localhost:7000/Student/Index
```

You can also simply use:

```text
https://localhost:7000/Student
```

because `Index` is the default action. Pasted text

---

# 16. Expected Index Output

You will see:

```text
--------------------------------
       Student Information
--------------------------------

Roll Number    101
Name           Rahul Sharma
Course         B.Sc. Computer Applications
Marks          85

       [ View Details ]
--------------------------------
```

---

# 17. Click View Details

Click:

```text
View Details
```

It goes to:

```text
/Student/Details
```

Expected:

```text
--------------------------------
        Student Details
--------------------------------

Roll Number: 101
Name: Rahul Sharma
Course: B.Sc. Computer Applications
Email: rahul@example.com
City: Mumbai
Marks: 85

    Back to Student Information
--------------------------------
```

This is the expected output described in the supplied practical. Pasted text

---

# 18. Understand the Flow

Remember this for your practical:

```text
Browser
   ↓
/Student/Index
   ↓
StudentController
   ↓
Index()
   ↓
ViewBag
   ↓
Views/Student/Index.cshtml
   ↓
HTML
   ↓
Browser
```

For Details:

```text
Browser
   ↓
/Student/Details
   ↓
StudentController
   ↓
Details()
   ↓
ViewBag
   ↓
Views/Student/Details.cshtml
   ↓
HTML
   ↓
Browser
```

The supplied practical describes the same Controller → ViewBag → Razor View → HTML response flow. Pasted text

---

# 19. Viva Questions

### Q1. What is MVC?

**MVC** stands for:

```text
M → Model
V → View
C → Controller
```

---

### Q2. What is a Controller?

A Controller handles HTTP requests and executes action methods.

Example:

```csharp
public IActionResult Index()
```

---

### Q3. What is a View?

A View is a `.cshtml` Razor file used to display the UI.

---

### Q4. Where are Controllers stored?

```text
Controllers
```

---

### Q5. Where are Views stored?

```text
Views
```

---

### Q6. Where does the view for `StudentController` go?

```text
Views/Student
```

---

### Q7. Where does `Index()` look for its View?

```text
Views/Student/Index.cshtml
```

---

### Q8. Where does `Details()` look for its View?

```text
Views/Student/Details.cshtml
```

---

### Q9. What is `IActionResult`?

It represents the result returned by a Controller action.

Example:

```csharp
public IActionResult Index()
```

---

### Q10. What does `return View()` do?

It returns the View associated with the current action.

```csharp
return View();
```

For `Index()`:

```text
Views/Student/Index.cshtml
```

---

### Q11. What is ViewBag?

`ViewBag` is used to pass data from Controller to View.

Controller:

```csharp
ViewBag.Name = "Rahul Sharma";
```

View:

```html
@ViewBag.Name
```

---

### Q12. What is Razor?

Razor allows us to use **C# code inside HTML** in `.cshtml` files.

Example:

```html
<h1>@ViewBag.Name</h1>
```

---

## Most important thing to remember for exam

```text
StudentController
       ↓
Views/Student
       ↓
Index()      → Index.cshtml
Details()    → Details.cshtml
```

And:

```text
Controller
    ↓
ViewBag
    ↓
View
```

That is the core of **Practical No. 9 — Creating Applications with Controllers and Views using ASP.NET Core MVC**.