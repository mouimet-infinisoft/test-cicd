import { customSub } from '../src/index';

describe("Testing customSub", () => {

    test("ShoudReturn4", () => {
        expect(customSub(6,2)).toEqual(4);
    });

    test("ShoudReturn20", () => {
        expect(customSub(22,2)).toEqual(20);
    });
});