import data from './data/data.json' with {type: 'json'};

console.log(data);
console.log(data.key);

document.getElementById('json').innerHTML = `<pre>${JSON.stringify(data)}</pre>`;
document.getElementById('value').innerHTML = data.key;
