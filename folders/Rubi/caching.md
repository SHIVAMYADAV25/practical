Yes. Since your original practical is **ASP.NET Web Forms**, but you are using **Visual Studio with ASP.NET Core MVC**, we can make the same **Caching practical in MVC**.

The functionality will remain the same:

- Select theatre: **IMAX / PVR / MOVIEMAX**
- Click **OK**
- Show movie timings and movie names
- Store the result in cache
- Cache expires after **30 seconds**
- If cache already exists, display **Reading From Cache**

---

# Practical No. 7 — Creating Application with Caching

## 1. Create Project

Open **Visual Studio**.

Go to:

**Create a new project**

Select:

> **ASP.NET Core Web App (Model-View-Controller)**

Click **Next**.

### Project name

```text
CachingPractical
```

Framework:

```text
.NET 8.0
```

Authentication:

```text
None
```

Click **Create**.

---

# 2. Install Caching Package

For this practical, we can use ASP.NET Core's built-in memory cache.

Open:

**Tools → NuGet Package Manager → Package Manager Console**

Run:

```powershell
Install-Package Microsoft.Extensions.Caching.Memory -Version 8.0.0
```

---

# 3. Configure Memory Cache

Open:

```text
Program.cs
```

Replace it with:

```csharp
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllersWithViews();

builder.Services.AddMemoryCache();

builder.Services.AddSession();

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();

app.UseStaticFiles();

app.UseRouting();

app.UseSession();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=MovieTicket}/{action=Index}/{id?}");

app.Run();
```

The important line for caching is:

```csharp
builder.Services.AddMemoryCache();
```

---

# 4. Create MovieTicket Controller

Go to:

```text
Controllers
```

Right-click:

**Add → Controller**

Select:

> MVC Controller - Empty

Name:

```text
MovieTicketController
```

Click **Add**.

Replace the code with:

```csharp
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;

namespace CachingPractical.Controllers
{
    public class MovieTicketController : Controller
    {
        private readonly IMemoryCache _cache;

        public MovieTicketController(IMemoryCache cache)
        {
            _cache = cache;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Book(string theatre)
        {
            HttpContext.Session.SetString("Theatre", theatre);

            return RedirectToAction("ResponseMovie");
        }

        public IActionResult ResponseMovie()
        {
            string? theatre =
                HttpContext.Session.GetString("Theatre");

            if (string.IsNullOrEmpty(theatre))
            {
                return RedirectToAction("Index");
            }

            string cacheKey = theatre;

            if (!_cache.TryGetValue(cacheKey, out MovieData? movieData))
            {
                movieData = new MovieData
                {
                    ShowTimings = new List<string>
                    {
                        "9:00 AM",
                        "12:00 PM",
                        "5:00 PM"
                    },

                    MovieNames = new List<string>
                    {
                        "ABC",
                        "PQR",
                        "XYZ"
                    }
                };

                var cacheOptions = new MemoryCacheEntryOptions
                {
                    AbsoluteExpirationRelativeToNow =
                        TimeSpan.FromSeconds(30)
                };

                _cache.Set(
                    cacheKey,
                    movieData,
                    cacheOptions
                );

                ViewBag.Message = "Reading From Database";
            }
            else
            {
                ViewBag.Message = "Reading From Cache";
            }

            ViewBag.Theatre = theatre;

            return View(movieData);
        }
    }

    public class MovieData
    {
        public List<string> ShowTimings { get; set; }
            = new List<string>();

        public List<string> MovieNames { get; set; }
            = new List<string>();
    }
}
```

---

# 5. Create MovieTicket View

Go to:

```text
Views
```

Right-click:

**Add → New Folder**

Name:

```text
MovieTicket
```

Then right-click:

```text
Views/MovieTicket
```

Select:

**Add → View**

Name:

```text
Index.cshtml
```

Replace with:

```html
@{
    ViewData["Title"] = "Movie Ticket Booking";
}

<h1>Movie Ticket Booking</h1>

<form method="post" action="/MovieTicket/Book">

    <label>Select Theatre:</label>

    <br />
    <br />

    <select name="theatre">
        <option value="IMAX">IMAX</option>
        <option value="PVR">PVR</option>
        <option value="MOVIEMAX">MOVIEMAX</option>
    </select>

    <br />
    <br />

    <button type="submit">
        OK!!!!!!!
    </button>

</form>
```

---

# 6. Create Response View

Go to:

```text
Views/MovieTicket
```

Right-click:

**Add → View**

Name:

```text
ResponseMovie.cshtml
```

Replace with:

