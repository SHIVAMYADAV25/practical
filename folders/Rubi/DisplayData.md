# Practical 1 — Personal Details Form

## Step 1 — Create Project

**Visual Studio 2022 → Create a new project**

Select:

```text
ASP.NET Core Web App (Model-View-Controller)
```

Project name:

```text
PersonalDetailsApp
```

Framework:

```text
.NET 8.0
```

Authentication:

```text
None
```

☑ Configure for HTTPS

☐ Docker

Click **Create**.

---

# Step 2 — Create Model

### File Path

```text
PersonalDetailsApp
└── Models
    └── PersonalDetails.cs
```

### How to create

Right-click:

```text
Models
→ Add
→ Class
```

Name:

```text
PersonalDetails.cs
```

### `PersonalDetails.cs`

```csharp
namespace PersonalDetailsApp.Models
{
    public class PersonalDetails
    {
        public string Name { get; set; } = "";

        public string Email { get; set; } = "";

        public int Age { get; set; }

        public string Gender { get; set; } = "";

        public string City { get; set; } = "";

        public string Phone { get; set; } = "";
    }
}
```

---

# Step 3 — Controller

### File Path

```text
PersonalDetailsApp
└── Controllers
    └── HomeController.cs
```

Open:

```text
Controllers → HomeController.cs
```

Replace the code with:

### `HomeController.cs`

```csharp
using Microsoft.AspNetCore.Mvc;
using PersonalDetailsApp.Models;

namespace PersonalDetailsApp.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Result(PersonalDetails details)
        {
            return View(details);
        }
    }
}
```

---

# Step 4 — Form View

### File Path

```text
PersonalDetailsApp
└── Views
    └── Home
        └── Index.cshtml
```

Open:

```text
Views → Home → Index.cshtml
```

Replace everything with:

### `Index.cshtml`

```html
@{
    ViewData["Title"] = "Personal Details";
}

<h1>Personal Details Form</h1>

<form method="post" action="/Home/Result">

    <label>Name:</label>
    <input type="text" name="Name" />

    <br />
    <br />

    <label>Email:</label>
    <input type="email" name="Email" />

    <br />
    <br />

    <label>Age:</label>
    <input type="number" name="Age" />

    <br />
    <br />

    <label>Gender:</label>

    <input type="radio" name="Gender" value="Male" />
    Male

    <input type="radio" name="Gender" value="Female" />
    Female

    <br />
    <br />

    <label>City:</label>
    <input type="text" name="City" />

    <br />
    <br />

    <label>Phone:</label>
    <input type="text" name="Phone" />

    <br />
    <br />

    <button type="submit">Submit</button>

</form>
```

---

# Step 5 — Create Result View

### File Path

```text
PersonalDetailsApp
└── Views
    └── Home
        ├── Index.cshtml
        └── Result.cshtml
```

### How to create

Right-click:

```text
Views
→ Home
→ Add
→ New Item
```

Select/create:

```text
Razor View
```

Name:

```text
Result.cshtml
```

If Razor View is not available:

```text
Add → New Item → Text File
```

and name it:

```text
Result.cshtml
```

### `Result.cshtml`

```html
@model PersonalDetailsApp.Models.PersonalDetails

@{
    ViewData["Title"] = "Personal Details";
}

<h1>Submitted Personal Details</h1>

<p>
    <strong>Name:</strong>
    @Model.Name
</p>

<p>
    <strong>Email:</strong>
    @Model.Email
</p>

<p>
    <strong>Age:</strong>
    @Model.Age
</p>

<p>
    <strong>Gender:</strong>
    @Model.Gender
</p>

<p>
    <strong>City:</strong>
    @Model.City
</p>

<p>
    <strong>Phone:</strong>
    @Model.Phone
</p>
```

---

# Step 6 — `Program.cs`

### File Path

```text
PersonalDetailsApp
└── Program.cs
```

For this practical, **keep the default generated `Program.cs`**.

It should be approximately:

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

---

# Step 7 — Final File Structure

```text
PersonalDetailsApp
│
├── Controllers
│   └── HomeController.cs
│
├── Models
│   └── PersonalDetails.cs
│
├── Views
│   ├── Home
│   │   ├── Index.cshtml
│   │   └── Result.cshtml
│   │
│   └── Shared
│
├── wwwroot
│
├── appsettings.json
│
└── Program.cs
```

