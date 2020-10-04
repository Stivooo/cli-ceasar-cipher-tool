const caesarCipher = require('./caesarCipher')
const { Transform } = require('stream')
const showError = require('../utils/showError')

const initTransformStream = (shift, action) => new Transform({
	transform(chunk, encoding, callback) {
		try {
			this.push(caesarCipher(chunk.toString('utf8'), shift, action))
		} catch (err) {
			showError(err)
		}
		callback()
	}
})

module.exports = initTransformStream
