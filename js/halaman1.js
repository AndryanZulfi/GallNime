const navigasi = document.getElementsByClassName("navigasi")[0];
const listBar = document.getElementById("listbar");

const line1 = navigasi.getElementsByClassName("line-1")[0];
const line2 = navigasi.getElementsByClassName("line-2")[0];
const line3 = navigasi.getElementsByClassName("line-3")[0];

navigasi.addEventListener("click", function () {
  // alert("ok");
  // navigasi.classList.toggle("shape");
  line1.classList.toggle("shape-1");
  line2.classList.toggle("shape-2");
  line3.classList.toggle("shape-3");
  listBar.classList.toggle("hidden");
});
