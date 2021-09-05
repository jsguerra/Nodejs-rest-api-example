const sqlite3 = require('sqlite3').verbose()

// Based on the following tutorial
// https://developerhowto.com/2018/12/29/build-a-rest-api-with-node-js-and-express-js/

// Create database file if it does not exist and Open for Read/Write
let db = new sqlite3.Database('./data/books.db', (err) => {
  if (err) {
    console.error(err.message)
    throw err
  } else {
    console.log('Connected to database.')

    // db.run(`CREATE TABLE user (
    //   id INTEGER PRIMARY KEY AUTOINCREMENT,
    //   name text, 
    //   email text UNIQUE, 
    //   password text, 
    //   CONSTRAINT email_unique UNIQUE (email)
    //   )`,
    // (err) => {
    //   if (err) {
    //       // Table already created
    //   } else {
    //       // Table just created, creating some rows
    //       var insert = 'INSERT INTO user (name, email, password) VALUES (?,?,?)'
    //       db.run(insert, ["admin","admin@example.com",md5("admin123456")])
    //       db.run(insert, ["user","user@example.com",md5("user123456")])
    //   }
    // })
  }
})

// Close database
// db.close((err) => {
//   if (err) {
//     console.error(err.message)
//   }
//   console.log('Close the database connection.')
// })

module.exports = db