var inserirDadosSimulacao = (dados) => {
    var inserirDadosSimulacao = []
    var soma = 0
    var dadosSheets = []
    var buildingArray = []
    var somafatorData = dados.fatorDatas.map((v) => {
        Logger.log(v)
        soma += parseInt(v)
    })

    var incrementData = 0
    for (var j = 0; j <= dados.fatorDatas.length; j++) {
        for (var i = 0; i < dados.fatorDatas[j]; i++) {
            buildingArray = [
                dados.cultivar, 
                dados.produtor, 
                dados.familia, 
                formatDate(new Date().setDate(new Date().getDate() + incrementData)), dados.qtde * 2, 
                dados.lote, REPIQUE[j]]
            dadosSheets.push(buildingArray)
            incrementData++
        }
    }

    WS_SIMULADOR.getRange(2, 1, dadosSheets.length, dadosSheets[0].length).setValues(dadosSheets)
    return dadosSheets
}

var formatDate = (date) => {
    // Crie uma nova instância de Date usando o date
    var data = new Date(date);

    // Extraia o dia, mês e ano da data
    var dia = data.getDate();
    var mes = data.getMonth() + 1; // O mês começa em 0, então adicionamos 1
    var ano = data.getFullYear();

    // Formate a data no formato "dd/mm/yyyy"
    var formatDate = dia + '/' + mes + '/' + ano;
    return formatDate
}

// {
//     "cultivar": "cultivar 1",
//     "produtor": "produtor 1",
//     "familia": "familia 1",
//     "data": "",
//     "qtde": "10",
//     "lote": "500",
//     "repique": "Inicial",
//     "fatorQtde": [
//         "10",
//         "10",
//         "10",
//         "10",
//         "10",
//         "10"
//     ],
//     "fatorDatas": [
//         "20",
//         "20",
//         "20",
//         "20",
//         "20",
//         "20",
//         "20"
//     ]
// }