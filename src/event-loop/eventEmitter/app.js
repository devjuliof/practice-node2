import EventEmitter from 'node:events';

const eventEmitter = new EventEmitter();

eventEmitter.on('greet', (name, age) => {
    console.log(`Hey ${name} ${age}`)
});

eventEmitter.emit('greet', 'Joana', 13)