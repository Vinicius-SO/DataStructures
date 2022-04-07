const names = ['Max', 'Manu', 'Julie', 'Max']

console.log(names[1])
console.log(names.length);

for ( const el of names){ 
    console.log(el)
}

names.push('Julie')
console.log(names.length)


// Hard Work caused by percorring all elements to find one
const julieIndex = names.findIndex( el => el === 'Julie')
// Hard Work caused by moving all elements after cutting one from the itens 
names.splice(2,1);
console.log(names);