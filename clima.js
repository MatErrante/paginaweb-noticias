const api = {
    key: '9e122cd782b2d0333f5fe4e7fa192062',
    url: `https://api.openweathermap.org/data/2.5/weather`
  };
  
  const weatherImage = document.getElementById('weather-image');
  
  function updateWeatherImage(data) {
    let imageUrl = 'default-icon.png'; // Ruta de la imagen por defecto
    // Ajusta las rutas de las imágenes según tus necesidades
    switch (data.weather[0].main) {
      case 'Clouds':
        imageUrl = 'clima-main/images/lluvia.png';
        break;
      case 'Clear':
        imageUrl = 'clima-main/images/temp-mid.png';
        break;
      case 'Rain':
        imageUrl = 'clima-main/images/sol.png';
        break;
      // Agrega más casos para los diferentes estados del tiempo
    }
    weatherImage.src = imageUrl;
  }
  
  function search(query) {
    fetch(`${api.url}?q=${query}&appid=${api.key}&lang=es`)
      .then(response => response.json())
      .then(data => {
        updateWeatherImage(data);
      })
      .catch(err => {
        console.log(err);
        alert('Hubo un error');
      });
  }
  
  function onSubmit(event) {
    event.preventDefault();
    search(searchbox.value);
  }
  
  const searchform = document.getElementById('search-form');
  const searchbox = document.getElementById('searchbox');
  searchform.addEventListener('submit', onSubmit, true);
  
