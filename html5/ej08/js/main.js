$(function() {
    "use strict";

    // Obtener los elementos del DOM
    var status = document.getElementById("status");
    var text = document.getElementById("input");
    var content = $('#content');

    // Mi color asignado por el servidor
    var myColor = false;
    // Mi nick
    var myName = false;

    // Comprobar la disponibilidad de Web Socket en el navegador
    if (!Modernizr.websockets) {
        input.value = "EL NAVEGADOR NO SOPORTA WEBSOCKETS";
        return false;
    }

    window.WebSocket = window.WebSocket || window.MozWebSocket;

    // Abrir la conexion con ws://www.arkaitzgarro.com:1337


    var socket = new WebSocket('ws://www.arkaitzgarro.com:1337');
    socket.addEventListener('open', function(ev) {
        console.log("Socket abierto");
        status.innerText = "Envíe su nick";
        input.disabled=false;
    }, false);
    socket.addEventListener('close', function(ev) {
        console.log("Socket cerrado");
        status.innerText = "Disconnected";
        input.disabled=true;

    }, false);
    socket.addEventListener('error', function(ev) {
        console.log("Error: ", ev);
    }, false);
    socket.addEventListener('message', function(ev) {
        var msg;
        try {
            msg = JSON.parse(ev.data);
        } catch (ex) {
            console.log("Error with json message", ex);
        }
        if (msg) {
            switch (msg.type) {
                case 'color':
                    myColor = msg.data;
                    status.style.color = msg.data;
                    status.innerText = "Conected  -  " + myName + ":";
                    break;
                case 'history':
                    for (var i = 0; i < msg.data.length; i++) {
                        var k = new Date(msg.data[i].time);
                        addMessage(msg.data[i].author, msg.data[i].text, msg.data[i].color, new Date(msg.data[i].time));
                    }
                    break;
                case 'message':
                    addMessage(msg.data.author, msg.data.text, msg.data.color, new Date(msg.data.time));
                    break;
                default:
                    break;
            }
        }
    }, false);
    input.addEventListener('keyup', function(ev) {
        if (ev.keyCode === 13) {
            if (input.value) {
                socket.send(input.value);
                if (!myName) {
                    myName = input.value;
                }
                input.value = "";
            }
        }
    }, false);


    // 1. Al abrir la conexión, solicitar el nick.
    // 2. Controlar posibles errores del servidor.
    // 3. Escucar los mensajes del servidor, y mostrarlos en el elemento "content"
    // 4. La estructura del objeto enviado por el servidor es la siguiente:
    //      {
    //          // Contiene el tipo de mensaje recibido
    //          type : @string in ['color', 'history', 'message'],
    //          // Contiene los datos según el tipo de mensaje recibido
    //          data: @Object {author, text, color, time}
    //      }
    // 5. Enviar un mensaje al pulsar enter. El mensaje enviado es únicamente la cadena de caracteres.

    /**
     * Añadir el mensaje a la ventana de chat
     */
    function addMessage(author, message, color, dt) {
        content.prepend('<p><span style="color:' + color + '">' + author + '</span> @ ' +
            (dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours()) + ':' + (dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes()) + ': ' + message + '</p>');
        console.log(content);
    }
});
