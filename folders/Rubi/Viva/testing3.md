## 1. What is MERN?

**Answer:**

> MERN stands for **MongoDB, Express.js, React.js and Node.js**.  
> MongoDB is used for the database, Express and Node.js are used for the backend, and React is used for the frontend.

**Remember:**

```text
React → Frontend
Node + Express → Backend
MongoDB → Database
```

---

#  MongoDB Viva

## 2. What is MongoDB?

**Answer:**

> MongoDB is a **NoSQL, document-oriented database** that stores data in BSON documents instead of rows and columns.

---

## 3. What is NoSQL?

**Answer:**

> NoSQL means **Not Only SQL**. It refers to databases that don't primarily use the traditional relational table structure.

---

## 4. What is a document in MongoDB?

**Answer:**

> A document is a single record in MongoDB. It is stored in a JSON-like BSON format.

Example:

```json
{
  "name": "Shivam",
  "age": 20,
  "email": "shivam@gmail.com"
}
```

---

## 5. What is a collection?

**Answer:**

> A collection is a group of MongoDB documents. It is similar to a table in a relational database.

```text
Database
   ↓
Collection
   ↓
Documents
```

---

## 6. MongoDB vs MySQL?

| MongoDB | MySQL |
|---|---|
| NoSQL | SQL |
| Documents | Tables |
| BSON | Rows/columns |
| Flexible schema | Structured schema |
| Collections | Tables |

---

## 7. What are CRUD operations?

**Answer:**

> CRUD stands for **Create, Read, Update and Delete**.

```text
Create → Insert
Read   → Find
Update → Update
Delete → Delete
```

---

## 8. Give MongoDB CRUD methods.

**Answer:**

```javascript
insertOne()
find()
updateOne()
deleteOne()
```

---

## 9. What is `_id` in MongoDB?

**Answer:**

> `_id` is the unique identifier of a MongoDB document. MongoDB automatically generates an ObjectId if we don't provide one.

Example:

```json
{
  "_id": "68f...",
  "name": "Shivam"
}
```

---

## 10. What is ObjectId?

**Answer:**

> ObjectId is MongoDB's default unique identifier type for documents.

---

# Node.js Viva

## 11. What is Node.js?

**Answer:**

> Node.js is a JavaScript runtime that allows us to execute JavaScript outside the browser, mainly on the server side.

---

## 12. Is Node.js a programming language?

**Answer:**

> No. Node.js is a **JavaScript runtime environment**.

🔥 Very common viva question.

---

## 13. What JavaScript engine does Node.js use?

**Answer:**

> Node.js uses Google's **V8 JavaScript engine**.

---

## 14. Why is Node.js popular?

**Answer:**

> Node.js is fast and efficient for I/O-based applications because it uses an **event-driven and non-blocking architecture**.

---

## 15. What does non-blocking mean?

**Answer:**

> Non-blocking means Node.js can start an operation such as reading a file or querying a database without waiting for it to finish before handling other tasks.

---

## 16. What is npm?

**Answer:**

> npm stands for **Node Package Manager**. It is used to install, manage and publish Node.js packages.

Example:

```bash
npm install express
```

---

## 17. What is `package.json`?

**Answer:**

> `package.json` contains information about a Node.js project, such as its name, version, dependencies and scripts.

---

## 18. What is `node_modules`?

**Answer:**

> `node_modules` contains the packages installed by npm or another package manager.

---

## 19. What is `require()`?

**Answer:**

> `require()` is used in CommonJS to import modules.

```javascript
const express = require("express");
```

---

## 20. What is `module.exports`?

**Answer:**

> `module.exports` is used to export functionality from a CommonJS module.

```javascript
module.exports = add;
```

---

# Express.js Viva

## 21. What is Express.js?

**Answer:**

> Express.js is a lightweight web framework for Node.js used to create servers, APIs and web applications.

---

## 22. Why do we use Express?

**Answer:**

