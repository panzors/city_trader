//loads relevant data and sets the scene
import { Circle as UICircle } from "./assets/circle";
import Point from "./helpers/point";
import * as Director from "./assets/director";
import * as CityRegistry from "./core/city-registry";
import { CITIES } from "./data/world-map";
import {ACTORS} from './data/actors';
import * as Agency from './core/agency';

//this is the bootloader function
export function init() {
  Director.setCurrentScene("default");
  
  testData();
  
  loadCities();
  loadAgents();
  
}

function loadCities() {
  for (const [_, value] of Object.entries(CITIES)) {
    CityRegistry.registerCity(value);
    Director.addToCurrentScene(value);
  }
}

function loadAgents() {
  for (const [_, value] of Object.entries(ACTORS)) {
    Agency.addAgent(value);
  }
}

function testData() {
  const circle1Pattern = new UICircle({
    radius: 10,
    startAngle: 0,
    endAngle: 2 * Math.PI,
    location: new Point(70, 80),
    modifier: function (ctx, obj) {
      if (obj.isMouseOver) {
        ctx.fillStyle = "green";
      } else {
        ctx.fillStyle = "red";
      }
    },
    isDraggable: true,
    isSnapOnDragEnd: true,
    zIndex: 3,
  });

  Director.addToCurrentScene(circle1Pattern);

  let blinky = 0;
  let blinkState = "black";
  const uiCircle2 = new UICircle({
    location: new Point(75, 85),
    radius: 10,
    startAngle: 0,
    endAngle: Math.PI * 2,
    modifier: (ctx, obj) => {
      ctx.fillStyle = blinkState;
    },
    passTime: (deltaTime) => {
      blinky += deltaTime;
      if (Math.round(blinky / 200) % 2 === 1) {
        blinkState = "black";
      } else {
        blinkState = "purple";
      }
    },
    isDraggable: true,
    zIndex: 2,
  });

  Director.addToCurrentScene(uiCircle2);
}
