Yes. We’ll do it **exactly like Practical 1**: project creation → file path → how to create → code → reference → CMD → run tests. No unnecessary explanation.

# Practical No. 2 — Creating a Testing Project

## Final Structure

```text
CalculatorTesting
│
├── CalculatorAPI
│   ├── CalculatorService.cs
│   ├── Program.cs
│   └── ...
│
└── CalculatorAPI.Tests
    └── UnitTest1.cs
```

---

# Step 1 — Create ASP.NET Core Web API

Open **Visual Studio 2026**

```text
Create a new project
        ↓
ASP.NET Core Web API
        ↓
Next
```

Enter:

```text
Project Name: CalculatorAPI
Solution Name: CalculatorTesting
```

Select:

```text
Framework: .NET 8.0
Authentication: None
Configure for HTTPS: ✓
Enable OpenAPI support: ✓/default
```

Click:

```text
Create
```

---

# Step 2 — Create CalculatorService.cs

### File Path

```text
CalculatorTesting
└── CalculatorAPI
    └── CalculatorService.cs
```

### How to create

In **Solution Explorer**:

```text
Right-click CalculatorAPI
        ↓
Add
        ↓
Class
        ↓
CalculatorService.cs
        ↓
Add
```

### `CalculatorService.cs`

Delete everything and paste:

```csharp
namespace CalculatorAPI
{
    public class CalculatorService
    {
        public int Add(int a, int b)
        {
            return a + b;
        }

        public int Subtract(int a, int b)
        {
            return a - b;
        }

        public int Multiply(int a, int b)
        {
            return a * b;
        }

        public double Divide(int a, int b)
        {
            if (b == 0)
            {
                throw new DivideByZeroException();
            }

            return (double)a / b;
        }
    }
}
```

Save:

```text
Ctrl + S
```

---

# Step 3 — Create xUnit Testing Project

In **Solution Explorer**:

```text
Right-click CalculatorTesting
        ↓
Add
        ↓
New Project
```

Search:

```text
xUnit
```

Select:

```text
xUnit Test Project
```

Click:

```text
Next
```

Enter:

```text
Project Name: CalculatorAPI.Tests
```

Click:

```text
Next
```

Select:

```text
.NET 8.0
```

Click:

```text
Create
```

Now:

```text
CalculatorTesting
│
├── CalculatorAPI
│
└── CalculatorAPI.Tests
    └── UnitTest1.cs
```

---

# Step 4 — Add Project Reference

We need to connect:

```text
CalculatorAPI.Tests
        ↓
CalculatorAPI
```

In Solution Explorer:

```text
Right-click CalculatorAPI.Tests
        ↓
Add
        ↓
Project Reference
```

Tick:

```text
☑ CalculatorAPI
```

Click:

```text
OK
```

---

# Step 5 — UnitTest1.cs

### File Path

```text
CalculatorTesting
└── CalculatorAPI.Tests
    └── UnitTest1.cs
```

Open:

```text
UnitTest1.cs
```

Delete the existing code.

Paste:

```csharp
using CalculatorAPI;

namespace CalculatorAPI.Tests
{
    public class CalculatorTests
    {
        [Fact]
        public void Add_TwoNumbers_ReturnsCorrectResult()
        {
            // Arrange
            CalculatorService calculator = new CalculatorService();

            // Act
            int result = calculator.Add(10, 20);

            // Assert
            Assert.Equal(30, result);
        }

        [Fact]
        public void Subtract_TwoNumbers_ReturnsCorrectResult()
        {
            // Arrange
            CalculatorService calculator = new CalculatorService();

            // Act
            int result = calculator.Subtract(20, 10);

            // Assert
            Assert.Equal(10, result);
        }

        [Fact]
        public void Multiply_TwoNumbers_ReturnsCorrectResult()
        {
            // Arrange
            CalculatorService calculator = new CalculatorService();

            // Act
            int result = calculator.Multiply(5, 4);

            // Assert
            Assert.Equal(20, result);
        }

        [Fact]
        public void Divide_TwoNumbers_ReturnsCorrectResult()
        {
            // Arrange
            CalculatorService calculator = new CalculatorService();

            // Act
            double result = calculator.Divide(20, 5);

            // Assert
            Assert.Equal(4, result);
        }

        [Fact]
        public void Divide_ByZero_ThrowsException()
        {
            // Arrange
            CalculatorService calculator = new CalculatorService();

            // Act and Assert
            Assert.Throws<DivideByZeroException>(
                () => calculator.Divide(10, 0)
            );
        }
    }
}
```

Save:

```text
Ctrl + S
```

> **Important:** In C# code use `<` and `>` normally. Don't paste `&lt;` or `&gt;`.

---

# Step 6 — Build Project

From Visual Studio:

```text
Build
 ↓
Build Solution
```

Or:

```text
Ctrl + Shift + B
```

Expected:

```text
Build succeeded
```

---

# Step 7 — Test Explorer

Go to:

```text
Test
 ↓
Test Explorer
```

You should see:

```text
CalculatorAPI.Tests
└── CalculatorTests
    ├── Add_TwoNumbers_ReturnsCorrectResult
    ├── Subtract_TwoNumbers_ReturnsCorrectResult
    ├── Multiply_TwoNumbers_ReturnsCorrectResult
    ├── Divide_TwoNumbers_ReturnsCorrectResult
    └── Divide_ByZero_ThrowsException
```

Click:

```text
Run All Tests
```

Expected:

```text
Passed: 5
Failed: 0
Skipped: 0
```

---

# Step 8 — CMD Commands

Open terminal in the **solution folder**.

### Check .NET

```cmd
dotnet --version
```

### Build

```cmd
dotnet build
```

### Run all tests

```cmd
dotnet test
```

Expected:

```text
Passed!  - Failed: 0, Passed: 5, Skipped: 0
```

---

# Step 9 — Run Only Testing Project

From solution folder:

```cmd
dotnet test CalculatorAPI.Tests
```

Or:

```cmd
dotnet test CalculatorAPI.Tests\CalculatorAPI.Tests.csproj
```

---

# Step 10 — Test Intentional Failure

In:

```text
CalculatorAPI.Tests
└── UnitTest1.cs
```

Change:

```csharp
Assert.Equal(30, result);
```

to:

```csharp
Assert.Equal(40, result);
```

Run:

```cmd
dotnet test
```

You will get:

```text
Failed: 1
Passed: 4
```

It will show:

```text
Expected: 40
Actual:   30
```

Change it back:

```csharp
Assert.Equal(30, result);
```

Run again:

```cmd
dotnet test
```

Final:

```text
Passed: 5
Failed: 0
Skipped: 0
```

---

# Final Project Structure

```text
CalculatorTesting
│
├── CalculatorAPI
│   │
│   ├── Properties
│   ├── Controllers
│   ├── CalculatorService.cs
│   ├── Program.cs
│   ├── appsettings.json
│   └── CalculatorAPI.csproj
│
└── CalculatorAPI.Tests
    │
    ├── UnitTest1.cs
    └── CalculatorAPI.Tests.csproj
```

## Practical Result

```text
CalculatorService created
        ↓
xUnit project created
        ↓
Project Reference added
        ↓
5 test cases created
        ↓
Test Explorer
        ↓
Passed: 5
Failed: 0
```