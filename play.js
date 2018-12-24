function play() {
	// Get random numbers for action and body part
	let action = Math.floor(Math.random() * 4) + 1;
	let bodyPart = Math.floor(Math.random() * 13) + 1;

	// Display action
	switch (action) {
		case 1: $("#action").html("Kiss"); break;
		case 2: $("#action").html("Tickle"); break;
		case 3: $("#action").html("Lick"); break;
		case 4: $("#action").html("Rub"); break;
		default: $("#action").html("error"); break;
	}

	// Display body part
	switch (bodyPart) {
		case 1: $("#body-part").html("Wild Card"); break;
		case 2: $("#body-part").html("Ear"); break;
		case 3: $("#body-part").html("Shoulder"); break;
		case 4: $("#body-part").html("Lips"); break;
		case 5: $("#body-part").html("Neck"); break;
		case 6: $("#body-part").html("Chest"); break;
		case 7: $("#body-part").html("Stomach"); break;
		case 8: $("#body-part").html("Back"); break;
		case 9: $("#body-part").html("Thighs"); break;
		case 10: $("#body-part").html("Hips"); break;
		case 11: $("#body-part").html("Butt"); break;
		case 12: $("#body-part").html("Clitoris"); break;
		case 13: $("#body-part").html("Penis"); break;
		default: $("#body-part").html("error"); break;
	}
}