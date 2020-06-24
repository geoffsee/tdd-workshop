export default class BowlingGame {
	score:number = 0;
	rolls:number[] = new Array(21); //keeping track of all rolls
	rollsIndex:number = 0

	public roll (pins: number): void {
		if (pins == 10 && this.rollsIndex+1 % 2 == 1) {
			this.strike(pins);
		} else {
            this.rolls[this.rollsIndex] = pins
            this.rollsIndex += 1
        }
	}


	public getScore (): number {
		//iterate through the rolls array, and add the numbers, depending on
		//whether or not the rolls are strikes or spares or neither
		for (let i = 0; i < this.rolls.length; i++){

			if (this.rolls[i] == 10 && (i+1)%2 == 1){
				this.score += this.rolls[i]
				this.score += this.rolls[i+2] //bonus
				this.score += this.rolls[i+3] //bonus
			}
			else{
				this.score += this.rolls[i]
			}
		}
		return this.score
	}

	public strike(pins: number) {
        this.rolls[this.rollsIndex] = pins;
        this.rolls[this.rollsIndex+1] = 0;
        this.rollsIndex += 2;
	}
}