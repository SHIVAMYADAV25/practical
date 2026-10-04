//socket.io express

import express from "express"
import { Server } from "socket.io"
import http from "http"

const app = express()

const server = http.createServer(app)

const io = new Server(server)

app.use(express.static("public"))

io.on("connection",(socket) => {
    console.log(socket.id);

    socket.on("chat message",(msg) => {
        io.emit("chat message" ,msg)
    })

    socket.on("disconnect",()=>{
        console.log("User disconnected: ",socket.id)
    })
})

server.listen(3000,)