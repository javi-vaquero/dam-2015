HTMLFormElement.prototype.validate = function() {

    var validator = {
    	required: function(){
    		return false;
    	};
    	email: function(){
    		return false;
    	};
    };

    var validate = function() {
    	var required = this.querySelectorAll(".required");
    	if(required.length){
    		for(var i=0; i<required.length){

    		}
    	}


    	var email = this.querySelectorAll(".email");

    	//var password = this.querySelectorAll(input["type=password"]);

    };

    this.addEventListener('submit', validate, false);
};
