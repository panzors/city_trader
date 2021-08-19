const GAMETICK = 10;
let clock = null;
let GAMESTARTED = false;
let timeDialationFactor = 1; // change this to add increase game speed
let active = false;
let lastTickMs = 0;
let worldTickFunction = null;

function tick() {
  if (!active) {
    setTimeout(tick, GAMETICK);
  } else {
    const now = performance.now();
    const diff = now - lastTickMs; // real time
    const delta = (diff * timeDialationFactor);
    clock += delta;
    worldTickFunction(delta)
    // queue next tick
    lastTickMs = now;
    setTimeout(tick, GAMETICK);
  }
}

export function getTimeDialationFactor() {
    return timeDialationFactor;
}

export function getClock(){
    return clock;
}

export function init(func){
    // call me once only
    if (GAMESTARTED){
        throw Error ("hey yo, this game has already started what's going on");
    }

    GAMESTARTED = true;
    clock = 0;
    worldTickFunction = func; // this can cause significant lag
    lastTickMs = performance.now();
    setTimeout(tick, GAMETICK);
}

export function start() {
  active = true;
}

export function pause() {
  active = false;
}
