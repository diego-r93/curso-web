const express = require('express')
const app = express()

const saudacao = require('./saudacaoMid')

app.use(saudacao('Diego'))

app.use('/opa', (req, res, next) => {
   console.log('Antes...')
   next()
})

app.get('/opa', (req, res, next) => {
   console.log('Durante...')
   res.json({
      name: 'iPad 32Gb',
      price: 1899.00,
      discount: 0.12
   })

   next()
})

app.use('/opa', (req, res) => {
   console.log('Depois...')
})

app.listen(3000, () => {
   console.log('Backend executando...')
})