const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getRandCompliment, getFortune, addCompliment, deleteCompliment, getAllCompliments, getSingleCompliment, updateCompliment } = require('./controller')

app.get("/api/compliments/random", getRandCompliment);
app.get("/api/compliments", getAllCompliments);
app.post("/api/compliments", addCompliment);
app.put("/api/compliments/:id", updateCompliment);
app.get("/api/compliments/:id", getSingleCompliment);
app.delete("/api/compliments/:id", deleteCompliment);
app.get("/api/fortune", getFortune);


app.listen(4000, () => console.log("Server running on 4000"));
