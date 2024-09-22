class calculator {
    constructor(a, func, b) {
        this.a = parseInt(a);
        this.func = func;
        this.b = parseInt(b);
    }
    Result() {
        switch (this.func) {
            case "+":
                return this.a + this.b;
                break;
            case "-":
                return this.a - this.b;
                break;
            case "*":
                return this.a * this.b;
                break;
            case "/":
                return this.a / this.b;
                break;
        }
    }
}

module.exports = calculator;