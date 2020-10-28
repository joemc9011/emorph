var APIKey = "AIzaSyBhD3UUFezfTS4WlRIYhGzEwO_blOC2DYs";
var query = "restaurants";
var radius = "1000"
var lnglat = "36.7783, 119.4179";
  

 var queryURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query="+ query +"&key=" + APIKey +"&location=" +lnglat +"&radius=" +radius;
console.log(queryURL);

$.ajax({ 
  url: "https://limitless-tor-79246.herokuapp.com/cors",
  method: "POST",
  data: {
    url: "",
    method: "",
    key: "DB4868A0E1958DD298798EF1086835163AB3ED38D909D7A97BF3611FF87CD4DB"
  
  },
   error: function (req, status, error) {
    console.log(error);
  }
});





$.ajax({
  url: queryURL,
  method: "GET",
  dataType : "json",
    contentType: "application/json; charset=utf-8",
  headers: {
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Headers': 'application/json',

},
  success: function (response) {
    console.log(response);
  },
    error: function(req, status, error) {
      console.log(status);
      console.log(req);
      console.log(error);
    }
  });

   
     


// var map;

// // function initMap(response) {
//     console.log(response);
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }