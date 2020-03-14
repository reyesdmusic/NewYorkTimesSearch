

  var query = "coronavirus";
  var apiKey = "dBq9oIoxZlVDH6y81HDxiwPbGxLA70Am"
  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query + "&api-key=" + apiKey;

  var headline;
  var abstract;
  var pubDate;
  var url;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    console.log(response.response.docs[0].headline.main);
    console.log(response.response.docs[0].abstract);
    console.log(response.response.docs[0].pub_date);
    console.log(response.response.docs[0].web_url);

    headline = response.response.docs[0].headline.main;
    abstract = response.response.docs[0].abstract;
    pubDate = response.response.docs[0].pub_date;
    url = response.response.docs[0].web_url;
  });

