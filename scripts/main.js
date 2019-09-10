new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  perView: 7,
  gap: 48,
  autoplay: 8000
}).mount()

let controller = new ScrollMagic.Controller();

document.querySelectorAll('h2.title').forEach(element => {
  new ScrollMagic.Scene({
    triggerElement: element,
    triggerHook: 0.4
  })
    .on('start', function() {
      element.classList.add('underline')
    })
    .addTo(controller)
})

const footer = document.querySelector('#footer')
new ScrollMagic.Scene({
  triggerElement: footer,
  triggerHook: 1,
  offset: footer.clientHeight * 0.75
})
  .on('start', function() {
    footer.classList.add('animate')
  })
  .addTo(controller)

