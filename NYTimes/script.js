$(document).ready(function() {

var  search = $("#search");
var records = $("#records");
var startYear = $("#startYear");
var endYear = $("#endYear");




  $("#buttonSearch").on("click", function() {
  }


  $("#buttonClear").on("click", function() {
  }

  


    //
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats";

    //
    $.ajax({
      url: queryURL,
      method: "GET"
    })

    
      

      .then(function(response) {
          handleResponse(response);
        });
        

            
  
  })