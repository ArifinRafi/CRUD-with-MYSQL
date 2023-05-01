const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require('mysql2');

const db = mysql.createPool( {
    host: "localhost",
    user: "root",
    password: "Amarbd55$",
    database: "auto_db"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.delete("/get", (req, res) => {
    const sqlSelect = "SELECT * FROM auto_data";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
        console.log(result);
    })
})



app.get("/get", (req, res) => {
    const sqlSelect = "SELECT * FROM auto_data";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
        console.log(result);
    })
})

app.put("/update", (req, res) => {

    const editMechanic = req.body.editMechanic;
    const oldName = req.body.oldName;
    console.log(editMechanic);
    console.log(oldName);

   

    const sqlUpdate = "UPDATE auto_data SET mechanicName = ? WHERE name = ?";
    db.query(sqlUpdate, [editMechanic, oldName], (err, result) => {
        if(err) console.log(err);
    })
})



app.post("/create", (req, res) => {
    const name = req.body.name;
    const phone = req.body.phone;
    const regNumber = req.body.regNumber;
    const engineNumber = req.body.engineNumber;
    const mechanicName = req.body.mechanicName;
    
    console.log("Api has been called")
    
    console.log(name);
    console.log(phone);
    console.log(regNumber);
    console.log(engineNumber);
    
    const sqlInsert = "INSERT INTO auto_data (name, phone, regNumber, engineNumber, mechanicName) VALUES (?,?,?,?,?)";
    db.query(sqlInsert, [name, phone, regNumber, engineNumber, mechanicName], (error, result) => {
        console.log(result);
       
     })    
})


app.get("/", (req, res) => {

        res.send("f");
    })
    



// app.get("/", (req, res) => {
// //     // const name = "Arifin";
// //     // const age = "24";
//     const sqlInsert = "INSERT INTO auto_data (name, phone, regNumber, engineNumber,mechanicName) VALUES ('Md. Arifizzamanrafirafi', '5656', '3434343435544','dfg','dgfdg')";
//     db.query(sqlInsert, (error, result) => {
//         console.log("error", error);
//         console.log("result", error);
//         res.send("f");
//     })
    
// })

app.listen(5001, () => {
    console.log("running on 5001");

})