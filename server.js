const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.get("/", (req,res)=>{
  res.send("Adham Company Platform is Running 🚀");
});

app.listen(3000, ()=>{
  console.log("Server running on port 3000");
});
