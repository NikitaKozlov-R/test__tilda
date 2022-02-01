'use strict'

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
