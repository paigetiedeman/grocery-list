
$(document).ready(function () {
  $("#groceryList").submit(function (event) {
    const groceries = $("#items").val().split(" ");
    groceries.forEach(function (grocery) {
      $("#list").append($("<li>").text(grocery));

      event.preventDefault();
    });
  });
});
