class Triangle {
    public type: string = 'None';
    private readonly a: number = 0;
    private readonly b: number = 0;
    private readonly c: number = 0;

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    public printType(): void {
        console.log(`Triangle is ${this.type}, a - ${this.a}, b - ${this.b}, c - ${this.c}`);
    }
}

export default Triangle;
