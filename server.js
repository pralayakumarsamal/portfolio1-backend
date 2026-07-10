

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", contactRoutes);



app.get("/",(req,res) => {
    res.send("Portfolio Backend is Running...");
})

const PORT = 5000;

app.listen(PORT,() => {
    console.log(`Server is running on Port number  ${PORT}`)
});


mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected sucessfuly"))
  .catch((err) => console.log(err));







  