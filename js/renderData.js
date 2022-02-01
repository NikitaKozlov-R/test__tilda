function renderData(data) {
  renderHeading(data.quantity, data.title, data.descr)
  renderPrice(data.priceold, data.price)
  renderImages(data.images, data.title)
}

function renderHeading(quantity, title, description) {
  const quantityContainer = document.querySelector('.c-heading__quantity')
  const titleContainer = document.querySelector('.c-heading__title')
  const descriptionContainer = document.querySelector('.c-heading__description')

  // If the server return the quantity as a string
  Number(quantity)

  if (quantity < 10 && quantity) {
    quantity = 'Only ' + quantity + ' left!'
    dataInner(quantityContainer, quantity)
  }
  if (!quantity) {
    quantity = 'The product is over!'
    dataInner(quantityContainer, quantity)
  }

  dataInner(titleContainer, title)
  dataInner(descriptionContainer, description)
}

function renderPrice(priceOld, priceCurrent) {
  const priceOldContainer = document.querySelector('.c-price__old')
  const priceCurrentContainer = document.querySelector('.c-price__current')

  priceCurrent + '₽'

  dataInner(priceOldContainer, priceOld)
  dataInner(priceCurrentContainer, priceCurrent)
}

function renderImages(images, title) {
  const imagesContainer = document.querySelector('.c-slider__frame')

  images = JSON.parse(images)

  images.forEach(image => {
    imagesContainer.innerHTML += `
        <img
          class="c-slider__image active"
          src="${image.img}"
          alt="${title}"
          title="${title}"
        >
      `
  })
}

function dataInner(container, value) {
  container.innerHTML = value
}
