import Point from "../../src/helpers/point";
import Vector, {getVector} from "../../src/helpers/vector";

const v1 = new Vector(3, 4);
const v2 = new Vector (10, 10);
test('add vectors', () => {
    const r1 = v1.add(v2);

    expect(r1.xDir).toBe(13);
    expect(r1.yDir).toBe(14);

});

test('reverse', () => {
    const r1 = v1.reverse();

    expect(r1.xDir).toBe(-3);
    expect(r1.yDir).toBe(-4);
})

test('multiply', () => {
    const r1 = v1.multiply(2);

    expect(r1.xDir).toBe(6);
    expect(r1.yDir).toBe(8);
})

test('length', () => {
    const r1 = v1.length();

    expect(r1).toBe(5);
})

test('normalize', () => {
    const r1 = v2.normalise().length();
    
    expect(r1).toBeCloseTo(1, 1);
})

test('create vector from two points', () => {
    const p1 = new Point(0, 0);
    const p2 = new Point(3,4);
    const r1 = getVector(p1, p2);
    
    expect(r1.xDir).toBe(3);
    expect(r1.yDir).toBe(4);

})