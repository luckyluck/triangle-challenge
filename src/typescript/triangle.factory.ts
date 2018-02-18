import Triangle from './triangle';
import Equilateral from './equilateral';
import Scalene from './scalene';
import Isosceles from './isosceles';

class TriangleFactory {

    public static createTriangle(a: number, b: number, c: number): Triangle {
        if (this.isExist(a, b, c) && this.checkEquilateral(a, b, c)) {
            return new Equilateral(a, b, c);
        }

        if (this.isExist(a, b, c) && this.checkIsosceles(a, b, c)) {
            return new Isosceles(a, b, c);
        }

        if (this.isExist(a, b, c) && this.checkScalene(a, b, c)) {
            return new Scalene(a, b, c);
        }

        return new Triangle(a, b, c);
    }

    /**
     * Method will check if the triangle with given sides can exist
     * @param {number} a - first given side of the triangle
     * @param {number} b - second given side of the triangle
     * @param {number} c - third given side of the triangle
     * @returns {boolean} - true is such triangle can exist
     */
    private static isExist(a: number, b: number, c: number): boolean {
        if (a <= 0 || b <= 0 || c <= 0) {
            return false;
        }

        return (a + b > c) && (a + c > b) && (b + c > a);
    }

    private static checkIsosceles(a: number, b: number, c: number): boolean {
        return a === b || a === c || b === c;
    }

    private static checkScalene(a: number, b: number, c: number): boolean {
        return a !== b && a !== c && b !== c;
    }

    private static checkEquilateral(a: number, b: number, c: number): boolean {
        return a === b && b === c;
    }
}

export default TriangleFactory;
