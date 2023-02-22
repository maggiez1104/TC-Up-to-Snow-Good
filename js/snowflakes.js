var snowflakes = [];

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createSnowflake() {
    let el = document.createElement('div');
    el.style.borderRadius = '100%';
    el.style.border = getRandomNumber(1, 4) + 'px solid white';
    el.style.position = 'fixed';
    el.style.top = getRandomNumber(0, window.innerHeight) + 'px';
    el.style.left = getRandomNumber(0, window.innerWidth) + 'px';
    return el;
}

function resetSnowflake(el) {
    el.style.top = 0 + 'px';
    el.style.left = getRandomNumber(0, window.innerWidth) + 'px';
}


  function moveSnowflake(el) {
    // Set a variable so we can increment the current position of the snowflake.
    let top = parseInt(el.style.top, 10) + 1;
  
    // Bigger/closer snowflakes will fall faster.
    let radius = parseInt(el.style.border, 10);
    top += radius/2;
  
    // If we reach the bottom, reset the snowflake to the top of the page.
    // Otherwise, move it down.
    if (top > window.innerHeight) {
      resetSnowflake(el);
    } else {
      el.style.top = top + 'px';
    }
}

function moveSnowflakes() {
    for (i = 0; i < snowflakes.length; i++) {
        moveSnowflake(snowflakes[i]);
    }
}

function drawSnowflakes() {
    // Ask the user for how many snowflakes they would like.
    var number = prompt('How many snowflakes?');
  
    // Create as many snowflakes as prompted.
    for (let i=0; i<number; i++) {
      snowflakes[i] = createSnowflake();
      document.body.appendChild(snowflakes[i]);
    }
  
    // Tell snowflakes to move at a specified interval.
    let snowflakeInterval = setInterval(moveSnowflakes, 33);
  }
  
  drawSnowflakes();