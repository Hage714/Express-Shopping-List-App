const express = require('express');
const morgan = require('morgan');

const PORT = process.env.PORT || 5000;

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

//bringing in the routes
const itemRoutes = require("./routes/items");


//database configurationconnecting database
const { connect_database } = require("./db/connect");
try {
    connect_database();
} catch (error) {
    console.log(error)
}


//base routes
app.get("/", (req, res) => {
res.json({"message": "Server is running"}).sendStatus(200);
});

//Item Routes

app.use("/items", itemRoutes);

//start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});