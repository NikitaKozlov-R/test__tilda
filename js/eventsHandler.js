'use strict'

let cart = []

function cartHandler(title, price, quantity) {
  const cartButton = document.querySelector('.c-price__button')

  if (quantity === 0) {
    cartButton.setAttribute('disabled', 'disabled')
  }

  cartButton.addEventListener('click', () => {
    const position = makeCartPosition(title, price)
    cart.push(position)
    console.log('User cart: ', cart)
    cartButton.setAttribute('disabled', 'disabled')
    showAlert(
      'Product added!',
      'In the console you can see the array of positions in the cart'
    )
  })
}

function makeCartPosition(title, price) {
  return {
    title: title,
    price: price,
  }
}

function showAlert(title, massage) {
  const alertContainer = document.querySelector('.alert')
  const titleContainer = document.querySelector('.alert__title')
  const massageContainer = document.querySelector('.alert__massage')

  dataInner(titleContainer, title)
  dataInner(massageContainer, massage)

  alertContainer.classList.add('active')

  setTimeout(() => {
    alertContainer.classList.remove('active')
  }, 8000)
}

const likeButton = document.querySelector('.c-actions__btn.like')
const shareButton = document.querySelector('.c-actions__btn.share')
const compareButton = document.querySelector('.c-actions__btn.compare')
const infoButton = document.querySelector('.c-actions__btn.info')

likeButton.addEventListener('click', () => {
  likeButton.classList.toggle('active')
})

shareButton.addEventListener('click', () => {
  shareButton.classList.toggle('active')
})

compareButton.addEventListener('click', () => {
  compareButton.classList.toggle('active')
})

infoButton.addEventListener('click', () => {
  alert('Here is some awesome info about product')
})
