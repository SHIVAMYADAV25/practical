import express from "express";

const app = express();

app.use(express.json());

let students = [
    {
        id: 1,
        name: "Amit Sharma",
        course: "BCA",
        email: "amit@gmail.com"
    },
    {
        id: 2,
        name: "Priya Patil",
        course: "BCA",
        email: "priya@gmail.com"
    },
    {
        id: 3,
        name: "Rahul Joshi",
        course: "BCA",
        email: "rahul@gmail.com"
    }
];

app.get("/students", (req, res) => {
    res.json(students);
});

app.get("/students/:id", (req, res) => {
    const id = Number(req.params.id);
    const student = students.find(student => student.id === id);
    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }
    res.json(student);
});


app.post("/students", (req, res) => {
    const student = {
        id: students.length + 1,
        name: req.body.name,
        course: req.body.course,
        email: req.body.email
    };
    students.push(student);
    res.status(201).json({
        message: "Student added successfully",
        student: student
    });
});


app.put("/students/:id", (req, res) => {
    const id = Number(req.params.id);
    const student = students.find(student => student.id === id);
    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }
    student.name = req.body.name;
    student.course = req.body.course;
    student.email = req.body.email;
    res.json({
        message: "Student updated successfully",
        student: student
    });
});


app.delete("/students/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = students.findIndex(student => student.id === id);
    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }
    const deletedStudent = students.splice(index, 1);
    res.json({
        message: "Student deleted successfully",
        student: deletedStudent[0]
    });
});


app.listen(3000, () => {
    console.log("Server running on port 3000");

});

// testing
// GET http://localhost:3000/students
// GET http://localhost:3000/students/2
// POST http://localhost:3000/students
// PUT http://localhost:3000/students/1
// DELETE http://localhost:3000/students/3


// Testing
// GET - All students
// curl http://localhost:3000/students
// GET - Student by ID
// curl http://localhost:3000/students/2
// POST - Add student
// curl -X POST http://localhost:3000/students -H "Content-Type: application/json" -d "{\"name\":\"Shivam Yadav\",\"course\":\"BCA\",\"email\":\"shivam@gmail.com\"}"
// PUT - Update student
// curl -X PUT http://localhost:3000/students/1 -H "Content-Type: application/json" -d "{\"name\":\"Amit Kumar\",\"course\":\"MCA\",\"email\":\"amitnew@gmail.com\"}"
// DELETE - Delete student
// curl -X DELETE http://localhost:3000/students/3