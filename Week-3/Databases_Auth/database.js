const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://dipitmadan:Ab%40yGoldmine12@cluster0.fz8gj9e.mongodb.net/user_app.users",
);

const cat = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

const user = new cat({ name: "Dipit Madan", email:"dipitmadan@gmail.com",password:'123456' });
user.save().then(() => console.log("saved"));
