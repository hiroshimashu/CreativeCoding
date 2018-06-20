let s;
let scl = 20;
let food;

function setup() {
    createCanvas(600, 600);
    s = new Snake();
    frameRate(10);
    food = creatVector(random(width), random(height));
}

function pickLocation() {
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    food = createVecotr(floor(random(cols), floow(random(raws))));
    food.mult(scl);
}

function draw() {
    background(51);
    s.update();
    s.show();

    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);
}

function keyPressed() {
    if(keyCode === UP_ARROW) {
        s.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        s.dir(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
        s.dir(1, 0);
    } else {
        s.dir(-1, 0);
    }
}
