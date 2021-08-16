
$(document).ready(function () {
  $("#groceryList").submit(function (event) {
    const list = $("#items").val();
    const groceries = [];
    groceries.push(list);
    groceries.forEach(function (grocery) {
      $("#list").append($("<li>").text(grocery));

      event.preventDefault();
    });
  });
});
