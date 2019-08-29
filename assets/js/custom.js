var i, j;
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var card = document.getElementsByClassName("post-content");
for (i = 0; i < card.length; ++i) {
  var t = card[i].getElementsByTagName("img");
  for (j = 0; j < t.length; ++j) {
    if (t[j].className != "meta__avatar") {
      t[j].style.cursor = "pointer";
      t[j].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        modalImg.setAttribute("onclick", "window.open('" + this.src + "');");
        modalImg.style.cursor = "pointer";
      };
    }
  }
}

var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

modal.onclick = function() {
  modal.style.display = "none";
};
