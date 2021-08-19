import { beforeEach, expect, test } from "@jest/globals";
import Factory from "../../../src/core/inventory/factory";
import Warehouse from "../../../src/core/inventory/warehouse";
import { PRODUCTS, RAW_PRODUCTION_RECIPE } from "../../../src/data/products";

let warehouse;

beforeEach(() => {
    warehouse = new Warehouse();
})

test('produces things in the warehouse based on basic recipe', () => {
    const factory = new Factory(warehouse, RAW_PRODUCTION_RECIPE.wood);
    const delta = RAW_PRODUCTION_RECIPE.wood.duration;
    factory.passTime(delta - 1);
    factory.passTime(1);

    const crates = factory.takeAllStock();
    expect(crates.length).toBe(1);
    expect(crates[0].quantity).toBe(RAW_PRODUCTION_RECIPE.wood.outputs[0].quantity);
});

test('factory with a inputs recipe', () => {
    warehouse.receive(PRODUCTS.ironOre, 1);
    const factory = new Factory(warehouse, RAW_PRODUCTION_RECIPE.ironIngot);
    const delta = RAW_PRODUCTION_RECIPE.ironIngot.duration;

    factory.passTime(delta);

    const crates = factory.takeAllStock();

    expect(crates[0].quantity).toBe(RAW_PRODUCTION_RECIPE.ironIngot.outputs[0].quantity);
    expect(crates[0].itemType).toBe(PRODUCTS.ironIngot);
    expect(crates.length).toBe(1);
})

test('factory without inputs does not execute', () => {
    const factory = new Factory(warehouse, RAW_PRODUCTION_RECIPE.ironIngot);
    const delta = RAW_PRODUCTION_RECIPE.ironIngot.duration;

    factory.execute = jest.fn(() => true);
    factory.passTime(delta);

    expect(factory.execute).toBeCalledTimes(0);
})