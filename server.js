const path = require('path')
const express = require('express')
const app = express()
const PORT = 3000
const routes = require('./routes/books')
const cors = require('cors')

// Middleware to parse body into json
// ========================================
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))
app.use(cors())

// Use public directory for root
// ========================================
app.use('/', express.static(path.join(__dirname, 'public')))

// API Routes
// ========================================
app.use('/', routes)

// Server running and listening
// ========================================
app.listen(PORT, () => console.log(`Listening on https://localhost:${PORT}`))