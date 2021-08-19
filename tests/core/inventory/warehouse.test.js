import Warehouse from '../../../src/core/inventory/warehouse';
import { PRODUCTS } from '../../../src/data/products';

test('take non existent quantity', () => {
    const warehouse = new Warehouse();
    warehouse.receive(PRODUCTS.wood, 0);

    const r1 = warehouse.take(PRODUCTS.wood, 1);
    expect(r1).toBe(0);
});

test.skip('obey max limiter on items', () => {
    const warehosue = new Warehouse({}, {wood: 100})

    const r1 = warehouse.receive(PRODUCTS.wood, 100);
    const r2 = warehouse.receive(PRODUCTS.wood, 1);

    expect(r1).toBe(true);
    expect(r2).toBe(true);
})