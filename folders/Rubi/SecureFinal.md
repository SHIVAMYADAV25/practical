# SecurityDemo — Final Version

Use this exact setup. **Use SQLite throughout** so you don't get the SQL Server/SQLite migration error again.

## 1. Create Project

```text
Create a new project
        ↓
ASP.NET Core Web App (Model-View-Controller)
        ↓
Next
```

Use:

```text
Project Name: SecurityDemo
Solution Name: SecurityDemo
Framework: .NET 8.0
Authentication Type: Individual Accounts
Configure for HTTPS: ✓
Docker: ☐
```

Click **Create**.

---

# 2. Install Packages

Open:

```text
Tools
→ NuGet Package Manager
→ Package Manager Console
```

Make sure:

```text
Default project: SecurityDemo
```

Run these:

```powershell
Install-Package Microsoft.EntityFrameworkCore.Sqlite -Version 8.0.19
```

```powershell
Install-Package Microsoft.EntityFrameworkCore.Tools -Version 8.0.19
```

```powershell
Install-Package Microsoft.EntityFrameworkCore.Design -Version 8.0.19
```

```powershell
Install-Package Microsoft.AspNetCore.Identity.EntityFrameworkCore -Version 8.0.19
```

```powershell
Install-Package Microsoft.AspNetCore.Identity.UI -Version 8.0.19
```

Then:

```text
Build → Rebuild Solution
```

You need:

```text
Build succeeded.
```

---

# 3. `ApplicationDbContext.cs`

### Path

```text
SecurityDemo
└── Data
    └── ApplicationDbContext.cs
```

If it exists, replace it.

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

# 4. `appsettings.json`

### Path

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

# 5. `Program.cs`

### Path

```text
SecurityDemo
└── Program.cs
```

Replace everything:

```csharp
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using SecurityDemo.Data;

var builder = WebApplication.CreateBuilder(args);

// MVC
builder.Services.AddControllersWithViews();

// SQLite Database
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

// MVC
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}"
);

// Identity
app.MapRazorPages();

// Create roles and users
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;

    var roleManager =
        services.GetRequiredService<RoleManager<IdentityRole>>();

    var userManager =
        services.GetRequiredService<UserManager<IdentityUser>>();

    // -------------------------
    // Create Roles
    // -------------------------

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
                new IdentityRole(role));
        }
    }

    // -------------------------
    // Create Admin
    // -------------------------

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
                adminPassword);

        if (result.Succeeded)
        {
            await userManager.AddToRoleAsync(
                adminUser,
                "Admin");
        }
    }

    // -------------------------
    // Create Normal User
    // -------------------------

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
                userPassword);

        if (result.Succeeded)
        {
            await userManager.AddToRoleAsync(
                normalUser,
                "User");
        }
    }
}

app.Run();
```

---

# 6. Build

Before migration:

```text
Build
→
Rebuild Solution
```

or:

```text
Ctrl + Shift + B
```

Must show:

```text
Build succeeded.
```

---

# 7. Create Migration

### Important

If you already have the old broken `Migrations` folder from the previous attempt:

**Delete it first.**

```text
SecurityDemo
└── Migrations
```

Right-click → **Delete**.

Also delete:

```text
securitydemo.db
```

if it exists.

Then open Package Manager Console.

Run:

```powershell
Add-Migration InitialIdentity
```

Do **not** run it twice.

---

# 8. Update Database

Run:

```powershell
Update-Database
```

Expected:

```text
Build started...
Build succeeded.
Applying migration 'xxxxxxxxxxxxxx_InitialIdentity'.
Done.
```

You should now have:

```text
SecurityDemo
├── Migrations
└── securitydemo.db
```

---

# 9. Create `AdminController.cs`

### Path

```text
SecurityDemo
└── Controllers
    └── AdminController.cs
```

Create:

```text
Right-click Controllers
→ Add
→ Controller
→ MVC Controller - Empty
→ AdminController
```

Code:

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

# 10. Create Admin View

Create folder:

```text
Views
└── Admin
```

Then:

```text
Views/Admin/Index.cshtml
```

### Code

```html
@{
    ViewData["Title"] = "Admin Dashboard";
}

<h1>Admin Dashboard</h1>

<h3>Welcome Admin!</h3>

<p>
    Only Admin users can access this page.
</p>
```

---

# 11. Create `UserController.cs`

### Path

```text
SecurityDemo
└── Controllers
    └── UserController.cs
```

Create:

```text
Right-click Controllers
→ Add
→ Controller
→ MVC Controller - Empty
→ UserController
```

Code:

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

# 12. Create User View

Create:

```text
Views
└── User
    └── Index.cshtml
```

### Code

```html
@{
    ViewData["Title"] = "User Dashboard";
}

<h1>User Dashboard</h1>

<h3>Welcome User!</h3>

<p>
    Only User role members can access this page.
</p>
```

---

# 13. Home Page

### Path

```text
Views/Home/Index.cshtml
```

Use:

```html
@{
    ViewData["Title"] = "Security Demo";
}

<h1>Security Demo</h1>

<p>ASP.NET Core Identity Security Application</p>

<br />

<a href="/Identity/Account/Login">
    Login
</a>

<br />
<br />

<a href="/Identity/Account/Register">
    Register
</a>

<br />
<br />

<a href="/Admin">
    Admin Dashboard
</a>

<br />
<br />

<a href="/User">
    User Dashboard
</a>
```

---

# 14. Final Structure

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
│   ├── xxxxx_InitialIdentity.cs
│   ├── xxxxx_InitialIdentity.Designer.cs
│   └── ApplicationDbContextModelSnapshot.cs
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
├── appsettings.json
├── Program.cs
└── securitydemo.db
```

---

# 15. Run

```text
Ctrl + F5
```

## Admin Login

```text
Email: admin@gmail.com
Password: Admin@123
```

Open:

```text
/Admin
```

Result:

```text
Admin Dashboard
Welcome Admin!
```

## User Login

```text
Email: user@gmail.com
Password: User@123
```

Open:

```text
/User
```

Result:

```text
User Dashboard
Welcome User!
```

---

# 16. Important Commands — Final

### Packages

```powershell
Install-Package Microsoft.EntityFrameworkCore.Sqlite -Version 8.0.19
Install-Package Microsoft.EntityFrameworkCore.Tools -Version 8.0.19
Install-Package Microsoft.EntityFrameworkCore.Design -Version 8.0.19
Install-Package Microsoft.AspNetCore.Identity.EntityFrameworkCore -Version 8.0.19
Install-Package Microsoft.AspNetCore.Identity.UI -Version 8.0.19
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

```cmd
dotnet build
```

### Run

```cmd
dotnet run
```

### Core security code to remember

```csharp
.AddRoles<IdentityRole>()
```

```csharp
app.UseAuthentication();
```

```csharp
app.UseAuthorization();
```

```csharp
[Authorize]
```

```csharp
[Authorize(Roles = "Admin")]
```

```csharp
[Authorize(Roles = "User")]
```

This is the **final clean SQLite version**. Do not mix it with `UseSqlServer`, SQL Server connection strings, or the old migration files.