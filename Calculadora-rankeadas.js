function calcularVitoria(x, y){
    let calcular = x - y
    return calcular
}

function receberDados(){
    let resultado = calcularVitoria(110, 5)
    return resultado
}

function classificarStatus(){
    let levelPlayer
    if (receberDados() < 10){
        levelPlayer = "Fero"
    }
        else if ((receberDados() > 10) && (receberDados() <= 20)){
            levelPlayer = "Bronze"
        }
            else if ((receberDados() > 20) && (receberDados() <= 50)){
                levelPlayer = "Prata"
            }
                else if ((receberDados() > 50) && (receberDados() <= 80)) {
                    levelPlayer = "Ouro"
                }
                    else if ((receberDados() > 80) && (receberDados() <= 90)){
                        levelPlayer = "Diamante"
                    }
                        else if ((receberDados() > 90) && (receberDados() <= 100)){
                            levelPlayer = "Lendário"
                        }
                        else{
                            levelPlayer = "Imortal"
                        }
                        return levelPlayer
}

function main(){
    console.log(`"O Herói tem saldo de ${receberDados()} e está no nível de ${classificarStatus()}"`)
}

main()