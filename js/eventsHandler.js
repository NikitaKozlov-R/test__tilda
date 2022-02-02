'use strict'

function cartHandler(title, price, quantity) {
  const cartButton = document.querySelector('.c-price__button')

  let cart = []

  if (quantity === 0) {
    cartButton.setAttribute('disabled', 'disabled')
    return
  }

  cartButton.addEventListener('click', () => {
    if (quantity === 0) return

    const position = makeCartPosition(title, price)
    cart.push(position)

    cartButton.setAttribute('disabled', 'disabled')
    cartButton.classList.add('success')

    console.log('User cart: ', cart)
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

;(function () {
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
    showAlert('Hello!', 'Here is awesome product information')
  })
})()
