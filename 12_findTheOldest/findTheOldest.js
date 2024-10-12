const findTheOldest = function (arr) {
    arr.map(function findAge(person) {
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = new Date().getFullYear();
        }
        let age = person.yearOfDeath - person.yearOfBirth;
        person.age = age;
    });

    console.table(arr);

    arr.sort(function triAge(person1,person2) {
        return person2.age - person1.age;
    })

console.table(arr);

return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
