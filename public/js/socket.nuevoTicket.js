// se establece la comunicacion
var socket = io();
var lblTicket = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('Conectado al server');
});

socket.on('disconnect', function() {
    console.log('desconectado al server');
});

socket.on('estadoActual', function(resp) {
    lblTicket.text(resp.actual);
});

$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function(siguiente) {
        lblTicket.text(siguiente);
    });
});