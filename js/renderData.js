function renderData(data) {
  // CART BUTTON & PRICE
  const priceOld = data.priceold
  const priceCurrent = data.price + '₽'

  const priceOldContainer = document.querySelector('.c-price__old')
  const priceCurrentContainer = document.querySelector('.c-price__current')

  dataInner(priceOldContainer, priceOld)
  dataInner(priceCurrentContainer, priceCurrent)

  // PRODUCT HEADING & DESCRIPTION
  let quantity = data.quantity
  const title = data.title
  const description = data.descr

  const quantityContainer = document.querySelector('.c-heading__quantity')
  const titleContainer = document.querySelector('.c-heading__title')
  const descriptionContainer = document.querySelector('.c-heading__description')

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

  // IMAGES
  const imagesArray = JSON.parse(data.images)

  const imagesContainer = document.querySelector('.c-slider__frame')

  imagesArray.reverse().forEach(item => {
    imagesContainer.innerHTML += `
        <img
          class="c-slider__image active"
          src="${item.img}"
          alt="Наушники"
        >
      `
  })
}

function dataInner(container, value) {
  container.innerHTML = value
}
