var NORTH = 0;
var NORTHEAST = 1;
var EAST = 2;
var SOUTHEAST = 3;
var SOUTH = 4;
var SOUTHWEST = 5;
var WEST = 6;
var NORTHWEST = 7;
var direction;
var stepSize = 1;
var diameter = 1;

var posX;
var posY;


function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    noStroke();
    fill(0, 40);

    posX = width / 2;
    posY = height / 2;
}

function draw() {
    for (var i = 0; i <= mouseX; i++) {
        direction = int(random(0, 8));
        if (direction == NORTH) {
            posY -= stepSize;
        } else if (direction == NORTHEAST) {
            posX += stepSize;
            posY -= stepSize;
        } else if (direction == EAST) {
            posX += stepSize;
        } else if (direction == SOUTHEAST) {
            posX += stepSize;
            posY += stepSize;
        } else if (direction == SOUTH) {
            posY += stepSize;
        } else if (direction == SOUTHWEST) {
            posX -= stepSize;
            posY += stepSize;
        } else if (direction == WEST) {
            posX -= stepSize;
        } else if (direction == NORTHWEST) {
            posX -= stepSize;
            posY -= stepSize;
        }

        if (posX > width) posX = 0;
        if (posX < 0) posX = width;
        if (posY < 0) posY = height;
        if (posY > height) posY = 0;

        ellipse(posX + stepSize / 2, posY + stepSize / 2, diameter, diameter);

    }
}