const pilotos = ['Hamilton', 'Bottas', 'Verstappen', 'Leclerc', 'Vettel']
console.log(pilotos)

pilotos.pop()        // Remove último elemento da lista
console.log(pilotos)

pilotos.push('Raikkonen')   // Acrescenta no final na lista
console.log(pilotos)

pilotos.shift()      // Remove primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Senna')    // Acrescenta no início da lista 
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Rubinho', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.splice(2)   // novo array
console.log(algunsPilotos1)
console.log(pilotos)

const algunsPilotos2 = pilotos.splice(1, 4)
console.log(algunsPilotos2)