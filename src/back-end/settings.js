SS = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1XTO9fc6_pinFCyif45VjnXILTNl445D5QXQWqbNWuyM/edit#gid=0")
WS_AUX = SS.getSheetByName('aux')
WS_SIMULADOR = SS.getSheetByName('simulador')
REPIQUE = {
    0: 'Inicial',
    1: 'R1',
    2: 'R2',
    3: 'R3',
    4: 'R4',
    5: 'R5',
    6: 'Final',
}