import * as Director from '../assets/director';
import { getCity } from './city-registry';
import Journey from './journey';

const CARAVAN_MOVE_SPEED = 22; //PICK A NUMBER RANDOMLY?
const DEFAULT_CARAVAN_MAX_SIZE = 20;

export default class Caravan{
    #load = 0;
    #actions = null;
    #options;

    constructor(options){
        this.route = {};
        this.#options = options || { maxCaravanSize: DEFAULT_CARAVAN_MAX_SIZE};
    }

    set cargo(load){
        // TODO: implement actual value and economy systems later
        if (load > this.#options.maxCaravanSize){
            throw Error("can't load this much");
        }

        this.#load = load;
    }
    get maxCaravanLoad(){
        return this.#options.maxCaravanSize;
    }

    get cargo(){
        return this.#load;
    }

    set homeCity(name){
        this.route.homeCity = getCity(name);
    }

    set destination(name){
        this.route.destination = getCity(name);
    }

    set journeyLegs(actions){
        this.#actions = actions;
    }

    startJourney(onFinishedCallback){
        if (!onFinishedCallback){
            throw Error('hey yo, please have a callback else you wont know its done');
        }

        if (!this.#actions?.length){
            throw Error("no actions set, that's a little odd");
        }

        this.onFinishedCallback = onFinishedCallback;

        if (!this.route.homeCity || !this.route.destination){
            console.error(`broken journey - home city: ${this.route.homeCity} | destination city: ${this.route.desiredQuantity}`);
        }

        //once a journey has begun, it's activated creates an entity on the map
        //which starts working
        this.journey = new Journey(this.#actions,
            this.route.homeCity, 
            this.route.destination, 
            (j) => this.finishJourney(j));

        //TODO: figure out if i like this or not
        Director.addToCurrentScene(this.journey);
    }

    finishJourney(journey){
        console.log('finished a joruney')
        //this is not guarenteed to be on this current scene so should be interesting
        // TODO fix me and remove me from global?
        Director.removeFromCurrentScene(this.journey);
        this.journey = null;
        
        // TODO: build in failure conditions later
        // assume this journey is successful
        this.onFinishedCallback(this, true);
        
    }
}