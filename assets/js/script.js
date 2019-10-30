// var humidity = $("#humidity").text()

// getCurrentPosition();

// console.log(position.coords);

var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
var tomDate1 = tomorrow.getDate();
var tomMonth1 = tomorrow.getMonth() + 1;

var nextDay2 = new Date();
nextDay2.setDate(nextDay2.getDate() + 2);
var tomDate2 = nextDay2.getDate();
var tomMonth2 = nextDay2.getMonth() + 1;

var nextDay3 = new Date();
nextDay3.setDate(nextDay3.getDate() + 3);
var tomDate3 = nextDay3.getDate();
var tomMonth3 = nextDay3.getMonth() + 1;

var nextDay4 = new Date();
nextDay4.setDate(nextDay4.getDate() + 4);
var tomDate4 = nextDay4.getDate();
var tomMonth4 = nextDay4.getMonth() + 1;

var nextDay5 = new Date();
nextDay5.setDate(nextDay5.getDate() + 5);
var tomDate5 = nextDay5.getDate();
var tomMonth5 = nextDay5.getMonth() + 1;


var today = new Date();
var date = '(' + (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear() + ")";
var date1 = tomMonth1 + '/' + tomDate1 + '/' + today.getFullYear();
var date2 = tomMonth2 + '/' + tomDate2 + '/' + today.getFullYear();
var date3 = tomMonth3 + '/' + tomDate3 + '/' + today.getFullYear();
var date4 = tomMonth4 + '/' + tomDate4 + '/' + today.getFullYear();
var date5 = tomMonth5 + '/' + tomDate5 + '/' + today.getFullYear();
// console.log(a);

$("#city-search").on("click", function () {
  var city = "q=" + $("#city-input").val();
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    city + "&APPID=fc7a4c55d406dbfc0c17bcfda644fb7e";

  $.ajax({
    url: queryURL,
    method: "GET",
  })
    .then(function (response) {
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
        coordinates + "&cnt=35&appid=fc7a4c55d406dbfc0c17bcfda644fb7e";


      var weatherIcon = $("<img>").attr({ "src": iconUrl, "style": "display:inline-block" });
      console.log(weatherIcon);
      var h3Name = $("<h3>").text(locationName + " " + date);
      h3Name.attr("class", "city-name");
      h3Name.append(weatherIcon);
      $("#city-info").prepend(h3Name);

      var tempF = $("<li>").text("Temperature: " + ((((tempK - 273.15) * 1.8) + 32).toFixed(1)) + " °F");
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
        .then(function (results) {
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
        .then(function (forecastResults) {
          var forecast1 = [];
          var forecast2 = [];
          var forecast3 = [];
          var forecast4 = [];
          var forecast5 = [];

          var forecastT1 = [];
          var forecastT2 = [];
          var forecastT3 = [];
          var forecastT4 = [];
          var forecastT5 = [];


          // Forecast Day 1
          for (let i = 0; i < 6; i++) {
            forecast1.push(forecastResults.list[i].main.humidity);
            forecastT1.push(forecastResults.list[i].main.temp)
          }
          var maxHumidity1 = forecast1.reduce(function (a, b) {
            return Math.max(a, b);
          });
          var maxTemp1 = forecastT1.reduce(function (a, b) {
            return Math.max(a, b);
          })

          var day1 = $("<h6>").text(date1);
          var t1 = $("<p>").text("Temp: " + ((((maxTemp1 - 273.15) * 1.8) + 32).toFixed(1)) + " °F");
          var pF1 = $("<p>").text("Humidity: " + maxHumidity1 + "%");
          $("#box1").append(day1, t1, pF1);


          // Forecast Day 2
          for (let i = 8; i < 14 && i > 7; i++) {
            forecast2.push(forecastResults.list[i].main.humidity);
            forecastT2.push(forecastResults.list[i].main.temp)
          }
          console.log(forecastT2);
          var maxHumidity2 = forecast2.reduce(function (a, b) {
            return Math.max(a, b);
          });
          var maxTemp2 = forecastT2.reduce(function (a, b) {
            return Math.max(a, b);

          })
          var day2 = $("<h6>").text(date2);
          var t2 = $("<p>").text("Temp: " + ((((maxTemp2 - 273.15) * 1.8) + 32).toFixed(1)) + " °F");
          var pF2 = $("<p>").text("Humidity: " + maxHumidity2 + "%");
          $("#box2").append(day2, t2, pF2);


          // Forecast Day 3
          for (let i = 15; i < 21 && i > 14; i++) {
            forecast3.push(forecastResults.list[i].main.humidity);
            forecastT3.push(forecastResults.list[i].main.temp)
          }
          var maxHumidity3 = forecast3.reduce(function (a, b) {
            return Math.max(a, b);
          });
          var maxTemp3 = forecastT3.reduce(function (a, b) {
            return Math.max(a, b);
          })

          var day3 = $("<h6>").text(date3);
          var t3 = $("<p>").text("Temp: " + ((((maxTemp3 - 273.15) * 1.8) + 32).toFixed(1)) + " °F");
          var pF3 = $("<p>").text("Humidity: " + maxHumidity3 + "%");
          $("#box3").append(day3, t3, pF3);


          // Forecast Day 4
          for (let i = 22; i < 28 && i > 21; i++) {
            forecast4.push(forecastResults.list[i].main.humidity);
            forecastT4.push(forecastResults.list[i].main.temp)
          }
          var maxHumidity4 = forecast4.reduce(function (a, b) {
            return Math.max(a, b);
          });
          var maxTemp4 = forecastT4.reduce(function (a, b) {
            return Math.max(a, b);
          })

          var day4 = $("<h6>").text(date4);
          var t4 = $("<p>").text("Temp: " + ((((maxTemp4 - 273.15) * 1.8) + 32).toFixed(1)) + " °F");
          var pF4 = $("<p>").text("Humidity: " + maxHumidity4 + "%");
          $("#box4").append(day4, t4, pF4);


          // Forecast Day 5 
          for (let i = 29; i < 35 && i > 28; i++) {
            forecast5.push(forecastResults.list[i].main.humidity);
            forecastT5.push(forecastResults.list[i].main.temp)
          }
          var maxHumidity5 = forecast5.reduce(function (a, b) {
            return Math.max(a, b);
          });
          var maxTemp5 = forecastT5.reduce(function (a, b) {
            return Math.max(a, b);
          })

          var day5 = $("<h6>").text(date5);
          var t5 = $("<p>").text("Temp: " + ((((maxTemp5 - 273.15) * 1.8) + 32).toFixed(1)) + " °F");
          var pF5 = $("<p>").text("Humidity: " + maxHumidity5 + "%");
          $("#box5").append(day5, t5, pF5);

        })
      
       
    })

    resetInfo();

});


function resetInfo() {
  $("#city-input").val("");
  $(".forecastBox").empty();
  $(".city-name").empty();
  $(".city-results").empty();

}





