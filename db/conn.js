const mysql = require("mysql");


function connection(database) { 
  
  // Créer une connexion à la base de données
  const conn = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: `${database}`,
  });
  conn.connect(function(err) {
    if (err) {
      console.error(`Erreur lors de la connexion à la base de données MySQL`, err);
      return;
    } // not connected!
    console.log(`Connected to MySQL database : ${ database }`)
  });

  return conn;
}

// Exporter le module de connection
module.exports = { connection };