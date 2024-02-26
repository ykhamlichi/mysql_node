const { connection } = require("./db/conn");
const { getAllClients } = require("./db/crud");

let conn = connection("ensaf_node");

// Supprimer un client
conn.query(
  "DELETE FROM client WHERE id between ? and ?",
  [12, 18],
  (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("client deleted");
  }
);

// Afficher tous les clients
// SQL Injection
// const sql = 'SELECT * FROM client where id = ' + "1 OR id = id;";
// conn.query('SELECT * FROM client where id = ? or id = ?', [1, 2], (err, results) => {
// const sql = "SELECT * FROM client where id = ";
// conn.query('SELECT * FROM client where id between ? and ?', [5, 11], (err, results) => {
conn.query("SELECT * FROM client", (err, results) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Query results: ", results);
});

// Fermer la connection
conn.end();
