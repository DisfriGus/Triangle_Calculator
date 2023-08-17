let alas = document.getElementById('alas');
let tinggi = document.getElementById('tinggi');
let submit = document.getElementById('submit');
let sisiA = document.getElementById('sisiA')
let sisiB = document.getElementById('sisiB')
let sisiC = document.getElementById('sisiC')
const resultContainer = document.getElementsByClassName('resultArea')[0]
const resultAround = document.getElementsByClassName('resultAround')[0]
let resultParagraph = null;
let resultPAround = null;
function handleSubmit (){
    let luas = (1/2) * alas.value * tinggi.value;
    if (resultParagraph) {
        resultParagraph.remove();
    }
    const hasilLuas = document.createElement('p');
    hasilLuas.textContent = `Luas Segitiga = ${luas}`;
    resultContainer.appendChild(hasilLuas);
    resultParagraph = hasilLuas;
    let keliling = Number(sisiA.value) + Number(sisiB.value) + Number(sisiC.value) ;
    if (resultPAround) {
        resultPAround.remove();
    }
    const hasilKeliling = document.createElement('p');
    hasilKeliling.textContent = `Keliling Segitiga = ${keliling}`;
    resultAround.appendChild(hasilKeliling);
    resultPAround = hasilKeliling;
}


