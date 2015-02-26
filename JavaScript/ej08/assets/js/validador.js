HTMLFormElement.prototype.validate = function() {

    var radioCache;
    var validator = {
        required: function(el) {
            var bResult;
            if (el.type === 'checkbox') {
                bResult = el.checked;
            } else if (el.type === 'radio') {
                if (radioCache.indexOf(el.name) === -1) {

                    var options = el.parentNode.querySelectorAll("input[name='" + el.name + "']");
                    radioCache.push(el.name, false);
                    for (var i = 0; i < options.length; i++) {
                        if (options[i].checked) {
                            radioCache[radioCache.indexOf(el.name) + 1] = true;
                            break;
                        }
                    }
                }
                bResult = radioCache[radioCache.indexOf(el.name) + 1];
            } else if (el.type === 'text' || el.type === 'password' || el.type === 'textarea') {
                bResult = el.value !== undefined &&
                		  el.value !== '' &&
                		  el.value!== null && 
                		  /^\s+$/.test(el.value);
            } else { //images, etc.
                bResult = true;
            }
            return bResult;

        },
        email: function(value) {
            return /^\w([\w.\-]*\w)?@[A-Za-z0-9]([\w.\-]*\w)?\.[A-Za-z]{2,3}$/.test(value);
        },
        passwd: function(value) {
            var b6char = /.{6,}/.test(value);
            var bMin = /[a-z]/.test(value);
            var bMay = /[A-Z]/.test(value);
            var bDig = /\d/.test(value);
            console.log("b6char: ", b6char);
            console.log("bMin: ", bMin);
            console.log("bMay: ", bMay);
            console.log("bDig: ", bDig);
            return (b6char && bMin && bMay && bDig);
        },
        maxCharacters: function(value) {
            return (value.length < 50);
        }
    };

    var validate = function(event) {
        console.log("Validando formulario...");
        var aRequiredErrors = [];
        var aEmailErrors = [];
        var aPasswordErrors = [];
        var aMaxCharErrors = [];
        radioCache = [];

        var aRequired = this.querySelectorAll(".required");
        var bRequired = true;
        var i;
        if (aRequired.length) {
            for (i = 0; i < aRequired.length; i++) {
                if (!validator.required(aRequired[i])) {
                    if (aRequiredErrors.indexOf(aRequired[i].name) === -1) {
                        aRequiredErrors.push(aRequired[i].name);
                    }
                    bRequired = false;
                }
            }
        }


        var aEmail = this.querySelectorAll(".valid-email");
        var bEmail = true;
        if (aEmail.length) {
            for (i = 0; i < aEmail.length; i++) {
                if (!validator.email(aEmail[i].value)) {
                    aEmailErrors.push(aEmail[i].name);
                    bEmail = false;
                }
            }
        }

        var aMaxChar = this.querySelectorAll(".maxCharacters");
        var bMaxChar = true;
        if (aMaxChar.length) {
            for (i = 0; i < aMaxChar.length; i++) {
                if (!validator.maxCharacters(aMaxChar[i].value)) {
                    aMaxCharErrors.push(aMaxChar[i].name);
                    bMaxChar = false;
                }
            }
        }

        var aPassword = this.querySelectorAll("input[type='password']");
        var bPasswd = true;
        if (aPassword.length) {
            for (i = 0; i < aPassword.length; i++) {
                if (!validator.passwd(aPassword[i].value)) {
                    aPasswordErrors.push(aPassword[i].name);
                    bPasswd = false;
                }
            }
        }

        if (!(bRequired && bEmail && bPasswd && bMaxChar)) {
            event.preventDefault();
            var errorStr = "";
            if (!bRequired) {
                console.log("Hay campos requeridos no rellenados!!");
                errorStr += "Hay campos requeridos no rellenados!!\n";
                for (i = 0; i < aRequiredErrors.length; i++) {
                    console.log(aRequiredErrors[i]);
                    errorStr += "  * " + aRequiredErrors[i] + "\n";
                }
            }
            if (!bEmail) {
                console.log("Hay campos con direccion de email no válidas!!");
                errorStr += "Hay campos con direccion de email no válidas!!\n";
                for (i = 0; i < aEmailErrors.length; i++) {
                    console.log(aEmailErrors[i]);
                    errorStr += "  * " + aEmailErrors[i] + "\n";
                }
            }
            if (!bPasswd) {
                console.log("Hay campos de password que no cumplen!!");
                errorStr += "Hay campos de password que no cumplen!!\n";
                for (i = 0; i < aPasswordErrors.length; i++) {
                    console.log(aPasswordErrors[i]);
                    errorStr += "  * " + aPasswordErrors[i] + "\n";
                }
            }
            if (!bMaxChar) {
                console.log("Hay campos que exceden su longitud!!");
                errorStr += "Hay campos que exceden su longitud!!";
                for (i = 0; i < aMaxChar.length; i++) {
                    console.log(aMaxCharErrors[i]);
                    errorStr += "  * " + aMaxCharErrors[i] + "\n";
                }
            }
            alert(errorStr);
        }

    };

    this.addEventListener('submit', validate, false);
};
