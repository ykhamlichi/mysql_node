const { connection } = require("./db/conn");
const { createTable } = require("./db/crud");

let conn = connection("ensaf_node");
let tableName = 'client';
createTable('client');

// Fermer la connection
conn.end();
