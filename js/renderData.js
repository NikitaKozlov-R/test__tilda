function renderData(data) {
  console.log(data)
  // IMAGES
  let imagesArray = JSON.parse(data.images)

  let imagesContainer = document.querySelector('.c-slider__frame')

  imagesArray.forEach(item => {
    imagesContainer.innerHTML += `
      <img
        class="c-slider__image"
        src="${item.img}"
        alt="Наушники"
      >
    `
  })

  // CART BUTTON & PRICE
  let priceOld = data.priceold
  let priceCurrent = data.price + '₽'

  let priceOldContainer = document.querySelector('.c-price__old')
  let priceCurrentContainer = document.querySelector('.c-price__current')

  dataInner(priceOldContainer, priceOld)
  dataInner(priceCurrentContainer, priceCurrent)

  // PRODUCT HEADING & DESCRIPTION
  let quantity = data.quantity
  let title = data.title
  let description = data.descr

  let quantityContainer = document.querySelector('.c-heading__quantity')
  let titleContainer = document.querySelector('.c-heading__title')
  let descriptionContainer = document.querySelector('.c-heading__description')

  if (quantity < 10 && quantity !== 0) {
    quantity = 'Only ' + quantity + ' left!'
    dataInner(quantityContainer, quantity)
  }
  if (quantity === 0) {
    quantity = 'The product is over!'
    dataInner(quantityContainer, quantity)
  }

  dataInner(titleContainer, title)
  dataInner(descriptionContainer, description)
}

// FUNCTIONS
function dataInner(container, value) {
  container.innerHTML = value
}
