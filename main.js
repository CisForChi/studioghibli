"use strict";

let studioG = {};






$.ajax({

    url : 'https://ghibliapi.herokuapp.com/films/',
    type : 'GET',
    
    dataType:'json',
    }).then(function(data) {
    	$("#generate").click(function(){
 console.log(data,'It worked!');
  const movieName =  data[1].title;
  const movieDescription = data[1].description;
  const releaseDate = data[1].release_date
  console.log(movieDescription);

  $('div.movies').text(movieName);
  $('div.description').text(movieDescription);
  $('div.date').text(releaseDate);
 
});
  


});



	





	
	


