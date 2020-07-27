$(document).ready(function(){
    // CARDÁPIO TIPO DA PIZZA //
    $('a.tipo_pizza').on('click', function(){
        if($(this).attr('id') == 'normal'){
            $('.grupo_descricao p').html('R$ 30,00');
        }
        if($(this).attr('id') == 'especial'){
            $('.grupo_descricao p').html('R$ 40,00');
        }
        if($(this).attr('id') == 'suprema'){
            $('.grupo_descricao p').html('R$ 50,00');
        }
        if($(this).attr('id') == 'cosmica'){
            $('.grupo_descricao p').html('R$ 60,00');
        }

        $('ul#normal, ul#especial, ul#suprema, ul#cosmica').removeClass('slideshow_atual');
        $('ul#'+$(this).attr('id')).addClass('slideshow_atual');
        var slides = $('.slideshow_atual .meusSlides');
        
        for(i=0; i<slides.length; i++){
            slides[i].style.display = 'none';
        }

        slides[slideIndex].style.display = 'block';
        slides[slideIndex+1].style.display = 'block';
        slides[slideIndex+2].style.display = 'block';
        slides[slideIndex+3].style.display = 'block';
    });
    // CARDÁPIO TIPO DA PIZZA \\
    
    $('.meusSlides').on('click', function(){
        $('.grupo_descricao ul').css('display', 'none');
        $('.grupo_amostra img').attr('src', 'imagens/pizzas/'+$(this).attr('id')+'.jpg');
        $('.grupo_descricao h1').html($(this).text());
        $('.grupo_descricao .'+$(this).attr('id')).css('display', 'block');
         
        $('.slideshow_info_pizza').css('display', 'block');
    });
    $('.slideshow_info_pizza .fechar').on('click', function(){
        $('.slideshow_info_pizza').css('display', 'none');
    });

    // BOTÃO DE PROMOÇÃO //
    $('#promocao').on('click', function(){
        $('.grupo_descricao ul').css('display', 'none');
        $('.grupo_amostra img').attr('src', 'imagens/pizzas/amarelinha.jpg');
        $('.grupo_descricao h1').html('Amarelinha');
        $('.grupo_descricao .amarelinha').css('display', 'block');
        $('.grupo_descricao p').html('R$ 50,00');

        $('.slideshow_info_pizza').css('display', 'block');
    });
    $('.slideshow_info_pizza .fechar').on('click', function(){
        $('.slideshow_info_pizza').css('display', 'none');
    });
    // BOTÃO DE PROMOÇÃO \\
});
