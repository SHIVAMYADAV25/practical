Yes — **this question bank is much closer to what you should prepare**. It has 280 questions and, importantly, includes follow-ups that an examiner can ask by pointing at your code. Pasted text

And yes, you should **definitely prepare HTTP status codes**. Your bank explicitly includes `200`, `404`, and `500`, but I would prepare a few more because examiners commonly ask them. Pasted text

# 🔥 MCCSCT401 MERN — Viva Answers

I'm going to give you the answers in **actual viva language** — short enough to speak, but enough to satisfy the examiner.

---

# 1. HTTP STATUS CODES — MUST KNOW

### What is an HTTP status code?

> An HTTP status code is a three-digit number sent by the server to indicate the result of an HTTP request.

### Most important codes

| Code | Meaning | When used |
|---|---|---|
| **200** | OK | Successful request |
| **201** | Created | New resource successfully created |
| **204** | No Content | Successful request with no response body |
| **400** | Bad Request | Invalid request/data |
| **401** | Unauthorized | Authentication is required/failed |
| **403** | Forbidden | User is authenticated but doesn't have permission |
| **404** | Not Found | Resource doesn't exist |
| **409** | Conflict | Conflict with existing resource/data |
| **500** | Internal Server Error | Server-side error |

### Example:

```javascript
res.status(200).json(data);
```

Means:

> Request was successful.

```javascript
res.status(201).json(newUser);
```

Means:

> A new resource was successfully created.

```javascript
res.status(404).json({
    message: "Student not found"
});
```

Means:

> The requested resource doesn't exist.

```javascript
res.status(500).json({
    message: "Internal server error"
});
```

Means:

> Something went wrong on the server.

### ⭐ Very important difference

**401 vs 403**

> `401` means the user is not properly authenticated.  
> `403` means the user is authenticated but does not have permission.

---

# 2. CRUD — VERY IMPORTANT

Your question bank starts CRUD with the first practical and asks about all four operations. Pasted text

### What is CRUD?

> CRUD stands for Create, Read, Update and Delete. These are the four basic operations performed on data.

| CRUD | HTTP | MongoDB/Mongoose |
|---|---|---|
| Create | POST | `create()` |
| Read | GET | `find()` |
| Update | PUT/PATCH | `findByIdAndUpdate()` |
| Delete | DELETE | `findByIdAndDelete()` |

### Create?

> Create means adding a new document to the database.

### Read?

> Read means retrieving existing data.

### Update?

> Update means modifying existing data.

### Delete?

> Delete means removing data.

---

# 3. MongoDB

### What is MongoDB?

> MongoDB is a NoSQL document-oriented database that stores data in BSON documents.

### Why MongoDB with Express?

> Express handles the API and MongoDB stores the application's data. Node.js/Express can communicate with MongoDB through Mongoose or the MongoDB driver.

### What is a collection?

> A collection is a group of MongoDB documents. It is roughly similar to a table in SQL.

### What is a document?

> A document is a single record stored in MongoDB in BSON format.

Example:

```json
{
    "name": "Shivam",
    "age": 20
}
```

### What is `_id`?

> `_id` is the unique identifier of a MongoDB document.

### What happens if two documents have the same `_id`?

> MongoDB does not allow duplicate `_id` values because `_id` must be unique.

---

# 4. MONGOOSE

### What is Mongoose?

> Mongoose is an ODM library that allows Node.js applications to work with MongoDB using schemas and models.

### MongoDB vs Mongoose?

> MongoDB is the actual database, while Mongoose is a library used by Node.js to interact with MongoDB.

### What is a Schema?

> A schema defines the structure and rules of documents.

```javascript
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
});
```

### What is a Model?

> A model is created from a schema and is used to perform database operations.

```javascript
const Student = mongoose.model("Student", studentSchema);
```

### How do you connect MongoDB?

```javascript
mongoose.connect("mongodb://127.0.0.1:27017/studentDB");
```

Say:

> `mongoose.connect()` establishes a connection between the Node.js application and MongoDB.

Your question bank specifically includes the MongoDB URL, localhost, port `27017`, `mongoose.connect()`, schema and model. Pasted text

