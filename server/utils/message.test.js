const expect = require('expect');

const {generateMessage} = require('./message');
describe('generateMessage', () => {
    it('should generate correct message object', () => {
        const from = 'Jen';
        const text = 'Some message';
        const message = generateMessage(from, text);

        expect(message.createAt).toBeA('number');
        expect(message).toInclude({ from, text });
        // store res in variable
        // assert from match
        // assert text match
        // assert createAt is number
    });
});