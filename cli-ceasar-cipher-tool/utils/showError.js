const showError = err => {
	process.stderr.write(err + '\n')
	process.exit(1)
}

module.exports = showError
