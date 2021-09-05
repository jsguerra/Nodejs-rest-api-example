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
const getBook = (req, res, next) => {
  const sql = "SELECT * from books where bookid = ?"
  const params = req.params.id

  database.get(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({"error":err.message})
      return
    }
    res.json({
        "message":"success",
        "data":row
    })
  })
}

// POST create a book
// ========================================
const createBook = (req, res, next) => {
  const data = {
    title: req.body.title,
    pages: req.body.pages,
    authorid: req.body.authorid,
    extension: req.body.extension,
    path: req.body.path
  }

  const sql = `INSERT INTO books (title, pages, authorid, extension, path) VALUES (?,?,?,?,?)`
  const params = [data.title, data.pages, data.authorid, data.extension, data.path]

  database.run(sql, params, function (err, result) {
    if (err) {
      res.status(400).json({"error": err.message})
      return
    }

    res.json({
      "message": "success",
      "data": data,
      "id": this.lastID
    })
  })
}

// PATCH update a book
// ========================================
const updateBook = (req, res, next) => {
  const data = {
    title: req.body.title,
    pages: req.body.pages,
    authorid: req.body.authorid,
    extension: req.body.extension,
    path: req.body.path
  }

  const sql = `
  UPDATE books set
  title = COALESCE(?,title),
  pages = COALESCE(?,pages),
  authorid = COALESCE(?,authorid),
  extension = COALESCE(?,extension),
  path = COALESCE(?,path)
  WHERE bookid = ?`
  const params = [data.title, data.pages, data.authorid, data.extension, data.path, req.params.id]

  database.run(sql, params, function (err, result) {
    if (err) {
      res.status(400).json({"error": err.message})
      return
    }

    res.json({
      message: "success",
      data: data,
      changes: this.changes
    })
  })
}

// DELETE delete a book
// ========================================
const deleteBook = (req, res, next) => {
  database.run(
    "DELETE FROM books WHERE bookid = ?",
    req.params.id,
    function (err, result) {
      if (err){
        res.status(400).json({"error": res.message})
        return
      }
      res.json({
        "message":"deleted",
        changes: this.changes
      })
    }
  )
}

// export controller functions
// ========================================
module.exports = {
  getAllBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook
}