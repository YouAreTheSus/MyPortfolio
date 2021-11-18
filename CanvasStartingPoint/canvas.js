window.onload = function() {
  let canvas = document.getElementById("myCanvas");
  let ctx = canvas.getContext("2d");
  //grab image element from html
  let image = document.querySelector("#profile");
  //draw image on canvas
  ctx.drawImage(image,0,0);
};

//Put global variables here
let drawing = false;
function onMouseDown(e){
  //grab the canvas element from HTML
  let canvas = document.getElementById("myCanvas");
  //create the drawing context from the canvas
  let ctx = canvas.getContext("2d");
  //get a color from an input element's value
  let color = document.getElementById("color").value;
  //set the color of your drawing to your context
  ctx.strokeStyle = color;
  //if you want to keep colors separate between stroke
  //   you'll need to reset the stroke path
  ctx.beginPath();
  //00move the pen to where the mouse is (llok at updateCoords for help)
  ctx.moveTo(e.offsetX, e.offsetY);
  //keep track that we have started drawing
  drawing = true;
  //update coordinates to page to show mouse events are working
  updateCoords(e);
}

function onMouseMove(e){
  //OnMouseMove happens everytime the mouse moves whether or
  //    not the mouse is clicked
  //We need to decide if we are drawing
if (drawing) {

    //grab canvas
    let canvas = document.getElementById("myCanvas");
    //grab context
    let ctx = canvas.getContext("2d");
    //move the context on a line
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.moveTo(e.offsetX, e.offsetY);
    //stroke out the line movement
    ctx.stroke();
}
  //update coordinates to page to show mouse events are working
  updateCoords(e);
}

function onMouseUp(e){
  //keep track that we have STOPPED drawing
  drawing = false;
  //update coordinates to page to show mouse events are working
  updateCoords(e);
}

//Function to update coordinates to webpage
function updateCoords(e){
  //let's define the x and y coordinates from the event object
  let x = e.offsetX;
  let y = e.offsetY;
  //fetch the output paragraph
  let coords = document.getElementById("coords");
  //update the contents of the coords paragraph.
  coords.innerHTML = " x: "+x+" y: "+y;
}
