import mongoose from "mongoose";
import express from "express"

const app = express();

app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(() => console.log("DB connected"))
.catch((err) => console.log(err))

const StudentSchema = mongoose.Schema({
    name : String,
    age : Number,
    course : String
})

const Student = mongoose.model("Student",StudentSchema)

app.post("/create",async (req,res)=>{
    const stud = new Student(req.body)

    await stud.save();

    res.status(201).json(stud)
})

app.get("/",async (req,res)=>{
    const stud = await Student.find();

    res.json(stud)
})

//find by ID
app.get("/student/:id",async (req,res)=>{
    const stud = await Student.findById(req.params.id);
    res.json(stud)
})

app.patch("/student/:id",async (req,res)=>{
    const stud = await Student.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json(stud)
})

app.delete("/student/:id",async (req,res)=>{
    await Student.findByIdAndDelete(req.params.id);

    res.json({Message : "Deleted succefully"})
})

app.listen(3000,()=>{
    console.log("device connected to port 3000")
})