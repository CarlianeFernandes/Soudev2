function alterarNome () {
    nome.classList.remove('is-invalid');

    if(nome.value.length > 2) {
       nome.classList.add('is-valid'); 
    }else{
        
    }
}


function validar() {
    // faz com que o formulário não seja enviado
    event.preventDefault();
    
    // if (document.getElementById('nome').value ==='') {
    if ( nome.value ==='') {
        // nome.style.borderColor= 'red';
        nome.classList.add('is-invalid');
    }

    if (document.getElementById('email').value ==='') {
        email.style.borderColor= 'red';
        email.classList.add('is-invalid');
    }

    if (document.getElementById('telefone').value ==='') {
        telefone.style.borderColor= 'red';
        telefone.classList.add('is-invalid');
    }

    if (document.getElementById('cidade').value ==='') {
        cidade.style.borderColor= 'red';
        cidade.classList.add('is-invalid');
    }
    
}


