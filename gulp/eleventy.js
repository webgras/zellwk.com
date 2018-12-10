const exec = require('child_process').exec

const eleventy = cb => {
  const command = 'eleventy --config=eleventy.js --quiet'

  exec(command, function (err, stdout, stderr) {
    console.log(stdout)
    console.log(stderr)
    cb(err)
  })
}

module.exports = eleventy
