import fs from "fs";

fs.writeFile("data.txt", "Hello from Node.js", (err) => {
    if (err) {
        console.log("Error:", err);
        return;
    }
    console.log("File written successfully");
    fs.readFile("data.txt", "utf8", (err, data) => {
        if (err) {
            console.log("Error:", err);
            return;
        }
        console.log("File content:");
        console.log(data);

    });

});