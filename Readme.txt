Hi! If you move the JS and CSS folder into the HTML folder, it "works" (Meaning it prompts, takes input, displays the array). I couldn't for the life of me get the serve task to work and couldn't figure out why this was happening (clearly somewhere in the program is not pointing to the right place in the scaffold) 

The fact that I got this far in the program may not be enough for the assignment, but I have to say I felt like I accomplished something, and learned a lot along the way. I spent lots of time reading and figuring the pseudo code (even broke it down in my notes the way we talked about, big matrix on the left side, patterns and notes on the right) 

Yes I ran the example code from gulp template repo after we talked and messed around with that too. 

All this to say, I learned. I am not expecting much in terms of a grade, but here is my work and also I was inspired to look into a tutor as well which i hadn't done before. 


S






------a small portion of my notes you most likely don't care about...

-------------------------------------------------
Things we need to do in our code: 
Pop up window DONE
take the user input DONE
	Error if: 
	user input is negative
	user input is a string or letters
	user input is a decimal or contains special characters  

Assign the user input the the rows (i=4 means 4 rows) DONE
Assign the user input to the columns (i=4 means 4 columns) DONE

iterate over the matrix to fill with consecutive numbers, starting with 1 DONE

Ensure that the index of i-1 is highlighted (Do we do this in HTML?) 
iterate over the matrix for highlighted indexes
Highlights/Skips(diagonal)  are (i-1), (i-1)x2, (i-1)x3.. Do this i times 

execute code to swap the numbers in the matrix 

Print out the matrix

finish


**SRC file not found issue.

	run build out the project. 
	Run it int in gulp first. Server needs. Gulp scaffold needs to work. find example 	in examples repo gulp.js 
	move app.js back to correct place 

***I need to go over this. I think i fit what i needed but Gulp/Serve remains unclear to me when i am not in the classroom. 
-------------------------------------

**Where/when am i committing?

------------------------------------
**How do I handle the user input scenario? (negative numbers, letters etc)

------------------------------------
**How do I fill the matrix? Strict equality is checking the types of values, and the value itself 

i can do this

	let input = window.prompt...



	input = parseInt(input, 10); 

let myNewArray = new Array (INPUT) ; 
Console.log (`the size of your new array is`);


		for (i = 0; i < myArrayllength; i++) {
 	   myArray[i] = i; //>taking the value of i and putting it at that value in the array 


//printing the numbers
for(let i = 0;i< myArray.length;i++){\output =+ `${i} <br>;
main.innerHTML = output; //only use innerHTML when you are putting content that contains HTML. 


	}
	console.log(myArray);


