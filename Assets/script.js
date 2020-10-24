
// var APIKey = "LhZIQJpQlMA7ZaFACizYRcGvrarAHYuqwiABNw-" +
//     "_45EaMV5KKeQlHpZNjyt8tSBZBcH4uJjhPwIztopHhIH-Kf5MsszDEobMtFMvhTA3zhXZp44bf7PljOR-3HaPX3Yx";

// var queryURL = "https://api.yelp.com/v3/businesses/search" + APIKey;

// $.ajax({
//     url: queryURL,
//     method: "GET"
// })
//     .then(function (response) {

//         console.log(queryURL);

//         console.log(response);
//     });


var map;

function initMap(response) {
    console.log(response);
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}



// drop down for price

  $(document).ready(function(){
    $('select').formSelect();
  });