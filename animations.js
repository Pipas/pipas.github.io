let underlines = document.getElementsByClassName("portfoliounderline");
for (let i = 0; i < underlines.length; i++)
    TweenMax.set(underlines[i], {scaleX:0});

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