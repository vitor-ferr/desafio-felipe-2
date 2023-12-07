let elo = ""
let saldoVitorias
let saldoDerrotas
let saldoTotal

function calcularRankeada(saldoVitorias, saldoDerrotas) {
    return saldoVitorias - saldoDerrotas
      
}
    
    saldoTotal = calcularRankeada(saldoVitorias,saldoDerrotas)
    if (saldoTotal <=10) {
        elo = "FERRO"
        
    } else if (saldoTotal >=11 && saldoTotal <=20) {
        elo = "BRONZE"
        
    } else if (saldoTotal >=21 && saldoTotal <=50 ) {
        elo = "PRATA"
        
    } else if (saldoTotal >=51 && saldoTotal <=80) {
        elo = "OURO"
        
    } else if (saldoTotal >= 81 && saldoTotal <=90) {
        elo = "DIAMANTE"
        
    } else if (saldoTotal >= 91 && saldoTotal <=100) {
        elo = "LENDÁRIO"
        
    } else if (saldoTotal >=101) {
        elo = "IMORTAL"
        
    }

    console.log ("O Herói tem saldo de " + saldoTotal + " está no nivel de " + elo)
     