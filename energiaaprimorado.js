// Custo fixo por kWh
const custoPorKwh = 0.30;

// Quantidade de dias no mês comercial
const diasNoMes = 30;

// Dados dos aparelhos (nome, potência em W, horas por dia)
let aparelhos = [
    { nome: "Chuveiro", potencia: 3000, horasPorDia: 1 },
    { nome: "Freezer", potencia: 200, horasPorDia: 23.3 },
    { nome: "Geladeira", potencia: 250, horasPorDia: 23.3 },
    { nome: "Lâmpada", potencia: 120, horasPorDia: 5 }
];

// Função para calcular consumo mensal em kWh
function calcularConsumoMensalKWh(potenciaWatts, horasDia, diasMes) {
    // Potência (W) × horas por dia × dias no mês / 1000 = kWh
    return (potenciaWatts * horasDia * diasMes) / 1000;
}

// Função para formatar moeda
function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

let totalConsumo = 0;
let totalCusto = 0;

console.log(" Consumo de energia por aparelho:\n");

aparelhos.forEach(aparelho => {
    let consumoKWh = calcularConsumoMensalKWh(aparelho.potencia, aparelho.horasPorDia, diasNoMes);
    let custo = consumoKWh * custoPorKwh;

    totalConsumo += consumoKWh;
    totalCusto += custo;

    console.log(`${aparelho.nome} -> Consumo: ${consumoKWh.toFixed(2)} kWh | Custo: ${formatarMoeda(custo)}`);
});

console.log("\ Resumo geral:");
console.log(`Consumo total: ${totalConsumo.toFixed(2)} kWh`);
console.log(`Custo total: ${formatarMoeda(totalCusto)}`);
