const { pipeline } = require('stream');
const initReadStream = require('./source/initReadStream')
const initTransformStream = require('./source/initTransformStream')
const initWriteStream = require('./source/initWriteStream')
const showError = require('./utils/showError')
const validateInputCliData = require('./source/validateInputData')

const main = () => {
	const onUserTerminate = () => {
		console.log('\n' + 'The program was terminated by the user')
		process.exit(0)
	}

	validateInputCliData(result => {
		if (result.error) {
			showError(result.error)
		} else {
			pipeline(
				initReadStream(result.data.input, onUserTerminate),
				initTransformStream(result.data.shift, result.data.action),
				initWriteStream(result.data.output, onUserTerminate),
				err => {
					if (err) showError(err)
					else {
						console.log('End of work');
						process.exit(0)
					}
				}
			)
		}
	})
}

main()
