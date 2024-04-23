function inverterString() {
    // Obtém a string original do campo de entrada
    var stringOriginal = document.getElementById('stringOriginal').value;
    // Variável para armazenar a string invertida
    var stringInvertida = '';
    // Loop para percorrer a string de trás para frente e construir a string invertida
    for (var i = stringOriginal.length - 1; i >= 0; i--) {
        stringInvertida += stringOriginal[i];
    }
    // Exibe a string invertida no parágrafo
    document.getElementById('stringInvertida').textContent = 'String invertida: ' + stringInvertida;
}

// Adiciona um listener de evento para o botão de inverter
document.getElementById('inverterBtn').addEventListener('click', inverterString);
