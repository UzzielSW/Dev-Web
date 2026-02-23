// escribe utilizando el estadar actual de javascript

interface User {
name: string;
age: number;
}

type ID = string | number;

const user: User = { name: "Ana", age: 30 };
const userId: ID = 42;
const userCode: ID = "ABC123";

console.log(user);
console.log(userId);

enum Direction {
Up,
Down,
Left,
Right,
}

const move = Direction.Left;
console.log(move);        // 0
console.log(Direction[0]); // "Up"