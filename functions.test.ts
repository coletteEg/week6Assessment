const {shuffleArray} = require('./utils')

let Array1 = [1,2,3,4]
let Array2 = []
let Array3 = ["once upon a time", "cats meow", "gangar rules"]

describe('shuffleArray should', () => {
    test('returns array', () => {
    expect(Array.isArray(shuffleArray(Array1))).toBeTruthy()
    expect(Array.isArray(shuffleArray(Array2))).toBeTruthy()
    expect(Array.isArray(shuffleArray(Array3))).toBeTruthy()
})

test("same length", () => {
    expect(shuffleArray(Array1)).toHaveLength(Array1.length)
    expect(shuffleArray(Array2)).toHaveLength(Array2.length)
    expect(shuffleArray(Array3)).toHaveLength(Array3.length)
})

})