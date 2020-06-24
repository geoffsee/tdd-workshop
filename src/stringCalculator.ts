export default class StringCalculator {
	constructor () {

	}

	public tokenize (phrase: string): any {

		if (phrase === '') {
			return []
		}
		
		let tokens = phrase.split(/,|\n/)
		return tokens.map((token) => parseInt(token))

	}

	public add(phrase: string) {
		let tokens = this.tokenize(phrase)

		if (tokens.length === 0) {
			return 0
		}

		else if (tokens.every((token) => token >= 0)){
			return tokens.reduce((a,b) => a+b, 0)
		}

		else {
			throw new Error('Stay positive!')
		}


	}

}