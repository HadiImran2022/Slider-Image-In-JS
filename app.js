var b = 0;
function slider(num) {
  a = document.getElementsByClassName("slider");
  if (num > a.length) {
    b = 0;
    num = 0;
  }
  for (let y of a) y.style.display = "none";
  a[num].style.display = "block";
}
slider(b);

function abc(x) {
  b = b + x;
  slider(b);
}
