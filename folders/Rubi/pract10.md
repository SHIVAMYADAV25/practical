# Practical No. 10 — Razor Pages and Tag Helpers

We’ll make this in **Visual Studio 2026** using **ASP.NET Core Web App (Razor Pages)**. No database is required.

The application will:

- Create a Razor Pages application
- Create a `Student` model
- Create a student registration form
- Use Razor Pages `OnGet()` and `OnPost()`
- Use **Tag Helpers**
- Display submitted student information
- Use validation Tag Helpers

---

# 1. Create the Project

Open **Visual Studio 2026**.

Select:

> **Create a new project**

Search:

```text
ASP.NET Core Web App
```

Select:

> **ASP.NET Core Web App (Razor Pages)**

Click **Next**.

### Project name

```text
RazorStudentApp
```

Click **Next**.

### Additional Information

Select:

```text
Framework: .NET 10.0
Authentication Type: None
Configure for HTTPS: ✓
Enable Docker: ✗
```

Click:

**Create**

---

# 2. Initial Project Structure

After creating the project, you should have something similar to:

```text
RazorStudentApp
│
├── Pages
│   ├── Index.cshtml
│   ├── Index.cshtml.cs
│   ├── Privacy.cshtml
│   ├── Privacy.cshtml.cs
│   ├── Error.cshtml
│   ├── Error.cshtml.cs
│   ├── _ViewImports.cshtml
│   └── _ViewStart.cshtml
│
├── wwwroot
│
├── Program.cs
│
├── appsettings.json
└── RazorStudentApp.csproj
```

We will create:

```text
Models
└── Student.cs
```

---

# 3. Create Models Folder

Right-click the project:

```text
RazorStudentApp
```

Select:

**Add → New Folder**

Name:

```text
Models
```

---

# 4. Create Student.cs

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

Replace the complete file with:

```csharp
namespace RazorStudentApp.Models
{
    public class Student
    {
        public int StudentId { get; set; }

        public string Name { get; set; } = string.Empty;

        public string Email { get; set; } = string.Empty;

        public string Course { get; set; } = string.Empty;
    }
}
```

---

# 5. Replace Program.cs

Open:

```text
Program.cs
```

Delete everything and paste:

```csharp
var builder = WebApplication.CreateBuilder(args);

// Add Razor Pages services
builder.Services.AddRazorPages();

var app = builder.Build();

// Configure the HTTP request pipeline

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();

app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

// Map Razor Pages
app.MapRazorPages();

app.Run();
```

The important Razor Pages configuration is:

```csharp
builder.Services.AddRazorPages();
```

and:

```csharp
app.MapRazorPages();
```

---

# 6. Replace Index.cshtml.cs

Go to:

```text
Pages
└── Index.cshtml.cs
```

Delete everything.

Paste:

```csharp
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using RazorStudentApp.Models;

namespace RazorStudentApp.Pages
{
    public class IndexModel : PageModel
    {
        [BindProperty]
        public Student Student { get; set; } = new Student();

        public bool Submitted { get; set; }

        public void OnGet()
        {
        }

        public void OnPost()
        {
            Submitted = true;
        }
    }
}
```

---

# 7. Understand Index.cshtml.cs

There are three important parts.

### Student property

```csharp
[BindProperty]
public Student Student { get; set; } = new Student();
```

This connects the HTML form fields to the `Student` object.

### OnGet()

```csharp
public void OnGet()
{
}
```

Runs when the page is opened using GET.

### OnPost()

```csharp
public void OnPost()
{
    Submitted = true;
}
```

Runs when the registration form is submitted.

---

# 8. Replace Index.cshtml

Go to:

```text
Pages
└── Index.cshtml
```

Delete everything.

Paste:

