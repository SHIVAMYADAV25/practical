Yes. Let's make the **SecurityDemo practical from zero**, properly and consistently.

We'll use:

- **ASP.NET Core MVC**
- **.NET 8**
- **ASP.NET Core Identity**
- **SQLite**
- **Admin/User roles**
- **Login/Register**
- **Role-protected Admin and User pages**

---

# 1. Create Project

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
Project Name: SecurityDemo
Solution Name: SecurityDemo
```

Click **Next**.

Select:

```text
Framework: .NET 8.0
Authentication type: Individual Accounts
Configure for HTTPS: ✓
Docker: ☐
```

Click **Create**.

> **Important:** Select **Individual Accounts**. Do not select `None`.

---

# 2. Install Packages Properly

Open:

```text
Tools
 ↓
NuGet Package Manager
 ↓
Package Manager Console
```

Make sure the top dropdown says:

```text
Default project: SecurityDemo
```

Install these **exact .NET 8 versions**.

### SQLite

```powershell
Install-Package Microsoft.EntityFrameworkCore.Sqlite -Version 8.0.19
```

### EF Core Tools

```powershell
Install-Package Microsoft.EntityFrameworkCore.Tools -Version 8.0.19
```

### Identity EF Core

```powershell
Install-Package Microsoft.AspNetCore.Identity.EntityFrameworkCore -Version 8.0.19
```

### Identity UI

```powershell
Install-Package Microsoft.AspNetCore.Identity.UI -Version 8.0.19
```

### Design

```powershell
Install-Package Microsoft.EntityFrameworkCore.Design -Version 8.0.19
```

Then:

```text
Build
 ↓
Rebuild Solution
```

You must get:

```text
Build succeeded.
```

---

# 3. Final Project Structure

We will have:

```text
SecurityDemo
│
├── Areas
│   └── Identity
│       └── Pages
│
├── Controllers
│   ├── HomeController.cs
│   ├── AdminController.cs
│   └── UserController.cs
│
├── Data
│   └── ApplicationDbContext.cs
│
├── Models
│   └── ...
│
├── Views
│   ├── Home
│   │   └── Index.cshtml
│   │
│   ├── Admin
│   │   └── Index.cshtml
│   │
│   ├── User
│   │   └── Index.cshtml
│   │
│   └── Shared
│
├── Migrations
│
├── appsettings.json
└── Program.cs
```

---

# 4. ApplicationDbContext.cs

### File Path

```text
SecurityDemo
└── Data
    └── ApplicationDbContext.cs
```

If `ApplicationDbContext.cs` already exists, **open it and replace the code**.

If it doesn't exist:

```text
Right-click Data
    ↓
Add
    ↓
Class
    ↓
ApplicationDbContext.cs
```

### Code

```csharp
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace SecurityDemo.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(
            DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
    }
}
```

---

# 5. appsettings.json

### File Path

```text
SecurityDemo
└── appsettings.json
```

Replace with:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Data Source=securitydemo.db"
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

---

# 6. Program.cs

### File Path

```text
SecurityDemo
└── Program.cs
```

Replace everything with:

```csharp
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using SecurityDemo.Data;

var builder = WebApplication.CreateBuilder(args);

// MVC
builder.Services.AddControllersWithViews();

// Database
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlite(
        builder.Configuration.GetConnectionString("DefaultConnection")
        ?? throw new InvalidOperationException(
            "Connection string 'DefaultConnection' not found."
        )
    )
);

// Identity
builder.Services
    .AddDefaultIdentity<IdentityUser>(options =>
    {
        options.SignIn.RequireConfirmedAccount = false;
    })
    .AddRoles<IdentityRole>()
    .AddEntityFrameworkStores<ApplicationDbContext>();

// Session is not required for Identity
// but can be added if needed later.

var app = builder.Build();


// Middleware

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();

app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication();

app.UseAuthorization();


// MVC Route

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}"
);

// Identity pages
app.MapRazorPages();