> Express simplifies server creation, routing, middleware handling and HTTP request/response handling in Node.js.

---

## 23. How do you create an Express server?

**Answer:**

```javascript
const express = require("express");

const app = express();

app.listen(3000, () => {
    console.log("Server running");
});
```

---

## 24. What is `app.listen()`?

**Answer:**

> `app.listen()` starts the Express server and makes it listen for incoming requests on a specific port.

---

## 25. What is a port?

**Answer:**

> A port is a logical communication endpoint through which applications communicate over a network.

Example:

```text
localhost:3000
```

Here `3000` is the port.

---

# HTTP Methods

## 26. What are HTTP methods?

**Answer:**

> HTTP methods define what operation we want to perform on a resource.

Common methods:

```text
GET     → Read
POST    → Create
PUT     → Update
PATCH   → Partial Update
DELETE  → Delete
```

---

## 27. Difference between GET and POST?

**Answer:**

> GET is generally used to retrieve data, while POST is used to send/create data.

Example:

```javascript
app.get("/students", ...)
app.post("/students", ...)
```

---

## 28. What is PUT?

**Answer:**

> PUT is used to update or replace an existing resource.

---

## 29. What is DELETE?

**Answer:**

> DELETE is used to remove a resource.

```javascript
app.delete("/students/:id", ...)
```

---

#  Express Middleware

## 30. What is middleware?

**Answer:**

> Middleware is a function that runs between receiving a request and sending the response.

It has access to:

```text
request
response
next
```

Example:

```javascript
app.use(express.json());
```

---

## 31. Why do we use `express.json()`?

**Answer:**

> `express.json()` parses incoming JSON request bodies so we can access the data using `req.body`.

Example:

```javascript
app.post("/student", (req, res) => {
    console.log(req.body);
});
```

---

## 32. What is `req`?

**Answer:**

> `req` represents the incoming HTTP request.

---

## 33. What is `res`?

**Answer:**

> `res` represents the HTTP response that the server sends to the client.

---

## 34. What is `req.params`?

**Answer:**

> `req.params` is used to access route parameters.

```javascript
app.get("/students/:id", (req, res) => {
    console.log(req.params.id);
});
```

For:

```text
/students/10
```

`id` is:

```text
10
```

---

## 35. What is `req.body`?

**Answer:**

> `req.body` contains data sent in the request body, usually with POST or PUT requests.

---

## 36. What is `req.query`?

**Answer:**

> `req.query` contains query string parameters.

Example:

```text
/students?age=20
```

Then:

```javascript
req.query.age
```

returns:

```text
20
```

---

#  MongoDB + Express

## 37. How do Node.js and MongoDB communicate?

**Answer:**

> Node.js communicates with MongoDB using a MongoDB driver or libraries such as Mongoose.

---

## 38. What is Mongoose?

**Answer:**

> Mongoose is an ODM library for MongoDB and Node.js. It provides schemas, models, validation and convenient database operations.

---

## 39. What is a schema in Mongoose?

**Answer:**

> A schema defines the structure and rules of documents in a MongoDB collection.

Example:

```javascript
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
});
```

---

## 40. What is a model?

**Answer:**

> A model is created from a schema and is used to interact with MongoDB documents.

```javascript
const Student = mongoose.model("Student", studentSchema);
```

---

#  Async JavaScript

## 41. What is asynchronous programming?

**Answer:**

> Asynchronous programming allows a program to perform long-running operations without blocking the execution of other operations.

---

## 42. What is a callback?

**Answer:**

> A callback is a function passed to another function and executed later after an operation completes.

Example:

```javascript
fs.readFile("data.txt", "utf8", (err, data) => {
    console.log(data);
});
```

---

## 43. What is a Promise?

**Answer:**

> A Promise represents the eventual success or failure of an asynchronous operation.

It has three states:

```text
Pending
Fulfilled
Rejected
```

---

## 44. What is async/await?

