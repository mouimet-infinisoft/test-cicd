import { customAdd } from '../src/index';

describe("Testing customAdd", () => {

    test("ShoudReturn4", () => {
        expect(customAdd(2,2)).toEqual(4);
    });

    test("ShoudReturn20", () => {
        expect(customAdd(10,2)).toEqual(20);
    });
});