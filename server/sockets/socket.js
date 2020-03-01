const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control');

const tc = new TicketControl();

io.on('connection', (client) => {

    client.on('siguienteTicket', (data, callback) => {

        let siguiente = tc.siguienteTicket();

        console.log(siguiente);
        callback(siguiente);
    });

    client.emit('estadoActual', {
        actual: tc.getUltimo(),
        ultimos4: tc.getUltimos4()
    });

    client.on('atenderTicket', (data, callback) => {
        if (!data.escritorio) {
            return callback({
                err: true,
                mensaje: 'El escritorio es necesario'
            });
        }
        let atender = tc.atenderTicket(data.escritorio);

        callback(atender);
        //update

        client.broadcast.emit('ultimos4', {
            ultimos4: tc.getUltimos4()
        });
    });

});