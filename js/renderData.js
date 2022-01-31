function renderData(data) {
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
}
