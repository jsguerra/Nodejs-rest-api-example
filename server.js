const path = require('path')
const express = require('express')
const app = express()
const PORT = 3000
const routes = require('./routes/books')

// Middleware to parse body into json
// ========================================
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

// Use public directory for root
// ========================================
app.use('/', express.static(path.join(__dirname, 'public')))

// API get all books
// ========================================
app.use('/', routes)

// Server running and listening
// ========================================
app.listen(PORT, () => console.log(`Listening on https://localhost:${PORT}`))