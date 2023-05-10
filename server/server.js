const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');

connectDb();
const app = express();
const port =  process.env.PORT ||8888;

app.use(express.json());
app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, ()=> console.log(`server listening on port ${port}`));
