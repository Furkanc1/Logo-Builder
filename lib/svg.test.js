const LogoSVG = require("./svg");
const { LogoSquare } = require("./shapes");

// renders a 300 x 200 Logo
test("should render a 300 x 200 LogoSVG element", () => {
  // expected Logo string for an empty element
  const expectedLogoSVG =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>';
  // Creating a new Logo object
  const logoSVG = new LogoSVG();
  // compares what the test outputs vs what the user inputs
  expect(logoSVG.render()).toEqual(expectedLogoSVG);
});

// Expected outcome is in the test parameter test(`should append text element`)
test("should append text element", () => {
// Expected string for a logo element with a text color of white)
  const expectedLogoSVG =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">A</text></svg>';
// creates a new logo object
  const logoSVG = new LogoSVG();
// Setting the text on the Logo along with tis color "white" A=UserInput...
  logoSVG.setText("A", "white");
 // comapres the `test(``)` vs the the usersinput `Expect(``)`
  expect(logoSVG.render()).toEqual(expectedLogoSVG);
});

// exected results from test = test(`should set text message and colo`)
test("should set text message and color", () => {
    // should create the logo element with the text as well as color inputted + the shape desired (hopefully>..)
    const expectedLogoSVG =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>';
// creates a new object
    const logoSVG = new LogoSVG();
    // fills in the text on the Logo
    logoSVG.setText("SVG", "#333");
    // again compares test vs userInput
    expect(logoSVG.render()).toEqual(expectedLogoSVG);
  });

  // Our failsafe incase of user input == (greater than > ) 3 Characters
test("should throw if text exceeds 3 characters", () => {
// error message for this scenerio
    const expectedError = new Error("Text must not exceed 3 characters.");

    const logoSVG = new LogoSVG();
    // will run if the user input is more than 3 letters (i.e. "hello" = 5 letters)
    expect(() => logoSVG.setText("HELLO", "#333")).toThrow(expectedError);
  });

  test("should include a shape", () => {
 // Expected LogoSVG string for a LogoSVG element with a square and text element
    const expectedLogoSVG =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="dodgerblue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>';
// Creating a new LogoSVG object
    const logoSVG = new LogoSVG();
// setText function which will as named, create the userGenerated 3 letters
    logoSVG.setText("SVG", "#333");
// Create new Logo object
    const logoSquare = new LogoSquare();
// sets color to blue in this case
    logoSquare.setColor("dodgerblue");
// creates logo shape
    logoSVG.setLogoShape(logoSquare);
// compares test results to actual UserGenerated Results.
    expect(logoSVG.render()).toEqual(expectedLogoSVG);
  });