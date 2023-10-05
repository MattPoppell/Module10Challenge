# Module 10 Challenge

## Description
This challenge required the generation of an SVG file.  We were asked to design and run an application that required "inquirer" to prompt the user with a set of questions regarding how they wanted said SVG file to look whe rendered.  Research had to be done on SVG files first in order to laern how to work with and design them.  Once this was accomplished, a series of prompts was implemented in order to guide the user towards the end SVG file.

## Usage
User first needs to open a command terminal on their machine.  Upon opening command terminal, the user must enter the command, "node index.js."  Once the command is entered, the user then answeres a series of prompts in order to design their desired SVG file.

## Installation
No installation needed.  Application runs in the command terminal upon the entering of command, "node index.js".

## Video Walk Through
https://watch.screencastify.com/v/7ROHiVPS0Ly9muRVXri2

## Tests
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
