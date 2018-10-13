const add = require("./calculator");

it("should return zero on an empty string", () => {
	expect (add("")).toBe(0);
})

it("should return the number if a single number is entered", () => {
	expect (add("4")).toBe(4);
})

it("should return sum of two numbers when entered seperated by a comma", () => {
	expect (add("4,3")).toBe(7);
})

it("should return sum of two numbers when entered seperated by a comma", () => {
	expect (add("490,3")).toBe(493);
})

