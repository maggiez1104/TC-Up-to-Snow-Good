var canvas = document.getElementsByClassName("drawing-board")[0];

canvas.width = 600;
canvas.height = 300;

// Grab the context of the canvas so that we can draw.
var ctx = canvas.getContext("2d");

// Change the background color of the canvas.
ctx.fillStyle = "snow";
ctx.fillRect(0, 0, canvas.width, canvas.height);