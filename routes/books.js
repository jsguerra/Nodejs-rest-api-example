const express = require('express')
const router = express.Router()
const model = require('../models/books')

// Create a new book
// ========================================
router.post('/books', model.createBook)

// Get all books
// ========================================
router.get('/books', model.getAllBooks)

// Get a book
// ========================================
router.get('/books/:id', model.getBook)

// Update a book
// ========================================
router.patch('/books/:id', model.updateBook)

// Delete a book
// ========================================
router.delete('/books/:id', model.deleteBook)

module.exports = router