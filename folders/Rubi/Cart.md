Yes. This is **ASP.NET Web Forms (.NET Framework)**, so don't create it as ASP.NET Core MVC.

We'll make it in **Visual Studio** exactly with the files you provided.

# Add to Cart Application — Visual Studio

## 1. Create Project

Open Visual Studio.

```text
Create a new project
        ↓
ASP.NET Web Application (.NET Framework)
        ↓
Next
```

Enter:

```text
Project Name: WebApplication6
Solution Name: WebApplication6
Framework: .NET Framework 4.8
```

Click **Create**.

Then select:

```text
Web Forms
```

Click **Create**.

---

# 2. Project Structure

You need these files:

```text
WebApplication6
│
├── Default.aspx
├── Default.aspx.cs
├── Default.aspx.designer.cs
│
├── Product.cs
├── ProductRepository.cs
└── ShoppingCart.cs
```

---

# 3. Default.aspx

If Visual Studio already created `Default.aspx`, open it.

### File Path

```text
WebApplication6
└── Default.aspx
```

Replace everything with:

```aspx
<%@ Page Language="C#" AutoEventWireup="true"
    CodeBehind="Default.aspx.cs"
    Inherits="WebApplication6.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">

<head runat="server">

    <title>Add To Cart</title>

</head>

<body>

    <form id="form1" runat="server">

        <div>

            <h1>Products</h1>

            <asp:GridView
                ID="ProductGridView"
                runat="server"
                AutoGenerateColumns="False"
                DataKeyNames="ProductID">

                <Columns>

                    <asp:BoundField
                        DataField="ProductID"
                        HeaderText="Product ID" />

                    <asp:BoundField
                        DataField="ProductName"
                        HeaderText="Product Name" />

                    <asp:BoundField
                        DataField="Price"
                        HeaderText="Price" />

                    <asp:TemplateField HeaderText="Action">

                        <ItemTemplate>

                            <asp:Button
                                ID="AddToCartButton"
                                runat="server"
                                Text="Add to Cart"
                                OnClick="AddToCartButton_Click" />

                        </ItemTemplate>

                    </asp:TemplateField>

                </Columns>

            </asp:GridView>


            <h2>Shopping Cart</h2>

            <asp:ListView
                ID="CartListView"
                runat="server"
                DataKeyNames="ProductID">

                <ItemTemplate>

                    <p>

                        <%# Eval("ProductName") %>

                        , Price: ₹<%# Eval("Price") %>

                        <asp:Button
                            ID="RemoveFromCartButton"
                            runat="server"
                            Text="Remove"
                            CommandName="RemoveFromCart"
                            CommandArgument='<%# Eval("ProductID") %>'
                            OnClick="RemoveFromCartButton_Click" />

                    </p>

                </ItemTemplate>

            </asp:ListView>


            <asp:Label
                ID="LabelMessage"
                runat="server"
                Text=""
                ForeColor="Red">
            </asp:Label>

        </div>

    </form>

</body>

</html>
```

---

# 4. Default.aspx.cs

### File Path

```text
WebApplication6
└── Default.aspx.cs
```

Right-click `Default.aspx`:

```text
View Code
```

Replace the code with:

