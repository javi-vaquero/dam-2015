window.onload = function() {
    var inputs = document.querySelectorAll('input, textarea');
    storage = localStorage; //sessionStorage;
    var prefix = 'ej03_prefix_';


    var showData = function(key, value) {
        for (var i = inputs.length - 1; i >= 0; i--) {
            var name = key.replace(prefix, '');
            if (inputs.item(i).name === name) {
                inputs.item(i).value = value;
            }
        }
    };

    var handleStorage = function(event) {
        showData(event.key, event.newValue);
    };

    var saveText = function() {
        storage.setItem(prefix + this.name, this.value);
    };

    for (var i = inputs.length - 1; i >= 0; i--) {
        inputs.item(i).addEventListener('input', saveText, false);
    }
    window.addEventListener('storage', handleStorage, false);

    if (storage.length) {
        var aux;
        for (i = storage.length - 1; i >= 0; i--) {
            var key = storage.key(i);
            showData(key, storage.getItem(key));

        }
    }
};
