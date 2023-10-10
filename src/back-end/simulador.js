var inserirDadosSimulacao = (dados) => {
    var inserirDadosSimulacao = []
    var soma = 0
    var somafatorData = dados.fatorDatas.map((v) => {
        soma =+ v
    })

    Logger.log(soma)

    WS_SIMULADOR.appendRow(dados)
}