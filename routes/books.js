const express = require('express')
const router = express.Router()
const booksController = require('../controllers/books')

// Create a new book
// ========================================
router.post('/api/v1/books', booksController.createBook)

// Get all books
// ========================================
router.get('/api/v1/books', booksController.getAllBooks)

// Get a book
// ========================================
router.get('/api/v1/books/:id', booksController.getBook)

// Update a book
// ========================================
router.patch('/api/v1/books/:id', booksController.updateBook)

// Delete a book
// ========================================
router.delete('/api/v1/books/:id', booksController.deleteBook)

module.exports = router