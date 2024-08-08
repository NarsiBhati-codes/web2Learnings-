//  Mr/Mrs/Others 

const user = {
    name: 'Narsi',
    age: 23,
    gender: 'male'
}

function canVote(age) {
    return age >=18;
}

function greet(user) {
    let vote = canVote(user.age);

    if(user.gender == 'male') {
        console.log("Hi, Mr " + user.name + " your age is: " + user.age + " " + (user.age >= 18 ? "you can vote" : "you cannot vote"));
    } 
    else if (user.gender == 'female') {
        console.log("Hi, Mrs " + user.name + " your age is: " + user.age + " " + (user.age >= 18 ? "you can vote" : "you cannot vote"));
    }
    else {
        console.log("Hi, " + user.name + " your age is: " + user.age + " " + (user.age >= 18 ? "you can vote" : "you cannot vote"));
    }
}

greet(user)