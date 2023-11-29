class CLI {
run() {
return inquirer
.prompt([
    {
    name: "text",
    type: "input",
    message:
        "Enter 3 letters for your (TEXT) output:",
    validate: (text) =>
        text.length <= 3 ||
        "The message must not contain more than 3 characters!!!",
    },
    {
    name: "textColor",
    type: "input",
    message: "What color do you want your (TEXT) to be?",
    },
    {
    name: "shapeType",
    type: "list",
    message: "What shape would you like your (LOGO) to be?",
    choices: ["circle", "square", "triangle"],
    },
    {
    name: "shapeColor",
    type: "input",
    message: "What color would you like your (TEXT) to be?",
    },
]);
}};