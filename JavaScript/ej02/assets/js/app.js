(function() {
    var fact = function(n) {
        var result;
        if (typeof n != "number" || n < 0) {
            result = false;
        } else {
            result = 1;

            for (var i = n; i > 1; i--) {
                result = result * i;
            }
        }
        return result;
    };
    console.log("fact 0, 1, 2, 5, 'texto', -1, undefined, {}, function, null");
    console.log(fact(0) == 1);
    console.log(fact(1) == 1);
    console.log(fact(2) == 2);
    console.log(fact(5) == 120);
    console.log(fact("texto") == false);
    console.log(fact(-1) == false);
    console.log(fact() == false);
    console.log(fact({}) == false);
    console.log(fact(function() {}) == false);
    console.log(fact(null) == false);

})();
/*
(function() {
    var factRec = function(n) {
        if (n < 2) {
            return 1;
        }
        return n * factRec(n - 1);
    };
    console.log("factRec 0, 1, 2, 5");
    console.log(factRec(0));
    console.log(factRec(1));
    console.log(factRec(2));
    console.log(factRec(5));
})();
*/
(function() {
    var parOImpar = function(n) {
        if (typeof n === "number") {
            if ((n % 2) === 0) {
                result = "par";
            } else {
                result = "impar";
            }
        } else {
            result = NaN;
        }
        return result;
    };
    console.log("result 0, 3, '4', 6, 623, 'par', 'impar'");
    console.log(parOImpar(0));
    console.log(parOImpar(3));
    console.log(parOImpar("4"));
    console.log(parOImpar(6));
    console.log(parOImpar(623));
    console.log(parOImpar("par"));
    console.log(parOImpar("impar"));
    console.log(parOImpar(-1) == "par");
    console.log(parOImpar() == false);
    console.log(parOImpar({}) == false);
    console.log(parOImpar(function() {}) == false);
    console.log(parOImpar(null) == false);
})();

(function() {
    var info = function(str) {
        var result;
        if (typeof str != "string") {
            result = "No es un string";
        } else if (str === str.toUpperCase()) {
            result = "Todo en mayúsculas";
        } else if (str == str.toLowerCase()) {
            result = "Todo en minúsculas";
        } else {
            result = "Mayúsculas y minúsculas";
        }
        return result;
    };
    console.log("result 0, 3, '4', 'MAY', 'min', 'Mym'");
    console.log(info(0));
    console.log(info(3));
    console.log(info("4"));
    console.log(info("MAY"));
    console.log(info("min"));
    console.log(info("Mym"));
})();

(function() {
    var palindromo = function(str) {
        var result = true;
        if (typeof str != "string") {
            result = "No es un string";
        } else {
            //var mStr = str.replace(/ /g, '');
            var mStr = str.replace(/\s/g, '');
            result = (mStr.toLowerCase() === mStr.split("").reverse().join("").toLowerCase());
        }
        return result;
    };
    console.log("result 0, 'a', ' a a', 'a a a', 'min', 'La ruta nos aporto otro paso natural'");
    console.log(palindromo(0));
    console.log(palindromo("a"));
    console.log(palindromo(" a a"));
    console.log(palindromo("a a a"));
    console.log(palindromo("min"));
    console.log(palindromo("La ruta nos aporto otro paso natural"));
})();
