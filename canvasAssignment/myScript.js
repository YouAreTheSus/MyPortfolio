// hello this is markiplier and welcome to five nights at freddies
// IS THAT THE BITE OF '87?
// AAAAAAAAAAAAAAAAAAAAAAAAAAA
// AMONG US AMONG US AMONG US (fart) (vine boom)
// bottom text
let image = document.querySelector("img")
let canvas = document.querySelector("#theCanvas");
let brush = canvas.getContext("2d");
brush.fillStyle = "#FF0000";
brush.fillRect(0,0,150,75);
brush.moveTo(0,85);
brush.lineTo(260,85);
brush.stroke();
brush.font = "40px Comic Sans MS";
brush.fillStyle = "#000000";
brush.fillText("hello universe", 0, 120);
brush.font = "40px Comic Sans MS";
brush.strokeStyle = "#00ff55";
brush.strokeText("hello me", 0, 170);
brush.drawImage(image, 0, 185);
