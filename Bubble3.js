<!DOCTYPE html>
<html>
<head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.1/p5.min.js"></script>
<style>
  html, body {
    margin: 10;
    padding: 10;
  }
</style>
<meta charset="utf-8" />
</head>
<body>
<script>

var bubbles = [];

function setup() {
    createCanvas(600, 600);

    for (var i = 0; i < 80; i++) {
        var bubble = {
            x: random(width),
            y: random(height),
            radius: random(30, 30)
        };
        bubbles.push(bubble);
    }
}

function draw() {
    background(255, 150, 150,150);

    for (var i = 0; i < bubbles.length; i++) {
        var bubble = bubbles[i];

        if (dist(mouseX, mouseY, bubble.x, bubble.y) < bubble.radius) {
            if (mouseIsPressed) {
                bubbles.splice(i, 1); // remove this bubble!
            }
            fill(40, 255, 40, 40);
        } else {
            fill(80, 255, 80, 80);
        }

        ellipse(bubble.x, bubble.y, bubble.radius*1);
        bubble.x += random(-1, 1);
        bubble.y += random(-10, 4);
    }
}

</script>
</body>
</html>