```csharp
using System;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebApplication6
{
    public partial class Default : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                ProductGridView.DataSource =
                    ProductRepository.GetAllProducts();

                ProductGridView.DataBind();

                BindCart();
            }
        }

        private ShoppingCart Cart
        {
            get
            {
                if (Session["Cart"] == null)
                {
                    Session["Cart"] = new ShoppingCart();
                }

                return (ShoppingCart)Session["Cart"];
            }
        }

        protected void AddToCartButton_Click(
            object sender,
            EventArgs e)
        {
            Button button = (Button)sender;

            GridViewRow row =
                (GridViewRow)button.NamingContainer;

            int productId =
                Convert.ToInt32(
                    ProductGridView.DataKeys[row.RowIndex]["ProductID"]
                );

            bool isProductInCart =
                Cart.ProductsInCart.Any(
                    p => p.ProductID == productId
                );

            if (isProductInCart)
            {
                LabelMessage.Text =
                    "This product is already in the cart.";

                return;
            }

            Product product =
                ProductRepository.GetAllProducts()
                .Find(p => p.ProductID == productId);

            if (product != null)
            {
                Cart.ProductsInCart.Add(product);

                LabelMessage.Text =
                    product.ProductName +
                    " added to cart.";

                BindCart();
            }
        }

        protected void RemoveFromCartButton_Click(
            object sender,
            EventArgs e)
        {
            Button button = (Button)sender;

            int productId =
                Convert.ToInt32(button.CommandArgument);

            Product productToRemove =
                Cart.ProductsInCart.Find(
                    p => p.ProductID == productId
                );

            if (productToRemove != null)
            {
                Cart.ProductsInCart.Remove(productToRemove);

                LabelMessage.Text =
                    productToRemove.ProductName +
                    " removed from cart.";
            }

            BindCart();
        }

        private void BindCart()
        {
            CartListView.DataSource =
                Cart.ProductsInCart;

            CartListView.DataBind();
        }
    }
}
```

---

# 5. Create Product.cs

### File Path

```text
WebApplication6
└── Product.cs
```

### Create

```text
Right-click WebApplication6
        ↓
Add
        ↓
Class
        ↓
Product.cs
        ↓
Add
```

Code:

```csharp
namespace WebApplication6
{
    public class Product
    {
        public int ProductID { get; set; }

        public string ProductName { get; set; }

        public decimal Price { get; set; }
    }
}
```

---

# 6. Create ProductRepository.cs

### File Path

```text
WebApplication6
└── ProductRepository.cs
```

### Create

```text
Right-click WebApplication6
        ↓
Add
        ↓
Class
        ↓
ProductRepository.cs
        ↓
Add
```

Code:

```csharp
using System.Collections.Generic;

namespace WebApplication6
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

# 7. Create ShoppingCart.cs

### File Path

```text
WebApplication6
└── ShoppingCart.cs
```

### Create

```text
Right-click WebApplication6
        ↓
Add
        ↓
Class
        ↓
ShoppingCart.cs
        ↓
Add
```

Code:

```csharp
using System.Collections.Generic;

namespace WebApplication6
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

# 8. Designer File

Visual Studio should automatically have:

```text
Default.aspx.designer.cs
```

You **do not need to write it manually**.

If you get errors such as:

```text
The name 'ProductGridView' does not exist
The name 'CartListView' does not exist
The name 'LabelMessage' does not exist
```

Do:

```text
Right-click Default.aspx
        ↓
Convert to Web Application
```

If that option isn't available:

```text
Build
 ↓
Rebuild Solution
```

---

# 9. Final Structure

```text
WebApplication6
│
├── Default.aspx
├── Default.aspx.cs
├── Default.aspx.designer.cs
│
├── Product.cs
├── ProductRepository.cs
├── ShoppingCart.cs
│
├── Web.config
├── Global.asax
└── ...
```

---

# 10. Run

Press:

```text
Ctrl + F5
```

You should get:

```text
Products

Product ID    Product Name    Price       Action
-------------------------------------------------
1             Product 1       ₹10.99      Add to Cart
2             Product 2       ₹19.99      Add to Cart
3             Product 3       ₹5.99       Add to Cart


Shopping Cart
```

---

# 11. Test Add to Cart

Click:

```text
Product 1 → Add to Cart
```

You should see:

```text
Product 1 added to cart.
```

Cart:

```text
Shopping Cart

Product 1, Price: ₹10.99    Remove
```

---

# 12. Test Duplicate

Click **Add to Cart** on Product 1 again.

Message:

```text
This product is already in the cart.
```

---

# 13. Add More

Click:

```text
Product 2 → Add to Cart
Product 3 → Add to Cart
```

Cart:

```text
Shopping Cart

Product 1, Price: ₹10.99    Remove
Product 2, Price: ₹19.99    Remove
Product 3, Price: ₹5.99     Remove
```

---

# 14. Remove

Click:

```text
Product 2 → Remove
```

Message:

