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
  test("should render svg for a green polygon element", () => {
    const expectedSvg =
      '<polygon points="150, 18 244, 182 56, 182" fill="bisque" />';
    const triangle = new Triangle();
    triangle.setColor("bisque");
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });

  test("should accept a fillColor param", () => {
    const expectedSvg =
      '<polygon points="150, 18 244, 182 56, 182" fill="purple" />';
    const triangle = new Triangle();
    triangle.setColor("purple");
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe("Square", () => {
  // should render SVG for a green square
  test("should render svg for a green polygon element", () => {
    const expectedSvg =
      '<rect x="90" y="40" width="120" height="120" fill="dodgerblue" />';
    const square = new Square();
    square.setColor("dodgerblue");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(expectedSvg);
  });

  test("should accept a fillColor param", () => {
    const expectedSvg =
      '<rect x="90" y="40" width="120" height="120" fill="red" />';
    const square = new Square();
    square.setColor("red");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});
