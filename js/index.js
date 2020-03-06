let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');
let width = window.screen.height;
let height = window.screen.width;

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let lastTime = 0;

function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, width, height);

    game.update(deltaTime);
    game.draw(ctx);

    requestAnimationFrame(gameLoop);
}


requestAnimationFrame(gameLoop);