**Answer:**

> `async/await` provides a cleaner way to work with Promises and makes asynchronous code easier to read.

Example:

```javascript
async function getData() {
    const result = await fetchData();
}
```

---

## 45. Difference between callback and Promise?

**Answer:**

> Callback uses a function that executes after an operation completes, while a Promise represents the future result of an asynchronous operation and provides `.then()` and `.catch()`.

---

## 46. Why do we use `try...catch` with async/await?

**Answer:**

> We use `try...catch` to handle errors from asynchronous operations.

```javascript
try {
    const data = await getData();
} catch (error) {
    console.log(error);
}
```

---

#  File Handling

## 47. Which Node.js module is used for file operations?

**Answer:**

> The `fs` or File System module.

```javascript
const fs = require("fs");
```

---

## 48. How do you read a file?

```javascript
fs.readFile("data.txt", "utf8", (err, data) => {
    console.log(data);
});
```

---

## 49. How do you write a file?

```javascript
fs.writeFile("data.txt", "Hello", (err) => {
    if (err) throw err;

    console.log("File written");
});
```

---

## 50. Difference between `readFile` and `readFileSync`?

**Answer:**

> `readFile()` is asynchronous, while `readFileSync()` is synchronous and blocks execution until the operation completes.

---

# 🔥 React Viva

## 51. What is React?

**Answer:**

> React is a JavaScript library for building user interfaces using reusable components.

---

## 52. Is React a framework?

**Answer:**

> React is primarily a **JavaScript library**, especially for building user interfaces.

🔥 Say this confidently.

---

## 53. What is a component?

**Answer:**

> A component is a reusable piece of UI that can contain its own logic and presentation.

Example:

```jsx
function App() {
    return <h1>Hello</h1>;
}
```

---

## 54. What is JSX?

**Answer:**

> JSX stands for JavaScript XML. It allows us to write HTML-like syntax inside JavaScript.

Example:

```jsx
const element = <h1>Hello</h1>;
```

---

## 55. Is JSX HTML?

**Answer:**

> No. JSX looks like HTML but it is JavaScript syntax that gets transformed into JavaScript.

---

#  React Hooks

## 56. What is a Hook?

**Answer:**

> Hooks are functions that allow functional components to use React features such as state and lifecycle-related functionality.

---

## 57. What is `useState()`?

**Answer:**

> `useState()` is a React Hook used to add state to a functional component.

```jsx
const [count, setCount] = useState(0);
```

---

## 58. What is state?

**Answer:**

> State is data managed by a component that can change over time and cause the component to re-render.

---

## 59. What is `setCount`?

For:

```javascript
const [count, setCount] = useState(0);
```

**Answer:**

> `setCount` is the state update function used to change the value of `count`.

---

## 60. What happens when state changes?

**Answer:**

> React schedules a re-render of the component so the UI can reflect the updated state.

---

# Props

## 61. What are props?

**Answer:**

> Props are inputs passed from a parent component to a child component.

Example:

```jsx
<Student name="Shivam" />
```

---

## 62. State vs Props?

| State | Props |
|---|---|
| Managed by component | Passed by parent |
| Can change | Usually read-only by child |
| Internal data | External input |

---

# React Forms

## 63. What is a controlled component?

**Answer:**

> A controlled component is a form element whose value is controlled by React state.

Example:

```jsx
<input
    value={name}
    onChange={(e) => setName(e.target.value)}
/>
```

---

## 64. Why do we use `onChange`?

**Answer:**

> `onChange` handles changes made by the user in an input field.

---

## 65. How do you prevent form submission from refreshing the page?

**Answer:**

```javascript
e.preventDefault();
```

Example:

```jsx
function handleSubmit(e) {
    e.preventDefault();
}
```

---

# React Context

## 66. What is Context API?

**Answer:**

> Context API allows us to share data between components without manually passing props through every intermediate component.

---

## 67. Why use Context?

