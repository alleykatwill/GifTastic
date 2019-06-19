//pseudo code//
// create an array of Dunder Mifflin employees that will correlate with buttons//
// the buttons will then populate 10 still gifs upon click//
//only 10 gifs will be visible on the screen at a time//
//the 10 gifs will appear on the screen as a still image//
//when clicked the gifs will animate//

//array named dunder instead of topic

$(document).ready(function() {
  var dunder = [
    "Micheal Scott",
    "Dwight Schrute",
    "Jim Halpert",
    "Pam Halpert",
    "Kelly Kapoor",
    "Angela Martin",
    "Erin Hannon",
    "Andy Barnard",
    "Oscar Martinez",
    "Stanley Hudson",
    "Ryan Howard",
    "Toby Flenderson",
    "Creed Bratton",
    "Kevin Malone",
    "Holly Flax"
  ];

  // function to make buttons and then reset or clear results once another button is clicked

  function makeButtons() {
    $("#buttons").empty();
    for (var i = 0; i < dunder.length; i++) {
      var button = $("<button>");
      button.addClass("dunder");
      button.attr("data-name", dunder[i]);
      button.text(dunder[i]);
      $("#buttons").append(button);
    }
  }
  makeButtons();

  $("#adddunder").on("click", function() {
    var dunder = $("#dunder-input")
      .val()
      .trim();
    dunder.push(dunder);
    $("#gifs").empty();
    makeButtons();
    return false;
  });

  // calls AJAX and connects to GIPHY API-Limits search results to 10 images--shows image rating when cursor is placed over it
  // I had to use the class activites as a guidelines to complete the homework.

  $(document).on("click", "button", function() {
    $("#gifs").empty();
    var dunder = $(this).attr("data-name");
    var queryURL =
      "https://api.giphy.com/v1/gifs/search?q=" +
      dunder +
      "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
    ("&limit=10");

    $.ajax({ url: queryURL, method: "GET" }).done(function(response) {
      var results = response.data;
      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div class=gifs>");
        var dunderGif = $("<img>");

        dunderGif.attr("src", results[i].images.fixed_height_still.url);
        dunderGif.attr("title", "Rating: " + results[i].rating);
        dunderGif.attr("data-still", results[i].images.fixed_height_still.url);
        dunderGif.attr("data-state", "still");
        dunderGif.addClass("gif");
        dunderGif.attr("data-animate", results[i].images.fixed_height.url);
        gifDiv.append(dunderGif);
        $("#gifs").prepend(gifDiv);
        console.log(gifDiv, dunderGif, dunder);
      }
    });
  });

  // Makes images still until clicked

  $(document).on("click", ".gif", function() {
    var state = $(this).attr("data-state");
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });
});
