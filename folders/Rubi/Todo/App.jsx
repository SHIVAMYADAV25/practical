import { useState } from "react";
import "./App.css";


// Todo Form
function TodoForm({ addTodo }) {

    const [text, setText] = useState("");

    function handleSubmit(e) {

        e.preventDefault();

        if (text.trim() === "") {
            return;
        }

        addTodo(text);

        setText("");
    }

    return (
        <form onSubmit={handleSubmit} className="todo-form">

            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter task"
            />

            <button type="submit">
                Add Task
            </button>

        </form>
    );
}


// Todo Item
function TodoItem({ todo, toggleTodo, deleteTodo }) {

    return (
        <li className="todo-item">

            <span
                className={todo.completed ? "completed" : ""}
            >
                {todo.text}
            </span>

            <div className="actions">

                <button
                    onClick={() => toggleTodo(todo.id)}
                >
                    {todo.completed ? "Undo" : "Complete"}
                </button>

                <button
                    className="delete"
                    onClick={() => deleteTodo(todo.id)}
                >
                    Delete
                </button>

            </div>

        </li>
    );
}


// Todo List
function TodoList({ todos, toggleTodo, deleteTodo }) {

    return (
        <ul className="todo-list">

            {todos.map(todo => (

                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />

            ))}

        </ul>
    );
}


// Main App
function App() {

    const [todos, setTodos] = useState([]);


    // Add task
    function addTodo(text) {

        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false
        };

        setTodos([...todos, newTodo]);
    }


    // Complete / Incomplete
    function toggleTodo(id) {

        setTodos(
            todos.map(todo =>
                todo.id === id
                    ? {
                        ...todo,
                        completed: !todo.completed
                    }
                    : todo
            )
        );

    }


    // Delete task
    function deleteTodo(id) {
        setTodos(
            todos.filter(todo => todo.id !== id)
        );

    }


    return (
        <div className="container">

            <h1>TODO List</h1>

            <TodoForm addTodo={addTodo} />

            <TodoList
                todos={todos}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
            />

        </div>
    );
}

export default App;