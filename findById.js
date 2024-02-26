const { connection } = require("./db/conn");
const { findByID } = require("./db/crud");

findByID(2, console.log);