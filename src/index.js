import * as Mouse from "./ui/mouse-mutex.js";
import * as WorldClock from './world-clock';
import {init} from './bootloader';
import * as Director from "./assets/director";
import * as Agency from './core/agency';

const canvas = document.getElementById("root");
var ctx = canvas.getContext("2d");

init();

canvas.addEventListener("mousemove", function (event) {
  Director.onMouseMove(ctx, event);
  Mouse.mouseMove(event);
});

canvas.addEventListener("mousedown", function (event) {
  Director.onMouseDown(ctx, event);
  Mouse.mouseDown(event);
});

canvas.addEventListener("mouseup", function (event) {
  Director.onMouseUp(ctx, event);
  Mouse.mouseUp(event);
});

canvas.addEventListener("mouseout", function (event) {
  //default action to catch edge exiting.
  //TODO: should really be snap/cancel
  Mouse.mouseUp(event);
});

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    Director.drawScene(ctx);
}

//render the current scene
function gameDrawLoop(){
    draw();
    window.requestAnimationFrame(gameDrawLoop);
}

function gameLogicalLoop(delta){
  Director.passTime(delta);
  Agency.passTime(delta);
}

WorldClock.init(gameLogicalLoop);
WorldClock.start();
window.requestAnimationFrame(gameDrawLoop);

// setTimeout(() => {

// }, (3000));