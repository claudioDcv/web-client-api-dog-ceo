import imageResponse from './imageResponse';

describe('imageResponse test', () => {
    it('response is success', () => {
        const data = { status: 'success', message: 1 };
        expect(imageResponse(data)).toBe(1);
    });
    it('response is not success', () => {
        const data = { status: 'diferent-success', message: 1 };
        expect(JSON.stringify(imageResponse(data))).toBe('{}');
    });
});