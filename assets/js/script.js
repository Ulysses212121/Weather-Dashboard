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