// Exercício 1 - Fibonacci
function verificarFibonacci() {
    const numero = parseInt(document.getElementById('fibonacci-input').value);
    let a = 0, b = 1, temp;

    while (b < numero) {
        temp = a + b;
        a = b;
        b = temp;
    }

    if (numero === a || numero === b) {
        document.getElementById('resultado-fibonacci').textContent = `${numero} pertence à sequência de Fibonacci.`;
    } else {
        document.getElementById('resultado-fibonacci').textContent = `${numero} não pertence à sequência de Fibonacci.`;
    }
}

// Exercício 2 - Verificar letra 'a'
function verificarLetraA() {
    const texto = document.getElementById('letra-a-input').value;
    
    const ocorrenciasMinusc = (texto.match(/a/g) || []).length;  // Contar 'a'
    const ocorrenciasMajusc = (texto.match(/A/g) || []).length;  // Contar 'A'
    
    // Soma total de ocorrências
    const totalOcorrencias = ocorrenciasMinusc + ocorrenciasMajusc;

    if (totalOcorrencias > 0) {
        let mensagem = '';
        if (ocorrenciasMinusc > 0) {
            mensagem += `A letra 'a' minúscula aparece ${ocorrenciasMinusc} vez(es). `;
        }
        if (ocorrenciasMajusc > 0) {
            mensagem += `A letra 'A' maiúscula aparece ${ocorrenciasMajusc} vez(es).`;
        }
        document.getElementById('resultado-letra-a').textContent = mensagem;
    } else {
        document.getElementById('resultado-letra-a').textContent = `A letra 'a' não foi encontrada.`;
    }
}

// Exercício 3 - Cálculo da SOMA
function calcularSoma() {
    let indice = 12, soma = 0, k = 1;

    while (k < indice) {
        k = k + 1;  // k é incrementado
        soma = soma + k;  // soma recebe o valor de k
    }

    return soma;  // Retorna a soma total
}

function mostrarSoma() {
    const resultado = calcularSoma();
    document.getElementById('resultado-soma').textContent = "O valor de SOMA ao final é: " + resultado;
}

// Certifique-se de ter um elemento com o id 'resultado-soma' no seu HTML


// Exercício 4 - Lógica das Sequências
function proximoElementoSequencia() {
    let a_prox = 7 + 2;
    let b_prox = 64 * 2;
    let c_prox = 7 * 7;
    let d_prox = 10 * 10;
    let e_prox = 8 + 5;
    let f_prox = 20;

    return {
        a_prox, b_prox, c_prox, d_prox, e_prox, f_prox
    };
}

function mostrarSequencias() {
    const sequencias = proximoElementoSequencia();
    const resultado = `
        a) Próximo: ${sequencias.a_prox} <br>
        b) Próximo: ${sequencias.b_prox} <br>
        c) Próximo: ${sequencias.c_prox} <br>
        d) Próximo: ${sequencias.d_prox} <br>
        e) Próximo: ${sequencias.e_prox} <br>
        f) Próximo: ${sequencias.f_prox}
    `;
    document.getElementById('resultado-sequencias').innerHTML = resultado;
}

// Exercício 5 - Interruptores e Lâmpadas
function descobrirLampadas() {
    return new Promise((resolve) => {
        let lampada1 = false, lampada2 = false, lampada3 = false;

        let interruptor1 = false, interruptor2 = false, interruptor3 = false;

        interruptor1 = true; 
        lampada1 = true;

        setTimeout(() => {
            interruptor1 = false;
            lampada1 = false;

            interruptor2 = true;
            lampada2 = true;

            resolve({
                lampada1Quente: true,
                lampada2Ligada: true,
                lampada3Desligada: true
            });
        }, 3000);
    });
}

function mostrarLampadas() {
    descobrirLampadas().then((result) => {
        const resultado = `
            Lâmpada 1: quente e desligada (Interruptor 1) <br>
            Lâmpada 2: ligada (Interruptor 2) <br>
            Lâmpada 3: fria e desligada (Interruptor 3)
        `;
        document.getElementById('resultado-lampadas').innerHTML = resultado;
    });
}
