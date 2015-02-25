window.onload = function() {
    /*
A partir de la página web proporcionada
 y utilizando las funciones DOM,
  mostrar por pantalla la siguiente
   información:

    1. Número de enlaces de la página*/

    //Una u otra
    //var enlaces = document.getElementsByTagName("a");
    var enlaces = document.querySelectorAll("a");
    console.log("El número de enlaces de la página es: " + enlaces.length);

    /*
	2. Dirección a la que enlaza el penúltimo enlace
	*/
    console.log("El penúltimo enlace apunta a: " + enlaces[enlaces.length - 2].href);

    /*
	3. Dirección a la que enlaza el penúltimo enlace
	*/
    //Como un selector css
    //enlaces = document.querySelectorAll("a[href='http://prueba'");

    var cont = 0;
    for (var i = 0; i < enlaces.length; i++) {
        if (enlaces[i].href === "http://prueba/") {
            cont++;
        }
    }
    console.log("El número de enlaces a http://prueba: " + cont);
    /*
	4. Número de enlaces del tercer párrafo
	*/
/*
    var parrafos = document.querySelectorAll("p");
    if (parrafos.length > 2) {
        var enlacesTercero = parrafos[2].querySelectorAll("a");
        console.log("El número de enlaces en el tercer parrafo es: " + enlacesTercero.length);

    }
*/
    //con un solo selector
    var enlacesTercerParrafo = document.querySelectorAll("body > p:nth-child(3) a");
 	console.log("El número de enlaces en el tercer parrafo es: " + enlacesTercerParrafo.length);

};
