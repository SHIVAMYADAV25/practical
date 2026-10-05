#  PART 1 — HTML / CSS

## 1. What is Flexbox?

**Answer:**

> Flexbox is a CSS layout system used to arrange elements in a row or column, mainly for one-dimensional layouts.

Example:

```css
.container {
    display: flex;
}
```

---

## 2. What is CSS Grid?

> CSS Grid is a two-dimensional layout system used to arrange elements in rows and columns.

```css
.container {
    display: grid;
}
```

---

## 3. Flexbox vs Grid?

| Flexbox | Grid |
|---|---|
| One-dimensional | Two-dimensional |
| Row OR column | Rows AND columns |
| Good for components | Good for page layouts |

### Easy answer:

> **Flexbox is mainly one-dimensional, while Grid is two-dimensional.**

---

## 4. What is `justify-content`?

It aligns items along the **main axis**.

```css
display: flex;
justify-content: center;
```

Common values:

```text
flex-start
center
flex-end
space-between
space-around
space-evenly
```

---

## 5. What is `align-items`?

It aligns items along the **cross axis**.

```css
align-items: center;
```

---

## 6. `justify-content` vs `align-items`?

For normal:

```css
flex-direction: row;
```

```text
justify-content → horizontal
align-items     → vertical
```

But remember: they depend on the **main axis and cross axis**, not always horizontal/vertical.

---

## 7. What is `flex-direction`?

It defines the direction of flex items.

```css
flex-direction: row;
```

or:

```css
flex-direction: column;
```

---

## 8. What is `gap`?

It creates space between flex/grid items.

```css
.container {
    display: flex;
    gap: 20px;
}
```

---

## 9. What is responsive design?

> Responsive design means making a website adapt to different screen sizes such as mobile, tablet and desktop.

Usually done using:

```css
@media
```

---

#  PART 2 — JavaScript

## 10. Difference between `let`, `const`, and `var`?

| `var` | `let` | `const` |
|---|---|---|
| Function scoped | Block scoped | Block scoped |
| Can redeclare | Cannot redeclare | Cannot redeclare |
| Can reassign | Can reassign | Cannot reassign |

Most modern JavaScript uses:

```js
let
const
```

---

## 11. What is an arrow function?

Short syntax for functions.

```js
const add = (a, b) => {
    return a + b;
};
```

---

## 12. What is `map()`?

`map()` creates a **new array** by transforming each element.

```js
const nums = [1, 2, 3];

const result = nums.map(n => n * 2);
```

Result:

```text
[2, 4, 6]
```

---

## 13. What is `filter()`?

`filter()` creates a new array containing elements that satisfy a condition.

```js
const result = nums.filter(n => n > 1);
```

Result:

```text
[2, 3]
```

---

## 14. `map()` vs `filter()`?

> `map()` transforms elements, while `filter()` selects elements based on a condition.

---

## 15. What is `find()`?

Returns the **first element** satisfying a condition.

```js
students.find(s => s.id === 2);
```

---

## 16. What is `findIndex()`?

Returns the **index** of the first matching element.

```js
students.findIndex(s => s.id === 2);
```

---

## 17. What is destructuring?

Extracting values from arrays or objects.

```js
const { name, email } = user;
```

---

## 18. What is spread operator?

```js
...
```

It expands elements/properties.

Example:

```js
const newArray = [...oldArray, newItem];
```

In React it's commonly used to create a new array without directly modifying the old one.

---

#  PART 3 — React

## 19. What is React?

> React is a JavaScript library for building user interfaces using reusable components.

---

## 20. What is a component?

> A component is a reusable piece of UI.

Example:

```text
Navbar
Button
TodoItem
LoginForm
```

---

## 21. What is JSX?

> JSX is a syntax that allows us to write HTML-like code inside JavaScript.

Example:

```jsx
const element = <h1>Hello</h1>;
```

---

## 22. What is a Hook?

> Hooks are functions that allow functional components to use React features such as state.

Examples:

```text
useState
useEffect
useContext
useRef
```

---

#  23. What is `useState()`?

> `useState` is a React Hook used to create and manage state in a functional component.

```jsx
const [count, setCount] = useState(0);
```

Here:

