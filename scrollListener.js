let typingAnimation = new TypeIt('#introType', {
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
    .type(' Web Develper')
    .delete(3)
    .type('oper')
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
    .pause(30000)
    .delete()
    .type('Go ahead scroll down,')
    .break()
    .type('don\'t be here all day')
    .options({speed: 1500, lifeLike: false})
    .type('..........')
    .delete(10)
    .type('..........')
    .delete(10)
    .type('..........')
    .delete(10)
    .type('..........')
    .delete(10)
    .type('..........')
    .delete(10)
    .options({speed: 150, lifeLike: true})
    .delete()
    .type('Now you\'re just testing me...')
    .pause(2000)
    .delete()
    .type('Go read about me')
    .pause(2000)
    .type(', Scroll down')
    .pause(2000)
    .type(', I\'m done')
    .pause(2000)
    .delete()
    .type('Is this Ana?')
    .pause(2000)
    .type(' Just give up...')
    .pause(2000)
    .delete()
    .type('I\'m a Web Developer.');

function checkTitle()
{
    var canvas = document.getElementById("introType");
    if(!isVisibleInViewport(canvas))
    {
        if(typingAnimation)
        {
            typingAnimation.destroy();
            typingAnimation = null;
            document.getElementById("introType").innerHTML = "I'm a Web Developer.";
            console.log("destroyed");
        }
    }
}

function isVisibleInViewport(elem)
{
    var y = elem.offsetTop;
    var height = elem.offsetHeight;

    while ( elem = elem.offsetParent )
        y += elem.offsetTop;

    var maxHeight = y + height;
    var isVisible = ( y < ( window.pageYOffset + window.innerHeight ) ) && ( maxHeight >= window.pageYOffset );
    return isVisible;

}

window.addEventListener("scroll", checkTitle, false);