// Données 1

let scoreD = [96, 108, 89]
let scoreK = [88, 91, 110]

let winner = ''

moyenneScoreD = (scoreD[0] + scoreD[1] + scoreD[2]) / 3 
moyenneScoreK = (scoreK[0] + scoreK[1] + scoreK[2]) / 3

if(moyenneScoreD === moyenneScoreK) {
    winner = 'Equality !!'
} else if(moyenneScoreD > moyenneScoreK && moyenneScoreD >= 100) {
    winner = 'Dauphins : WINNER !'
} else if(moyenneScoreK > moyenneScoreD && moyenneScoreK > 100) {
    winner = 'Koalas : WINNER !'
} else {
    winner = 'No winner'
}

console.log(winner)

// Données 2

scoreD = [97, 112, 101]
scoreK = [109, 95, 123]

winner = ''

moyenneScoreD = (scoreD[0] + scoreD[1] + scoreD[2]) / 3 
moyenneScoreK = (scoreK[0] + scoreK[1] + scoreK[2]) / 3

if(moyenneScoreD === moyenneScoreK) {
    winner = 'Equality !!'
} else if(moyenneScoreD > moyenneScoreK && moyenneScoreD >= 100) {
    winner = 'Dauphins : WINNER !'
} else if(moyenneScoreK > moyenneScoreD && moyenneScoreK > 100) {
    winner = 'Koalas : WINNER !'
} else {
    winner = 'No winner'
}

console.log(winner)

// Données 3

scoreD = [97, 112, 101]
scoreK = [109, 95, 106]

winner = ''

moyenneScoreD = (scoreD[0] + scoreD[1] + scoreD[2]) / 3 
moyenneScoreK = (scoreK[0] + scoreK[1] + scoreK[2]) / 3


if(moyenneScoreD === moyenneScoreK) {
    winner = 'Equality !!'
} else if(moyenneScoreD > moyenneScoreK && moyenneScoreD >= 100) {
    winner = 'Dauphins : WINNER !'
} else if(moyenneScoreK > moyenneScoreD && moyenneScoreK > 100) {
    winner = 'Koalas : WINNER !'
} else {
    winner = 'No winner'
}

console.log(winner)