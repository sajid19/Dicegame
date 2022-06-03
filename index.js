var randomnum1 = Math.floor(Math.random() * 6) + 1;
var randiceimg = "dice" + randomnum1 + ".png";
var imgsrc = "images/" + randiceimg;
var imgelemnt = document.querySelectorAll("img")[0 ];
imgelemnt.setAttribute("src", imgsrc);

var randomnum2 = Math.floor(Math.random() * 6) + 1;
var randiceimg2 = "dice" + randomnum2 + ".png";
var imgsrc2 = "images/" + randiceimg2;
var imagelmnt2 = document.querySelectorAll("img")[1];
imagelmnt2.setAttribute('src', imgsrc2);

if (randomnum1 > randomnum2) {
  document.querySelector("h1").innerHTML = "Player 1 wins";

}
else if (randomnum2 > randomnum1){
  document.querySelector("h1").innerHTML = "Player 2 wins";
}
else {
  document.querySelector("h1").innerHTML = "Draw";
}
