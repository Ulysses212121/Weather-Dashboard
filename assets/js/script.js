// getCurrentPosition();

// console.log(position.coords);


$("#city-search").on("click", function() {
    var city = "q=london";
    var queryURL = "api.openweathermap.org/data/2.5/weather?" +
      city + "&APPID=fc7a4c55d406dbfc0c17bcfda644fb7e";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        console.log(response);
        })
 
  });