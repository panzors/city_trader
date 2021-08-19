
const cityRegistry = {};
// world Directory
export function getCityLocation(name){
    return cityRegistry[name].location;
}

export function registerCity(city){
    cityRegistry[city.name] = city;
}

export function getCity(name){
    return cityRegistry[name];
}