const { program } = require('commander')

program
	.storeOptionsAsProperties(false)
	.version('0.0.1')
	.option('-s, --shift <number>', 'shift value', false)
	.option('-i, --input <file>', 'input file', false)
	.option('-o, --output <file>', 'output file', false)
	.option('-a, --action <action>', 'encode/decode flag', false)
	.parse(process.argv)

const parseCliInput = () => program.opts()
module.exports = parseCliInput

