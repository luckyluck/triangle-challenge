class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.type = 'None';
    }

    printType() {
        console.log(`Triangle is ${this.type}, a - ${this.a}, b - ${this.b}, c - ${this.c}`);
    }
}

export default Triangle
