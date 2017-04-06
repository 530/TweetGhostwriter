/* Jeremiah Howell */
function writeTweet() {
	//Variable declaration
	var randIndex;
	var sentence;

	//Intro Array
	var intro = ["Success isn't overnight,","Wake up determined,",
						 "Be humble, be hungry,","The first step to acheiving your goal,"];
	//Body Array
	var body = ["the score,","a shining light,","sounded very inspirational,",
						"Huskers are the best in the NCAA,","it's brand new,"];
  //End Array
	var end = ["at least that's what the legend says.",
					 "and every word holds true."];
	
	//Uses randomUpTo function to randomly pick an intro
	//in the array using the array length to know how many entries
	//are populated in the array, then add to sentence variable
	randIndex = randomUpTo((intro.length)-1);
	sentence = intro[randIndex];

	//Uses randomUpTo function to randomly pick an body
	//in the array using the array length to know how many entries
	//are populated in the array, then add to sentence variable	
	randIndex = randomUpTo((body.length)-1);
	sentence = sentence + " " + body[randIndex];
	
	//Uses randomUpTo function to randomly pick an end
	//in the array using the array length to know how many entries
	//are populated in the array, then add to sentence variable	
	randIndex = randomUpTo((end.length)-1);
	sentence = sentence + " " + end[randIndex];

	//Uses "tweet" id to display the sentence variable
	document.getElementById("tweet").innerHTML = sentence;
}

//Generates a random whole number between 0 and max (inclusive)
function randomUpTo(max) {
  return Math.floor(Math.random() * (max+1));
}