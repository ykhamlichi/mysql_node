const { connection } = require("./db/conn");
const { createTable, addClient, addAllClient } = require("./db/crud");
let conn = connection("ensaf_node");

// Ajouter plusieurs clients
const clients = [
  {
    prenom: "Youness",
    nom: "Khamlichi",
    email: "youness.khamlichi@gmail.com",
  },
  {
    prenom: "Youness",
    nom: "idrissi",
    email: "youness.idrissi@gmail.com",
  },
];
addAllClient(clients);

// Fermer la connection
conn.end();
