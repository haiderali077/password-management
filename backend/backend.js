const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const  PORT = 3001;
const {encrypt, decrypt} = require('./encryption.js');


app.use(cors());
app.use(express.json( ));

const db = mysql.createConnection({
    user: 'root',   
    host: 'localhost',
    password: '642642',
    database: 'passwordmanager',
})


app.post("/addpassword", (req, res) => {
    const {password, title} = req.body;   

    const encryptedPassword = encrypt(password);

    db.query(
        "INSERT INTO passwords (password, title, iv) VALUES (?,?, ?)", [
        encryptedPassword.password, title, encryptedPassword.iv],
        (err, result) => {
             if(err) {
                console.log(err);
             } 
             else {
                res.send("Success");
             }
        }
    );

});

app.get("/getPasswords", (req, res) => {

    db.query(
        "SELECT * FROM passwords", (err, results) => {
            if (err) {
                console.log(err);
            } else {
                res.send(results);
            }
        }
    )

}); 

app.post("/decryptedpassword", (req, res) => {
    res.send(decrypt(req.body))
})




app.get('/', (req, res) => {
    res.send("fuck this shit");
});
app.listen(PORT, () => {
    console.log("server is running");
});