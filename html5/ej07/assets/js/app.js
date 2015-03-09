window.onload = function() {
    var btn = document.getElementById("calcular");
    var value = document.getElementById("number");
    var res = document.getElementById("results");

    var worker = new Worker('assets/js/primes.js');


    btn.addEventListener('click', function(e) {
        e.preventDefault();

        var num = value.value;
        worker.postMessage(num);

    }, false);

    worker.addEventListener('message', function(e){
        var primes = e.data;
        res.innerHTML = primes.join(" ");
    });

};
