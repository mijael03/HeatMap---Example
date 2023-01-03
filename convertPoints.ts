function processCSV(myCSV) {
    var data = myCSV.split("\n"); // Converts the CSV into an array split on new line.
  
    /* This will remove the "category,latitude,longitude" text from the 
     coordinates if it is the top of the CSV file. If it is not at the 
    top then you can leave this out. */
    var dataShift = data.shift();
  
    var setData: Array<google.maps.LatLng> = data.map(function (val) {
      // maps over the array.
      var latLng = val.split(","); // splits each value into lat and lng.
      return new google.maps.LatLng(latLng[1], latLng[2]); //sets the coordinate object.
    });
    return setData; // returns the data.
  }