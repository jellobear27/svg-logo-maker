const Square = require("../lib/Square");
const Triangle = require("../lib/Triangle");
const Circle = require("../lib/Circle");


// Circle Shape
describe("Circle", () => {
    test("renders correctly", () => {
        const shape = new Circle();
        var color = "blue";
        shape.setColor(color);
        expect(shape.render()).toEqual(expect.stringContaining(`<circle`));
    });
});

// Square Shape
describe("Square", () => {
    test("renders correctly", () => {
        const shape = new Square();
        var color = "green";
        shape.setColor(color);
        expect(shape.render()).toEqual(expect.stringContaining(`<rect`));
    });
});

// Triangle Shape
describe("Triangle", () => {
    test("renders correctly", () => {
        const shape = new Triangle();
        var color = "red";
        shape.setColor(color);
        expect(shape.render()).toEqual(expect.stringContaining(`<polygon`));
    });
});