function preload() {
    img = loadImage(
        "https://th.bing.com/th/id/OIP.KzOFPzLnbMPTb4zlzxi8PgHaHa?w=184&h=184&c=7&r=0&o=5&pid=1.7"
    );
}

function setup() {
    createCanvas(400, 400);
}


function draw() {
    image(img, 50, 20, 160, 170);
    fill(50, 203, 130);
    stroke(123, 34, 12342);
    square(300, 103, 13);
}