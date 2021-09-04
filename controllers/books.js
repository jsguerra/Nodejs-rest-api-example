// Connect to database
// ========================================
const database = require('../connect')

// GET all books
// ========================================
const getAllBooks = (req, res, next) => {
  const sql = "SELECT * from books"
  const params = []

  database.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({"error": err.message})
    }

    res.json({
      "message": "success",
      "data": rows
    })
  })
}

// GET one book
// ========================================

// POST create a book
// ========================================
const createBook = (req, res, next) => {
  res.json({message: "POST new book"})
}

// PUT update a book
// ========================================

// DELETE delete a book
// ========================================

// export controller functions
// ========================================
module.exports = {
  getAllBooks,
  createBook
}