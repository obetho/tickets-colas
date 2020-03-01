// se establece la comunicacion
var socket = io();
var lbl = $('small');
var searchParams = new URLSearchParams(window.location.search);
if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio no existe');

}

var escritorio = searchParams.get('escritorio');
$('h1').text('Escritorio ' + escritorio);

$('button').on('click', function() {
    socket.emit('atenderTicket', { escritorio }, function(resp) {
        if (resp == 'No hay tickets') {
            lbl.text('No hay tickets');
            return;
        }
        lbl.text('Ticket ' + resp.numero);
    });
});