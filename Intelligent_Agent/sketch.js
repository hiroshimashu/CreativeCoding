var NORTH = 0;
var EAST = 1;
var SOUTH = 2;
var WEST = 3;
var direction = SOUTH;

var stepSize = 3;
var minLength = 10;
var diameter = 1;
var angleCount = 7;
var angle;
var reachedBorder = false;

var posX;
var posY;
var posXcross;
var posYcross;

function setup() {
    createCanvas(600, 600);
    colorMode(HSB, 360, 100, 100, 100);
    background(360);

    angle = getRandomAngle(direction);
    posX = floor(random(width));
    posY = 5;
    posXcross = posX;
    posYcross = posY;
}

function draw() {
    let speed = int(map(mouseX, 0, width, 0, 20));
    for(let i = 0; i < speed; i++) {
        strokeWeight(1);
        stroke(180, 0, 0);
        point(posX, posY);

        // make step
        posX += cos(radians(angle)) * stepSize;
        posY += sin(radians(angle)) * stepSize;

        // check if agent is near one of the border
        reachedBorder = false;

        if (posX <= 5) {
            direction = SOUTH;
            reachedBorder = true;
        } else if (posX >= width - 5) {
            direction = WEST;
            reachedBorder = true;
        } else if (posY >= height - 5) {
            direction = NORTH;
            reachedBorder = true;
        } else if (posX <= 5) {
            direction = EAST;
            reachedBorder = true;
        }

        loadPixels();
        var currentPixel = get(floor(posX), floor(posY));
        if(
            reachedBorder ||
            (currentPixel[0] != 255 && currentPixel[1] != 255 && currentPixel[2] != 255)
        ) {
            angle = getRandomAngle(direction);
            var distance = dist(posX, posY, posXcross, posYcross);
            if (distance >= minLength) {
                strokeWeight(3);
                stroke(0, 0, 0);
                line(posX, posY, posXcross, posYcross);
            }

            posXcross = posX;
            posYcross = posY;
        }
    }
}

function getRandomAngle(currentDirection) {
    var a = (floor(random(-angleCount, angleCount)) + 0.5) * 90 / angleCount;
    if (currentDirection == NORTH) return a - 90;
    if (currentDirection == EAST) return a;
    if (currentDirection == SOUTH) return a + 90;
    if (currentDirection == WEST) return a + 180;
    return 0;
}