```text
Product 2 removed from cart.
```

Final cart:

```text
Product 1
Product 3
```

### Main things to remember for viva

```text
GridView
    ↓
Displays products

ListView
    ↓
Displays cart

Session
    ↓
Stores cart

Product
    ↓
Product model

ProductRepository
    ↓
Provides products

ShoppingCart
    ↓
Stores selected products
```

This is the **Web Forms version** of the practical you pasted; don't use the ASP.NET Core MVC project (`StudentCRUD`) for this one.



Yes — I can see the issue in your screenshot. **The “ASP.NET Web Application (.NET Framework)” template is not installed**, which is why you only see Console/Azure/Empty templates.

For your **Add to Cart Web Forms practical**, you need to install the **ASP.NET and web development** workload.

## Fix — Install Web Forms Template

### Step 1: Open Visual Studio Installer

Close Visual Studio first.

Then open:

```text
Start Menu
→ Visual Studio Installer
```

You should see your installed Visual Studio.

Click:

```text
Modify
```

---

### Step 2: Select the required workload

In **Workloads**, find:

```text
☑ ASP.NET and web development
```

Select it.

Also look at the right-side **Installation details** and make sure these are included:

```text
ASP.NET and web development
.NET Framework project and item templates
```

If you see an option related to:

```text
.NET Framework 4.8 development tools
```

select that too.

Then click:

```text
Modify
```

Wait for installation to finish.

---

## Step 3: Reopen Visual Studio

Open Visual Studio again.

Select:

```text
Create a new project
```

Search:

```text
ASP.NET Web Application
```

You should now get:

```text
ASP.NET Web Application (.NET Framework)
```

Select it.

It should look approximately like:

```text
C#
ASP.NET Web Application (.NET Framework)
```

---

# Step 4: Create your Add to Cart project

Select:

```text
ASP.NET Web Application (.NET Framework)
```

Then:

```text
Next
```

Enter:

```text
Project name: WebApplication6
```

Choose:

```text
Framework: .NET Framework 4.8
```

Click:

```text
Create
```

Then you should get another window asking what type of ASP.NET application:

```text
Empty
Web Forms
MVC
Web API
```

Select:

```text
Web Forms
```

Then:

```text
Create
```

---

### Important

**Do NOT select these from your current screen:**

```text
ASP.NET Core Web App (Model-View-Controller)
ASP.NET Core Web API
ASP.NET Core Web App (Razor Pages)
```

Your provided `Default.aspx` code uses:

```text
.aspx
.aspx.cs
GridView
ListView
Session
System.Web.UI
```

Those are **ASP.NET Web Forms**, so you specifically need:

```text
ASP.NET Web Application (.NET Framework)
        ↓
Web Forms
```

Once you install the workload, **send me a screenshot of the project template screen if you want**, and I'll tell you exactly which one to click.











Yes. This code is **ASP.NET Web Forms**, not ASP.NET Core MVC. So for this practical, create an **ASP.NET Web Application (.NET Framework)** using the **Web Forms** template.

I'll keep it in the same format: **project → file path → how to create → code → run**.

# Add to Cart Application — ASP.NET Web Forms

## 1. Create Project

Open Visual Studio.

```text
Create a new project
        ↓
ASP.NET Web Application (.NET Framework)
        ↓
Next
```

Enter:

```text
Project Name: AddToCartApp
Solution Name: AddToCartApp
```

Choose:

```text
Framework: .NET Framework 4.8
```

Click **Create**.

Then select:

```text
Web Forms
```

Click:

```text
Create
```

---

# 2. Final Structure

We will create:

```text
AddToCartApp
│
├── Default.aspx
├── Default.aspx.cs
├── Product.cs
├── ProductRepository.cs
└── ShoppingCart.cs
```

---

# 3. Default.aspx

### File Path

```text
AddToCartApp
└── Default.aspx
```

If Visual Studio already created `Default.aspx`, open it.

Replace everything with:

