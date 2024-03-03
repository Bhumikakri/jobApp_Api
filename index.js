const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const jobRoutes = require("./Routes/job");

dotenv.config();

const app = express();


mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.hqwqfux.mongodb.net/`)
.then(()=>{console.log("connect")})
.catch((err)=> console.log(err,"not connect"));

app.use(express.json());

app.use("/api/v1/job", jobRoutes);

app.listen(10000, () => {
  console.log("server is running up on 10000");
});
