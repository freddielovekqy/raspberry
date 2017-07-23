(function () {
    var socket = io();

    socket.emit('init', {type: '前进'});

    $('#go').on('click', event => {
        console.log('go');
        socket.emit('go');
    });

    $('#stop').on('click', event => {
        console.log('stop');
        socket.emit('stop');
    });

    $('#back').on('click', event => {
        console.log('back');
        socket.emit('back');
    });
})();