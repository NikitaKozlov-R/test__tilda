function renderData(data) {
  console.log(data)
  // IMAGES
  let imagesArray = JSON.parse(data.images)

  let imagesContainer = document.querySelector('.c-slider__frame')

  imagesArray.reverse().forEach(item => {
    imagesContainer.innerHTML += `
      <img
        class="c-slider__image"
        src="${item.img}"
        alt="Наушники"
      >
    `
  })

  // PRICES
  let priceOld = JSON.parse(data.priceold)
  let priceCurrent = JSON.parse(data.price) + '₽'

  let priceOldContainer = document.querySelector('.c-price__old')
  let priceCurrentContainer = document.querySelector('.c-price__current')

  dataInner(priceOldContainer, priceOld)
  dataInner(priceCurrentContainer, priceCurrent)

  //FUNCTIONS
  function dataInner(container, value) {
    container.innerHTML = value
  }
}
