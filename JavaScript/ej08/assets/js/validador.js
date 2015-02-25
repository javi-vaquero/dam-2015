HTMLFormElement.prototype.validate = function(event) {

    var validator = {
    	required: function(el){
    		return el.value !== '';
    	},
    	email: function(el){
            console.log("email: " + el.value);
            return /^\w([\w.\-]*\w)?@[A-Za-z0-9]([\w.\-]*\w)?\.[A-Za-z]{2,3}$/.test(el.value);
    	},
        passwd: function(el){
            var b6char = /\w{6,}/.test(el.value);
            var bMin = /[a-z]/.test(el.value);
            var bMay = /[A-Z]/.test(el.value);
            var bDig = /\d/.test(el.value);
            console.log("b6char: ", b6char);
            console.log("bMin: ", bMin);
            console.log("bMay: ", bMay);
            console.log("bDig: ", bDig);
            return (b6char && bMin && bMay && bDig);
        }
    };

    var validate = function(event) {

        event.preventDefault();
        
    	var aRequired = this.querySelectorAll(".required");
        var bRequired = true;
    	if(aRequired.length){
    		for(var i=0; i<aRequired.length;i++){
                if (!validator.required(aRequired[i])){
                    bRequired=false;
                    console.log(aRequired[i].name + " es falso");
                    break;
                }
    		}
    	}


    	var aEmail = this.querySelectorAll(".valid-email");                        
        var bEmail = true;
        if(aEmail.length){
            for(i=0; i<aEmail.length;i++){
                if (!validator.email(aEmail[i])){
                    bEmail=false;
                    break;
                }
            }
        }

    	var aPassword = this.querySelectorAll("input[type='password']");
        console.log(aPassword);
        var bPasswd=true;
        if(aPassword.length){
            for(i=0; i<aPassword.length;i++){
                if (!validator.passwd(aPassword[i])){
                    bPasswd=false;
                    break;
                }
            }
        }

        console.log("bRequired: " + bRequired);
        console.log("bEmail: " + bEmail);
        console.log("bPasswd: " + bPasswd);
        if(!(bRequired && bEmail && bPasswd)){
            event.preventDefault();
            if(!bRequired){
                console.log("Hay campos requeridos no rellenados!!");
            }
            if(!bEmail){
                console.log("Hay campos con direccion de email no válidas!!");
            }
            if(!bPasswd){
                console.log("Hay campos de password que no cumplen!!");
            }
            
        }

    };

    this.addEventListener('submit', validate, false);
};
