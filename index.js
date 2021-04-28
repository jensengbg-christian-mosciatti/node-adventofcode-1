const args = process.argv;

const main = function() {
    let name = "World";

    if (args.length > 2) {
        name = args[2];
    }
    console.log(`Hello ${name}!`);
}

main();
