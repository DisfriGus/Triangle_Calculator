let alas = document.getElementById('alas');
let tinggi = document.getElementById('tinggi');
let submit = document.getElementById('submit');
let sisiA = document.getElementById('sisiA')
let sisiB = document.getElementById('sisiB')
let sisiC = document.getElementById('sisiC')
const resultContainer = document.getElementsByClassName('resultArea')[0]
let resultParagraph = null;
function handleSubmitArea (){
    let luas = (1/2) * alas.value * tinggi.value;
    if (resultParagraph) {
        resultParagraph.remove();
    }
    const hasil = document.createElement('p');
    hasil.textContent = `Luas Segitiga = ${luas}`;
    resultContainer.appendChild(hasil);
    resultParagraph = hasil;
}
const resultAround = document.getElementsByClassName('resultAround')[0]
let resultPAround = null;
function handleSubmitAround (){
    let keliling = Number(sisiA.value) + Number(sisiB.value) + Number(sisiC.value) ;
    if (resultPAround) {
        resultPAround.remove();
    }
    const hasil = document.createElement('p');
    hasil.textContent = `Keliling Segitiga = ${keliling}`;
    resultAround.appendChild(hasil);
    resultPAround = hasil;
}

