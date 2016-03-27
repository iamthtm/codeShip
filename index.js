// console.log('Hello Node.js')
function sum () {
  return (4 + 3)
}
console.log(sum())

var assert = require('assert')
describe('Array', function () {
  describe('ข้อมูล', function () {
    it('test sum', function () {
      assert.equal(sum(), 7)
    })
  })
})
