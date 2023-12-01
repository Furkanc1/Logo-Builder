// Importing the shape classes from the "shapes" module
const { Square, Triangle, Circle } = require("./shapes");

// Testing for the circle class
describe("Circle", () => {
// should render SVG for a green circle 
    test("should render svg for a green circle element", () => {
// Expected SVG Design for a green circle
      const expectedSvg = '<circle cx="150" cy="100" r="80" fill="green" />';
// Creating a new Circle object
      const circle = new Circle();
// Setting the color of the circle to green
      circle.setColor("green");
 // Rendering the actual SVG string
      const actualSvg = circle.render();
// Comparing SVG created vs what is expected to appear
      expect(actualSvg).toEqual(expectedSvg);
    });
  // Test case: should accept a fillColor param
    test("should accept a fillColor param", () => {
// Expected SVG string for a blue circle
        const expectedSvg = '<circle cx="150" cy="100" r="80" fill="blue" />';
// Creating a new Circle object
        const circle = new Circle();
// Setting the color of the circle to blue
        circle.setColor("blue");
 // Rendering the actual SVG string
        const actualSvg = circle.render();
// Comparing the actual and expected SVG strings
        expect(actualSvg).toEqual(expectedSvg);
      });
    });
// Testing for the Triangle class
    describe("Triangle", () => {
      // should render SVG for a green trianngle
      test("should render svg for a green polygon element", () => {
// Expected SVG string for a green triangle
        const expectedSvg =
          '<polygon points="150, 18 244, 182 56, 182" fill="bisque" />';
// Creating a new triangle object
        const triangle = new Triangle();
// Setting the color of the triangle to bisque
        triangle.setColor("bisque");
// Rendering the actual SVG string
        const actualSvg = triangle.render();
// Comparing the actual and expected SVG strings
        expect(actualSvg).toEqual(expectedSvg);
      });
    
      test("should accept a fillColor param", () => {
// expected SVG string for a purple triangle
        const expectedSvg =
          '<polygon points="150, 18 244, 182 56, 182" fill="purple" />';
// creating a new Triangle object
        const triangle = new Triangle();
// making the color of the triangle, purple
        triangle.setColor("purple");
 // rendering the actual SVG string
        const actualSvg = triangle.render()
// comparing the actual vs expected 
        expect(actualSvg).toEqual(expectedSvg);
      });
    });
    
    describe("Square", () => {
// should render SVG for a green square
      test("should render svg for a green polygon element", () => {
// Expected SVG string for a dodgerblue square
        const expectedSvg =
          '<rect x="90" y="40" width="120" height="120" fill="dodgerblue" />';
// creating a new Square object
        const square = new Square();
// setting the color of the square to dodgerblue
        square.setColor("dodgerblue");
// Rendering the actual SVG string
        const actualSvg = square.render();
// comparing the actual and expected SVG strings
        expect(actualSvg).toEqual(expectedSvg);
      });

      test("should accept a fillColor param", () => {
// expected SVG string for a red square
        const expectedSvg =
          '<rect x="90" y="40" width="120" height="120" fill="red" />';
// Creating a new Square object
        const square = new Square();
// setting the color of the square to red
        square.setColor("red");
// rendering the actual svg string
        const actualSvg = square.render();
// Comparing the actual and expected SVG strings
        expect(actualSvg).toEqual(expectedSvg);
      });
    });
