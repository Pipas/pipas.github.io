let typingAnimation = new TypeIt('#introType', {
    speed: 150,
    deleteSpeed: 50,
    lifeLike: true,
    autoStart: true,
    destroy: true
})
    .type('Sou um Web Developer')
    .pause(4000)
    .delete(13)
    .type('Android Developer')
    .pause(4000)
    .delete(17)
    .type('Estudante')
    .pause(3000)
    .type('?')
    .pause(1000)
    .delete(10)
    .type('Web Develper')
    .delete(3)
    .type('oper')
    .pause(4000)
    .delete(13)
    .type('Android Developer')
    .pause(4000)
    .delete(17)
    .type(' Student')
    .pause(3000)
    .type('?')
    .pause(1000)
    .delete(10)
    .type(' Web Developer.');

new ScrollMagic.Scene({triggerElement:"#introType", triggerHook:"onLeave", offset:80})
    .on('start', function ()
    {
        if(typingAnimation)
        {
            typingAnimation.destroy();
            typingAnimation = null;
            document.getElementById("introType").innerHTML = "Sou um Web Developer.";
        }
    })
    .addTo(controller);
