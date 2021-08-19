const { default: Vector } = require("../helpers/vector");

let lastDownMs = null;
const CLICKTHRESHOLDMS = 100;

let mouseDownLocation = null;
let currentMouseLocation = null;

function calculateCurrentVector(event){
    if (mouseDownLocation != null){
        const current = getLocation(event);
        return new Vector(current.x - currentMouseLocation.x, current.y - currentMouseLocation.y);
    }
}

function calculateCurrentVectorSinceMouseDown(event){
    if (mouseDownLocation != null){
        const current = getLocation(event);
        return new Vector(current.x - mouseDownLocation.x, 
            current.y - mouseDownLocation.y);
    }
}

function mouseDown(event){
    mouseDownLocation = getLocation(event);
    lastDownMs = performance.now();
    // console.log('mouse down ' + JSON.stringify(mouseDownLocation));
    
}

function mouseUp(event){
    const withinClickThreshold = performance.now() - lastDownMs < CLICKTHRESHOLDMS;
    lastDownMs = null;

    // const mouseUpLocation = getLocation(event);
    // console.log('mouse up ' + JSON.stringify(mouseUpLocation));

    mouseDownLocation = null;
    return { 
        withinClickThreshold
    };
}

function mouseMove(event){
    currentMouseLocation = getLocation(event);
}

function isItStillDown(){
    return lastDownMs != null;
}

function getLocation(event){
    return { x: event.offsetX, y: event.offsetY };
}

module.exports = {
    mouseDown,
    mouseUp,
    mouseMove,
    isItStillDown,
    calculateCurrentVector,
    calculateCurrentVectorSinceMouseDown
}