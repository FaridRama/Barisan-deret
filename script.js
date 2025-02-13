function calculateArithmetic() {
    const a = parseFloat(document.getElementById('firstTerm').value);
    const d = parseFloat(document.getElementById('commonDifference').value);
    const n = parseInt(document.getElementById('numberOfTerms').value);

    let series = [];
    let sum = 0;

    for (let i = 0; i < n; i++) {
        let term = a + i * d;
        series.push(term);
        sum += term;
    }

    document.getElementById('result').innerHTML = `
        <h3>Barisan Aritmatika:</h3>
        <p>${series.join(', ')}</p>
        <h3>Jumlah Deret Aritmatika:</h3>
        <p>${sum}</p>
    `;
}

function calculateGeometric() {
    const a = parseFloat(document.getElementById('firstTerm').value);
    const r = parseFloat(document.getElementById('commonDifference').value);
    const n = parseInt(document.getElementById('numberOfTerms').value);

    let series = [];
    let sum = 0;

    for (let i = 0; i < n; i++) {
        let term = a * Math.pow(r, i);
        series.push(term);
        sum += term;
    }

    document.getElementById('result').innerHTML = `
        <h3>Barisan Geometri:</h3>
        <p>${series.join(', ')}</p>
        <h3>Jumlah Deret Geometri:</h3>
        <p>${sum}</p>
    `;
}