```text
count    → current value
setCount → function to update value
```

---

## 24. What is state?

> State is data managed by a component that can change over time and cause the component to re-render.

---

## 25. What are props?

> Props are data passed from a parent component to a child component.

Example:

```jsx
<TodoItem todo={todo} />
```

---

## 26. Props vs State?

| Props | State |
|---|---|
| Passed by parent | Managed by component |
| Read-only | Can be updated |
| Used to pass data | Used to store changing data |

### Short answer:

> **Props are passed into a component, while state is managed inside a component.**

---

#  27. What is `onClick`?

`onClick` is a React event handler that runs when an element is clicked.

```jsx
<button onClick={handleClick}>
    Click
</button>
```

---

#  28. Different ways to use `onClick`?

### Function reference

```jsx
<button onClick={handleClick}>
```

### Inline arrow function

```jsx
<button onClick={() => handleClick()}>
```

### Passing argument

```jsx
<button onClick={() => deleteTodo(id)}>
```

###  Wrong

```jsx
<button onClick={handleClick()}>
```

This calls the function immediately during rendering instead of waiting for the click.

---

#  29. What are React events?

React provides event handlers such as:

```text
onClick
onChange
onSubmit
onMouseOver
onMouseEnter
onMouseLeave
onKeyDown
onKeyUp
```

---

## 30. What is `onChange`?

It runs when the value of an input changes.

```jsx
<input
    onChange={(e) => setName(e.target.value)}
/>
```

---

## 31. What is `e.target.value`?

It gets the current value of the input that triggered the event.

```jsx
onChange={(e) => {
    console.log(e.target.value);
}}
```

---

## 32. What is `onSubmit`?

It runs when a form is submitted.

```jsx
<form onSubmit={handleSubmit}>
```

---

## 33. Why `e.preventDefault()`?

It prevents the browser's default behavior.

For forms, it prevents the page from reloading.

```js
function handleSubmit(e) {
    e.preventDefault();
}
```

---

#  34. What is conditional rendering?

Displaying UI based on a condition.

```jsx
{isLoggedIn ? "Logout" : "Login"}
```

---

## 35. What is the ternary operator?

Short form of if/else:

```js
condition ? trueValue : falseValue
```

Example:

```jsx
{completed ? "Done" : "Pending"}
```

---

## 36. Why do we use `key` in React lists?

```jsx
todos.map(todo => (
    <TodoItem key={todo.id} />
))
```

> `key` gives React a unique identity for each list item so it can efficiently update the UI.

---

## 37. Why shouldn't we directly modify state?

Wrong:

```js
todos.push(newTodo);
```

Instead:

```js
setTodos([...todos, newTodo]);
```

Because React needs a state update to properly trigger a re-render.

---

#  PART 4 — React Forms

## 38. What is a controlled component?

> A controlled component is an input whose value is controlled by React state.

```jsx
<input
    value={name}
    onChange={(e) => setName(e.target.value)}
/>
```

---

## 39. How do you validate a form?

Check input values before submission.

Example:

```js
if (!email.includes("@")) {
    setError("Invalid email");
}
```

---

## 40. Why use `trim()`?

```js
name.trim()
```

It removes whitespace from the beginning and end of a string.

Useful for checking empty inputs.

---

#  PART 5 — Node.js

## 41. What is Node.js?

> Node.js is a JavaScript runtime that allows JavaScript to run outside the browser, commonly on the server.

---

## 42. What is npm?

> npm stands for Node Package Manager. It is used to install and manage Node.js packages.

Example:

```bash
npm install express
```

---

## 43. What is `package.json`?

It contains project information such as:

```text
name
version
dependencies
scripts
```

---

## 44. What is a module?

> A module is a reusable piece of code that can be imported into another file.

---

## 45. What is `fs`?

`fs` means **File System**.

It is a built-in Node.js module used for:

```text
read
write
update
delete
```

files.

---

## 46. How do you read a file?

```js
import fs from "fs";

fs.readFile("data.txt", "utf8", (err, data) => {
    console.log(data);
});
```

---

## 47. How do you write a file?

```js
fs.writeFile("data.txt", "Hello", (err) => {
    console.log("File written");
});
```

---

