//cal
import { useState } from "react";

function App() {

    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState("");

    function calculate(operator) {

        const a = Number(num1);
        const b = Number(num2);

        if (operator === "+") {
            setResult(a + b);
        }
        else if (operator === "-") {
            setResult(a - b);
        }
        else if (operator === "*") {
            setResult(a * b);
        }
        else if (operator === "/") {

            if (b === 0) {
                setResult("Cannot divide by zero");
            } else {
                setResult(a / b);
            }

        }
    }

    return (
        <div>

            <h2>Calculator</h2>

            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                placeholder="First number"
            />

            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                placeholder="Second number"
            />

            <br />

            <button onClick={() => calculate("+")}>
                +
            </button>

            <button onClick={() => calculate("-")}>
                -
            </button>

            <button onClick={() => calculate("*")}>
                ×
            </button>

            <button onClick={() => calculate("/")}>
                ÷
            </button>

            <h3>Result: {result}</h3>

        </div>
    );
}

export default App;



// 2. Counter
import { useState } from "react";

function App() {

    const [count, setCount] = useState(0);

    return (
        <div>

            <h2>Counter</h2>

            <h1>{count}</h1>

            <button onClick={() => setCount(count + 1)}>
                +
            </button>

            <button onClick={() => setCount(count - 1)}>
                -
            </button>

            <button onClick={() => setCount(0)}>
                Reset
            </button>

        </div>
    );
}

export default App;

//3. Show / Hide Password
import { useState } from "react";

function App() {

    const [show, setShow] = useState(false);

    return (
        <div>

            <input
                type={show ? "text" : "password"}
                placeholder="Password"
            />

            <button onClick={() => setShow(!show)}>
                {show ? "Hide" : "Show"}
            </button>

        </div>
    );
}

export default App;

//4. Character Counter
import { useState } from "react";

function App() {

    const [text, setText] = useState("");

    return (
        <div>

            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <p>
                Characters: {text.length}
            </p>

        </div>
    );
}

export default App;

//5. Toggle ON / OFF

import { useState } from "react";

function App() {

    const [status, setStatus] = useState(false);

    return (
        <div>

            <h2>
                Status: {status ? "ON" : "OFF"}
            </h2>

            <button onClick={() => setStatus(!status)}>
                Toggle
            </button>

        </div>
    );
}

export default App;

//6. Input Display
import { useState } from "react";

function App() {

    const [name, setName] = useState("");

    return (
        <div>

            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
            />

            <h2>Hello {name}</h2>

        </div>
    );
}

export default App;

//7. Add Two Numbers
import { useState } from "react";

function App() {

    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [result, setResult] = useState(0);

    function add() {

        setResult(Number(a) + Number(b));

    }

    return (
        <div>

            <input
                type="number"
                value={a}
                onChange={(e) => setA(e.target.value)}
            />

            <input
                type="number"
                value={b}
                onChange={(e) => setB(e.target.value)}
            />

            <button onClick={add}>
                Add
            </button>

            <h2>Result: {result}</h2>

        </div>
    );
}

export default App;

//8. Check Even / Odd
import { useState } from "react";

function App() {

    const [number, setNumber] = useState("");
    const [result, setResult] = useState("");

    function check() {

        if (Number(number) % 2 === 0) {
            setResult("Even");
        } else {
            setResult("Odd");
        }

    }

    return (
        <div>

            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />

            <button onClick={check}>
                Check
            </button>

            <h2>{result}</h2>

        </div>
    );
}

export default App;

//9. List of Names
function App() {

    const students = [
        "Amit",
        "Priya",
        "Rahul",
        "Shivam"
    ];

    return (
        <div>

            <h2>Students</h2>

            <ul>

                {students.map((student, index) => (

                    <li key={index}>
                        {student}
                    </li>

                ))}

            </ul>

        </div>
    );
}

export default App;

//10. Add Items to Listimport { useState } from "react";

function App() {

    const [name, setName] = useState("");
    const [students, setStudents] = useState([]);


    function addStudent() {

        if (name.trim() === "") {
            return;
        }

        setStudents([
            ...students,
            name
        ]);

        setName("");

    }


    return (
        <div>

            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter student name"
            />

            <button onClick={addStudent}>
                Add
            </button>


            <ul>

                {students.map((student, index) => (

                    <li key={index}>
                        {student}
                    </li>

                ))}

            </ul>

        </div>
    );
}

export default App;

//11. Delete Items from List
import { useState } from "react";

function App() {

    const [items, setItems] = useState([
        "HTML",
        "CSS",
        "JavaScript",
        "React"
    ]);


    function deleteItem(index) {

        setItems(
            items.filter((item, i) => i !== index)
        );

    }


    return (
        <div>

            <h2>Skills</h2>

            {items.map((item, index) => (

                <div key={index}>

                    {item}

                    <button
                        onClick={() => deleteItem(index)}
                    >
                        Delete
                    </button>

                </div>

            ))}

        </div>
    );
}

export default App;

//12. Search Filter
import { useState } from "react";

function App() {

    const [search, setSearch] = useState("");

    const students = [
        "Amit",
        "Priya",
        "Rahul",
        "Shivam",
        "Neha"
    ];


    const filteredStudents = students.filter(student =>
        student.toLowerCase().includes(search.toLowerCase())
    );


    return (
        <div>

            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search student"
            />


            {filteredStudents.map((student, index) => (

                <p key={index}>
                    {student}
                </p>

            ))}

        </div>
    );
}

export default App;

//13. Simple Dropdown
import { useState } from "react";

function App() {

    const [course, setCourse] = useState("");

    return (
        <div>

            <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
            >

                <option value="">
                    Select Course
                </option>

                <option value="BCA">
                    BCA
                </option>

                <option value="MCA">
                    MCA
                </option>

                <option value="BBA">
                    BBA
                </option>

            </select>

            <h3>Selected: {course}</h3>

        </div>
    );
}

export default App;

//14. Simple Login Form
import { useState } from "react";

function App() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");


    function login(e) {

        e.preventDefault();

        if (email === "admin@gmail.com" && password === "123456") {
            setMessage("Login successful");
        } else {
            setMessage("Invalid email or password");
        }

    }


    return (
        <form onSubmit={login}>

            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />

            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />

            <button type="submit">
                Login
            </button>

            <h3>{message}</h3>

        </form>
    );
}

export default App;