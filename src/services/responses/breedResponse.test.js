import breedResponse from './breedResponse';

describe('breedResponse test', () => {
    it('response is success', () => {
        const data = { status: 'success', message: 1 };
        expect(breedResponse(data)).toBe(1);
    });
    it('response is not success', () => {
        const data = { status: 'diferent-success', message: 1 };
        expect(JSON.stringify(breedResponse(data))).toBe('{}');
    });
});