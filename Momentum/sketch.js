function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    colorMode(HSB, 360, 100, 100, 100);
    noFill();
    strokeWeight(1);

    center = createVector(width / 2, height /2)
    startDrawing()
}

function startDrawing() {
    pendulumPath = [];
    // new empty array for each joint
    for (var i = 0; i < joints; i++) {
        pendulumPath.push([]);
    }

    angle = 0;
    speed = (8 / pow(1.75, joints - 1) / pow(2, speedRelation - 1));
}


function draw() {
    background(0, 0, 100);
    angle += speed;
}

