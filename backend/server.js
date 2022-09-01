const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const { readdirSync } = require("fs");
app.use(cors());
app.use(express.json());
require("dotenv").config();
readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));

mongoose.connect(process.env.MONGODB_URAL).then(() => {
  console.log("Data base connection ");
});
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server is running ${port}`);
});

////mongoose.connect('mongodb+srv://user:user123456@cluster0.ld9e4.mongodb.net/WWE?retryWrites=true&w=majority',()=>{
// console.log("DB Connected")
//console.log((+new Date() * Math.random()).toString().substring(0, 1));