// Create Roles and Users
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;

    var roleManager =
        services.GetRequiredService<RoleManager<IdentityRole>>();

    var userManager =
        services.GetRequiredService<UserManager<IdentityUser>>();


    // -----------------------------
    // Create Roles
    // -----------------------------

    string[] roles =
    {
        "Admin",
        "User"
    };

    foreach (string role in roles)
    {
        if (!await roleManager.RoleExistsAsync(role))
        {
            await roleManager.CreateAsync(
                new IdentityRole(role)
            );
        }
    }


    // -----------------------------
    // Create Admin
    // -----------------------------

    string adminEmail = "admin@gmail.com";
    string adminPassword = "Admin@123";

    var adminUser =
        await userManager.FindByEmailAsync(adminEmail);

    if (adminUser == null)
    {
        adminUser = new IdentityUser
        {
            UserName = adminEmail,
            Email = adminEmail,
            EmailConfirmed = true
        };

        var result =
            await userManager.CreateAsync(
                adminUser,
                adminPassword
            );

        if (result.Succeeded)
        {
            await userManager.AddToRoleAsync(
                adminUser,
                "Admin"
            );
        }
    }


    // -----------------------------
    // Create Normal User
    // -----------------------------

    string userEmail = "user@gmail.com";
    string userPassword = "User@123";

    var normalUser =
        await userManager.FindByEmailAsync(userEmail);

    if (normalUser == null)
    {
        normalUser = new IdentityUser
        {
            UserName = userEmail,
            Email = userEmail,
            EmailConfirmed = true
        };

        var result =
            await userManager.CreateAsync(
                normalUser,
                userPassword
            );

        if (result.Succeeded)
        {
            await userManager.AddToRoleAsync(
                normalUser,
                "User"
            );
        }
    }
}

app.Run();
```

---

# 7. Build Before Migration

Do:

```text
Build
 ↓
Rebuild Solution
```

Or:

```text
Ctrl + Shift + B
```

You must get:

```text
Build succeeded.
```

**Only after this continue to migrations.**

---

# 8. Create Migration

Open:

```text
Tools
 ↓
NuGet Package Manager
 ↓
Package Manager Console
```

Make sure:

```text
Default project: SecurityDemo
```

Run:

```powershell
Add-Migration InitialIdentity
```

Expected:

```text
Build started...
Build succeeded.
```

Then migration files appear:

```text
SecurityDemo
└── Migrations
    ├── xxxxxxxxxxxxxx_InitialIdentity.cs
    ├── xxxxxxxxxxxxxx_InitialIdentity.Designer.cs
    └── ApplicationDbContextModelSnapshot.cs
```

---

# 9. Create Database

Run:

```powershell
Update-Database
```

Expected:

```text
Build started...
Build succeeded.
...
Done.
```

A database file should appear:

```text
SecurityDemo
└── securitydemo.db
```

---

# 10. Create AdminController

### File Path

```text
SecurityDemo
└── Controllers
    └── AdminController.cs
```

### Create

```text
Right-click Controllers
        ↓
Add
        ↓
Controller
        ↓
MVC Controller - Empty
        ↓
Name: AdminController
        ↓
