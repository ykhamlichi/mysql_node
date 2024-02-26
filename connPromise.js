const mysql = require("mysql2/promise");

let dbConfig = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "ensaf_node",
};

async function getClient() {
  const connection = await mysql.createConnection(dbConfig);
  let [results] = await connection.execute("SELECT * FROM client WHERE id = ? OR id = ?", [1, 2])
  console.log( results);

  results.forEach(result => {
    console.log( result.nom)
  });
  // Close the DB Connection when you're done with it.
  connection.end();
}

getClient()