```aspx
<%@ Page Language="C#" AutoEventWireup="true"
    CodeBehind="Default.aspx.cs"
    Inherits="AddToCartApp.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">

<head runat="server">

    <title>Add To Cart</title>

</head>

<body>

    <form id="form1" runat="server">

        <div>

            <h1>Products</h1>

            <asp:GridView
                ID="ProductGridView"
                runat="server"
                AutoGenerateColumns="False"
                DataKeyNames="ProductID">

                <Columns>

                    <asp:BoundField
                        DataField="ProductID"
                        HeaderText="Product ID" />

                    <asp:BoundField
                        DataField="ProductName"
                        HeaderText="Product Name" />

                    <asp:BoundField
                        DataField="Price"
                        HeaderText="Price" />

                    <asp:TemplateField HeaderText="Action">

                        <ItemTemplate>

                            <asp:Button
                                ID="AddToCartButton"
                                runat="server"
                                Text="Add to Cart"
                                OnClick="AddToCartButton_Click" />

                        </ItemTemplate>

                    </asp:TemplateField>

                </Columns>

            </asp:GridView>


            <h2>Shopping Cart</h2>

            <asp:ListView
                ID="CartListView"
                runat="server"
                DataKeyNames="ProductID">

                <ItemTemplate>

                    <p>

                        <%# Eval("ProductName") %>

                        , Price: ₹<%# Eval("Price") %>

                        <asp:Button
                            ID="RemoveFromCartButton"
                            runat="server"
                            Text="Remove"
                            CommandName="RemoveFromCart"
                            CommandArgument='<%# Eval("ProductID") %>'
                            OnClick="RemoveFromCartButton_Click" />

                    </p>

                </ItemTemplate>

            </asp:ListView>


            <asp:Label
                ID="LabelMessage"
                runat="server"
                ForeColor="Red">
            </asp:Label>

        </div>

    </form>

</body>

</html>
```

---

# 4. Default.aspx.cs

### File Path

```text
AddToCartApp
└── Default.aspx.cs
```

Open:

```text
Default.aspx
 ↓
Right-click
 ↓
View Code
```

Replace the code with:

```csharp
using System;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace AddToCartApp
{
    public partial class Default : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                ProductGridView.DataSource =
                    ProductRepository.GetAllProducts();

                ProductGridView.DataBind();

                BindCart();
            }
        }


        private ShoppingCart Cart
        {
            get
            {
                if (Session["Cart"] == null)
                {
                    Session["Cart"] = new ShoppingCart();
                }

                return (ShoppingCart)Session["Cart"];
            }
        }


        protected void AddToCartButton_Click(
            object sender,
            EventArgs e)
        {
            Button button = (Button)sender;

            GridViewRow row =
                (GridViewRow)button.NamingContainer;

            int productId =
                Convert.ToInt32(
                    ProductGridView.DataKeys[row.RowIndex]["ProductID"]
                );


            bool isProductInCart =
                Cart.ProductsInCart.Any(
                    p => p.ProductID == productId
                );


            if (isProductInCart)
            {
                LabelMessage.Text =
                    "This product is already in the cart.";

                return;
            }


            Product product =
                ProductRepository.GetAllProducts()
                .Find(p => p.ProductID == productId);


            if (product != null)
            {
                Cart.ProductsInCart.Add(product);

                LabelMessage.Text =
                    product.ProductName +
                    " added to cart.";

                BindCart();
            }
        }


        protected void RemoveFromCartButton_Click(
            object sender,
            EventArgs e)
        {
            Button button = (Button)sender;

            int productId =
                Convert.ToInt32(button.CommandArgument);


            Product productToRemove =
                Cart.ProductsInCart.Find(
                    p => p.ProductID == productId
                );


            if (productToRemove != null)
            {
                Cart.ProductsInCart.Remove(productToRemove);

                LabelMessage.Text =
                    productToRemove.ProductName +
                    " removed from cart.";
            }


            BindCart();
        }


        private void BindCart()
        {
            CartListView.DataSource =
                Cart.ProductsInCart;

            CartListView.DataBind();
        }
    }
}
```

---

# 5. Create Product.cs

### File Path

```text
AddToCartApp
└── Product.cs
```

### How to create

