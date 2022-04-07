const person = {
    firtsName : 'max',
    age: 31,
    hoobies: ['Sports', 'Cooking'],
    greet() {
        console.log(`Hi, I am ${this.firtsName}`)
    }
}

person.lastName = 'Schwarz'

delete person.age
console.log(person)
person.greet()