import mongoose from "mongoose";
import express from "express"
import multer from "multer"

const app = express()

app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/fileDB")
.then(() => console.log("DB connected"))
.catch((err) => console.log(err))

const FileSchema = new mongoose.Schema({
    filename:String,
    mimetype:String,
    data : Buffer
})

const upload = multer({
    storage:multer.memoryStorage()
})


const File = mongoose.model("File",FileSchema)

app.post("/upload",upload.single("file"),async(req,res)=>{
    const file = await new File({
        filename : req.file.filename,
        mimetype:req.file.mimetype,
        data : req.file.buffer
    }).save()

    res.json({message : "File uploaded" , file : file._id})
})

app.get("/:id",async (req,res) => {
    const file =await File.findById(req.params.id);
    res.contentType(file.mimetype).send(file.data)
})

app.listen(3000,()=>{
    console.log("File running on port : ",3000)
})