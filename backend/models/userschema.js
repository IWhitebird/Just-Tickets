import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    uname: {
        type: String,
        require: true,
      },
      email: {
        type: String,
        require: true,
      },
      password: {
        type: String,
        require: true,
      },
})

const User = new mongoose.model("User",userSchema)

export default User
