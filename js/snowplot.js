var canvas = document.getElementsByClassName("drawing-board")[0];

canvas.width = 600;
canvas.height = 300;

// Grab the context of the canvas so that we can draw.
var ctx = canvas.getContext("2d");

// Change the background color of the canvas.

function setCanvasColor(c) {
    ctx.fillStyle = c;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function getMonthAbbrev(text) {
    abbrev = text[0].toUpperCase();
    abbrev += text.slice(1,3);
    return abbrev;
}

function drawLabels(x, y, barWidth, height, text) {
    ctx.fillStyle = "#474444";
    ctx.font = "20px Helvetica";
    month = getMonthAbbrev(text);
    ctx.fillText(month, x+30, canvas.height -8);
}

function drawBar(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x,canvas.height - y - height ,width,height);
}


function drawBarGraph(x, y, barWidth, color) {

    for (i = 0; i < weatherData.length; i++) {
        console.log(weatherData[i].snowfall);
        drawBar(x + 110*i, y, barWidth, 10*weatherData[i].snowfall, color);
        drawLabels(x+110*i, y, barWidth, 10*weatherData[i].snowfall, weatherData[i].date);
        ctx.fillText(weatherData[i].snowfall, x + 110*i+30, canvas.height - 10*weatherData[i].snowfall-35);
    }

    }


function draw() {
    setCanvasColor("lime");
    drawBarGraph(25,25, 100, "#81a4d4");
    //drawBar(0,0,canvas.width,canvas.width,"black");
}

draw();

console.log(weatherData.length);



