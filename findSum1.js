const { expenses } = require('./expenses')

function findSum(requiredSum) {
  console.time('loop time')

  for (let i = 0; i < expenses.length; i++) {
    for (let j = i + 1; j < expenses.length; j++) {
      if (expenses[i] + expenses[j] === requiredSum) {
        console.timeEnd('loop time')
        return `${expenses[i]} x ${expenses[j]} = ${expenses[i] * expenses[j]}`
      }
    }
  }
  console.timeEnd('loop time')
  return `The list does not contain 2 numbers where sum is ${requiredSum}`
}

exports.default = findSum
