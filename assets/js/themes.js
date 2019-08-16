window.onload = function() {
//   body = document.getElementsByTagName("body")[0];
//   themeNo = Number(localStorage.getItem("theme"));
//   if (themeNo) {
//     if (themeNo > 7) {
//       themeNo = 0;
//     }
//     localStorage.setItem("theme", themeNo + 1);
//     body.className = "theme_" + themeNo;
//   } else {
//     localStorage.setItem("theme", 1);
//   }
//   console.log("added" + body.className);
};
body = document.getElementsByTagName("body")[0];
themeNo = Number(localStorage.getItem("theme"));
if (themeNo) {
  if (themeNo > 6) {
    themeNo = 0;
  }
  localStorage.setItem("theme", themeNo + 1);
  body.className = "theme_" + themeNo;
} else {
  localStorage.setItem("theme", 1);
}
console.log("added" + body.className);
