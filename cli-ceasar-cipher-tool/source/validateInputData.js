const parseCliInput = require('../utils/parseCliInput')

const validateInputCliData = cb => {
	const error = (text) => {
		return cb({
			error: text
		}).call();
	}

	const cli = parseCliInput();

	if (!cli.action) {
		error( 'Action type not specified!')
	} else if (cli.action && cli.action.match(/^(encode|decode)$/) === null) {
		error( 'Unknown operation type: ' + cli.action)
	}

	if (!cli.shift) {
		error( 'Shift value not specified!')
	} else if (cli.shift.match(/^-?[0-9]+$/) === null) {
		error( 'Shift value is not a number')
	}

	const shift = parseInt(cli.shift, 10)
	if (shift < 0) {
		error( 'Value of shift must be positive')
	}
	cb({
		data: {
			...cli,
			shift
		}
	})
}

module.exports = validateInputCliData