Add
```

### Code

```csharp
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace SecurityDemo.Controllers
{
    [Authorize(Roles = "Admin")]
    public class AdminController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
```

---

# 11. Create Admin View

Create folder:

```text
Views
└── Admin
```

### Create folder

```text
Right-click Views
    ↓
Add
    ↓
New Folder
    ↓
Admin
```

Then:

```text
Right-click Admin
    ↓
Add
    ↓
Razor View
    ↓
Index.cshtml
```

### `Views/Admin/Index.cshtml`

```html
@{
    ViewData["Title"] = "Admin Dashboard";
}

<h1>Admin Dashboard</h1>

<h3>Welcome Admin!</h3>

<p>
    Only users with the Admin role can access this page.
</p>
```

---

# 12. Create UserController

### File Path

```text
SecurityDemo
└── Controllers
    └── UserController.cs
```

Create:

```text
Right-click Controllers
    ↓
Add
    ↓
Controller
    ↓
MVC Controller - Empty
    ↓
UserController
```

### Code

```csharp
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace SecurityDemo.Controllers
{
    [Authorize(Roles = "User")]
    public class UserController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
```

---

# 13. Create User View

Create:

```text
Views
└── User
    └── Index.cshtml
```

### Create Folder

```text
Right-click Views
    ↓
Add
    ↓
New Folder
    ↓
User
```

Then:

```text
Right-click User
    ↓
Add
    ↓
Razor View
    ↓
Index.cshtml
```

### Code

```html
@{
    ViewData["Title"] = "User Dashboard";
}

<h1>User Dashboard</h1>

<h3>Welcome User!</h3>

<p>
    Only users with the User role can access this page.
</p>
```

---

# 14. Home Page

You can leave the generated:

```text
Views/Home/Index.cshtml
```

as it is.

Or replace it with:

```html
@{
    ViewData["Title"] = "Security Demo";
}

<h1>Security Demo</h1>

<p>ASP.NET Core Identity Security Application</p>

<br />

<a href="/Admin">
    Admin Dashboard
</a>

<br />
<br />

<a href="/User">
    User Dashboard
</a>

<br />
<br />

<a href="/Identity/Account/Login">
    Login
</a>

<br />
<br />

<a href="/Identity/Account/Register">
    Register
</a>
```

---

# 15. Final Structure

```text
SecurityDemo
│
├── Areas
│   └── Identity
│       └── Pages
│
├── Controllers
│   ├── HomeController.cs
│   ├── AdminController.cs
│   └── UserController.cs
│
├── Data
│   └── ApplicationDbContext.cs
│
├── Migrations
│   ├── ...InitialIdentity.cs
│   ├── ...InitialIdentity.Designer.cs
│   └── ApplicationDbContextModelSnapshot.cs
│
├── Models
│
├── Views
│   ├── Home
│   │   └── Index.cshtml
│   │
│   ├── Admin
│   │   └── Index.cshtml
│   │
│   ├── User
│   │   └── Index.cshtml
│   │
│   └── Shared
│
├── wwwroot
│
├── appsettings.json
├── Program.cs
└── securitydemo.db
```

---

# 16. Run

Press:

```text
Ctrl + F5
```

---

# 17. Test Admin

Go to:

```text
/Identity/Account/Login
```

Use:

```text
Email: admin@gmail.com
Password: Admin@123
```

Then:

```text
/Admin
```

Should show:

```text
Admin Dashboard

Welcome Admin!
```

---

# 18. Test User

Login with:

```text
Email: user@gmail.com
Password: User@123
```

Then:

```text
/User
```

Should show:

```text
User Dashboard

Welcome User!
```

---

# 19. Test Authorization

While logged in as the normal user:

```text
/Admin
```

The user should **not** be authorized for the Admin action.

While logged in as Admin:

```text
/User
```

The Admin doesn't have the `User` role, so this is also role-protected.

---

# 20. Important Commands

### Install packages

```powershell
Install-Package Microsoft.EntityFrameworkCore.Sqlite -Version 8.0.19
Install-Package Microsoft.EntityFrameworkCore.Tools -Version 8.0.19
Install-Package Microsoft.AspNetCore.Identity.EntityFrameworkCore -Version 8.0.19
Install-Package Microsoft.AspNetCore.Identity.UI -Version 8.0.19
Install-Package Microsoft.EntityFrameworkCore.Design -Version 8.0.19
```

### Migration

```powershell
Add-Migration InitialIdentity
```

### Database

```powershell
Update-Database
```

### Build

```powershell
dotnet build
```

### Run

```powershell
dotnet run
```

---

## If you already have the failed `InitialIdentity` migration

Because your screenshot showed:

```text
PM> Add-Migration InitialIdentity
Build started...
Build failed.
```

**Do not create another migration with a different name yet.**

First make the files above exactly as shown, then:

```text
Build → Rebuild Solution
```

If:

```text
Build succeeded.
```

run:

```powershell
Add-Migration InitialIdentity
```

then:

```powershell
Update-Database
```

This setup keeps **all EF Core packages at 8.0.19**, matching your `.NET 8` project, instead of accidentally installing EF Core 10.


Install these exact .NET 8 versions.
SQLite
Install-Package Microsoft.EntityFrameworkCore.Sqlite -Version 8.0.19

EF Core Tools
Install-Package Microsoft.EntityFrameworkCore.Tools -Version 8.0.19

Identity EF Core
Install-Package Microsoft.AspNetCore.Identity.EntityFrameworkCore -Version 8.0.19

Identity UI
Install-Package Microsoft.AspNetCore.Identity.UI -Version 8.0.19

Design
Install-Package Microsoft.EntityFrameworkCore.Design -Version 8.0.19