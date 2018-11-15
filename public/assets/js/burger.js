$(function() {
  // eat burger
  $(".eat-burger").on("click", function(event) {
    var id = $(this).data("id");

    var newEatenState = {
      eaten: true
    };

    // put request

    $.ajax("api/burgers/" + id, {
      type: "PUT",
      data: newEatenState
    }).then(function() {
      location.reload();
    })
  })

  // new burger

  $(".create-form").on("submit", function(event) {

    // prevent default

    event.preventDefault();

    var newBurger = {
      name: $("#burger-submit").val().trim(),
      eaten: false
    };

    // post request

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      location.reload();
    })
  })

  // delete burger
  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(function() {
      location.reload();
    })
  })
})