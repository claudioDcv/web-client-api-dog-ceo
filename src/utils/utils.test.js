import { objectMapper, concatArraysInObject, breedObjectToArray } from './utils';

describe('utils test', () => {
    it('objectMapper', () => {
        const data = { a: {}, b: {} };
        expect(objectMapper(data).length).toBe(2);
    });
    it('concatArraysInObject', () => {
        const data = { a: [1, 2], b: [3] };
        expect(concatArraysInObject(data).length).toBe(3);
    });
    it('breedObjectToArray', () => {
        const data = { a: [1, 2], b: [3] };
        const d = breedObjectToArray(data);
        expect(d.find(e => e.name === 'a').value[0]).toBe(1);
    });
});