const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 5000;
const userRouter = require("./routes/users");
const loginRouter = require("./routes/login");
const registerRouter = require("./routes/register");

app.use(express.json());
app.use(morgan("dev")); //enable incoming request logging in dev mode
app.use(cors());
app.use("/users", userRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);

app.listen(PORT, () => {
  console.log("Server started listening on port : ", PORT);
});
