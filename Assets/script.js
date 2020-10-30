      var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    function success(pos) {
      var crd = pos.coords;

      var APIKey = "AIzaSyBhD3UUFezfTS4WlRIYhGzEwO_blOC2DYs";
      var restaurants = response.results[2].types[0];
      // var radius = "50"
      // var lnglat = crd;
      var queryURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + restaurants + "&key=" + APIKey + "&location=" + crd;
      console.log(queryURL);
      $.ajax({
        url: "https://limitless-tor-79246.herokuapp.com/cors",
        method: "POST",
        data: {
          url: queryURL,
          method: "",
          key: "DB4868A0E1958DD298798EF1086835163AB3ED38D909D7A97BF3611FF87CD4DB"
        }
      })
        .then(function (response) {
          console.log(response);
          // var data = JSON.stringify(response.base)
          // $("#response").append(data)

        });

      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options)

    // var APIKey = "AIzaSyBhD3UUFezfTS4WlRIYhGzEwO_blOC2DYs";
    // var query = "restaurants";
    // var radius = "1000"
    // var lnglat = "41.881832, -87.623177";
    // var queryURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + query + "&key=" + APIKey + "&location=" + lnglat + "&radius=" + radius;
    // console.log(queryURL);
    // $.ajax({
    //   url: "https://limitless-tor-79246.herokuapp.com/cors",
    //   method: "POST",
    //   data: {
    //     url: queryURL,
    //     method: "",
    //     key: "DB4868A0E1958DD298798EF1086835163AB3ED38D909D7A97BF3611FF87CD4DB"
    //   }
    // })
    //   .then(function (response) {
    //     console.log(response);
    //     // var data = JSON.stringify(response.base)
    //     // $("#response").append(data)

    //   });
