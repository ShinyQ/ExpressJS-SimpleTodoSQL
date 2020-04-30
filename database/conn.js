const mysql = require('mysql')

const config = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'landing'
}

const con = mysql.createConnection(config);

con.connect((err) => {
  if (err) throw err;
});

module.exports = con
