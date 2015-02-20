(function() {
    var validarDNI = function(dni) {
        
        var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
        
        var ok=false;

        //dni.match(/^[0-9]{8}{a-zA-Z}$/);

        if(dni && typeof dni === "string" && dni.length===9){
        	var mNum = parseInt(dni);

        	if(mNum>=0 && mNum<=99999999){
        		var mChar = dni.charAt(length-1).toUpperCase();

        		ok = (mChar === letras[mNum%23]);
        	}
        }
        return ok;

      
    };
    console.log(validarDNI("12345678A") === false);
    console.log(validarDNI("44556533J") === true);
    console.log(validarDNI("44556521R") === true);
    console.log(validarDNI("445A6521R") === true);
    console.log(validarDNI(undefined) === false);
    console.log(validarDNI("A") === false);
    console.log(validarDNI({}) === false);


})();
