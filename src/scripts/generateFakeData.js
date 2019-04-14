const faker = require("faker");
const fs = require("fs");

function generateFakeData(categories, itemsPerCategory) {
  let temp = [];
  for (let i = 0; i < categories; i++) {
    let category = {
      category: faker.random.word(),
      dataset: []
    };
    for (let j = 0; j < itemsPerCategory; j++) {
      let data = {
        name: faker.random.word(),
        value: faker.random.alphaNumeric()
      };
      category.dataset.push(data);
    }
    temp.push(category);
  }
  const final = { fakeData: temp };
  fs.writeFileSync("./src/assets/data/fakeData.json", JSON.stringify(final));
}

generateFakeData(10, 10);
