const formResolution = 15;
const stepSize = 2;
const distortionFactor = 1;
const intiRadius = 150;
let centerX;
let centerY;
let x = [];
let y = [];

let filler = false;
let freeze = false;

function setup() {
    createCanvas(windowWidth, windowHeight);
    centerX = width / 2;
    centerY = height / 2;
    let angle = radians(360 / formResolution);
    for ( let i = 0; i < formResolution; i++) {
        x.push(cos(angle * i) * initRadius);
        y.push(sin(angle * i) * intiRadius);
    }
    stroke(0, 50);
    strokeWeight(0.75);
    background(255);
}

function draw() {

}