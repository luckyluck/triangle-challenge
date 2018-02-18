import Triangle from './triangle';

class Isosceles extends Triangle {
    constructor(a, b, c) {
        super(a, b, c);
        this.type = 'Isosceles';
    }
}

export default Isosceles;
