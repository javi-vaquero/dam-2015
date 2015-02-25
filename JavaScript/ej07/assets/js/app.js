window.onload = function() {

    var button = document.getElementById("addButton");
    var list = document.getElementById("lista");

    var lis = list.querySelectorAll('li');
//

    var add = function() {
        event.stopPropagation();
        if (list) {

            var li = document.createElement("li");
            li.innerText = "Element " + (list.childElementCount + 1);
            //li.addEventListener('click', remove, false);
            list.appendChild(li);
        }
    };

    var remove = function(event) {

    	if(confirm("¿Seguro que desea eliminar el elemento?")){
    		//this.parentNode.removeChild(this);
    		this.removeChild(event.target);
    	}
    	
    };

    if (button) {
        button.addEventListener('click', add, false);
    }
    /*
    if (lis.length) {
        for (var i = 0; i < lis.length; i++) {
        	lis[i].addEventListener('click', remove, false);
        }
    }
*/
	if(list){
		list.addEventListener('click', remove, false);
	}

    document.addEventListener('click', function (){console.log("Evento en document!!" + new Date());}, false);



};
