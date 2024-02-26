const { connection } = require("./db/conn");
const { getAllClients } = require("./db/crud");

getAllClients(console.log);