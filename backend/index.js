import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import User from "../backend/models/userschema.js"

const app = express();
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017",{
    newUrlParser:true,
    useUnifiedTopology:true
}, () => {
    console.log("Database connection established");
})

/////// ROUTES 
app.post("/login", (req, res) => {
    const {email,password}=req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            if (password===user.passwd){
                res.send({message:"Logged in successfully and as",user:user})
            }
            else{
                res.send({message:"Invalid credentials"})
            }
        }else{
            res.send("User not found")
        }
})
})
app.post("/signup", (req, res) => {
    const {uname,email,password,repassword}=req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"User already exists"})
        }else{
            const user = new User({
                uname:uname,
                email:email,
                password:password,
            })
            user.save(err => {
                console.log(user)
                if(err) {
                    res.send(err)
                }else{
                    res.send({message:"Regsitration Succeeded",user})
                    console.log('user reg')
                }
            })
        }
    })
})

app.listen(8000,() => {
    console.log("Server is up and listening on port 8000")
})