---

# 5. `req.body`, `req.params`, `req.query`

🔥 **Extremely important.**

### What is `req.body`?

> It contains data sent inside the request body.

Example:

```javascript
POST /students
```

```json
{
    "name": "Shivam",
    "age": 20
}
```

Access:

```javascript
req.body.name
```

---

### What is `req.params`?

> It contains values passed as route parameters.

```javascript
app.get("/students/:id", (req, res) => {
    console.log(req.params.id);
});
```

URL:

```text
/students/10
```

Result:

```text
10
```

---

### What is `req.query`?

> It contains query parameters from the URL.

```text
/students?age=20
```

Access:

```javascript
req.query.age
```

Result:

```text
20
```

---

### ⭐ Difference

```text
req.body
    ↓
Data inside request body

req.params
    ↓
Data inside URL path

req.query
    ↓
Data after ? in URL
```

---

# 6. `express.json()`

### What does `express.json()` do?

> It is middleware that parses incoming JSON request bodies and makes the data available through `req.body`.

```javascript
app.use(express.json());
```

Without it, your Express application generally won't parse JSON request bodies automatically.

---

# 7. `res.send()` vs `res.json()`

### `res.send()`

> Sends a response to the client. It can send strings, objects, HTML, etc.

```javascript
res.send("Hello");
```

### `res.json()`

> Sends a JSON response.

```javascript
res.json({
    name: "Shivam"
});
```

### If examiner asks which one for API?

> Usually `res.json()` is preferred when returning structured API data.

---

# 8. Express

### What is Express?

> Express.js is a web framework for Node.js used to create servers, APIs, routes and middleware.

### Why Express instead of Node's HTTP module?

> Express provides convenient routing, middleware and request-response handling, so creating APIs is easier than using the basic HTTP module directly.

---

# 9. HTTP METHODS

Your question bank explicitly covers GET, POST, PUT, PATCH and DELETE. Pasted text

### GET

> Used to retrieve data.

```javascript
app.get("/students", ...)
```

### POST

> Used to create/send new data.

```javascript
app.post("/students", ...)
```

### PUT

> Used to update or replace a resource.

### PATCH

> Used to partially update a resource.

### DELETE

> Used to delete a resource.

---

# ⭐ PUT vs PATCH

Examiner:

**"What's the difference between PUT and PATCH?"**

Answer:

> PUT is generally used for replacing the complete resource, while PATCH is used for partially updating a resource.

---

# 10. Route vs Endpoint

### What is a route?

> A route defines how the server responds to a particular HTTP method and URL.

Example:

```javascript
app.get("/students", ...)
```

### What is an endpoint?

> An endpoint is a specific URL and HTTP method through which a client can interact with a server resource.

Example:

```text
GET /students
```

---

# 11. Middleware

### What is middleware?

> Middleware is a function that runs during the request-response cycle and can access the request, response and `next()` function.

Example:

```javascript
app.use(express.json());
```

### Why `next()`?

> `next()` passes control to the next middleware or route handler.

---

# 12. NODE.JS

### What is Node.js?

> Node.js is a JavaScript runtime environment that allows JavaScript to run outside the browser.

### Is Node.js a programming language?

> No. Node.js is a runtime environment for JavaScript.

### Which engine does Node.js use?

> Google's V8 JavaScript engine.

### Why is Node.js good for APIs?

> It uses an event-driven, non-blocking architecture, which makes it suitable for I/O-heavy applications.

---

# 13. ASYNCHRONOUS PROGRAMMING

Your question bank specifically includes callbacks, Promises and async/await. Pasted text

### What is asynchronous programming?

> It allows the program to perform operations such as database or file operations without blocking other work.

### What is a callback?

> A callback is a function passed to another function and executed later.

```javascript
fs.readFile("data.txt", (err, data) => {
    console.log(data);
});
```

### What is a Promise?

> A Promise represents the eventual result of an asynchronous operation.

States:

```text
Pending
   ↓
Fulfilled

or

Rejected
```

### What is async/await?

> `async/await` is a cleaner syntax for working with Promises.

```javascript
async function getData() {
    const data = await fetchData();
}
```

---

