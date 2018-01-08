let portfolioEntries = document.getElementsByClassName("portfolioentry");
for (let entry of portfolioEntries)
{
    for (let child of entry.childNodes)
    {
        if (child.className === "portfoliounderline")
        {
            TweenMax.set(child, {transformOrigin:"0% 100%", scaleX:0});

            entry.onmouseenter = function()
            {
                TweenMax.set(child, {transformOrigin:"0% 100%", scaleX:0});
                TweenMax.to(child, 0.5, {ease: Power4.easeInOut, scaleX:1});
            };

            entry.onmouseleave = function()
            {
                TweenMax.set(child, {transformOrigin: "100% 0%", scaleX: 1});
                TweenMax.to(child, 0.5, {ease: Power4.easeInOut, scaleX: 0})
            };
        }
    }
}

let expandableElements = document.getElementsByClassName("expandable");
for (let element of expandableElements)
{
    element.onmouseenter = function()
    {
        TweenMax.to(element, 0.5, {ease: Power4.easeInOut, scale:1.2});
    };

    element.onmouseleave = function()
    {
        TweenMax.set(element, {scale:1});
        TweenMax.from(element, 0.5, {ease: Power4.easeInOut, scale:1.2});
    };
}

let titleElements = document.getElementsByClassName("title");
for (let element of titleElements)
{
    let tile = null, underline = null;
    for (let child of element.childNodes)
    {
        if(child.tagName === "H2")
            title = child;
        if(child.tagName === "DIV")
            underline = child;
    }

    if(underline !== null && title !== null)
    {
        underline.style.width = (title.offsetWidth + 4) + "px";
    }

    TweenMax.set(underline, {transformOrigin:"0% 100%", scaleX:0});

    new ScrollMagic.Scene({triggerElement:underline, triggerHook:0.75})
        .on('start', function ()
        {
            TweenMax.to(underline, 0.5, {ease: Power4.easeInOut, scaleX:1});
        })
        .addTo(controller);
}

function animateScrollTo(id)
{
    TweenMax.to(window, 2, {ease: Power4.easeOut, scrollTo:id});
}
