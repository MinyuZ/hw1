<!DOCTYPE html>
<html>
<head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.1/p5.min.js"></script>
<style>
  html, body {
    margin: 0;
    padding: 0;
  }
</style>
<meta charset="utf-8" />
</head>
<body>
<script>

var bubbles = [];

function setup() {
    createCanvas(800, 600);

    for (var i = 0; i < 50; i++) {
        var bubble = {
            x: random(width),
            y: random(height),
            radius: random(20, 50)
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
            fill(40, 40, 255, 200);
        } else {
            fill(80, 255, 255, 200);
        }

        ellipse(bubble.x, bubble.y, bubble.radius*2);
        bubble.x += random(-50, +50);
        bubble.y += random(-1, 1);
    }
}

</script>
</body>
</html>
