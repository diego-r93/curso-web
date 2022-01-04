const escola = "Epcar"

console.log(escola.charAt(2))
console.log(escola.charAt(4))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('p'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat('!'))
console.log(escola.replace(/\w/, 'A'))

console.log('Diego,Arthur,Renata,Givaldo'.split(','))