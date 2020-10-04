const fs = require('fs')
const showError = require('../utils/showError')
const checkFilePath = require('../utils/checkFilePath')

const initWriteStream = (pathString, onExit) => {
	if (pathString) {
		checkFilePath(pathString, result => {
			if (!result.checked) showError(result.error)
		})
		return fs.createWriteStream(pathString, {
			flags: 'a+'
		}).on('error', err => {
			showError('An error occurred while writing the file')
		})
	}
	process.once('SIGINT', onExit)
	return process.stdout
}

module.exports = initWriteStream