```html
@page
@model IndexModel

@{
    ViewData["Title"] = "Student Registration";
}

<div class="container mt-5">

    <div class="row justify-content-center">

        <div class="col-md-6">

            <div class="card shadow">

                <div class="card-header bg-primary text-white">

                    <h3 class="text-center mb-0">
                        Student Registration
                    </h3>

                </div>

                <div class="card-body">

                    <form method="post">

                        <!-- Student ID -->

                        <div class="mb-3">

                            <label asp-for="Student.StudentId"
                                   class="form-label">
                                Student ID
                            </label>

                            <input asp-for="Student.StudentId"
                                   class="form-control"
                                   placeholder="Enter Student ID" />

                            <span asp-validation-for="Student.StudentId"
                                  class="text-danger">
                            </span>

                        </div>


                        <!-- Student Name -->

                        <div class="mb-3">

                            <label asp-for="Student.Name"
                                   class="form-label">
                                Student Name
                            </label>

                            <input asp-for="Student.Name"
                                   class="form-control"
                                   placeholder="Enter Student Name" />

                            <span asp-validation-for="Student.Name"
                                  class="text-danger">
                            </span>

                        </div>


                        <!-- Email -->

                        <div class="mb-3">

                            <label asp-for="Student.Email"
                                   class="form-label">
                                Email
                            </label>

                            <input asp-for="Student.Email"
                                   class="form-control"
                                   placeholder="Enter Email" />

                            <span asp-validation-for="Student.Email"
                                  class="text-danger">
                            </span>

                        </div>


                        <!-- Course -->

                        <div class="mb-3">

                            <label asp-for="Student.Course"
                                   class="form-label">
                                Course
                            </label>

                            <select asp-for="Student.Course"
                                    class="form-select">

                                <option value="">
                                    -- Select Course --
                                </option>

                                <option value="BCA">
                                    BCA
                                </option>

                                <option value="BSc IT">
                                    BSc IT
                                </option>

                                <option value="BSc Data Science">
                                    BSc Data Science
                                </option>

                                <option value="MSc IT">
                                    MSc IT
                                </option>

                            </select>

                            <span asp-validation-for="Student.Course"
                                  class="text-danger">
                            </span>

                        </div>


                        <!-- Submit Button -->

                        <div class="text-center">

                            <button type="submit"
                                    class="btn btn-primary">
                                Register Student
                            </button>

                            <button type="reset"
                                    class="btn btn-secondary">
                                Clear
                            </button>

                        </div>

                    </form>

                </div>

            </div>


            <!-- Display Submitted Data -->

            @if (Model.Submitted)
            {
                <div class="card mt-4 shadow">

                    <div class="card-header bg-success text-white">

                        <h4 class="mb-0">
                            Registration Successful
                        </h4>

                    </div>

                    <div class="card-body">

                        <p>
                            <strong>Student ID:</strong>
                            @Model.Student.StudentId
                        </p>

                        <p>
                            <strong>Name:</strong>
                            @Model.Student.Name
                        </p>

                        <p>
                            <strong>Email:</strong>
                            @Model.Student.Email
                        </p>

                        <p>
                            <strong>Course:</strong>
                            @Model.Student.Course
                        </p>

                    </div>

                </div>
            }

        </div>

    </div>

</div>


@section Scripts
{
    <partial name="_ValidationScriptsPartial" />
}
```

---

# 9. Check _ViewImports.cshtml

Open:

```text
Pages
└── _ViewImports.cshtml
```

Make sure it contains:

```csharp
@using RazorStudentApp
@using RazorStudentApp.Models
@namespace RazorStudentApp.Pages
@addTagHelper *, Microsoft.AspNetCore.Mvc.TagHelpers
```

### Most important line

```csharp
@addTagHelper *, Microsoft.AspNetCore.Mvc.TagHelpers
```

This enables the ASP.NET Core **Tag Helpers** used in the form.

---

# 10. What Are Tag Helpers?

You will see these in `Index.cshtml`:

```html
<label asp-for="Student.Name"></label>
```

```html
<input asp-for="Student.Name" />
```

```html
<select asp-for="Student.Course"></select>
```

```html
<span asp-validation-for="Student.Name"></span>
```

These are **Tag Helpers**.

They allow server-side C# model information to work with HTML elements.

---

# 11. Important Tag Helpers for Viva

### `asp-for`

```html
<input asp-for="Student.Name" />
```

Connects the HTML input to:

```csharp
Student.Name
```

---

### `asp-for` on label

```html
<label asp-for="Student.Name">
```

Generates a label associated with the model property.

---

### `asp-validation-for`

```html
<span asp-validation-for="Student.Name">
```

Displays validation errors for that property.

---

### `<partial>`

```html
<partial name="_ValidationScriptsPartial" />
```

Loads the validation partial view.

---

# 12. Build the Project

Press:

```text
Ctrl + Shift + B
```

or:

**Build → Build Solution**

You should get:

```text
Build succeeded.
```

---

# 13. Run the Application

Press:

```text
F5
```

or:

```text
Ctrl + F5
```

You can also click:

```text
▶
```

Visual Studio will open the application in the browser.

---

# 14. Enter Test Data

Use:

### Student ID

