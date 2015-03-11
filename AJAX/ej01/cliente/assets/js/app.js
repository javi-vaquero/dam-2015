$(function() {
    var $ticker = $('#ticker');

    var peticionAJAX = function() {
        $.ajax('../servidor/generaContenidos.php', {
            success: function(data, status, jqXHR) {
                $ticker.text(data);
            }
        });
    };
    var interval = setInterval(peticionAJAX, 1000);

    $('#detener').on('click', function(ev){
    	clearInterval(interval);
    });
});
