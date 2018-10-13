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

it("should return sum of multiple numbers when entered seperated by a comma", () => {
	expect (add("10,3,33,400")).toBe(446);
})

it("should return sum of multiple numbers when entered seperated by a comma or newline", () => {
	expect (add("10,3\n35,400")).toBe(448);
})

it("should return sum of two numbers when entered seperated by a newline", () => {
	expect (add("3\n35")).toBe(38);
})

it("should return sum of multiple numbers when entered seperated by a comma", () => {
	expect (add("3\n35\n4")).toBe(42);
})

it("should thow a Negatives not allowed exception containing a single negative", () => {
	expect (function(){add("-3\n35\n4")}).toThrow("Negatives not allowed: -3");
})

it("should thow a Negatives not allowed exception containing multiple negatives", () => {
	expect (function(){add("-3\n35,-8,10,-100")}).toThrow("Negatives not allowed: -3,-8,-100");
})

it("should return a sum of all the numbers who are lower or equal to 1000", () => {
	expect (add("335,1000,4")).toBe(1339);
})

it("should return a sum of all the numbers who are lower or equal to 1000", () => {
	expect (add("335,1500,4")).toBe(339);
})

it("should return a sum of all the numbers who are lower or equal to 1000 - mixed delimiter", () => {
	expect (add("3\n35,4,1001")).toBe(42);
})

it("adds multiple numbers with an additional custom * delimiter as well as comma and newline", () => {
	expect (add("//*3,35*4\n1001")).toBe(42);
})

it("adds two numbers with a custom / delimiter", () => {
	expect (add("///4/100")).toBe(104);
})

it("adds multiple numbers with a custom | delimiter", () => {
	expect (add("//|4|100|44|2")).toBe(150);
})

