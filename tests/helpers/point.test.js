import Point from "../../src/helpers/point";
import Vector from "../../src/helpers/vector";

test('add vectors', () => {
    const p1 = new Point(0,0);
    
    const p2 = p1.add(new Vector(3,4));

    expect(p2.x).toBe(3);
    expect(p2.y).toBe(4);
})