# 14. `try...catch`

### Why use try/catch?

> It is used to handle errors, especially when using asynchronous operations with async/await.

```javascript
try {
    const data = await Student.find();
    res.json(data);
} catch (error) {
    res.status(500).json({
        message: "Server error"
    });
}
```

---

# 15. FILE UPLOAD — MULTER

Your question bank specifically includes Multer, `multipart/form-data`, `req.file`, file size and image restrictions. Pasted text

### What is Multer?

> Multer is a Node.js middleware used to handle `multipart/form-data`, especially file uploads.

### Why can't normal JSON directly upload files?

> JSON is designed for structured text data. File uploads are commonly handled using `multipart/form-data`.

### What is `req.file`?

> `req.file` contains information about a single uploaded file.

### `req.files`?

> `req.files` contains information about multiple uploaded files.

### What is `destination`?

> It specifies where the uploaded file should be stored.

### What is `filename`?

> It specifies the name used to save the uploaded file.

---

# 16. Do we store the actual file in MongoDB?

This depends on the implementation.

If your practical stores files on disk:

> No. The actual file is stored on the server's filesystem, and MongoDB can store information such as filename, path, size or MIME type.

If using GridFS:

> GridFS can store large files inside MongoDB.

### What is GridFS?

> GridFS is MongoDB's mechanism for storing files larger than the normal BSON document size limit by splitting them into chunks.

---

# 17. NODE FILE SYSTEM

The bank specifically asks `fs`, `readFile`, `writeFile`, `appendFile`, synchronous/asynchronous operations and UTF-8. Pasted text

### What is `fs`?

> `fs` stands for File System. It is a built-in Node.js module used to work with files.

```javascript
const fs = require("fs");
```

### Read file

```javascript
fs.readFile("data.txt", "utf8", (err, data) => {
    console.log(data);
});
```

### Write file

```javascript
fs.writeFile("data.txt", "Hello", (err) => {
    console.log("Written");
});
```

### What is `utf8`?

> UTF-8 is a character encoding. It allows us to read the file content as text.

---

# ⭐ `writeFile()` vs `appendFile()`

> `writeFile()` writes/replaces the file content, while `appendFile()` adds data to the existing content.

```javascript
fs.writeFile("a.txt", "Hello");
```

↓

```text
Hello
```

Then:

```javascript
fs.appendFile("a.txt", " World");
```

↓

```text
Hello World
```

---

# 18. SOCKET.IO

Your question bank gives this practical a large set of follow-up questions, including `socket.emit()`, `socket.on()`, `io.emit()` and `disconnect`. Pasted text

### What is Socket.IO?

> Socket.IO is a library that enables real-time, bidirectional communication between client and server.

### Where is it used?

> Chat applications, live notifications, multiplayer games, live dashboards, etc.

### HTTP vs Socket.IO?

> HTTP normally follows a request-response model, whereas Socket.IO allows continuous bidirectional communication between client and server.

---

# ⭐ `socket.on()` vs `socket.emit()`

### `socket.emit()`

> Sends an event.

```javascript
socket.emit("message", "Hello");
```

### `socket.on()`

> Listens for an event.

```javascript
socket.on("message", (msg) => {
    console.log(msg);
});
```

Easy memory:

```text
emit → SEND
on   → LISTEN
```

---

# ⭐ `socket.emit()` vs `io.emit()`

### `socket.emit()`

> Sends the event to a particular connected socket/client.

### `io.emit()`

> Broadcasts the event to all connected clients.

```text
socket.emit()
     ↓
one client


io.emit()
     ↓
all clients
```

---

# 19. React

### What is React?

> React is a JavaScript library for building user interfaces using reusable components.

### What is a component?

> A component is a reusable part of the user interface.

```jsx
function App() {
    return <h1>Hello</h1>;
}
```

### What is JSX?

> JSX is a syntax extension for JavaScript that allows us to write HTML-like UI code inside JavaScript.

---

# 20. PROPS VS STATE

### What are props?

> Props are data passed from a parent component to a child component.

### What is state?

> State is data managed inside a component that can change over time.

### Difference:

```text
Props
Parent → Child
Usually read-only by child

State
Component's own data
Can change using setter
```

