const fs = require('fs')
const showError = require('../utils/showError')
const checkFilePath = require('../utils/checkFilePath')

const initReadStream = (pathString, onExit) => {
	if (pathString) {
		checkFilePath(pathString,result => {
			if (!result.checked) showError(result.error)
		})
		return fs.createReadStream(pathString, 'utf-8').on('error', err => {
			showError('An error occurred while reading the file')
		})
	}
	process.once('SIGINT', onExit)
	process.stdin.setEncoding('utf8')
	return process.stdin
}

module.exports = initReadStream
