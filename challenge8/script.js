const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(note) {
    if(note >= 50 && note <= 300) {
        return note * 0.15;
    } else {
        return note * 0.20;
    }
}

const calcAverage = array => (array.reduce((total, number) => total + number)) / array.length;


for(i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    totals[i] = tips[i] + bills[i];
}

console.log(bills)
console.log(tips)
console.log(totals)


console.log(`La moyenne est de ${calcAverage(totals)}€`)