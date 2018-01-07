'use strict';

new TypeIt('#title', {
    speed: 150,
    deleteSpeed: 50,
    lifeLike: true,
    autoStart: true,
    destroy: true
})
    .type('I\'m a Web Developer')
    .pause(4000)
    .delete(14)
    .type('n Android Developer')
    .pause(4000)
    .delete(19)
    .type(' Student')
    .pause(3000)
    .type('?')
    .pause(1000)
    .delete(9)
    .type(' Web Developer')
    .pause(10000)
    .delete()
    .type('Go ahead scroll down, don\'t be here all day')
    .options({speed: 1500, lifeLike: false})
    .type('.........')
    .pause(30000)
    .options({speed: 150, lifeLike: true})
    .delete()
    .type('Now you\'re just testing me...')
    .pause(2000)
    .delete()
    .type('Go read about me, I\'m done')
    .pause(2000)
    .delete()
    .type('Is this Ana? Just give up')
    .pause(2000)
    .delete()
    .type('I\'m a Web Developer');