---

# Step 8 — Run

Save:

```text
Ctrl + S
```

Run:

```text
Ctrl + F5
```

or click:

```text
▶ Run
```

---

# Step 9 — Test Input

```text
Name: Shivam Yadav
Email: shivam@gmail.com
Age: 20
Gender: Male
City: Mumbai
Phone: 9876543210
```

Click:

```text
Submit
```

Result:

```text
Submitted Personal Details

Name: Shivam Yadav
Email: shivam@gmail.com
Age: 20
Gender: Male
City: Mumbai
Phone: 9876543210
```

This follows the uploaded Practical 1 structure and code. Pasted text


### `Index.cshtml`

```

@{
    ViewData["Title"] = "Personal Details";
}

<h1>Personal Details Form</h1>

<form method="post" action="/Home/Result" onsubmit="return validateForm()">

    <label>Name:</label>
    <input type="text" id="Name" name="Name" />
    <span id="nameError" style="color:red;"></span>

    <br />
    <br />

    <label>Email:</label>
    <input type="text" id="Email" name="Email" />
    <span id="emailError" style="color:red;"></span>

    <br />
    <br />

    <label>Age:</label>
    <input type="number" id="Age" name="Age" />
    <span id="ageError" style="color:red;"></span>

    <br />
    <br />

    <label>Gender:</label>

    <input type="radio" name="Gender" value="Male" />
    Male

    <input type="radio" name="Gender" value="Female" />
    Female

    <span id="genderError" style="color:red;"></span>

    <br />
    <br />

    <label>City:</label>

    <select id="City" name="City">
        <option value="">-- Select City --</option>
        <option value="Thane">Thane</option>
        <option value="Kalyan">Kalyan</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Dombivli">Dombivli</option>
        <option value="Navi Mumbai">Navi Mumbai</option>
        <option value="Bhiwandi">Bhiwandi</option>
    </select>

    <span id="cityError" style="color:red;"></span>

    <br />
    <br />

    <label>Phone:</label>
    <input type="text" id="Phone" name="Phone" maxlength="10" />
    <span id="phoneError" style="color:red;"></span>

    <br />
    <br />

    <button type="submit">Submit</button>

</form>


<script>

    function validateForm() {

        let valid = true;

        document.getElementById("nameError").innerHTML = "";
        document.getElementById("emailError").innerHTML = "";
        document.getElementById("ageError").innerHTML = "";
        document.getElementById("genderError").innerHTML = "";
        document.getElementById("cityError").innerHTML = "";
        document.getElementById("phoneError").innerHTML = "";


        // Name
        let name = document.getElementById("Name").value.trim();

        if (name == "") {
            document.getElementById("nameError").innerHTML =
                " Name is required";
            valid = false;
        }


        // Email
        let email = document.getElementById("Email").value.trim();

        let emailPattern =
            /^[^\s@@]+@@[^\s@@]+\.[^\s@@]+$/;

        if (email == "") {
            document.getElementById("emailError").innerHTML =
                " Email is required";
            valid = false;
        }
        else if (!emailPattern.test(email)) {
            document.getElementById("emailError").innerHTML =
                " Enter a valid email";
            valid = false;
        }


        // Age
        let age = document.getElementById("Age").value;

        if (age == "") {
            document.getElementById("ageError").innerHTML =
                " Age is required";
            valid = false;
        }
        else if (age < 1 || age > 100) {
            document.getElementById("ageError").innerHTML =
                " Age must be between 1 and 100";
            valid = false;
        }


        // Gender
        let gender =
            document.querySelector('input[name="Gender"]:checked');

        if (!gender) {
            document.getElementById("genderError").innerHTML =
                " Select gender";
            valid = false;
        }


        // City
        let city = document.getElementById("City").value;

        if (city == "") {
            document.getElementById("cityError").innerHTML =
                " Select a city";
            valid = false;
        }


        // Phone
        let phone = document.getElementById("Phone").value.trim();

        let phonePattern = /^[0-9]{10}$/;

        if (phone == "") {
            document.getElementById("phoneError").innerHTML =
                " Phone number is required";
            valid = false;
        }
        else if (!phonePattern.test(phone)) {
            document.getElementById("phoneError").innerHTML =
                " Phone must contain exactly 10 digits";
            valid = false;
        }


        return valid;
    }

</script>
```