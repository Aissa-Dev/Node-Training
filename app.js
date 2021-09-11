const EventEmitter = require('events');

myEvent = new EventEmitter();

myEvent.on('hello', (arg) => {
    console.log('hello ' + arg.name + ' your phone is ' + arg.num)
})

myEvent.emit('hello', { num: 123322122, name: 'dev dev'});

