var terms = {"pwd": "print working directory", "hostname": "my computer's network name", "mkdir": "make directory", 
	"cd": "change directory", "ls": "list directory", "rmdir": "remove directory", "pushd": "push directory", 
	"popd": "pop directory", "cp": "copy directory", "mv": "move a file or directory", 
	"less": "page through a file", "cat": "print the whole file", "xargs": "execute arguments", 
	"find": "find files", "grep": "find things inside files", "man": "read a manual page", 
	"apropos": "find what man page is appropriate", "env": "look at your environment", 
	"echo": "print some arguments", "export": "export/set a new environment variable", 
	"exit": "exit the shell", "sudo": "DANGER! become super root user root DANGER!", 
	"chmod": "change permission modifiers", "chown": "change ownership",
	"$|$": "Takes the output from the left command and pipes it to the command on the right", 
	"$<$": "sends input from the right to the program or command on the left", 
	"$>$": "takes the output of the command on the left and writes it to the file on the right", 
	"$>>$": "takes the output of the command on the left and appends it to the right"}
var answer = ""
var question= ""
var response= ""
var shuffle_terms = {}


function prompts(use_case){
	switch (use_case){
		case "end_quiz":
			$("#prompt").text("Congratulations - you've finished all the questions.");
			break;
		case "continue quiz":
			$("#prompt").text("Correct! Here is another.");
			break;
		case "input":
			$("#prompt").text("> ");
			break;
		case "incorrect answer":
			$("#prompt").text("Incorrect. Type out the correct answer to practice - ");
			break;
		case "quiz prompt A":
			$("#prompt").text("What command performs this function?");
			break;
	}	
}

function convert_to_array(old_hash){
	var keys = Object.keys(old_hash)
	console.log(keys);
	var arr = []
	for (key in Object.keys(old_hash)){
		var temp_hash = {};
		console.log(key);
		console.log(old_hash[key]);
		temp_hash[key] = old_hash[key];
		console.log(temp_hash);
		arr.push(temp_hash);
	}
	return arr;
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return a
}

// shifts the hash to an array, shuffles the terms, then puts them back in a hash
function shuffle_terms(terms_to_shuffle){
	var shuffled_terms = Hash[terms_to_shuffle.to_a.shuffle]
	terms = shuffle(jQuery.makeArray(terms_to_shuffle)[0])
	return shuffled_terms
}

// def quiz(key_terms, quiz_type)
// 	key_terms = shuffle_terms(key_terms)
// 	question, answer = set_question_and_answer(key_terms, quiz_type)
// 	prompt("quiz prompt #{quiz_type}")
// 	puts question
// 	prompt("input")

// 	response = gets.chomp()
// 	evaluate_response(key_terms, response, answer, quiz_type)
// end

// # takes user response. If correct, removes that term from the hash and asks another question. If incorrect,
// # user is given the answer and prompted to write it out.
// def evaluate_response(key_terms, response, answer, quiz_type)
// 	if response == "#{answer}"
// 		key_terms.shift
// 		if key_terms.empty?
// 			prompt("end_quiz")
// 		else
// 			prompt("continue_quiz")
// 			quiz(key_terms, quiz_type)
// 		end
// 	else
// 		prompt("incorrect answer")
// 		puts "#{answer}"
// 		prompt("input")
// 		gets.chomp()
// 		quiz(key_terms, quiz_type)
// 	end
// end

// #prompts the user to choose the type of quiz.

// #sets answer and question according to the type of quiz
// def set_question_and_answer(key_terms, quiz_type)
// 		if quiz_type == "A"
// 		question = key_terms.first.last
// 		answer = key_terms.first.first
// 	else
// 		question = key_terms.first.first
// 		answer = key_terms.first.last
// 	end
// 	return question, answer
// end


// choose_quiz(terms)
