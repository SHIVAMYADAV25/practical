Yes — here is **Practical 2: CRUD** in the same format as we did for Practical 1 and the Testing Practical: **file path → how to create → exact code → commands → run**.

# Practical No. 2 — Student CRUD Application

## 1. Create Project

Visual Studio:

```text
Create a new project
        ↓
ASP.NET Core Web App (Model-View-Controller)
        ↓
Next
```

Enter:

```text
Project Name: StudentCRUD
Solution Name: StudentCRUD
Framework: .NET 8.0
Authentication: None
Configure for HTTPS: ✓
Docker: ☐
```

Click **Create**.

The practical uses SQL Server LocalDB + Entity Framework Core. Pasted text

---

# 2. Install EF Core Packages

Open:

```text
Tools
 ↓
NuGet Package Manager
 ↓
Package Manager Console
```

Since you are using **.NET 8**, use exact versions:

```powershell
Install-Package Microsoft.EntityFrameworkCore.SqlServer -Version 8.0.19
```

```powershell
Install-Package Microsoft.EntityFrameworkCore.Tools -Version 8.0.19
```

> Don't use `8.*` in Package Manager Console.

---

# 3. Create Student Model

### File Path

```text
StudentCRUD
└── Models
    └── Student.cs
```

### How to create

```text
Right-click Models
 ↓
Add
 ↓
Class
 ↓
Student.cs
 ↓
Add
```

### `Models/Student.cs`

```csharp
using System.ComponentModel.DataAnnotations;

namespace StudentCRUD.Models
{
    public class Student
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; } = "";

        [Required]
        public string Course { get; set; } = "";

        public int Age { get; set; }

        public string Email { get; set; } = "";
    }
}
```

This matches the supplied practical's Student model structure. Pasted text

---

# 4. Create ApplicationDbContext

### File Path

```text
StudentCRUD
└── Models
    └── ApplicationDbContext.cs
```

### How to create

```text
Right-click Models
 ↓
Add
 ↓
Class
 ↓
ApplicationDbContext.cs
 ↓
Add
```

### `Models/ApplicationDbContext.cs`

```csharp
using Microsoft.EntityFrameworkCore;

namespace StudentCRUD.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(
            DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Student> Students { get; set; }
    }
}
```

The supplied practical uses `ApplicationDbContext` as the EF Core database bridge and defines `DbSet<Student>`. Pasted text

---

# 5. Add Connection String

Open:

```text
StudentCRUD
└── appsettings.json
```

Replace with:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=StudentCRUDDB;Trusted_Connection=True;MultipleActiveResultSets=true"
  },

  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },

  "AllowedHosts": "*"
}
```

The supplied practical uses SQL Server LocalDB and a database named `StudentCRUDDB`. Pasted text

---

# 6. Modify Program.cs

### File Path

```text
StudentCRUD
└── Program.cs
```

Open `Program.cs`.

Use:

```csharp
using Microsoft.EntityFrameworkCore;
using StudentCRUD.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllersWithViews();

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("DefaultConnection")));

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

This registers `ApplicationDbContext` with SQL Server. Pasted text

---

# 7. Create Database

Open:

```text
Tools
 ↓
NuGet Package Manager
 ↓
Package Manager Console
```

Run:

```powershell
Add-Migration InitialCreate
```

Then:

```powershell
Update-Database
```

Expected:

```text
Migrations
└── ...
```

And database:

```text
StudentCRUDDB
```

The practical specifically uses `Add-Migration InitialCreate` followed by `Update-Database`. Pasted text

---

# 8. Create CRUD Controller + Views

This is the important part.

### How to create

Right-click:

```text
Controllers
 ↓
Add
 ↓
Controller
```

Select:

```text
MVC Controller with views, using Entity Framework
```

Click **Add**.

---

## Configure

### Model class

Select:

```text
Student
```

### Data context class

Select:

```text
ApplicationDbContext
```

### Controller name

Use:

```text
StudentsController
```

Click:

```text
Add
```

Visual Studio will automatically generate the CRUD controller and views. This is the scaffolding procedure from the practical. Pasted text

---

# 9. Final File Structure

You should now have:

```text
StudentCRUD
│
├── Controllers
│   ├── HomeController.cs
│   └── StudentsController.cs
│
├── Models
│   ├── Student.cs
│   ├── ApplicationDbContext.cs
│   └── ErrorViewModel.cs
│
├── Views
│   ├── Home
│   │   └── ...
│   │
│   ├── Students
│   │   ├── Create.cshtml
│   │   ├── Delete.cshtml
│   │   ├── Details.cshtml
│   │   ├── Edit.cshtml
│   │   └── Index.cshtml
│   │
│   └── Shared
│       └── ...
│
├── Migrations
│   └── ...
│
├── appsettings.json
└── Program.cs
```

The generated `Views/Students` folder should contain `Create`, `Delete`, `Details`, `Edit`, and `Index`. Pasted text

---

# 10. Run

Press:

```text
Ctrl + F5
```

Then open:

```text
https://localhost:XXXX/Students
```

Or simply add:

```text
/Students
```

to your current URL.

---

# 11. Test CRUD

## CREATE

Click:

```text
Create New
```

Enter:

```text
Name: Shivam
Course: BCA
Age: 20
Email: shivam@gmail.com
```

Click:

```text
Create
```

---

## READ

Go to:

```text
/Students
```

You should see:

```text
ID    Name      Course    Age    Email

1     Shivam    BCA       20     shivam@gmail.com
```

---

## UPDATE

Click:

```text
Edit
```

Change:

```text
Age: 20
```

to:

```text
Age: 21
```

Click:

```text
Save
```

---

## DELETE

Click:

```text
Delete
```

Then:

```text
Delete
```

Student will be removed.

---

# 12. CMD Commands

From the project/solution directory:

```cmd
dotnet build
```

Run application:

```cmd
dotnet run
```

EF migration:

```cmd
dotnet ef migrations add InitialCreate
```

Update database:

```cmd
dotnet ef database update
```

If `dotnet ef` is not recognized:

```cmd
dotnet tool install --global dotnet-ef
```

Then:

```cmd
dotnet ef migrations add InitialCreate
```

```cmd
dotnet ef database update
```

---

# 13. What to Remember for Practical

```text
Create MVC Project
        ↓
Student.cs
        ↓
ApplicationDbContext.cs
        ↓
appsettings.json
        ↓
Program.cs
        ↓
Add-Migration InitialCreate
        ↓
Update-Database
        ↓
Scaffold Controller
        ↓
Student + ApplicationDbContext
        ↓
StudentsController
        ↓
Create / Read / Update / Delete
```

### Most important code

```csharp
_context.Add(student);
```

```csharp
_context.Students.ToListAsync();
```

```csharp
_context.Update(student);
```

```csharp
_context.Students.Remove(student);
```

```csharp
await _context.SaveChangesAsync();
```

These are the core CRUD operations used by the generated controller. Pasted text

Drop-Database