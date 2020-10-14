
let current_value = ""; // getting the the current value in index array

let score = 0; //increase the score up to five of correct

/* function for holding another function to load a form*/
function load(){

	//everyload page
	const lblWord = document.getElementById("lblWord");

	const validation_output = document.getElementById("validation_output");

	const reveal = document.getElementById("reveal");

	let _reveal = reveal;

	let display = display_format();

	let result = shuffle_string(display);

	let display_all = result;

	let output = validation_output;

	_reveal.innerHTML = "";

	output.innerHTML = "";

	//call function disable
	toggle_buttons(true);

	focus();

	return lblWord.innerHTML = display_all.toUpperCase();
}



/*the function for format and display purposes*/
function display_format(){

	//everytime the page get reload this function will allways execute
	//const lblWords = document.getElementById("lblWord");

	let select_array = get_array();

	//call shuffled_word form array function
	let output = shuffled_word(select_array);

	//string manipulation happening this code into small
	let get_value = output.toLowerCase();
	
	let out = get_value;

	current_value = out;

	return get_value;
}


//function for the shuffle index array to guess
function shuffled_word(words){

		//const selected_index =
		
		let size = words.length; // get the size of the array
			//selecting a whole number and random
		let select_index = Math.floor(Math.random() * size);

		let selected_index = words[select_index];

		return selected_index;
}


/*This function is for shuffle the char inside the selected
index array*/
function shuffle_string(str){

	//let split the each character in the array object
	let word = str.split("");
	let size = word.length;

		//loop each character then shuffle
		for(let i = size -1; i > 0; i--){

		//Object for holding a random value
			let rand = Math.floor(Math.random() * (i + 1));

		let temp = word[i] //assigning the index in temp
		word[i] = word[rand] //assigning the random index into word[i]
		word[rand] = temp;   //now on rand
		
		}//this time all iteration loop will join as i use 'join()'
	
	return word.join("       ");	

}//end function for shuffle string


/*function that creating msg for users*/
function validation_output(bool){

	//get the id validation_output
	const validation_output = document.getElementById("validation_output");

	/*conditional statement*/
	if(bool == true){

		let output = validation_output;

		output.innerHTML = "<h3>Correct ! </h3>" + current_value.toUpperCase().fontcolor('#ffffff');

		focus();

	} else{

		let output = validation_output;

		output.innerHTML = "<h3>Sorry! Wrong Try again!</h3>";

		focus();
	}

}//end function for validation 

/*function for go button*/
function go_func(){


//get element id from html
const score_output = document.getElementById("score_output");

const txtguessbox = document.getElementById("txtguessbox");

const txtRespond = document.getElementById("txtRespond");

let btnGo = document.getElementById("btnGo");

let limit = 6;//points limit

const word = current_value;//return value from display_format()

const word_lower = word.toLowerCase();//compare for slected word

var guess_value = txtguessbox.value;

const answer_result = guess_value.toLowerCase();//compare answer from user

	//conditional statement here
	if(word_lower == answer_result ){

		validation_output(true);

		score++;

		let _score = score_output;

		_score.innerHTML = score;

			if(score === 5){ //limiting the words guesses correctly!

				let _txtRespond = txtRespond;
				_txtRespond.innerHTML = "<h1>Congrats! You've Done!<h1>";
				
				end_game();	
			}

		btnGo.disabled = true;

	} else{

		validation_output(false);

		toggle_buttons(true);

		focus();

		return guess_value = "";
	}

}//end go_func()

/*function for reveal button*/

function reveal(){

	const reveal = document.getElementById("reveal");

	let _reveal = reveal;

	_reveal.innerHTML = current_value
						.toUpperCase()
						.fontcolor('#00ffff')
						.fontsize('30px');

//call for toggle_buttons()
toggle_buttons(false);

}

/*Gets focus the textbox*/
function focus(){

	let	txtguessbox = document.getElementById("txtguessbox");

	txtguessbox.value = '';

	txtguessbox.focus();
}


/*function for NextWordButton*/

function next_word(){

	
//call for toggle_buttons()
	toggle_buttons(true);

	focus();

	return	load();	
}//end function

/*Supposed to know the user that game is done*/
function end_game(){

	if(confirm("Congratulations You Got 5points")){

		location.reload()
	}
}


/*For diabling specific functions buttons*/
function toggle_buttons(bool){
	
	//initialized variable to hold html tags
	let btnStart = document.getElementById("btnStart");

	let btnGo = document.getElementById("btnGo");

	let btnNext = document.getElementById("btnNext");

	let btnReveal = document.getElementById("btnReveal");


	if(bool == true){

		btnStart.disabled = true;
		btnGo.disabled = false;
		btnNext.disabled =false;
		btnReveal.disabled = false;
	
	}else{

		btnStart.disabled = true;
		btnGo.disabled = true;
		btnNext.disabled = false;
		btnReveal.disabled = false;
	}


}


/*I have a static only array with atlest 101 items to shuffle
for players 5 will be guessed*/
function get_array(){

	const words_array =
	["Frequency","Inch","Origin","Statistics","Probability","Guarantor","Generatrix","Colinear","Googol","Data",
		"Delta","Theta","Cosine","Pie","Radius","Circle","Lucrative","Nonagon","Absolute","Function",
		"Procedure","Length","Modulus","Instance","Extension","Mediator","Matrix","Decagon","Hexadecimal","Binary",
		"Decimal","Rate","Area","Domain","Kinematic","Dinominator","Parabola","Least","Horsepower","Solid",
		"Angle","Square","Root","Subraction","Addition","Division","Epicycloids","Theorem","System","Number",
		"Calculate","Insufficient","Perimeter","Logarithms","Cube","Geometry","Sine","Heptavalent","Mass","Converter",
		"Spherical","Theory","Shapes","Degree","Gain","Measurement","Pictograph","Plot","Quadratics","Array",
		"Command","Coefficient","Diagram","Fractal","Polygon","Invest","Involution","Linear","Slope","Formula",
		"Algebra","Calculus","Unit","Planimetry","Convex","Equilateral","Geometric","Median","Reflection","Algorithm",
		"Kilobyte","Base","Credit","Imaginary","Multiplication","Sequence","Septagon","Sector","Ratio","Fraction","Velocity"
	]; 

	return words_array;
}