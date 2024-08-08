const users = [
  {
    name: "Harkirat",
    age: 21,
    gender: "male",
  },
  {
    name: "Raman",
    age: 22,
    gender: "male",
  },
  {
    name: "Manu",
    age: 17,
    gender: "female",
  },
  {
    name: "Ramesh",
    age: 19,
    gender: "male",
  },
];

function ageGreaterThen18AndMale(users) {
  return users.filter((user) => user.age > 18 && user.gender === "male");
}

console.log(ageGreaterThen18AndMale(users));
