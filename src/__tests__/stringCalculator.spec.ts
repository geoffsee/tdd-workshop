import stringCalculator from "../stringCalculator";

describe("stringCalculator", () => {


	test('class exists', () => {
    	const calc = new stringCalculator()
 	});

 	test ('tokenize empty string', () => {
 		const calc = new stringCalculator()
 		expect(calc.tokenize('')).toEqual([])
 	})

	test ('tokenize single number', () => {
		const calc = new stringCalculator()
		expect(calc.tokenize("1234")).toEqual([1234])
	})

	test ('tokenize comma delimited', () => {
		const calc = new stringCalculator()
		expect(calc.tokenize("1234,5678")).toEqual([1234,5678])
	})

	test ('tokenize newline delimited', () => {
		const calc = new stringCalculator()
		expect(calc.tokenize("1234\n5678")).toEqual([1234,5678])
	})

	test ('tokenize mixed delimited', () => {
		const calc = new stringCalculator()
		expect(calc.tokenize("12,34\n56,78")).toEqual([12, 34, 56, 78])
	})

	test ('zero value', () => {
	  	const calc = new stringCalculator()
	  	console.log(calc.tokenize(''))
	  	expect(calc.add('')).toEqual(0)

	})

	test ('single digit', () => {
  		const calc = new stringCalculator()
  		expect(calc.add('7')).toEqual(7)
	})

	test ('multiple digits', () => {
  		const calc = new stringCalculator()
  		expect(calc.add('1234')).toEqual(1234)
	})

	test ('negative val throws exception', () => {
  		const calc = new stringCalculator()

  		expect(() => calc.add('-1')).toThrow()
	})

})
