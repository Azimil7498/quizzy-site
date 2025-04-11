function goToNextPage() {
  var checkBox = document.getElementById("agree");

  if (checkBox.checked) {
    window.location.href = "nextpage.html";
  } else {
    window.location.href = "visit.html";
  }
}