//exo 1

let poidsB = 78
let poidsM = 92
let sizeB = 1.69
let sizeM = 1.95

let imcB = poidsB/(sizeB*sizeB)
let imcM = poidsM/(sizeM*sizeM)

let bernardHigherIMC = ((imcB > imcM) ? true : false) 
console.log(bernardHigherIMC)

poidsB = 95
poidsM = 85
sizeB = 1.88
sizeM = 1.76

imcB = poidsB/(sizeB*sizeB)
imcM = poidsM/(sizeM*sizeM)

bernardHigherIMC = ((imcB > imcM) ? true : false) 
console.log(bernardHigherIMC)

//exo 2

if(bernardHigherIMC) {
    console.log('Bernard a un IMC ( ' + imcB +  ' ) plus élevé que Marcel ( ' + imcM + ')')
} else {
    console.log('Marcel a un IMC ( ' + imcM + ' ) plus élevé que Bernard (' + imcB + ')')
}

//exo 3

if(imcB < 25){
    console.log('Bernard : Insuffisance pondérale')
} 

if(imcM >= 30){
    console.log('Marcel : Surpoids');
}
