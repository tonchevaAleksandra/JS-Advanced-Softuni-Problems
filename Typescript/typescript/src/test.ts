import { expect } from 'chai';
import { isEmpty } from 'singlyLinkedList';

describe('isEmpty', () => {
    it('isEmpty function returns true', () => {
        const result = isEmpty();
        expect(result).to.be.true;
    });
});