**Answer:**

> It is useful for global or widely shared data such as themes, authentication information and user preferences.

---

## 68. What is `useContext()`?

**Answer:**

> `useContext()` is used to access a value stored in a React Context.

---

# Custom Hooks

## 69. What is a custom Hook?

**Answer:**

> A custom Hook is a JavaScript function starting with `use` that allows us to reuse stateful React logic.

Example:

```javascript
function useCounter() {
    const [count, setCount] = useState(0);

    return { count, setCount };
}
```

---

# useEffect

## 70. What is `useEffect()`?

**Answer:**

> `useEffect()` is used to perform side effects in React components, such as API calls, subscriptions and interacting with external systems.

Example:

```jsx
useEffect(() => {
    fetchData();
}, []);
```

---

## 71. What does `[]` mean in useEffect?

**Answer:**

> An empty dependency array means the effect is intended to run after the initial mount, rather than after every render.

---

## 72. What happens if dependency array is omitted?

```javascript
useEffect(() => {
    console.log("Hello");
});
```

**Answer:**

> The effect runs after every render.

---

# API + React

## 73. How does React communicate with Node.js?

**Answer:**

> React communicates with the Node.js/Express backend through HTTP requests such as GET, POST, PUT and DELETE.

```text
React
  ↓
fetch()
  ↓
Express API
  ↓
MongoDB
```

---

## 74. What is `fetch()`?

**Answer:**

> `fetch()` is a browser API used to make HTTP requests.

Example:

```javascript
fetch("http://localhost:3000/students")
```

---

## 75. How do you send POST data from React?

```javascript
fetch("http://localhost:3000/students", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
});
```

---

## 76. Why do we use `JSON.stringify()`?

**Answer:**

> It converts a JavaScript object into a JSON string so it can be sent in an HTTP request body.

---

## 77. Why do we use `response.json()`?

**Answer:**

> It parses the JSON response received from the server into a JavaScript object.

---

#  React Router

## 78. What is React Router?

**Answer:**

> React Router is a library used to implement client-side routing in React applications.

---

## 79. Why do we need routing?

**Answer:**

> Routing allows users to navigate between different views or pages without completely reloading the web application.

---

## 80. What is `BrowserRouter`?

**Answer:**

> `BrowserRouter` provides routing functionality to a React application using the browser's URL.

---

## 81. What is `Route`?

**Answer:**

> `Route` maps a URL path to a React component.

Example:

```jsx
<Route path="/about" element={<About />} />
```

---

## 82. What is `Link`?

**Answer:**

> `Link` is used to navigate between routes without performing a full browser page reload.

```jsx
<Link to="/about">About</Link>
```

---

#  Socket.IO

## 83. What is Socket.IO?

**Answer:**

> Socket.IO is a library used for real-time, bidirectional communication between the client and server.

---

## 84. Where can Socket.IO be used?

**Answer:**

> It can be used for chat applications, live notifications, multiplayer games, live dashboards and real-time updates.

---

## 85. HTTP vs Socket.IO?

**Answer:**

> HTTP generally follows a request-response model, while Socket.IO provides persistent, bidirectional communication between client and server.

```text
HTTP:

Client → Request → Server
Client ← Response ← Server


Socket.IO:

Client ↔ Server
```

---

## 86. What is an event in Socket.IO?

**Answer:**

> An event is a named message used to communicate between the client and server.

Example:

```javascript
socket.emit("message", "Hello");
```

---

## 87. What is `emit()`?

**Answer:**

> `emit()` sends an event.

---

## 88. What is `on()`?

**Answer:**

> `on()` listens for an event.

```javascript
socket.on("message", (data) => {
    console.log(data);
});
```

---

# 🔥 Node Module

## 89. What is a Node module?

**Answer:**

> A Node module is a reusable piece of JavaScript code that can be imported into another Node.js application.

---

## 90. How do you create your own module?

Example:

