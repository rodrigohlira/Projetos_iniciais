let nomeHeroi = "Goku"
let xpHeroi = 8000
let statusHeroi

if(xpHeroi <= 1000){
     statusHeroi = "Ferro"
}
    else if((xpHeroi > 1000) && (xpHeroi <= 2000)){
         statusHeroi = "Bronze"
    }
        else if((xpHeroi > 2000) && (xpHeroi <= 5000)){
             statusHeroi = "Prata"
        }
            else if((xpHeroi > 5000) && (xpHeroi <= 7000)){
                 statusHeroi = "Ouro"
            }
                else if((xpHeroi > 7000) && (xpHeroi <= 8000)){
                     statusHeroi = "Platina"
                }
                    else if((xpHeroi > 8000) && (xpHeroi <= 9000)){
                         statusHeroi = "Ascendente"
                    }
                        else if((xpHeroi > 9000) && (xpHeroi <= 10000)){
                             statusHeroi = "Imortal"
                        }
                        else{
                             statusHeroi = "Radiante"
                        }

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + statusHeroi)

    