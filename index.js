const args = process.argv
const readline = require('readline')
const findSum1 = require('./findSum1').default
const findSum2 = require('./findSum2').default
const findSum3 = require('./findSum3').default

const main = async function () {
  let name = 'World'

  if (args.length > 2) {
    name = args[2]
  }
  console.log(`Hello ${name}!`)

  function askQuestion(query) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })

    return new Promise((resolve) =>
      rl.question(query, (answer) => {
        rl.close()
        resolve(answer)
      })
    )
  }

  const func = await askQuestion(
    'Which function do you want to run? 1(default), 2 or 3? '
  )
  if (!['', 1, 2, 3].some((el) => el == func))
    console.log(`Function '${func}' not available, running default..`)

  const sumToFind = 2020
  let functionResult = null
  function runFunction() {
    switch (Number(func)) {
      case 2:
        return findSum2(sumToFind)
      case 3:
        return findSum3(sumToFind)
      default:
        return findSum1(sumToFind)
    }
  }
  functionResult = runFunction()

  console.log(`The answer is: ${functionResult}`)
}

main()
