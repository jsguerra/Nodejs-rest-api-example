const express = require('express')
const router = express.Router()
const booksController = require('../controllers/books')

// Get all books
// ========================================
router.get('/api/v1/books', booksController.getAllBooks)

// Create a new book
// ========================================
router.post('/api/v1/books', booksController.createBook)

module.exports = router