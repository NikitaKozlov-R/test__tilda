function dataInner(container, value) {
  if (!value) {
    return
  }
  container.innerHTML = value
}

function showAlert(title, massage) {
  const alertContainer = document.querySelector('.alert')
  const titleContainer = document.querySelector('.alert__title')
  const massageContainer = document.querySelector('.alert__massage')

  if (alertContainer.classList.contains('active')) {
    return
  }

  dataInner(titleContainer, title)
  dataInner(massageContainer, massage)

  alertContainer.classList.add('active')

  setTimeout(() => {
    alertContainer.classList.remove('active')
  }, 6000)
}
