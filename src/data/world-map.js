import City from "../core/city";
import Point from "../helpers/point";
import ConsumerProfile from '../core/consumer-profile';
import ProducerProfile from "../core/production-profile";

export const CITIES = {
    foo: new City("foo", { location: new Point(20, 20) }),
    bar: new City("bar", { location: new Point(400, 300) })
}

const barProductionProfile = new ProducerProfile(CITIES.bar.warehouse);
CITIES.bar.setProfiles({productionProfile: barProductionProfile})


const fooConsumptionProfile = new ConsumerProfile();
CITIES.foo.setProfiles({consumptionProfile: fooConsumptionProfile});