```javascript
function add(a, b) {
    return a + b;
}

module.exports = add;
```

Then:

```javascript
const add = require("./add");

console.log(add(2, 3));
```

---

## 91. What is npm publishing?

**Answer:**

> npm publishing uploads our package to the npm registry so other developers can install and use it.

Basic commands:

```bash
npm login
npm init
npm publish
```

---

#  Practical-Specific Questions

## 92. Explain your CRUD application.

**Answer:**

> My CRUD application uses React or a client to send HTTP requests to an Express server. Express processes the request and communicates with MongoDB. MongoDB performs Create, Read, Update or Delete operations and the server sends the result back to the client.

---

## 93. Explain your TODO application.

**Answer:**

> The TODO application uses React components and Hooks. I use `useState` to store the tasks and update them when the user adds, completes or deletes a task.

---

## 94. How do you mark a TODO as completed?

**Answer:**

> I update the state of that particular task, usually using a boolean such as `completed`.

Example:

```javascript
{
    text: "Study MERN",
    completed: true
}
```

---

## 95. How does your React form validation work?

**Answer:**

> I store form values in state, check the values when the user submits the form, store validation errors in state, and display those errors near the respective fields.

---

# VERY IMPORTANT: MERN Architecture

## 96. Explain the complete MERN architecture.

This is **VERY likely** to be asked.

Say:

> MERN follows a client-server architecture. React is responsible for the frontend UI. It sends HTTP requests to the Express and Node.js backend. Express handles the routes and business logic. Node.js provides the runtime environment. The backend communicates with MongoDB to store and retrieve data. The response is then sent back to React and React updates the UI.

Draw this:

```text
                 USER
                   ↓
              React.js
                   ↓
             HTTP Request
                   ↓
            Express.js
                   ↓
              Node.js
                   ↓
              MongoDB
                   ↓
             Response
                   ↓
              React UI
```

 **Memorize this.**

---

#  97. Why use MERN instead of separate languages?

**Answer:**

> MERN allows developers to use JavaScript throughout the frontend and backend, which simplifies development and makes it easier to share concepts and code between different parts of the application.

---

#  98. What happens when a user submits a React form?

This is another **very good viva question**.

Answer:

```text
User fills form
       ↓
React stores data in state
       ↓
User clicks Submit
       ↓
fetch() sends POST request
       ↓
Express receives request
       ↓
Backend validates data
       ↓
MongoDB stores data
       ↓
Express sends response
       ↓
React receives response
       ↓
UI updates
```

---

#  99. What is REST API?

**Answer:**

> REST API is an API architecture that uses HTTP methods to perform operations on resources.

Example:

```text
GET     /students
POST    /students
PUT     /students/:id
DELETE  /students/:id
```

---

#  100. What is JSON?

**Answer:**

> JSON stands for JavaScript Object Notation. It is a lightweight format commonly used for exchanging data between frontend and backend.

Example:

```json
{
    "name": "Shivam",
    "age": 20
}
```

---

#  20 RAPID-FIRE QUESTIONS

Your examiner can literally ask these one after another.

| Question | One-line answer |
|---|---|
| MERN? | MongoDB, Express, React, Node |
| MongoDB? | NoSQL document database |
| Node.js? | JavaScript runtime |
| Express? | Node.js web framework |
| React? | UI JavaScript library |
| npm? | Node Package Manager |
| CRUD? | Create, Read, Update, Delete |
| API? | Interface for communication between software |
| REST? | Architecture using HTTP resources/methods |
| JSON? | Data interchange format |
| JSX? | JavaScript XML syntax |
| Component? | Reusable UI unit |
| Props? | Data passed to a component |
| State? | Component-managed changing data |
| Hook? | Function providing React features |
| useState? | Manages component state |
| useEffect? | Handles side effects |
| Context? | Shares data across component tree |
| Socket.IO? | Real-time bidirectional communication |
| Mongoose? | ODM for MongoDB |

---
