const users = [{
        name: "Harkirat",
        age: 21
    }, {
        name: "Raman",
        age: 22
    }, {
        name: "Manu",
        age: 17
    }
]

function ageGreaterThen18(users) {
    return users.filter((user) => ( user.age > 18 ))
}

console.log(ageGreaterThen18(users));

