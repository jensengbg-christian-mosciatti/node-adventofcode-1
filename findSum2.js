const { expenses } = require('./expenses')

function findSum(requiredSum) {
  console.time('loop time')

  const recalculatedExp = expenses.map((el) => requiredSum - el)
  const index = recalculatedExp.findIndex((el) => expenses.includes(el))

  console.timeEnd('loop time')
  if (index > -1)
    return `${expenses[index]} x ${recalculatedExp[index]} = ${
      expenses[index] * recalculatedExp[index]
    }`
  else return `The list does not contain 2 numbers where sum is ${requiredSum}`
}

exports.default = findSum
