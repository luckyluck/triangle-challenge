import Triangle from './triangle';

class Scalene extends Triangle {
    constructor(a, b, c) {
        super(a, b, c);
        this.type = 'Scalene';
    }
}

export default Scalene;
