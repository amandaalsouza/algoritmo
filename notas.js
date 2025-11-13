let pesoLab = 2;
let pesoProvaSemestre = 5;
let pesoTrabTeorico = 3;

//soma dos pesos
let somaDosPesos = pesoLab + pesoProvaSemestre + pesoTrabTeorico;   
console.log('soma dos pesos: ' + somaDosPesos);

let notaLab = 8;
let notaProvaSemestre = 7;
let notaTrabTeorico = 9;

//calculo media
let media = (notaLab * pesoLab + notaProvaSemestre * pesoProvaSemestre + notaTrabTeorico * pesoTrabTeorico) / somaDosPesos;
console.log('sua média é: ' + media);

// classificação das notas
function classificarNotas(media) {
    if (media > 9) {
        console.log('sua média é ' + media + ' sua classificação é A')
    } else if (media > 8) {
        console.log('sua média é ' + media + ' sua classificação é B')
    } else  if (media > 7) {
        console.log('sua média é ' + media + ' sua classificação é C')
    } else if (media > 6) {
        console.log('sua média é ' + media + ' sua classificação é D')
    } else if (media <= 6) {
        console.log('sua média é ' + media + ' sua classificação é E')
    } else if (media < 5) {
        console.log('sua média é ' + media + ' sua classificação é F')
    } else {
        console.log('média insuficiente')
    }
}

console.log(classificarNotas(media));