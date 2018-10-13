const add = require("./calculator");

it("should return zero on an empty string", () => {
	expect (add("")).toBe(0);
})

it("should return the number if a single number is entered", () => {
	expect (add("4")).toBe(4);
})