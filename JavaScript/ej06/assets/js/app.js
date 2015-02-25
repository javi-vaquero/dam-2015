window.onload = function() {
    var enlace = document.querySelectorAll(".enlace");
    var span = document.querySelectorAll(".adicional.oculto");

    var muestra = function(event) {

        event.preventDefault();

        if (span.length) {
            var index = span[0].classList.remove("oculto");
        }
        if (enlace.length) {
            enlace[0].classList.add("oculto");
        }
    };

    if (enlace.length) {
        enlace[0].addEventListener('click', muestra, false);
    }



};
