import {Agent} from './agent';

const knownAgents = [];

/**
 * 
 * @param {Agent} agent 
 */
export function addAgent(agent){
    knownAgents.push(agent);
}

export function passTime(deltaTime){
    //should only be called from the main loop
    knownAgents.forEach(x => x.passTime(deltaTime));
}