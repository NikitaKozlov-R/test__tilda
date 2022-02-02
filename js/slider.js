'use strict'
;(function () {
  const nextButton = document.querySelector('.c-slider__button.next')
  const prevButton = document.querySelector('.c-slider__button.prev')
  const images = document.getElementsByClassName('c-slider__image')

  let currentImage = 0

  nextButton.addEventListener('click', () => {
    images[currentImage].classList.remove('active')
    currentImage++

    if (currentImage === images.length) {
      currentImage = 0
    }

    images[currentImage].classList.add('active')
  })

  prevButton.addEventListener('click', () => {
    images[currentImage].classList.remove('active')
    currentImage--

    if (currentImage < 0) {
      currentImage = images.length - 1
    }

    images[currentImage].classList.add('active')
  })
})()
