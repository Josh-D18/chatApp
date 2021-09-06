const app = require("express")();
const httpServer = require("http").createServer(app);
const options = {
  /* ... */
};
const io = require("socket.io")(httpServer, options);

io.on("connection", (socket) => {
  console.log(socket);
});

// httpServer.listen(5000);
