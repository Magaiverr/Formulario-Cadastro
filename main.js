$(document).ready(function() {
    // Máscara para o campo CPF
    $('#cpf').mask('000.000.000-00');
    // Máscara para o campo do telefone
    $('#telefone').mask('(00) 00000-0000');
    // Máscara para o campo CEP
    $('#cep').mask('00000-000');
    // Máscara para o campo do email
    $('#email').on('input', function() {
    var email = $(this).val();
    if (email.indexOf('@') !== -1) {
    var domain = email.split('@')[1];
    $(this).css('border-color', /^[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})$/.test(domain) ? 'green' : 'red'); // Aqui adiciona cor quando o campo esta correto ou incorreto
    } else {
    $(this).css('border-color', 'red');
    }
    });
});