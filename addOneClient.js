const { connection } = require("./db/conn");
const { createTable, addClient, addAllClient } = require("./db/crud");
let conn = connection("ensaf_node"); // Ajouter un seul client
const tableName = "client";
const data = {
  prenom: "Youness",
  nom: "Khamlichi",
  email: "youness.khamlichi@gmail.com",
};
addClient(tableName, data); // Fermer la connection
conn.end();
