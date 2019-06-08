const faker = require('faker')
const fs = require('fs')

function generateFakeData(noOfCategories, itemsPerCategory) {
  let fakeData = []
  for (let i = 0; i < noOfCategories; i++) {
    let tempCategory = faker.random.word()
    for (let j = 0; j < itemsPerCategory; j++) {
      fakeData.push({
        category: tempCategory,
        name: faker.random.word(),
        value: faker.random.number()
      })
    }
  }
  const final = { data: fakeData }
  fs.writeFileSync('./stories/fakeData.json', JSON.stringify(final))
}

generateFakeData(5, 10)