```text
Right-click AddToCartApp
        ↓
Add
        ↓
Class
        ↓
Product.cs
        ↓
Add
```

Paste:

```csharp
namespace AddToCartApp
{
    public class Product
    {
        public int ProductID { get; set; }

        public string ProductName { get; set; }

        public decimal Price { get; set; }
    }
}
```

---

# 6. Create ProductRepository.cs

### File Path

```text
AddToCartApp
└── ProductRepository.cs
```

### How to create

```text
Right-click AddToCartApp
        ↓
Add
        ↓
Class
        ↓
ProductRepository.cs
        ↓
Add
```

Paste:

```csharp
using System.Collections.Generic;

namespace AddToCartApp
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
                    ProductName = "Laptop",
                    Price = 50000
                },

                new Product
                {
                    ProductID = 2,
                    ProductName = "Mouse",
                    Price = 500
                },

                new Product
                {
                    ProductID = 3,
                    ProductName = "Keyboard",
                    Price = 1000
                }
            };
        }
    }
}
```

---

# 7. Create ShoppingCart.cs

### File Path

```text
AddToCartApp
└── ShoppingCart.cs
```

### How to create

```text
Right-click AddToCartApp
        ↓
Add
        ↓
Class
        ↓
ShoppingCart.cs
        ↓
Add
```

Paste:

```csharp
using System.Collections.Generic;

namespace AddToCartApp
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

# 8. Important Default.aspx Designer Problem

After creating the files, Visual Studio may show errors such as:

```text
The name 'ProductGridView' does not exist in the current context
```

or:

```text
The name 'LabelMessage' does not exist
```

If this happens:

### Right-click `Default.aspx`

```text
Convert to Web Application
```

If you don't see that option:

```text
Build
 ↓
Rebuild Solution
```

Visual Studio should generate/update:

```text
Default.aspx.designer.cs
```

It should contain controls such as:

```text
ProductGridView
CartListView
LabelMessage
```

**Don't manually write the designer file unless necessary.**

---

# 9. Final Structure

Your Solution Explorer should look like:

```text
AddToCartApp
│
├── App_Start
│
├── Default.aspx
├── Default.aspx.cs
├── Default.aspx.designer.cs
│
├── Product.cs
├── ProductRepository.cs
├── ShoppingCart.cs
│
├── Site.Master
├── Web.config
└── ...
```

---

# 10. Run

Press:

```text
Ctrl + F5
```

You should see:

```text
Products

Product ID    Product Name    Price       Action
--------------------------------------------------
1             Laptop          ₹50000      Add to Cart
2             Mouse           ₹500        Add to Cart
3             Keyboard        ₹1000       Add to Cart


Shopping Cart
```

---

# 11. Test Add To Cart

Click:

```text
Laptop → Add to Cart
```

You should see:

```text
Laptop added to cart.
```

And:

```text
Shopping Cart

Laptop, Price: ₹50000    Remove
```

Click **Add to Cart** on Laptop again.

You should get:

```text
This product is already in the cart.
```

---

# 12. Test Multiple Products

Click:

```text
Mouse → Add to Cart
Keyboard → Add to Cart
```

Cart:

```text
Shopping Cart

Laptop, Price: ₹50000       Remove
Mouse, Price: ₹500          Remove
Keyboard, Price: ₹1000      Remove
```

---

# 13. Test Remove

Click:

```text
Mouse → Remove
```

Result:

```text
Mouse removed from cart.
```

Cart becomes:

```text
Laptop
Keyboard
```

---

# Practical Flow to Remember

```text
ProductRepository
       ↓
   Products
       ↓
   GridView
       ↓
Add to Cart Button
       ↓
    Session
       ↓
  ShoppingCart
       ↓
   ListView
       ↓
 Remove Button
```

### Important viva points

```text
GridView     → Displays products
ListView     → Displays cart
Session      → Stores cart between requests
Product      → Product model
ShoppingCart → Stores selected products
Repository   → Provides product data
```

This version keeps the same functionality as the code you provided, but uses a cleaner `DataKeyNames="ProductID"` setup for the cart removal operation.