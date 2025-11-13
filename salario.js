// Cálculo de salário
let funcionario = {
    nome: 'Eduardo',
    cargo: 'vendedor',
    salario: 2500
};

let valorVenda = 60000;

function calculoComissao(funcionario, valorVenda) {

    if (valorVenda <= 55000) {
        let salarioFinal = funcionario.salario + 100.00;
        console.log(`${funcionario.nome}, você não atingiu a meta de vendas mas, vimos o seu esforço! 
        Seu salário final é de ${salarioFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);

    } else if (valorVenda > 55000 && valorVenda <= 100000) {
        let salarioFinal = funcionario.salario + funcionario.salario * 0.02 ;
        console.log(` Para ${funcionario.nome}, você atingiu a meta de vendas! \n Seu salário final é de ${salarioFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);

    } else if(valorVenda > 100000) {
        let salarioFinal = funcionario.salario + 5000;
        console.log(`Parabéns ${funcionario.nome}, você superou a meta de vendas! \n Seu salário final é de ${salarioFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);

    } 
}

calculoComissao(funcionario, valorVenda);