$(document).ready(function () {
    $('#club').click(function () {
        // $('#contenido-principal').html('js/formulario.html #clase-row');//NO anda
        $.ajax({
            url: "js/formulario.html",
            cache: true,
            success: function (contenido) {
                $('#contenido-principal').html(contenido);
            }
        });
    });
});

        
 



