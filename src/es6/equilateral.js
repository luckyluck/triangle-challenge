import Triangle from './triangle';

class Equilateral extends Triangle {
    constructor(a, b, c) {
        super(a, b, c);
        this.type = 'Equilateral';
    }
}

export default Equilateral;
