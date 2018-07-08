let img;
let colors = [];
let sortMode = null;
let rectSize;

function preload() {
    img = loadImage('./hanabi.jpg');
}

function setup() {
    createCanvas(600, 600);
    noCursor();
    noStroke();
}

function draw() {
    let tileCount = floor(width / max(mouseX, 5));
    rectSize = width / tileCount;

    img.loadPixels();
    colors = [];

    for(let gridY = 0; gridY < tileCount; gridY++) {
        for(let gridX = 0; gridX < tileCount; gridX++) {
            let px = int(gridX * rectSize);
            let py = int(gridY * rectSize);
            let i = (py * img.width + px) * 4;
            let c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2]);
            colors.push(c);
        } 
    }

    gd.sortColors(colors, sortMode);

    let i = 0;
    for (var gridY = 0; gridY < tileCount; gridY++) {
        for (var gridX = 0; gridX < tileCount; gridX++) {
          fill(colors[i]);
          rect(gridX * rectSize, gridY * rectSize, rectSize);
          i++
        }
    }
}

function keyReleased() { 
    if (key == '5') sortMode = null;
    if (key == '6') sortMode = gd.HUE;
    if (key == '7') sortMode = gd.SATURATION;
    if (key == '8') sortMode = gd.BRIGHTNESS;
    if (key == '9') sortMode = gd.GRAYSCALE;
}