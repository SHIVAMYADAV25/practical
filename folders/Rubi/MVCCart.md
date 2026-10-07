Yes. Since you're already using **ASP.NET Core MVC**, let's convert the same **Add to Cart application** into MVC.

We will use:

```text
ASP.NET Core MVC
.NET 8
C#
Session
No database
```

# 1. Create Project

In Visual Studio:

```text
Create a new project
        ↓
ASP.NET Core Web App (Model-View-Controller)
        ↓
Next
```

Enter:

```text
Project Name: AddToCartApp
Solution Name: AddToCartApp
Framework: .NET 8.0
Authentication: None
Configure for HTTPS: ✓
Docker: ☐
```

Click **Create**.

---

# 2. Final Structure

We will create:

```text
AddToCartApp
│
├── Controllers
│   └── CartController.cs
│
├── Models
│   ├── Product.cs
│   └── ShoppingCart.cs
│
├── Services
│   └── ProductRepository.cs
│
├── Views
│   ├── Cart
│   │   └── Index.cshtml
│   │
│   └── Home
│       └── Index.cshtml
│
└── Program.cs
```

---

# 3. Create Product.cs

### Path

```text
Models/Product.cs
```

### Create

```text
Right-click Models
 ↓
Add
 ↓
Class
 ↓
Product.cs
```

### Code

```csharp
namespace AddToCartApp.Models
{
    public class Product
    {
        public int ProductID { get; set; }

        public string ProductName { get; set; } = "";

        public decimal Price { get; set; }
    }
}
```

---

# 4. Create ShoppingCart.cs

### Path

```text
Models/ShoppingCart.cs
```

### Create

```text
Right-click Models
 ↓
Add
 ↓
Class
 ↓
ShoppingCart.cs
```

### Code

```csharp
using System.Collections.Generic;

namespace AddToCartApp.Models
{
    public class ShoppingCart
    {
        public List<Product> ProductsInCart { get; set; }

        public ShoppingCart()
        {
            ProductsInCart = new List<Product>();
        }
    }
}
```

---

# 5. Create ProductRepository.cs

Create a folder:

```text
Services
```

Then:

```text
Right-click Services
 ↓
Add
 ↓
Class
 ↓
ProductRepository.cs
```

### Code

```csharp
using System.Collections.Generic;
using AddToCartApp.Models;

namespace AddToCartApp.Services
{
    public class ProductRepository
    {
        public static List<Product> GetAllProducts()
        {
            return new List<Product>
            {
                new Product
                {
                    ProductID = 1,
                    ProductName = "Product 1",
                    Price = 10.99M
                },

                new Product
                {
                    ProductID = 2,
                    ProductName = "Product 2",
                    Price = 19.99M
                },

                new Product
                {
                    ProductID = 3,
                    ProductName = "Product 3",
                    Price = 5.99M
                }
            };
        }
    }
}
```

---

# 6. Create CartController.cs

### Path

```text
Controllers/CartController.cs
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
CartController
```

### Code

```csharp
using AddToCartApp.Models;
using AddToCartApp.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace AddToCartApp.Controllers
{
    public class CartController : Controller
    {
        public IActionResult Index()
        {
            ShoppingCart cart = GetCart();

            return View(cart);
        }


        public IActionResult Add(int id)
        {
            ShoppingCart cart = GetCart();

            Product product =
                ProductRepository.GetAllProducts()
                .Find(p => p.ProductID == id);

            if (product == null)
            {
                return NotFound();
            }


            bool isProductInCart =
                cart.ProductsInCart
                .Any(p => p.ProductID == id);


            if (isProductInCart)
            {
                TempData["Message"] =
                    "This product is already in the cart.";
            }
            else
            {
                cart.ProductsInCart.Add(product);

                SaveCart(cart);

                TempData["Message"] =
                    product.ProductName +
                    " added to cart.";
            }

            return RedirectToAction("Index", "Home");
        }


        public IActionResult Remove(int id)
        {
            ShoppingCart cart = GetCart();

            Product product =
                cart.ProductsInCart
                .Find(p => p.ProductID == id);


            if (product != null)
            {
                cart.ProductsInCart.Remove(product);

                SaveCart(cart);

                TempData["Message"] =
                    product.ProductName +
                    " removed from cart.";
            }

            return RedirectToAction("Index");
        }


        private ShoppingCart GetCart()
        {
            string? cartJson =
                HttpContext.Session.GetString("Cart");


            if (string.IsNullOrEmpty(cartJson))
            {
                return new ShoppingCart();
            }


            return JsonSerializer.Deserialize<ShoppingCart>(
                cartJson
            ) ?? new ShoppingCart();
        }


        private void SaveCart(ShoppingCart cart)
        {
            string cartJson =
                JsonSerializer.Serialize(cart);

            HttpContext.Session.SetString(
                "Cart",
                cartJson
            );
        }
    }
}
```

