const titleCount = 20;
let actRandomSeed = 0;

const circleAlpha = 130;
let circleColor;

function setup() {
    createCanvas(600, 600);
    noFill();
    circleColor = color(0, 0, 0, circleAlpha);
}

function draw() {
    translate(width / titleCount / 2, height / titleCount / 2);
    background(255);
    randomSeed(actRandomSeed);
    stroke(circleColor);
    strokeWeight(mouseY / 60);
    for( let gridY = 0; gridY < titleCount; gridY++) {
        for( let gridX = 0; gridX < titleCount; gridX++) {
            let posX = width / titleCount * gridX;
            let posY = height / titleCount * gridY;

            let shiftX = random(-mouseX, mouseX) / 20;
            let shiftY = random(-mouseX, mouseX) / 20;

            ellipse(posX + shiftX, posY + shiftY, mouseX / 15, mouseY / 15);

        }
    }
}

function mousePressed() {
    actRandomSeed = random(100000);
}