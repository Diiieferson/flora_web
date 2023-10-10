


function doGet() {
    var tmp = HtmlService.createTemplateFromFile('src/front-end/index.html').evaluate()
    return tmp
}

function include(file) {
    return HtmlService.createHtmlOutputFromFile(file).getContent()

}

var repiques = () => {
    var repiques = WS_AUX.getRange(1, 1, WS_AUX.getRange("A1").getDataRegion().getLastRow(), 1).getValues()
    return repiques
}