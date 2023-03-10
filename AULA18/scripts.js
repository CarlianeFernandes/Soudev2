// FORMAS DE PAGAMENTO
// a vista
// parcelado 2x
// parcelado 3x

// function calcularPreco(valor,forma,tipo)
// {
//     if(forma == "a vista"){
//         // preço 10%
//         if(tipo == "dinheiro || tipo =="cheque"){
//         alert("no dinheiro ou cheque")
//         }
//     }
// }


function posterior()
{
    let itemAtivo = document.querySelector(".active");
    let posicaoAtiva = itemAtivo.getAttribute("posicao");
    let todosItems = document.querySelectorAll("li");
    if(posicaoAtiva == todosItems.length){
        posicaoAtiva = 1;
    }else{
        posicaoAtiva++;
    }
    for(let i = 0; i < todosItems.length; i++){
        if(todosItems[i].getAttribute("posicao") == posicaoAtiva){
            todosItems[i].classList.add("active")
        }else{
            todosItems[i].classList.remove("active")
        }
        
    }
}

function anterior()
{
    let itemAtivo = document.querySelector(".active");
    let posicaoAtiva = itemAtivo.getAttribute("posicao");
    let todosItems = document.querySelectorAll("li");
    if(posicaoAtiva == 1){
     posicaoAtiva = todosItems.length;
      
    }else{
        posicaoAtiva--;
    }
    for(let i = 0; i < todosItems.length; i++){
        if(todosItems[i].getAttribute("posicao") == posicaoAtiva){
            todosItems[i].classList.add("active")
        }else{
            todosItems[i].classList.remove("active")
        }
        
    }
}
