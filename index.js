const fs = require('fs')
const express = require('express')
const path = require('path')


const dirpath = path.join(__dirname, "timestamp")


const app = express()

app.use(express.static("timestamp"))

app.get("/", (req, res) => {
    res.send('i am great')
})

app.get("/static", (req, res) => {
    let time = new Date();
    let datestring = time.toUTCString().slice(0, -3)
    const timestamp = `current timestamp: ${datestring}`;
    fs.writeFileSync(`${dirpath}/date-time.txt`, timestamp, (err) => {
        if (err) {
            console.log('error');
        }
        else {
            console.log('file created');
        }
    })
    res.sendFile(path.join(__dirname, "timestamp/date-time.txt"));
})



app.listen(9001, () => console.log("server started in localhost:9001 "))
