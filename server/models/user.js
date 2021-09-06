const bookshelf = require("../bookshelf");

const User = bookshelf.model("User", {
  tableName: "users",
});

module.exports = User;
