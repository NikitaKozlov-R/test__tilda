function setInnerHtml(container, value) {
  if (!value) return
  container.innerHTML = value
}

function showAlert(title, massage) {
  const alertContainer = document.querySelector('.alert')
  const titleContainer = document.querySelector('.alert__title')
  const massageContainer = document.querySelector('.alert__massage')

  if (alertContainer.classList.contains('active')) return

  setInnerHtml(titleContainer, title)
  setInnerHtml(massageContainer, massage)

  alertContainer.classList.add('active')

  setTimeout(() => {
    alertContainer.classList.remove('active')
  }, 6000)
}
