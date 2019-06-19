<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Animal Buttons</title>
  </head>

  <body>
    <button data-person="The Office Michael Scott">Micheal Scott</button>
    <button data-person="The Office Dwight">Dwight Schrute</button>
    <button data-person="The Office Jim">Jim Halpert</button>
    <button data-person="The Office Pam">Pam Halpert</button>
    <button data-person="The Office Ryan">Ryan Howard</button>
    <button data-person="The Office Kelly">Kelly Kapoor</button>
    <button data-person="The Office Kevin">Kevin Malone</button>
    <button data-person="The Office Oscar">Oscar Nunez</button>
    <button data-person="The Office Angela">Angela Martin</button>
    <button data-person="The Office Stanley">Stanley Hudson</button>
    <button data-person="The Office Andy">Andy Barnard</button>
    <button data-person="The Office Holly">Holly Flax</button>
    <button data-person="The Office Toby">Toby Flenderson</button>
    <button data-person="The Office Darryl">Darryl Philbin</button>
    <button data-person="The Office Erin">Erin Hannon</button>
    <button data-person=" The Office Creed">Creed Bratton</button>

    <div id="gifs-appear-here"></div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript">
      // Adding click event listen listener to all buttons
      $("button").on("click", function() {
        // Grabbing and storing the data-animal property value from the button
        var person = $(this).attr("data-person");

        // Constructing a queryURL using the characters name
        var queryURL =
          "https://api.giphy.com/v1/gifs/search?q=" +
          person +
          "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

        // Performing an AJAX request with the queryURL
        $.ajax({
          url: queryURL,
          method: "GET"
        })
          // After data comes back from the request
          .then(function(response) {
            console.log(queryURL);

            console.log(response);
            // storing the data from the AJAX request in the results variable
            var results = response.data;

            // Looping through each result item
            for (var i = 0; i < results.length; i++) {
              // Creating and storing a div tag
              var personDiv = $("<div>");

              // Creating a paragraph tag with the result item's rating
              var p = $("<p>").text("Rating: " + results[i].rating);

              // Creating and storing an image tag
              var personImage = $("<img>");
              // Setting the src attribute of the image to a property pulled off the result item
              personImage.attr("src", results[i].images.fixed_height.url);

              // Appending the paragraph and image tag to the animalDiv
              personDiv.append(p);
              personDiv.append(personImage);

              // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
              $("#gifs-appear-here").prepend(personDiv);
            }
          });
      });
    </script>

  </body>
</html>

<!-- <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Dunder Mifflin Giphy</title>
  </head>

  <body>
    --Make Buttons For Office Characters--
    <button data-person="Michael">Micheal Scott</button>
    <button data-person="Dwight">Dwight Schrute</button>
    <button data-person="Jim">Jim Halpert</button>
    <button data-person="Pam">Pam Halpert</button>
    <button data-person="Ryan">Ryan Howard</button>
    <button data-person="Kelly">Kelly Kapoor</button>
    <button data-person="Kevin">Kevin Malone</button>
    <button data-person="Oscar">Oscar Nunez</button>
    <button data-person="Angela">Angela Martin</button>
    <button data-person="Stanley">Stanley Hudson</button>
    <button data-person="Phylllis">Phyllis Vance</button>
    <button data-person="Andy">Andy Barnard</button>
    <button data-person="Holly">Holly Flax</button>
    <button data-person="Toby">Toby Flenderson</button>
    <button data-person="Darryl">Darryl Philbin</button>
    <button data-person="Meredith">Meredith Palmer</button>
    <button data-person="Creed">Creed Bratton</button>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript">
      $("button").on("click", function() {
        var x = $(this).data("person");
        var queryURL =
          "http://api.giphy.com/v1/gifs/seach?q=" +
          x +
          " &api_key=YPwHtKDyEnvOHr4XtmaagMBMTr9Bl5YG";
        $.ajax({ url: queryURL, mehod: GET }).done(function(response) {
          for (var i = 0; i < response.data.length; i++) {
            var personDiv = $("<div>");
            var p = $("<p>").text("Rating: " + response.data[i].rating);
            var personImage = $("<img>");
            personImage.attr("src", response.data[i].images.fixed_height.url)
                  ;
            personDiv.append(p);
            personDiv.append(personImage);
            $('#gifsGoHere').append.(personDiv);
          }
        });
      });
    </script>
  </body>
</html>
-->
