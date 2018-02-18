import { expect } from 'chai';
import 'mocha';

import TriangleFactory from './triangle.factory';
import Triangle from './triangle';

describe('TypeScript Triangle Factory', () => {

    it('should return equilateral triangle', () => {
        const triangle: Triangle = TriangleFactory.createTriangle(5, 5, 5);
        expect(triangle.type).to.equal('Equilateral');
    });

    it('should return isosceles triangle', () => {
        const triangle: Triangle = TriangleFactory.createTriangle(5, 5, 4);
        expect(triangle.type).to.equal('Isosceles');
    });

    it('should return isosceles triangle', () => {
        const triangle: Triangle = TriangleFactory.createTriangle(50, 50, 1);
        expect(triangle.type).to.equal('Isosceles');
    });

    it('should return scalene triangle', () => {
        const triangle: Triangle = TriangleFactory.createTriangle(3, 4, 5);
        expect(triangle.type).to.equal('Scalene');
    });

    it('should return non-existing triangle', () => {
        const triangle: Triangle = TriangleFactory.createTriangle(0, 0, 0);
        expect(triangle.type).to.equal('None');
    });

    it('should return non-existing triangle', () => {
        const triangle: Triangle = TriangleFactory.createTriangle(-1, 2, 3);
        expect(triangle.type).to.equal('None');
    });

    it('should return non-existing triangle', () => {
        const triangle: Triangle = TriangleFactory.createTriangle(-5, -5, -5);
        expect(triangle.type).to.equal('None');
    });

    it('should return non-existing triangle', () => {
        const triangle: Triangle = TriangleFactory.createTriangle(1, 1, 50);
        expect(triangle.type).to.equal('None');
    });

    it('should return non-existing triangle', () => {
        const triangle: Triangle = TriangleFactory.createTriangle(25, 1, 50);
        expect(triangle.type).to.equal('None');
    });

    it('should return non-existing triangle', () => {
        const triangle: Triangle = TriangleFactory.createTriangle(1, 1, 150);
        expect(triangle.type).to.equal('None');
    });
});
