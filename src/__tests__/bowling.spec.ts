import BowlingGame from "../BowlingGame";

describe("Bowling", () => {

  	test('makes a BowlingGame object', () => {
    	const bowlingGame = new BowlingGame();
  	});

  	test('roll function increases score by appropriate amount', () => {
  		const bowlingGame = new BowlingGame();
  		for (let i = 0; i < 21; i++) {
  		    bowlingGame.roll(4); //increme the score variable by 4
  	    }
  		expect(bowlingGame.getScore()).toBe(84);
  	})

    test('when 1st roll knockdown 10 pins call strike', () => {
    	const bowlingGame = new BowlingGame();
    	bowlingGame.roll(10);
    	bowlingGame.roll(5);
    	bowlingGame.roll(4);
    	for (let i = 0; i < 17; i++) {
    		bowlingGame.roll(0);
    	}
    	expect(bowlingGame.getScore()).toBe(28);
    })
})
