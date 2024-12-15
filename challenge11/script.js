const bernard = {
    name : 'Bernard',
    weight : 78,
    height : 1.69,
    calcBMI() {
        this.bmi = this.weight / (this.height * this.height);
        return this.bmi.toFixed(1);
    }
}

const marcel = {
    name : 'Marcel',
    weight : 92,
    height : 1.95,
    calcBMI() {
        this.bmi = this.weight / (this.height * this.height);
        return this.bmi.toFixed(1);
    }
}

// Calculer les IMC
bernard.calcBMI();
marcel.calcBMI();

// Comparer et afficher
if (bernard.bmi > marcel.bmi) {
    console.log(`L'IMC de ${bernard.name} (${bernard.bmi.toFixed(1)}) est plus élevé que celui de ${marcel.name} (${marcel.bmi.toFixed(1)})`);
} else {
    console.log(`L'IMC de ${marcel.name} (${marcel.bmi.toFixed(1)}) est plus élevé que celui de ${bernard.name} (${bernard.bmi.toFixed(1)})`);
}

bernard.weight = 95
bernard.height = 1.88
marcel.weight = 85
marcel.height = 1.76

bernard.calcBMI();
marcel.calcBMI();

if (bernard.bmi > marcel.bmi) {
    console.log(`L'IMC de ${bernard.name} (${bernard.bmi.toFixed(1)}) est plus élevé que celui de ${marcel.name} (${marcel.bmi.toFixed(1)})`);
} else {
    console.log(`L'IMC de ${marcel.name} (${marcel.bmi.toFixed(1)}) est plus élevé que celui de ${bernard.name} (${bernard.bmi.toFixed(1)})`);
}