#  PART 6 — Express

## 48. What is Express?

> Express is a lightweight Node.js framework used to create web servers and APIs.

---

## 49. How do you create an Express server?

```js
import express from "express";

const app = express();

app.listen(3000);
```

---

## 50. What is middleware?

> Middleware is a function that runs during the request-response cycle.

Example:

```js
app.use(express.json());
```

---

## 51. Why use `express.json()`?

> It allows Express to parse JSON data from the request body.

---

#  52. What are HTTP methods?

The main methods are:

```text
GET
POST
PUT
DELETE
```

Remember:

```text
GET     → Read
POST    → Create
PUT     → Update
DELETE  → Delete
```

---

## 53. What is GET?

Used to retrieve data.

```js
app.get("/students", (req, res) => {
    res.json(students);
});
```

---

## 54. What is POST?

Used to create new data.

```js
app.post("/students", (req, res) => {
    // create student
});
```

---

## 55. What is PUT?

Used to update existing data.

```js
app.put("/students/:id", ...)
```

---

## 56. What is DELETE?

Used to delete data.

```js
app.delete("/students/:id", ...)
```

---

# 57. `req.body` vs `req.params` vs `req.query`

This is **very likely** in viva.

### `req.body`

Data sent in request body:

```json
{
    "name": "Shivam"
}
```

Access:

```js
req.body.name
```

### `req.params`

Data inside URL:

```text
/students/10
```

Access:

```js
req.params.id
```

### `req.query`

Data after `?`:

```text
/students?course=BCA
```

Access:

```js
req.query.course
```

### Remember:

```text
/students/10
     ↓
req.params

/students?course=BCA
     ↓
req.query

JSON data
     ↓
req.body
```

---

# PART 7 — MongoDB

## 58. What is MongoDB?

> MongoDB is a NoSQL database that stores data as documents.

Example:

```json
{
    "name": "Shivam",
    "course": "BCA"
}
```

---

## 59. SQL vs MongoDB?

| SQL | MongoDB |
|---|---|
| Table | Collection |
| Row | Document |
| Column | Field |
| SQL database | NoSQL database |

---

## 60. What is Mongoose?

> Mongoose is an ODM library used to interact with MongoDB from Node.js.

---

## 61. What is a Schema?

> A schema defines the structure of a MongoDB document when using Mongoose.

```js
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number
});
```

---

## 62. What is a Model?

```js
const Student = mongoose.model(
    "Student",
    studentSchema
);
```

> A model provides methods to perform database operations.

For example:

```js
Student.find()
Student.create()
Student.findById()
```

---

# PART 8 — CRUD

## 63. What is CRUD?

```text
C → Create
R → Read
U → Update
D → Delete
```

---

## 64. MongoDB CRUD methods?

Common Mongoose methods:

```js
create()
find()
findById()
findByIdAndUpdate()
findByIdAndDelete()
```

---

# PART 9 — Socket.IO

## 65. What is Socket.IO?

> Socket.IO is a library that provides real-time, bidirectional communication between client and server.

Used for:

```text
Chat
Live notifications
Real-time dashboards
Games
```

---

## 66. What is `socket.emit()`?

It sends an event.

```js
socket.emit("chat message", message);
```

---

## 67. What is `socket.on()`?

It listens for an event.

```js
socket.on("chat message", (message) => {
});
```

---

## 68. `socket.emit()` vs `io.emit()`?

### `socket.emit()`

Sends to a **specific client**.

### `io.emit()`

Sends to **all connected clients**.

---

## 69. What does `connection` mean?

```js
io.on("connection", (socket) => {
});
```

It runs when a new client connects to the server.

---

# PART 10 — REST API

## 70. What is an API?

> API stands for Application Programming Interface. It allows different software applications to communicate with each other.

---

## 71. What is REST API?

> REST is an architectural style for designing web APIs using HTTP methods and resources.

Example:

```text
GET    /students
POST   /students
PUT    /students/1
DELETE /students/1
```

---

## 72. What is JSON?

> JSON stands for JavaScript Object Notation. It is a lightweight format commonly used to exchange data between client and server.

Example:

```json
{
    "name": "Shivam",
    "course": "BCA"
}
```

---