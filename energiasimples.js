//Algoritmo para calcular o consumo de energia

// Custo do kWh
const custoPorKwh = 0.30;
const diasNoMes = 30;

// Dados dos aparelhos
let nome1 = "Chuveiro", potencia1 = 3000, horas1 = 1;
let nome2 = "Freezer", potencia2 = 200, horas2 = 23.3;
let nome3 = "Geladeira", potencia3 = 250, horas3 = 23.3;
let nome4 = "Lâmpada", potencia4 = 120, horas4 = 5;

// Consumo de cada um (kWh)
let consumo1 = (potencia1 * horas1 * diasNoMes) / 1000; // 1000 é o 1 kilowatts
let consumo2 = (potencia2 * horas2 * diasNoMes) / 1000;
let consumo3 = (potencia3 * horas3 * diasNoMes) / 1000;
let consumo4 = (potencia4 * horas4 * diasNoMes) / 1000;

// Custo de cada um
let custo1 = consumo1 * custoPorKwh;
let custo2 = consumo2 * custoPorKwh;
let custo3 = consumo3 * custoPorKwh;
let custo4 = consumo4 * custoPorKwh;

// Total
let consumoTotal = consumo1 + consumo2 + consumo3 + consumo4;
let custoTotal = custo1 + custo2 + custo3 + custo4;

// Exibir resultados
console.log(nome1 + ": " + consumo1.toFixed(2) + " kWh | R$ " + custo1.toFixed(2));
console.log(nome2 + ": " + consumo2.toFixed(2) + " kWh | R$ " + custo2.toFixed(2));
console.log(nome3 + ": " + consumo3.toFixed(2) + " kWh | R$ " + custo3.toFixed(2));
console.log(nome4 + ": " + consumo4.toFixed(2) + " kWh | R$ " + custo4.toFixed(2));

console.log("\nTotal: " + consumoTotal.toFixed(2) + " kWh | R$ " + custoTotal.toFixed(2));
