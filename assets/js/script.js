// var humidity = $("#humidity").text()

// getCurrentPosition();

// console.log(position.coords);


var today = new Date();
var date = '(' + (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear() + ')';


$("#city-search").on("click", function() {
    var city = "q=london";
    
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
      city + "&APPID=fc7a4c55d406dbfc0c17bcfda644fb7e";
    

    $.ajax({
      url: queryURL,
      method: "GET",
    })
      .then(function(response) {
        console.log(response);
    
        var humidity = response.main.humidity;
        var tempK = parseFloat(response.main.temp);
        var locationName = response.name;
        var windSpeed = response.wind.speed;
        var icon = response.weather[0].icon;
        var iconUrl = "https://openweathermap.org/img/wn/" + icon + ".png";

        var lon = response.coord.lon;
        var lat = response.coord.lat;
        var coordinates = ("lat=" + lat + "&lon=" + lon)
        var queryURL2 = "https://api.openweathermap.org/data/2.5/uvi?" +
      coordinates + "&appid=fc7a4c55d406dbfc0c17bcfda644fb7e";
      var queryURL3 = "https://api.openweathermap.org/data/2.5/forecast?" +
      coordinates + "&cnt=20&appid=fc7a4c55d406dbfc0c17bcfda644fb7e";


      console.log( iconUrl);
        console.log(lon);
        console.log(lat);
        console.log(coordinates);

        console.log(locationName);

        var weatherIcon = $("<img>").attr({"src": iconUrl, "style": "display:inline-block"});
        console.log(weatherIcon);
        // var h3Name = $("<h3>").text(locationName + " " + date + weatherIcon);
        var h3Name = $("<h3>").text(locationName + " " + date);
        // var h3Name = $("<h3>").val($("<img>").attr({"src": iconUrl, "style": "display:inline-block"}));
        $("#city-info").prepend(h3Name);
        $("h3").append(weatherIcon);

        // $("#city-info").prepend(weatherIcon);

        var tempF = $("<li>").text("Temperature: " + ((((tempK - 273.15)*1.8)+32).toFixed(1)) + " °F");
        $(".city-results").append(tempF);

        var liHum = $("<li>").text("Humidity: " + humidity + "%");
        liHum.attr("class", "list-group");
        $(".city-results").append(liHum);

        var liWind = $("<li>").text("Wind Speed: " + windSpeed + "MPH");
        liWind.attr("class", "list-group");
        $(".city-results").append(liWind);


        $.ajax({
            url: queryURL2,
            method: "GET",
          })
            .then(function(results) {
              console.log(results);
        
              var uvi = results.value; 
              var liUvi = $("<li>").text("UV Index: " + uvi);
              liUvi.attr("class", "list-group");
              $(".city-results").append(liUvi);




            });


            $.ajax({
                url: queryURL3,
                method: "GET",
              })
                .then(function(forecastResults) {
                  console.log(forecastResults);

                })

        })

      
 
  });

 






//   function initCoords() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(initialize, locationError);
//     } else {
//       showError("Your browser does not support Geolocation!");
//     }
//   }

//   function initialize(position) {
//     var lat = position.coords.latitude;
//     var lon = position.coords.longitude;
//     var acc = position.coords.accuracy;

//     // Debugging
//     console.log(position.coords);
//     console.log("Accuracy: "+acc+"\nLatitude: "+lat+"\nLongitude: "+lon);

//     // Google Maps API
//     var myLatlng = new google.maps.LatLng(lat,lon);
//     var mapOptions = {
//         center: new google.maps.LatLng(lat, lon),
//         zoom: 12,
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//     };
//     var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
//     var marker = new google.maps.Marker({
//         position: myLatlng,
//         map: map,
//         title:"Hello World!"
//     });
// }