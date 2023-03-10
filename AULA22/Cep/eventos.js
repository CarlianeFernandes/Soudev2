function buscarCEP() {


    fetch (`https://viacep.com.br/ws/${cep.value}/json`)
        then(res => res.json())
        then(json => {
            logradouro.value = conteudo.logradouro;
            bairro.value = conteudo.bairro;
            cidade.value = conteudo.localidade;
            uf.value = conteudo.uf;
        });

    }

    // fetch(`https://viacep.com.br/ws/${cep.value}/json`)
    //     .then(function (resposta) {
    //         return resposta.json();
    //     })
    //     .then(function (conteudo){
    //         //document.getElementById('logradouro')
    //         logradouro.value = conteudo.logradouro;
    //         bairro.value = conteudo.bairro;
    //         cidade.value = conteudo.localidade;
    //         uf.value = conteudo.uf;
    //     });


    





