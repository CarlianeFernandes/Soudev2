//import listar from "./listar";
//import relatorio from "./listar";
//import cadastro from "./listar";

function alterarConteudo(x) {
    // if (x === 'listar') {
    //     alert (listar());
    // } else if (x === 'cadastro') {
    //     alert (cadastro());
    // } else if (x ==='relatorio') {
    //     alert(relatorio());
    // }

    //vai atualizar a DIV#conteudo com o retorno da função
    conteudo.innerHTML = window[x]();
}
    
    

