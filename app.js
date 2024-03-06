const express = require("express");
const app = express();
require("./db/connection");
const cors = require('cors');
app.use(express.json());

const formdata = require("./db/schema/fromdata");

app.get("/submit", (req, res) => {
    res.send("form submitted");
});

app.use(cors({
    origin: 'http://localhost:3000',
    allowedHeaders: ['Content-Type']  // Add Content-Type to the allowed headers
}));

app.post("/form", (req, res) => {
    console.log(req.body);
    res.status(200).send("Form submitted");
    formdata.create(req.body);
});

app.put("/update/:id", (req, res) => {
    let id = req.params.id;
    console.log(id);
    formdata.findByIdAndUpdate(id, req.body).then(() => {
        res.status(201).send("Form Updated Successfully");
    }).catch(err => {
        res.status(500).send("Error updating form: " + err.message);
    });
});


app.get("/formData", (req, res) => {
    formdata.find().then((data) => {
        res.status(200).send(data);
    })
});


app.get("/getCountires", (req, res) => {
    res.send(["india", "australia", "brazil", "usa"]);
})

app.listen(8000, () => {
    console.log("server is running on port 8000");
})