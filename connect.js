const sqlite3 = require('sqlite3').verbose()

// Create database file if it does not exist and Open for Read/Write
let db = new sqlite3.Database('./data/books.db', (err) => {
  if (err) {
    console.error(err.message)
  }
  console.log('Connected to the books database.')
})

// Close database
// db.close((err) => {
//   if (err) {
//     console.error(err.message)
//   }
//   console.log('Close the database connection.')
// })

module.exports = db