const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2e2c47364dmshafd81a8247e4c69p17a50cjsnf6456889c13c',
		'X-RapidAPI-Host': 'weather338.p.rapidapi.com'
	}
};


fetch("https://weather338.p.rapidapi.com/locations/search?query=san%20fran&language=en-US")
  .then (res => res.json)
  .then (response => {
    console.log(response)
  })