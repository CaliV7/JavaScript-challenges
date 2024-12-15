// Calcul de la moyenne 
const calcAverage = array => (array.reduce((total, number) => total + number)) / array.length

// Calcul du gagnant
function checkWinner(team1, averageTeam1, team2, averageTeam2) {
    if(averageTeam1 > (averageTeam2 * 2)) {
        return `L'équipe ${team1} gagne (${averageTeam1}) vs (${averageTeam2})`
    } else if(averageTeam2 > (averageTeam1 * 2)) {
        return `L'équipe ${team2} gagne (${averageTeam2}) vs (${averageTeam1})`
    }
    return 'Personne ne gagne'
}

// Données 1

let scoreD = [44, 23, 71]
let scoreK = [65, 54, 49]

let moyenneScoreD = calcAverage(scoreD)
let moyenneScoreK = calcAverage(scoreK)

console.log(checkWinner(moyenneScoreD, moyenneScoreK))

// Données 2

scoreD = [85, 54, 41]
scoreK = [23, 34, 27]

moyenneScoreD = calcAverage(scoreD)
moyenneScoreK = calcAverage(scoreK)

console.log(checkWinner(moyenneScoreD, moyenneScoreK))