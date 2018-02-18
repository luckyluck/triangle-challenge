import Equilateral from './equilateral';
import Triangle from './triangle';
import Scalene from './scalene';
import Isosceles from './isosceles';

class TriangleFactory {
    static createTriangle(a, b, c) {
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

    static isExist(a, b, c) {
        if (a <= 0 || b <= 0 || c <= 0) {
            return false;
        }

        return (a + b > c) && (a + c > b) && (b + c > a);
    }

    static checkIsosceles(a, b, c) {
        return a === b || a === c || b === c;
    }

    static checkScalene(a, b, c) {
        return a !== b && a !== c && b !== c;
    }

    static checkEquilateral(a, b, c) {
        return a === b && b === c;
    }
}

export default TriangleFactory;
