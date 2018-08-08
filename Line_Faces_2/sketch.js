function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    noFill();
    noCursor();
    background(255);
    strokeWeight(2);
    stroke(0, 25);
}

function draw() {
    if(mouseIsPressed && mouseButton == LEFT) {
        push();
        translate(width /2, height /2);
        let circleResolution = int(map(mouseY + 100, 0, height, 2, 10));
        let radius = mouseX - width / 2 + 0.5;
        let angle = TAU / circleResolution;

        beginShape();
        for(let i = 0; i <= circleResolution; i++) {
            let x = cos(angle * i) * radius;
            let y = sin(angle * i) * radius;
            vertex(x, y);
        }
        endShape();
        pop();
    }
}