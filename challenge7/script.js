function calcTip(note) {
    if(note >= 50 && note <= 300) {
        return note * 0.15;
    } else {
        return note * 0.20;
    }
}

console.log(calcTip(100))


const bills = [125, 555, 44];
const tips = [];
const totals = [];

for(i=0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    totals[i] = tips[i] + bills[i];
}


console.log(bills);
console.log(tips);
console.log(totals);