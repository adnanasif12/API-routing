const express = require("express");
const app = express();

const userRoutes = require("./user");
app.use(userRoutes);


const paymentRoute = require("./payment");
app.use(paymentRoute);


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});