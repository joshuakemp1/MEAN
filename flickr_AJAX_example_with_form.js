$(document).ready(function() {


// $('button').click(function () {
//    // highlight the button
//    // not AJAX, just cool looking
//    $("button").removeClass("selected");
//    $(this).addClass("selected");

  // form part
  $('form').submit( function (evt) {
    evt.preventDefault();
    var searchTerm = $('search').val();
  });
    // the AJAX part
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var animal = $(this).text();
    var flickrOptions = {
      tags: animal,
      format: "json"
    };
    function displayPhotos(data) {
      var photoHTML = '<ul>';
      $.each(data.items,function(i,photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
    }
    $.getJSON(flickerAPI, searchTerm, displayPhotos);

  }); // end click
 // end ready






// This version uses a form that takes any search term
$(document).ready(function() {


// $('button').click(function () {
//    // highlight the button
//    // not AJAX, just cool looking
//    $("button").removeClass("selected");
//    $(this).addClass("selected");

  // form part
  $('form').submit( function (evt) {
    evt.preventDefault();
    var searchTerm = $('#search');
    // the AJAX part
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var animal = searchTerm.val();
    var flickrOptions = {
      tags: animal,
      format: "json"
    };
    function displayPhotos(data) {
      var photoHTML = '<ul>';
      $.each(data.items,function(i,photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);

  }); // end click

}); // end ready
