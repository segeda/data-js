import data from './data/data.json' with {type: 'json'};

console.log(data);
console.log(data.key);
console.log(data.anotherKey);

document.getElementById('json').innerHTML = `<pre>${JSON.stringify(data)}</pre>`;
document.getElementById('value').innerHTML = data.key;
document.getElementById('anotherValue').innerHTML = data.anotherKey;
