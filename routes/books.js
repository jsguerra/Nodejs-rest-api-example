const express = require('express')
const router = express.Router()
const model = require('../models/books')

// Create a new book
// ========================================
router.post('/api/v1/books', model.createBook)

// Get all books
// ========================================
router.get('/api/v1/books', model.getAllBooks)

// Get a book
// ========================================
router.get('/api/v1/books/:id', model.getBook)

// Update a book
// ========================================
router.patch('/api/v1/books/:id', model.updateBook)

// Delete a book
// ========================================
router.delete('/api/v1/books/:id', model.deleteBook)

module.exports = router