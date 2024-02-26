const { connection } = require("./conn");

// Variables
const database = "ensaf_node";
var conn = connection(database);

// Créer une table Client
function createTable(tableName) {
  const createTableClient = `CREATE TABLE IF NOT EXISTS ${tableName} (
        id INT PRIMARY KEY AUTO_INCREMENT,
        prenom varchar(255),
        nom VARCHAR(255),
        email VARCHAR(255) NOT NULL
    )`;

  conn.query(createTableClient, function (err, result) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(
      "Table " +
        tableName +
        " créée avec succès. dabs la base de données " +
        database
    );
  });
}

// Fonction d'ajout d'un seul client
function addClient(tableName, data) {
  let sql = `insert into ${ tableName } set ?`;
  conn.query(sql, data, function (err) {
    if (!err) {
      console.log("Client ajouté");
      return;
    } else console.log(err);
  });
}

// Fonnction d'ajout de plusieurs clients en même temps
function addAllClient(clients) {
  let insertQuery = "insert into `client`(nom, prenom, email) values ?";

  const values = clients.map((client) => [
    client.prenom,
    client.nom,
    client.email,
  ]);

  conn.query(insertQuery, [values], function (err, result) {
    if (!err) {
      console.log(
        `${clients.length} : ${result.affectedRows} clients ont été ajoutés.`
      );
    } else console.log(err);
  });
}

function findByID(id, callback) {
  let sql = 'Select * From `client` where id=?'
  conn.query(sql,[id], function(err, results) {
    callback(results[0]);
  });
  conn.end()
};

function getAllClients(callback) {
  var sql = 'select * from `client`';
  conn.query(sql, function (err, results, fields) {
      if (!err) callback(results);
      else console.log(err);
  });
  conn.end();
}


module.exports = { createTable, addClient, addAllClient, getAllClients, findByID };
