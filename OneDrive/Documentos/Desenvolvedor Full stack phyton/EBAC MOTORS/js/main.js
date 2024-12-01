$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false,
        dots: true  
    });

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 55555-5555'
    });

    $('#cpf').mask('000.000.000-00', {
        placeholder: '555.555.555-55'
    });

    $('#cep').mask('00000-000', {
        placeholder: '555555-555'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            },
        },
        messages: {
            nome: {
                required: "Por favor, insira seu nome completo"
            },
            email: {
                required: "Por favor, insira seu e-mail",
                email: "Por favor, insira um e-mail válido"
            },
            telefone: {
                required: "Por favor, insira seu número de telefone"
            },
            endereco: {
                required: "Por favor, insira seu endereço completo"
            },
            cep: {
                required: "Por favor, insira seu CEP"
            },
            cpf: {
                required: "Por favor, insira seu CPF"
            },
        },
        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset(); 
        },
        invalidHandler: function (form, validator) {
            alert("Por favor, preencha os campos obrigatórios para prosseguir com a compra!");
        }
    });
});