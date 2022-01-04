const moduloA = require('../../moduloA')     // ..//..//moduloa   funciona no Mac e Windows mas não no Linux
console.log(moduloA.ola)

const c = require('./pastaC/index')
console.log(c.ola2)

// const http = require('http')
// http.createServer((req, res) => {
//   res.write('Bom dia!')
//   res.end()
// }).listen(8080)