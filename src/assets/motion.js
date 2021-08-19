import getTimeDialationFactor from '../world-clock';

function calculateFactor(timeDeltaMs){
    const factor = getTimeDialationFactor();
    return factor * timeDeltaMs / 1000;
}

export function calculateVector(scalar, timeDeltaMs){
    const factor = calculateFactor(timeDeltaMs);
    return { // build an actual vector class plz
        xDelta: scalar.xDir * factor,
        yDelta: scalar.yDir * factor
    };

}
