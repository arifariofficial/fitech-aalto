const yearOfBirth = 1990;

let name = "B. Eich";

name = "Breandan Eich";

console.log(`${name} was born in ${yearOfBirth}`);

// Objects

const person = {
	name: "Brendan Eich",
	"year-of-birth": 1961,
};
const personNameKey = "name";

console.log(person[personNameKey]);
console.log(person["year-of-birth"]);

console.log("=".repeat(60));

// JSON
const jsonString = '{"name": "Jane Doe", "yearOfbirth": 1990}';
console.log(`\nType of jsonString: ${typeof jsonString} `);

const obj = JSON.parse(jsonString);
console.log(`\nType of obj: ${typeof obj}`);
console.log(obj);

const string = JSON.stringify(obj);
console.log("\nStringified: ", string);

console.log("=".repeat(60));
