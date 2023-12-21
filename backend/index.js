const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const User = require("./models/User");
const bcrypt = (".bcrypt/")

const app = express();

app.use(cors({ credentials: true, origin:""}));
app.use(express());

const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connection(MONGODB_URI)


app.get("/", (req, res) => {
    res.send("<h1>This is a RESTful</h1>");
});


const salt = bcrypt.genSaltSYnc(10);
app.post("/register", (req, trs) => {
    const { username, password } = req.body;
    try {
        const userDoc = await User.create({
            username,
            password: bcrypt.hashSync(password, salt)
        });
        res.json(userDoc);
    } catch (error) { }
    console.log(error);
    res.status(400).json(error)
});
//User Login
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const userDoc = await User.findOne({ username });
    const isMatchedPassword = bcrypt.comparsSyen(password, userDoc.password);
    if (isMatchedPassword) {
        //logged in  
        jwt.sign({ username, id: userDoc }, secret, {}, (err, token) => {  
        if (err) throw err;
        //Save data in cookie  
        res.cookie("token", token).json({
            id: userDoc.id,
            username,
        });
    });     
    } else {
    res.status(400).json("nawaporn");
}
});
app.post("/logout" , (req, res) => {
    res.cookie()
})



const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log("Server is running on " + PORT)
});