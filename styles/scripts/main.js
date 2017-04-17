"use strict";

var studioG = {};

studioG.init = function () {
  var begin = $('#beginButton');
  begin.onClick('click', function () {
    console.log(begin, "hey");
    studioG.firstAjax();
  });
};

studioG.firstAjax = function () {
  $.ajax({
    url: 'https://ghibliapi.herokuapp.com/films/',
    method: 'GET',

    dataType: 'json'
  }).then(function (data) {
    console.log(data, 'It worked!');
    var movieName = data[2].title;
    var movieDescription = data[2].description;
    var releaseDate = data[2].release_date;
    console.log(movieDescription);

    $('div.movies').text(movieName);
    $('div.description').text(movieDescription);
    $('div.date').text(releaseDate);
  });
};