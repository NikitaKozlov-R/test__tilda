const url = 'https://store.tildacdn.com/api/tgetproduct/'

fetch(url)
  .then(function (response) {
    if (!response.ok) {
      console.log(
        "Seems like there's a problem. Code Status: " + response.status
      )
      return
    }

    response.json().then(function (data) {
      renderData(data)
    })
  })
  .catch(function (error) {
    console.log('Fetch Error: ', error)
  })
