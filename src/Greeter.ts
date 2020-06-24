/*
    Write a Greeter class with greet function that receives a name as input and outputs Hello <name>. The signature of greet should not change throughout the kata. You are allowed to construct Greeter object as you please.
    greet trims the input
    greet capitalizes the first letter of the name
    greet returns Good morning <name> when the time is 06:00-12:00
    greet returns Good evening <name> when the time is 18:00-22:00
    greet returns Good night <name> when the time is 22:00-06:00
    greet logs into console each time it is called
*/


export default class Greeter {

	public getEpoch (): string {
		let dateTime = new Date()
		let hour = dateTime.getHours()

		var epoch: string
		if (hour < 6 || hour >= 22) {
			epoch = "night"
		}

		else if (hour <= 12) {
			epoch = "morning"
		}

		else {
			epoch = "evening"
		}

		return epoch
	}

	public cleanName (name: string): string {
		let trimName = name.trim()
		let capName = trimName.charAt(0).toUpperCase() + trimName.slice(1)

		return capName
	}

	public greet (name: string, time: -1): string {
		let greeting = "Good" + this.getEpoch() + this.cleanName(name)
		console.log(greeting)

		return greeting
	}
}