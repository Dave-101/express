const express = require("express");
const app = express();

app.use(logIn);

app.get("/", (req, res) => {
    console.log("Home");
    res.send("Home");
})

app.get("/users", users, (req, res) => {
    console.log("users");
    res.send("Users")
})

app.get("/auth", auth, (req, res) => {
    if(req.user == true){
        console.log("I am Admin");
        res.send("I am Admin");
    }
    else{
        if(req.user == false){
            res.send("you are an user");
            console.log("You are an user!");
        }
    }
})

app.listen(2000, () => {
    console.log("Running...");
})

function logIn(req, res, next){
    console.log("Login");
    next();
}

function users(req, res, next){
    if(req.query.user === "true"){
        res.send("I am a user");
        console.log("I am a user");
    }
    else{
        res.send("Sorry you are not a user!");
    }
    next();
}

function auth(req, res, next){
    if(req.query.user === "true"){
        req.user = true;
    }
    else{
        req.user = false;
    }
    next();
}