```html
@model CachingPractical.Controllers.MovieData

@{
    ViewData["Title"] = "Movie Details";
}

<h1>Movie Details</h1>

<h3>Theatre: @ViewBag.Theatre</h3>

<p style="color:red;">
    @ViewBag.Message
</p>

<table border="1" cellpadding="10">
    <tr>
        <th>Show Timings</th>

        @foreach (var time in Model.ShowTimings)
        {
            <td>@time</td>
        }
    </tr>

    <tr>
        <th>Movie Name</th>

        @foreach (var movie in Model.MovieNames)
        {
            <td>@movie</td>
        }
    </tr>
</table>

<br />

<a href="/MovieTicket">
    Back
</a>
```

---

# 7. Enable Session

We already added:

```csharp
builder.Services.AddSession();
```

and:

```csharp
app.UseSession();
```

So the selected theatre can be stored here:

```csharp
HttpContext.Session.SetString("Theatre", theatre);
```

and retrieved using:

```csharp
HttpContext.Session.GetString("Theatre");
```

---

# 8. Final Project Structure

Your project should look like:

```text
CachingPractical
│
├── Controllers
│   └── MovieTicketController.cs
│
├── Views
│   └── MovieTicket
│       ├── Index.cshtml
│       └── ResponseMovie.cshtml
│
├── Program.cs
│
├── appsettings.json
│
└── CachingPractical.csproj
```

---

# 9. Run the Practical

Press:

```text
Ctrl + F5
```

or:

```text
F5
```

The page will show:

```text
Movie Ticket Booking

Select Theatre:

[ IMAX ▼ ]

[ OK!!!!!!! ]
```

Select:

```text
IMAX
```

and click:

```text
OK!!!!!!!
```

You get:

```text
Movie Details

Theatre: IMAX

Reading From Database

-----------------------------------------
Show Timings | 9:00 AM | 12:00 PM | 5:00 PM
-----------------------------------------
Movie Name   | ABC     | PQR       | XYZ
-----------------------------------------
```

---

# 10. Demonstrate Caching in Practical

This is the important part for your viva/practical.

### First request

Select:

```text
IMAX
```

Click OK.

You will see:

```text
Reading From Database
```

The data is now stored in memory cache.

### Go back and select IMAX again

Click:

```text
OK
```

Now you should see:

```text
Reading From Cache
```

because:

```csharp
_cache.TryGetValue(cacheKey, out MovieData? movieData)
```

found the existing cached data.

---

# 11. Cache Expiration

We set:

```csharp
AbsoluteExpirationRelativeToNow =
    TimeSpan.FromSeconds(30)
```

Therefore:

```text
0 sec
   ↓
Cache created
   ↓
30 seconds
   ↓
Cache expires
```

After 30 seconds, selecting the same theatre again creates the cache again.

---

# 12. How Your Original Code Maps to MVC

Your original Web Forms code:

```csharp
Cache.Insert(
    "IMAX",
    Table1,
    null,
    DateTime.Now.AddSeconds(30),
    TimeSpan.Zero
);
```

MVC equivalent:

```csharp
_cache.Set(
    cacheKey,
    movieData,
    cacheOptions
);
```

with:

```csharp
var cacheOptions = new MemoryCacheEntryOptions
{
    AbsoluteExpirationRelativeToNow =
        TimeSpan.FromSeconds(30)
};
```

Original:

```csharp
Session["Theatre"] = ListBox1.Text;
```

MVC:

```csharp
HttpContext.Session.SetString("Theatre", theatre);
```

Original:

```csharp
Session["Theatre"]
```

MVC:

```csharp
HttpContext.Session.GetString("Theatre")
```

---

## Viva — very important

**Q. What is caching?**

Caching is the technique of storing frequently used data temporarily so that it can be retrieved faster without generating or fetching it again.

**Q. Which cache are we using?**

```text
IMemoryCache
```

It stores data in the application's memory.

**Q. Why do we use caching?**

To:

- improve performance
- reduce repeated processing
- reduce database/API requests
- provide faster responses

**Q. How long is our cache valid?**

```text
30 seconds
```

because we used:

```csharp
TimeSpan.FromSeconds(30)
```

**Q. What happens when cache expires?**

The application creates the data again and stores it in the cache.

**Q. Difference between Session and Cache?**

| Session | Cache |
|---|---|
| Stores user-specific data | Stores reusable application data |
| Example: selected theatre | Example: movie information |
| Associated with user/session | Shared application cache |
| Used for user state | Used for performance |

**Q. What is `TryGetValue()`?**

It checks whether the requested data already exists in the cache.

```csharp
_cache.TryGetValue(cacheKey, out MovieData? movieData)
```

If found → **Reading From Cache**.

If not found → create data and cache it.