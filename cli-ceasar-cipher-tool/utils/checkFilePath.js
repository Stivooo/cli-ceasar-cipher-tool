const fs = require('fs')

const checkFilePath = (pathString, cb)=> {
	fs.stat(pathString, (err, stats) => {
		if (err) {
			cb({
				checked: false,
				error: 'File or directory does not exist: ' + '"' + pathString + '"'
			})
		} else if (stats.isDirectory()) {
			cb({
				checked: false,
				error: 'Is a directory: ' + '"' + pathString + '"'
			})
		}
		cb({
			checked: true,
		})
	});
}

module.exports = checkFilePath