const express = require("express");
const morgan = require("morgan");

const app = express(); //Create new instance

const PORT = process.env.PORT || 5000; //Declare the port number
const userRouter = require("./routes/users");

app.use(express.json()); //allows us to access request body as req.body
app.use(morgan("dev")); //enable incoming request logging in dev mode

app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log("Server started listening on port : ", PORT);
});
