var socket = io();
var lblT1 = $('#lblTicket1');
var lblT2 = $('#lblTicket2');
var lblT3 = $('#lblTicket3');
var lblT4 = $('#lblTicket4');

var lblE1 = $('#lblEscritorio1');
var lblE2 = $('#lblEscritorio2');
var lblE3 = $('#lblEscritorio3');
var lblE4 = $('#lblEscritorio4');

var lblTickets = [lblT1, lblT2, lblT3, lblT4];
var lblEscritorios = [lblE1, lblE2, lblE3, lblE4];

socket.on('estadoActual', function(data) {
    actualizaHTML(data.ultimos4);
});

socket.on('ultimos4', async function(data) {
    audio = new Audio('audio/new-ticket.mp3');
    await audio.play();
    actualizaHTML(data.ultimos4);
});

function actualizaHTML(ultimos4) {
    for (var i = 0; i <= ultimos4.length - 1; i++) {
        lblTickets[i].text('Ticket ' + ultimos4[i].numero);
        lblEscritorios[i].text('Escritorio ' + ultimos4[i].escritorio);
    }
}