---

# 7. Modify Program.cs

Open:

```text
Program.cs
```

Use:

```csharp
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllersWithViews();

builder.Services.AddDistributedMemoryCache();

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
    pattern: "{controller=Home}/{action=Index}/{id?}"
);


app.Run();
```

---

# 8. HomeController.cs

Open:

```text
Controllers/HomeController.cs
```

Use:

```csharp
using AddToCartApp.Models;
using AddToCartApp.Services;
using Microsoft.AspNetCore.Mvc;

namespace AddToCartApp.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            List<Product> products =
                ProductRepository.GetAllProducts();

            return View(products);
        }
    }
}
```

---

# 9. Home/Index.cshtml

### Path

```text
Views/Home/Index.cshtml
```

Replace the code with:

```html
@model List<AddToCartApp.Models.Product>

@{
    ViewData["Title"] = "Products";
}

<h1>Products</h1>

@if (TempData["Message"] != null)
{
    <p style="color:red;">
        @TempData["Message"]
    </p>
}

<table border="1" cellpadding="10">

    <tr>
        <th>Product ID</th>
        <th>Product Name</th>
        <th>Price</th>
        <th>Action</th>
    </tr>

    @foreach (var product in Model)
    {
        <tr>

            <td>
                @product.ProductID
            </td>

            <td>
                @product.ProductName
            </td>

            <td>
                ₹@product.Price
            </td>

            <td>
                <a href="/Cart/Add?id=@product.ProductID">
                    Add to Cart
                </a>
            </td>

        </tr>
    }

</table>

<br />

<a href="/Cart">
    View Shopping Cart
</a>
```

---

# 10. Create Cart View

Create folder:

```text
Views/Cart
```

Then create:

```text
Views/Cart/Index.cshtml
```

### How

```text
Right-click Views
 ↓
Add
 ↓
New Folder
 ↓
Cart
```

Then:

```text
Right-click Cart
 ↓
Add
 ↓
Razor View
 ↓
Index.cshtml
```

### Code

```html
@model AddToCartApp.Models.ShoppingCart

@{
    ViewData["Title"] = "Shopping Cart";
}

<h1>Shopping Cart</h1>

@if (TempData["Message"] != null)
{
    <p style="color:red;">
        @TempData["Message"]
    </p>
}

@if (Model.ProductsInCart.Count == 0)
{
    <p>Your cart is empty.</p>
}
else
{
    <table border="1" cellpadding="10">

        <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Action</th>
        </tr>

        @foreach (var product in Model.ProductsInCart)
        {
            <tr>

                <td>
                    @product.ProductID
                </td>

                <td>
                    @product.ProductName
                </td>

                <td>
                    ₹@product.Price
                </td>

                <td>
                    <a href="/Cart/Remove?id=@product.ProductID">
                        Remove
                    </a>
                </td>

            </tr>
        }

    </table>
}

<br />

<a href="/">
    Back to Products
</a>
```

---

# 11. Final Structure

```text
AddToCartApp
│
├── Controllers
│   ├── HomeController.cs
│   └── CartController.cs
│
├── Models
│   ├── Product.cs
│   └── ShoppingCart.cs
│
├── Services
│   └── ProductRepository.cs
│
├── Views
│   ├── Home
│   │   └── Index.cshtml
│   │
│   ├── Cart
│   │   └── Index.cshtml
│   │
│   └── Shared
│
└── Program.cs
```

# 12. Run

Press:

```text
Ctrl + F5
```

Home page:

```text
/
```

Products:

```text
/ 
```

Cart:

```text
/Cart
```

---

# 13. Expected Output

### Products

```text
Products

Product ID    Product Name    Price       Action
----------------------------------------------------
1             Product 1       ₹10.99      Add to Cart
2             Product 2       ₹19.99      Add to Cart
3             Product 3       ₹5.99       Add to Cart

View Shopping Cart
```

Click:

```text
Product 1 → Add to Cart
```

Then:

```text
Product 1 added to cart.
```

Go to:

```text
/Cart
```

You'll get:

```text
Shopping Cart

Product ID    Product Name    Price       Action
----------------------------------------------------
1             Product 1       ₹10.99      Remove

Back to Products
```

If you add Product 1 again:

```text
This product is already in the cart.
```

If you click Remove:

```text
Product 1 removed from cart.
```

### CMD

```cmd
dotnet build
```

```cmd
dotnet run
```

**This is the MVC equivalent of your original `Default.aspx + Default.aspx.cs + ProductRepository + ShoppingCart` Web Forms practical.**