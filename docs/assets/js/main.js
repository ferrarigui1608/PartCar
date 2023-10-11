$(document).ready(() =>{

    //add animação ao menu hamburguer
    $('#menu-hamburguer').click( () => {
        $('#menu').slideToggle()})

    //config slide
    $('#slide').slick({autoplay: true,})

    //add mask
    $('#telefone').mask( '(00) 0.0000-0000' , {placeholder: '(00) 0.0000-0000'})

    //validador de formularios
    $('form').validate({
        rules: {
          nome: {required: true
          },
          telefone: {required: true
          },
          email: {
            required: true, 
            email:true
          },
          veiculoInteresse: {
            required: true
          },
          mensagem: {
            required: true

          }
        },
        messages: {
          nome: 'Por favor, digite seu nome e tente novamente.',
          telefone: 'Por favor, digite seu telefone e tente novamente.',
          email: 'Por favor, digite seu e-mail e tente novamente.'
        },
        submitHandler: function(form){},
        invalidHandler: function(evento, validador){
          let camposIncorretos = validador.numberOfInvalids()
          if(camposIncorretos){
            alert(`Existem ${camposIncorretos} campos incorretos`)
          }
        }

    })
})

$('.lista-veiculos button').click(function(){ 
    const destino = $('#contato')
   const nomeVeiculo = $(this).parent().find('h3').text()
   $('#veiculo-interesse').val(nomeVeiculo)
   console.log(nomeVeiculo)
   
    $('html').animate({
        scrollTop: destino.offset().top
    }, 1000)
})