---

# 21. `useState()`

### What is useState?

> `useState()` is a React Hook used to add and manage state in functional components.

```jsx
const [count, setCount] = useState(0);
```

### What does it return?

> It returns an array containing the current state value and a function to update that state.

```text
count      → current value
setCount   → update function
```

### Why shouldn't we directly modify state?

Wrong:

```javascript
count = count + 1;
```

Correct:

```javascript
setCount(count + 1);
```

> React needs the state setter to properly schedule the update and re-render the component.

---

# 22. TODO APP

The question bank specifically expects you to explain the component structure. Pasted text

```text
App
│
├── TodoForm
│
└── TodoList
       │
       └── TodoItem
```

### Explain your TODO application.

Say:

> I created a TODO application using React functional components and `useState`. The App component manages the main task state. TodoForm handles adding tasks, TodoList displays the tasks and TodoItem displays individual tasks. Props are used to pass data and functions between components.

### Why `.map()`?

> We use `.map()` to iterate over the array of TODOs and generate a React element for each task.

```jsx
todos.map(todo => (
    <TodoItem key={todo.id} todo={todo} />
))
```

### Why `key`?

> React uses the key to identify list items efficiently when the list changes.

---

# 23. REACT EVENTS

Your bank specifically asks `onClick`, `onChange` and `onSubmit`. Pasted text

### `onClick`

> Handles click events.

```jsx
<button onClick={handleClick}>
    Add
</button>
```

### `onChange`

> Handles changes in input fields.

```jsx
<input onChange={handleChange} />
```

### `onSubmit`

> Handles form submission.

```jsx
<form onSubmit={handleSubmit}>
```

---

# 24. FORM VALIDATION

### What is a controlled input?

> A controlled input is an input whose value is controlled by React state.

```jsx
<input
    value={name}
    onChange={(e) => setName(e.target.value)}
/>
```

### Why `e.preventDefault()`?

> It prevents the browser's default form submission behavior, which normally reloads the page.

```javascript
function handleSubmit(e) {
    e.preventDefault();
}
```

### Client-side validation?

> Validation performed in the browser before sending data to the server.

### Server-side validation?

> Validation performed by the backend.

### Which is more secure?

> Server-side validation is essential for security because client-side validation can be bypassed.

🔥 This is a **very good viva answer**.

---

# 25. FETCH API

The bank specifically asks what `fetch()` returns, `.json()`, Promises, `useEffect`, errors and API availability. Pasted text

### What is Fetch API?

> Fetch API is a browser API used to make HTTP requests.

### What does `fetch()` return?

> `fetch()` returns a Promise that resolves to a Response object.

### Why `.json()`?

> `response.json()` reads the response body and parses JSON data into a JavaScript value.

---

## Explain this code:

```javascript
fetch(url)
    .then(res => res.json())
    .then(data => setData(data));
```

Answer:

> First, `fetch()` sends a request to the URL and returns a Promise. When the response arrives, the first `.then()` converts the response into JSON. The next `.then()` receives the parsed data and stores it using `setData()`.

🔥 Memorize this explanation.

---

# 26. `useEffect()` + API

### Why use `useEffect()` for API calls?

> API calls are side effects, so `useEffect()` is commonly used to perform them after rendering.

Example:

```jsx
useEffect(() => {
    fetchData();
}, []);
```

### What does `[]` mean?

> It means there are no dependencies, so the effect is intended to run after the initial mount.

### What if we don't provide `[]`?

> The effect runs after every render.

---

# 27. POST FROM REACT

The question bank specifically asks about `POST`, `JSON.stringify()` and `Content-Type`. Pasted text

```javascript
fetch("/students", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(student)
});
```

### Why POST?

> POST is normally used to send/create new data.

### Why JSON.stringify()?

> It converts a JavaScript object into a JSON string so it can be sent in the HTTP request body.

### Why Content-Type?

> It tells the server that the request body contains JSON data.

---

# 28. JSON

### What is JSON?

> JSON stands for JavaScript Object Notation. It is a lightweight text format commonly used for exchanging data.

### JSON vs JavaScript object?

