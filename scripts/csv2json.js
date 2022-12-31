const {
  promises: { readFile, writeFile },
} = require('fs')

if (process.argv.length < 4) {
  console.log('Usage: node csv2json.js from to')
} else {
  readFile(process.argv[2])
    .then((buf) =>
      String(buf)
        .split('\n')
        .filter((w) => !w.includes('-')),
    )
    .then((res) => writeFile(process.argv[3], JSON.stringify(res)))
}
