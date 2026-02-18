const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/tasktesting")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));


app.use("/auth", require("./routes/auth"));
app.use("/task", require("./routes/task"));

app.listen(5000, () => {
    console.log("Server running on port 5000");
});

