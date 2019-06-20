var data = new Date();

var dia = data.getDate();
var mes = data.getMonth();
var ano = data.getFullYear();

if (data.getMonth() < 9) {
    mes = "0" + (data.getMonth() + 1);
}
else {
    mes = data.getMonth() + 1;
}

if (data.getDate() < 9) {
    dia = "0" + (data.getDate());
}
else {
    dia = data.getDate();
}

var mes2 = new Array();
mes2[0] = "Janeiro";
mes2[1] = "Fevereiro";
mes2[2] = "Março";
mes2[3] = "Abril";
mes2[4] = "Maio";
mes2[5] = "Junho";
mes2[6] = "Julho";
mes2[7] = "Agosto";
mes2[8] = "Setembro";
mes2[9] = "Outubro";
mes2[10] = "Novembro";
mes2[11] = "Dezembro";
var m2 = mes2[data.getMonth()];

document.getElementById('data1').innerHTML = (dia + '/' + (mes) + '/' + ano);
document.getElementById('data2').innerHTML = (ano + '/' + (mes) + '/' + dia);
document.getElementById('data3').innerHTML = (dia + ' de ' + (m2) + ' de ' + ano);