```text
101
```

### Student Name

```text
Rahul Patil
```

### Email

```text
rahul@gmail.com
```

### Course

Select:

```text
BCA
```

Then click:

```text
Register Student
```

---

# 15. Expected Output

You should get:

```text
Registration Successful

Student ID: 101

Name: Rahul Patil

Email: rahul@gmail.com

Course: BCA
```

---

# 16. Final Project Structure

Your important files should be:

```text
RazorStudentApp
│
├── Models
│   └── Student.cs
│
├── Pages
│   ├── Index.cshtml
│   ├── Index.cshtml.cs
│   ├── _ViewImports.cshtml
│   └── _ViewStart.cshtml
│
├── wwwroot
│
├── Program.cs
│
├── appsettings.json
│
└── RazorStudentApp.csproj
```

---

# 17. Understand the Flow

Remember this diagram for your practical:

```text
Browser
   │
   │ GET
   ↓
Index.cshtml
   │
   ↓
Index.cshtml.cs
   │
   │ OnGet()
   ↓
Display Form
```

When you submit:

```text
Form
  │
  │ POST
  ↓
OnPost()
  │
  ↓
[BindProperty]
  │
  ↓
Student object
  │
  ↓
Submitted = true
  │
  ↓
Display Student Information
```

---

# 18. Razor Pages vs MVC

This is a very common viva question.

### MVC

```text
Controller
    ↓
Action
    ↓
View
```

Example:

```text
StudentController
       ↓
Index()
       ↓
Views/Student/Index.cshtml
```

### Razor Pages

```text
Index.cshtml
      +
Index.cshtml.cs
```

The `.cshtml` file contains the UI, while `.cshtml.cs` contains the PageModel/code-behind.

---

# 19. Important Viva Questions

### Q1. What is Razor Pages?

Razor Pages is a page-focused programming model in ASP.NET Core for building web applications.

---

### Q2. What is the extension of a Razor Page?

```text
.cshtml
```

---

### Q3. What is `Index.cshtml.cs`?

It is the **PageModel/code-behind file** associated with `Index.cshtml`.

---

### Q4. What is `PageModel`?

`PageModel` contains the logic and data used by a Razor Page.

Example:

```csharp
public class IndexModel : PageModel
```

---

### Q5. What is `OnGet()`?

It executes when the Razor Page receives a **GET request**.

```csharp
public void OnGet()
{
}
```

---

### Q6. What is `OnPost()`?

It executes when the form is submitted using **POST**.

```csharp
public void OnPost()
{
    Submitted = true;
}
```

---

### Q7. What is `[BindProperty]`?

It binds form data to a C# property.

```csharp
[BindProperty]
public Student Student { get; set; }
```

---

### Q8. What are Tag Helpers?

Tag Helpers allow server-side ASP.NET Core functionality to be applied to HTML elements.

Example:

```html
<input asp-for="Student.Name" />
```

---

### Q9. What does `asp-for` do?

It connects an HTML element with a model property.

```html
<input asp-for="Student.Email" />
```

connects the input to:

```csharp
Student.Email
```

---

### Q10. What does `asp-validation-for` do?

It displays validation messages for a particular model property.

```html
<span asp-validation-for="Student.Name"></span>
```

---

### Q11. Which line enables Tag Helpers?

```csharp
@addTagHelper *, Microsoft.AspNetCore.Mvc.TagHelpers
```

---

### Q12. What is `@page`?

```csharp
@page
```

makes the `.cshtml` file a Razor Page that can handle requests directly.

---

### Q13. Is a database required in this practical?

**No.**

The provided practical uses an in-memory `Student` object and does not require a database.

---

## ⭐ Most important things to remember

For the practical, memorize these:

```text
Razor Pages
     ↓
.cshtml + .cshtml.cs
```

```text
GET  → OnGet()
POST → OnPost()
```

```text
[BindProperty]
→ binds form data to C# property
```

```text
asp-for
→ connects HTML element to model property
```

```text
asp-validation-for
→ displays validation message
```

```text
@addTagHelper *, Microsoft.AspNetCore.Mvc.TagHelpers
→ enables ASP.NET Core Tag Helpers
```

And the core flow is:

```text
HTML Form
   ↓
POST
   ↓
OnPost()
   ↓
[BindProperty]
   ↓
Student object
   ↓
Submitted = true
   ↓
Display result
```

This completes **Practical No. 10 — Razor Pages and Tag Helpers** based on the practical you provided.