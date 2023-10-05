// const { describe, it } = require("node:test");
const { Square, Triangle, Circle } = require("./shapes");


describe("test for triangle", () => {
    it("should test to see that a triangle is rendered", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="0 200, 150 0, 300 200" fill="blue" />');
    });
});

describe("test for Square", () => {
    it("should test to see that a square is rendered", () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x="0" y="0" width="200" height="200" fill="blue" />')
    });
});

describe("test for circle", () => {
    it("should test to see that a circle is rendered", () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="blue" />')
    });
});