const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'RK Tea Shop backend is running'
  })
})

app.get('/api/menu', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Special Tea',
      price: 15
    },
    {
      id: 2,
      name: 'Filter Coffee',
      price: 20
    },
    {
      id: 3,
      name: 'Fresh Juice',
      price: 40
    },
    {
      id: 4,
      name: 'Snacks',
      price: 30
    }
  ])
})

app.listen(PORT, () => {
  console.log(`RK Tea Shop backend running on http://localhost:${PORT}`)
})
