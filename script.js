function realizarCalculoCP() {
    // Captura os elementos e converte os valores para números decimais
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const visorResultado = document.getElementById('resultado');

    // Validação caso o usuário esqueça de digitar algum número
    if (isNaN(num1) || isNaN(num2)) {
        visorResultado.style.color = '#dc3545'; // Cor vermelha para erro
        visorResultado.innerText = 'Digite os dois números!';
        return;
    }

    // Calcula o resultado (CPs por dose × doses por dia)
    let resultado1 = (num1 * num2) * 30;
    let resultado2 = (num1 * num2) * 60;


    // Exibe o resultado na tela com a cor verde
    visorResultado.style.color = '#28a745';
    visorResultado.innerText = resultado1 + ' CPs para 1 mês\n' + resultado2 + ' CPs para 2 meses';
}


function realizarCalculoGts() {
    // Captura os elementos e converte os valores para números decimais
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const visorResultado = document.getElementById('resultado');

    // Validação caso o usuário esqueça de digitar algum número
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        visorResultado.style.color = '#dc3545'; // Cor vermelha para erro
        visorResultado.innerText = 'Digite os três números!';
        return;
    }

    // Calcula o resultado ((((Gotas por dose × doses por dia)*dias de tratamento)/concentração de gotas por ml)/ml por frasco)
    let resultado1 = (((num1 * num2) * 30) / 20) / num3;
    let resultado2 = (((num1 * num2) * 60) / 20) / num3;


    // Exibe o resultado na tela com a cor verde
    visorResultado.style.color = '#28a745';
    visorResultado.innerText = resultado1 + ' frascos para 1 mês\n' + resultado2 + ' frascos para 2 meses';
}

function realizarCalculoMl() {
    // Captura os elementos e converte os valores para números decimais
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const visorResultado = document.getElementById('resultado');

    // Validação caso o usuário esqueça de digitar algum número
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        visorResultado.style.color = '#dc3545'; // Cor vermelha para erro
        visorResultado.innerText = 'Digite os três números!';
        return;
    }

    // Calcula o resultado (((Mls por dose × doses por dia)*dias de tratamento)/ml por frasco)
    let resultado1 = ((num1 * num2) * 30) / num3;
    let resultado2 = ((num1 * num2) * 60) / num3;


    // Exibe o resultado na tela com a cor verde
    visorResultado.style.color = '#28a745';
    visorResultado.innerText = resultado1 + ' frascos para 1 mês\n' + resultado2 + ' frascos para 2 meses';
}
