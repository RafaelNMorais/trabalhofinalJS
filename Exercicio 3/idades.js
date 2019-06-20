document.getElementById('botao').onclick = function () {
    var idade = document.getElementById('idades').value;
    var string = idade.split(',');

    var menor = [];
    var maior = [];
    var igual = [];

    for (var i = 0; i < string.length; i++) {
        if (string[i] < 18) {
            Array.prototype.push(menor++);
        } else if (string[i] > 18) {
            Array.prototype.push(maior++);
        } else if (string[i] == 18) {
            Array.prototype.push(igual++);
        }
    }

    document.getElementById('maior').innerHTML = 'Maiores de 18 anos: ' + maior;
    document.getElementById('menor').innerHTML = 'Menores de 18 anos: ' + menor;
    document.getElementById('igual').innerHTML = 'Com 18 anos: ' + igual;
}