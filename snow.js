const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const numFlakes = 150;
const flakes = [];

for (let i = 0; i < numFlakes; i++) {
    flakes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 3 + 1,
        speed: Math.random() * 1 + 0.5
    });
}

function draw() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'white';
    ctx.beginPath();
    for (let i = 0; i < flakes.length; i++) {
        const f = flakes[i];
        ctx.moveTo(f.x, f.y);
        ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2, true);
    }
    ctx.fill();
    move();
}

function move() {
    for (let i = 0; i < flakes.length; i++) {
        const f = flakes[i];
        f.y += f.speed;
        if (f.y > height) {
            f.y = 0;
            f.x = Math.random() * width;
        }
    }
}

function update() {
    draw();
    requestAnimationFrame(update);
}

window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});

update();
