'use strict';

new TypeIt('#title', {
    speed: 150,
    deleteSpeed: 50,
    lifeLike: true,
    autoStart: true,
    loop: true
})
    .pause(2000)
    .delete()
    .type('I\'m an Android Developer')
    .pause(2000)
    .delete()
    .type('I\'m a Student')
    .pause(1000)
    .type('?')
    .pause(1000)
    .delete();

console.log("fdsafsd");