> A JavaScript object is a native JavaScript value, while JSON is a text-based data format.

Example object:

```javascript
const user = {
    name: "Shivam"
};
```

JSON:

```json
{
    "name": "Shivam"
}
```

---

# 29. REACT ROUTER

Your question bank specifically covers SPA, BrowserRouter, Routes, Route, Link and navigation. Pasted text

### What is React Router?

> React Router is a library used to implement client-side routing in React applications.

### What is SPA?

> SPA stands for Single Page Application. It loads a main page and dynamically changes the displayed content without full page reloads during normal client-side navigation.

### BrowserRouter?

> Provides routing functionality using the browser's URL.

### Routes?

> Groups the application's route definitions.

### Route?

> Defines which component should render for a particular path.

### Link?

> Provides client-side navigation between routes.

---

## Explain this:

```jsx
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
</Routes>
```

Answer:

> `Routes` contains the route definitions. The `/` path renders the Home component, while `/about` renders the About component.

---

# ⭐ Why `Link` instead of `<a>`?

> `Link` performs client-side navigation without the normal full-page reload associated with a standard anchor navigation.

---

# 30. NODE MODULES

Your bank covers `module.exports`, `require`, built-in modules, npm, package.json and publishing. Pasted text

### What is a module?

> A module is a reusable piece of code that can be imported into another program.

### `module.exports`?

> Used to export functionality from a CommonJS module.

```javascript
module.exports = add;
```

### `require()`?

> Used to import a CommonJS module.

```javascript
const add = require("./add");
```

### Built-in modules?

Examples:

```text
fs
http
path
os
events
```

### npm?

> Node Package Manager.

### `npm init`?

> Creates a `package.json` for a Node project.

### `npm install`?

> Installs packages/dependencies.

### npm registry?

> A public registry where npm packages are stored and from which packages can be downloaded.

### Publishing?

> Publishing means uploading your package to the npm registry so other developers can install it.

```bash
npm login
npm publish
```

---

# 🚨 SUPER IMPORTANT: `npm init` vs `npm install`

### `npm init`

> Initializes a new Node project and creates `package.json`.

### `npm install`

> Installs dependencies/packages.

---

# 🧠 31. `package.json` vs `node_modules`

### package.json

> Contains project metadata, dependencies and scripts.

### node_modules

> Contains the actual installed packages.

---

# 🔥 32. PORTS

### What is localhost?

> `localhost` refers to the local computer on which the application is running.

### What is port 3000?

> Port 3000 is commonly used by development servers such as Express or React applications. It is not a special mandatory port.

### What is port 27017?

> `27017` is the default port commonly used by MongoDB.

🔥 Don't say **"3000 is the Node.js port."**

Say:

> "3000 is a commonly used development port."

---

# 🎯 33. COMPLETE MERN REQUEST FLOW

This is probably the **best thing to memorize for your viva**.

Examiner:

> "Explain how data flows through a MERN application."

You:

> "The user interacts with the React frontend. React sends an HTTP request to the Express backend. Express handles the route and Node.js executes the server-side logic. The backend communicates with MongoDB to read or modify data. MongoDB returns the result, Express sends a response back to React, and React updates the UI."

Draw:

```text
              USER
                ↓
             React
                ↓
          fetch / HTTP
                ↓
            Express
                ↓
            Node.js
                ↓
            MongoDB
                ↓
          Database Result
                ↓
            Express
                ↓
             React
                ↓
               UI
```

---

# 🔥 34. STATUS CODE + CRUD — EXAMINER FAVORITE

If examiner asks:

> "What status code will you return after creating a student?"

Answer:

```javascript
res.status(201).json(student);
```

> `201 Created`.

### Getting students successfully?

```javascript
res.status(200).json(students);
```

> `200 OK`.

### Student doesn't exist?

```javascript
res.status(404).json({
    message: "Student not found"
});
```

> `404 Not Found`.

### Invalid data?

```javascript
res.status(400).json({
    message: "Invalid data"
});
```

> `400 Bad Request`.

### Server/database error?

```javascript
res.status(500).json({
    message: "Internal server error"
});
```

> `500 Internal Server Error`.

---

