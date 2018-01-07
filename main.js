'use strict';

window.onload = function()
{
    let underlines = document.getElementsByClassName("portfoliounderline");
    for (let i = 0; i < underlines.length; i++)
        TweenMax.set(underlines[i], {scaleX:0});

    new TypeIt('#introType', {
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
};

function showUnderline(element)
{
    for (let i = 0; i < element.childNodes.length; i++)
    {
        if (element.childNodes[i].className === "portfoliounderline")
        {
            TweenMax.set(element.childNodes[i], {transformOrigin:"0% 100%"});
            TweenMax.to(element.childNodes[i], 0.5, {ease: Power4.easeInOut, scaleX:1});
        }
    }
}

function hideUnderline(element)
{
    for (let i = 0; i < element.childNodes.length; i++)
    {
        if (element.childNodes[i].className === "portfoliounderline")
        {
            TweenMax.set(element.childNodes[i], {transformOrigin:"100% 0%"});
            TweenMax.to(element.childNodes[i], 0.5, {ease: Power4.easeInOut, scaleX:0});
        }
    }
}

function expand(element)
{
    TweenMax.to(element, 0.5, {ease: Power4.easeInOut, scale:1.2});
}

function shrink(element)
{
    TweenMax.set(element, {scale:1});
    TweenMax.from(element, 0.5, {ease: Power4.easeInOut, scale:1.2});
}