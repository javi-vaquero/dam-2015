(function() {
    var validarDNI = function(dni) {

        var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

        var syntax_ok = false;

        syntax_ok = /^[0-9]{8}[a-zA-Z]$/.test(dni);

        if (syntax_ok) {

            var mNum = parseInt(dni);
            var mChar = dni.charAt(length - 1).toUpperCase();
            syntax_ok = (mChar === letras[mNum % 23]);
        }
        return syntax_ok;


    };
    console.log(validarDNI("12345678A") === false);
    console.log(validarDNI("44556533J") === true);
    console.log(validarDNI("44556521R") === true);
    console.log(validarDNI("445A6521R") === true);
    console.log(validarDNI(undefined) === false);
    console.log(validarDNI("A") === false);
    console.log(validarDNI({}) === false);


})();
