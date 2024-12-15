// Données de test 1

let bill = 275 

let tip = (bill >= 50 && bill <= 300) ? ((bill * 15) / 100 ) : ((bill * 20) / 100 )

console.log('Facture 1 : ' + bill + '€')
console.log('Pourboire 1 : ' + tip + '€')
let total = bill + tip 
console.log('Total 1 : ' + total + '€')

// Données de test 2

bill = 40 

tip = (bill >= 50 && bill <= 300) ? ((bill * 15) / 100 ) : ((bill * 20) / 100 )

console.log('Facture 2 : ' + bill + '€')
console.log('Pourboire 2 : ' + tip + '€')
total = bill + tip 
console.log('Total 2 : ' + total + '€')

// Données de test 3

bill = 430 

tip = (bill >= 50 && bill <= 300) ? ((bill * 15) / 100 ) : ((bill * 20) / 100 )

console.log('Facture 3 : ' + bill + '€')
console.log('Pourboire 3 : ' + tip + '€')
total = bill + tip 
console.log('Total 3 : ' + total + '€')