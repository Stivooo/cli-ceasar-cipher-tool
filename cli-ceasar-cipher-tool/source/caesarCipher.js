const UPPERCASE_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const LOWERCASE_ALPHABET = 'abcdefghijklmnopqrstuvwxyz'
const OPERATION_TYPE_ENCODE = 'encode'
const OPERATION_TYPE_DECODE = 'decode'

const shiftSymbol = (symbol, shift, alphabet) => {
	let index = alphabet.indexOf(symbol)
	let shiftedIndex = index + shift
	if (shiftedIndex > alphabet.length) {
		shiftedIndex = shiftedIndex % alphabet.length
	}
	return alphabet[shiftedIndex]
}

const unshiftSymbol = (symbol, shift, alphabet) => {
	let index = alphabet.indexOf(symbol)
	let shiftedIndex = Math.abs(index - shift + alphabet.length)
	if (shiftedIndex > alphabet.length) {
		shiftedIndex = shiftedIndex % alphabet.length
	}
	return alphabet[shiftedIndex]
}

const caesarCipher = (string, shift, type) => {
	if (!string.length) throw new Error('The entered string is empty')

	const symbolsList = string.split('')
	const outSymbols = symbolsList.map(symbol => {
		if (symbol.match(/^[A-Za-z]/) === null) return symbol
		const targetAlphabet = symbol.match(/^[a-z]/) ? LOWERCASE_ALPHABET : UPPERCASE_ALPHABET
		switch (type) {
			case OPERATION_TYPE_ENCODE:
				return shiftSymbol(symbol, shift, targetAlphabet)
			case OPERATION_TYPE_DECODE:
				return unshiftSymbol(symbol, shift, targetAlphabet)
			default:
				return symbol
		}
	})
	return outSymbols.join('')
}

module.exports = caesarCipher