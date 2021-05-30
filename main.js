function preload() {
}

function setup() {
canvas = creatCanvas(640, 480);
canvas.postition(110, 250)
vidoe = creatCapture(VIDOE);
vidoe.hide();

tint_color = "";
}

function draw() {
    image(video 0, 0, 640, 480,);
    tint(tint_color);
}

function take_snapshot() {
    save('student_name.pgn');
}

function filter_tint()
{

    tint_color = document.getElementById("color_name").value;
}