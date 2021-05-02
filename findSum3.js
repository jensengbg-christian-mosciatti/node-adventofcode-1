const { expenses } = require('./expenses')

function findSum(requiredSum) {
  console.time('loop time')

  const index = expenses.findIndex((el) => expenses.includes(requiredSum - el))

  console.timeEnd('loop time')
  if (index > -1) {
    let expense1 = expenses[index]
    let expense2 = requiredSum - expenses[index]
    return `${expense1} x ${expense2} = ${expense1 * expense2}`
  } else
    return `The list does not contain 2 numbers where sum is ${requiredSum}`
}

exports.default = findSum
