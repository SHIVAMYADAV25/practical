// import { useState } from "react";

// function App() {

//     const [form, setForm] = useState({
//         name: "",
//         email: "",
//         password: "",
//         age: ""
//     });

//     const [errors, setErrors] = useState({});


//     // Handle input
//     function handleChange(e) {

//         const { name, value } = e.target;

//         setForm({
//             ...form,
//             [name]: value
//         });

//     }


//     // Validate form
//     function validate() {

//         const newErrors = {};

//         if (!form.name.trim()) {
//             newErrors.name = "Name is required";
//         }

//         if (!form.email.includes("@")) {
//             newErrors.email = "Enter a valid email";
//         }

//         if (form.password.length < 6) {
//             newErrors.password =
//                 "Password must be at least 6 characters";
//         }

//         if (!form.age || form.age < 18) {
//             newErrors.age = "Age must be 18 or above";
//         }

//         return newErrors;
//     }


//     // Submit form
//     function handleSubmit(e) {

//         e.preventDefault();

//         const validationErrors = validate();

//         setErrors(validationErrors);

//         if (Object.keys(validationErrors).length === 0) {

//             console.log("Form submitted:", form);

//             alert("Registration successful");

//         }

//     }


//     return (
//         <div>

//             <h2>User Registration Form</h2>

//             <form onSubmit={handleSubmit}>

//                 {/* Name */}
//                 <div>
//                     <label>Name:</label>

//                     <input
//                         type="text"
//                         name="name"
//                         value={form.name}
//                         onChange={handleChange}
//                     />

//                     <p>{errors.name}</p>
//                 </div>


//                 {/* Email */}
//                 <div>
//                     <label>Email:</label>

//                     <input
//                         type="email"
//                         name="email"
//                         value={form.email}
//                         onChange={handleChange}
//                     />

//                     <p>{errors.email}</p>
//                 </div>


//                 {/* Password */}
//                 <div>
//                     <label>Password:</label>

//                     <input
//                         type="password"
//                         name="password"
//                         value={form.password}
//                         onChange={handleChange}
//                     />

//                     <p>{errors.password}</p>
//                 </div>


//                 {/* Age */}
//                 <div>
//                     <label>Age:</label>

//                     <input
//                         type="number"
//                         name="age"
//                         value={form.age}
//                         onChange={handleChange}
//                     />

//                     <p>{errors.age}</p>
//                 </div>


//                 <button type="submit">
//                     Register
//                 </button>

//             </form>

//         </div>
//     );
// }

// export default App;

import { useState } from "react";

function App() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        age: ""
    });

    const [errors, setErrors] = useState({});


    function handleChange(e) {

        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value
        });

    }


    function validate() {

        const newErrors = {};

        if (!form.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!form.email.includes("@")) {
            newErrors.email = "Enter a valid email";
        }

        if (form.password.length < 6) {
            newErrors.password =
                "Password must be at least 6 characters";
        }

        if (!form.age || form.age < 18) {
            newErrors.age = "Age must be 18 or above";
        }

        return newErrors;
    }


    function handleSubmit(e) {

        e.preventDefault();

        const validationErrors = validate();

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {

            console.log("Form submitted:", form);

            alert("Registration successful");

        }

    }


    return (
        <div className="container">

            <h2>User Registration Form</h2>

            <form onSubmit={handleSubmit}>

                <div>
                    <label>Name:</label>

                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                    />

                    <p>{errors.name}</p>
                </div>


                <div>
                    <label>Email:</label>

                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                    />

                    <p>{errors.email}</p>
                </div>


                <div>
                    <label>Password:</label>

                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                    />

                    <p>{errors.password}</p>
                </div>


                <div>
                    <label>Age:</label>

                    <input
                        type="number"
                        name="age"
                        value={form.age}
                        onChange={handleChange}
                    />

                    <p>{errors.age}</p>
                </div>


                <button type="submit">
                    Register
                </button>

            </form>

        </div>
    );
}

export default App;