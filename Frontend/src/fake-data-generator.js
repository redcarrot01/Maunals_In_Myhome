var faker = require('faker');

var db = { manual: []};

for (var i=0; i < 1000; i++) {

  db.manual.push({
    id: i,
    title: faker.commerce.productName(),
    category: faker.commerce.productAdjective(),
    thumnail: faker.image.imageUrl()
  });


}

console.log(JSON.stringify(db));
