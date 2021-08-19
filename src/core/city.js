import Asset from '../assets/asset';
import Warehouse from './inventory/warehouse';
import Caravan from './caravan';

export default class City extends Asset {

    constructor(name, worldDetails){
        super({});
        this.name = name; 
        this.worldDetails = worldDetails;
        this.caravans = [];
        this.warehouse = new Warehouse();
    }

    setProfiles(profile){
        this.consumptionProfile = profile?.consumptionProfile;
        this.productionProfile = profile?.productionProfile;
    }

    get location(){
        return this.worldDetails.location
    }

    passTime(deltaTime){
        this.consumptionProfile?.passTime(deltaTime);
        this.productionProfile?.passTime(deltaTime);

    }

    get hunger(){
        return this.consumptionProfile?.hunger;
    }

    /**
     * 
     * @param {Caravan} caravan 
     */
    addToTradeFleet(caravan){
        this.caravans.push(caravan);
    }
    
    removeFromTradeFleet(caravan){
        const i = this.caravans.findIndex(x => x.id === caravan.id);
        this.caravans.splice(i, 1);
    }

    draw(ctx){
        this.path = new Path2D();
        //bah who cares
        this.path.arc(this.worldDetails.location.x, this.worldDetails.location.y, 25, 0, Math.PI * 2, false);
        ctx.fillStyle = "purple";
        ctx.fill(this.path);
    }
}


