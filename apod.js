$(document).ready(function () {
  $("#view_button").click(getPicture);
});
function getPicture() {
  //   $.ajax({
  //     url: "https://api.nasa.gov/planetary/apod",
  //     type: "GET",
  //     data: { api_key: "DEMO_KEY", date: $("#date").val() },
  //     dataType: "json",
  //     success: showPicture,
  //     error: noPicture,
  //   });

  fetch(
    `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${$(
      "#date"
    ).val()}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then(showPicture)
    .catch(noPicture);
}
function showPicture(data) {
  $("#pic").attr("src", data.url);
  $("#title").text(data.title);
}
function noPicture(error) {
  alert(error.responseText);
}
