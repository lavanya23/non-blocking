const fs = require('fs');

console.time('readFile');

for (let x = 0; x < 10; x++) {
  fs.readFile('./lens.jpg', (err, data) => {
    if (err) throw err;
    console.log(`File size#${x}: ${Math.round(data.length / 1e6)} MB`);
  });
}

fs.readFile('./file.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log('file.txt data: ', data.trim());
});

console.timeEnd('readFile');
