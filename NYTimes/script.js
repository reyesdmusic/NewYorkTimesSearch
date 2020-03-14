$(document).ready(function() {

var search = $("#search");
var records = $("#records");
var startYear = $("#startYear");
var endYear = $("#endYear");




  $("#buttonSearch").on("click", function() {
  }


  $("#buttonClear").on("click", function() {
  }

  


    //
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats";


  var query = "coronavirus";
  var apiKey = "dBq9oIoxZlVDH6y81HDxiwPbGxLA70Am"
  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query + "&api-key=" + apiKey
  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    console.log(response.response.docs[0].headline.main);
    console.log(response.response.docs[0].abstract);
    console.log(response.response.docs[0].pub_date);
    console.log(response.response.docs[0].web_url);
  });