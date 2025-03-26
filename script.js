const friends = ['Talha', 'Ashfi', 'Eraz'];

//adding elements
const newLength = friends.push('Nasif');
console.log(friends);
console.log(newLength);

friends.unshift('Tanzim');
console.log(friends);

//removing elements
friends.pop(); //last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();// first
console.log(friends);

console.log(friends.indexOf('Ashfi'));
console.log(friends.indexOf('Nayeef'));

friends.push(23);
console.log(friends.includes('Talha'))
console.log(friends.includes('Nayeef'));
console.log(friends.includes('23'));
console.log(friends.includes(23));

if (friends.includes('Ashfi')) {
    console.log(`You have a friend called Ashfi`);
}