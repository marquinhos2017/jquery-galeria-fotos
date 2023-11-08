$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit',function(e){
        e.preventDefault();
        const endereconovaimagem = $('#endereco-imagem-nova').val();
        const novaitem = $('<li style="display:none"></li>');
        $(`<img src="${endereconovaimagem}"></img>`).appendTo(novaitem);
        $(`
            <div class = "overlay-image-link">
                <a href="${endereconovaimagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver Imagem no tamanho real
                </a>
            </div>`).appendTo(novaitem);
        $(novaitem).appendTo('ul');
        $(novaitem).fadeIn(1000);
        $('#endereco-imagem-nova').val('');
    });
})