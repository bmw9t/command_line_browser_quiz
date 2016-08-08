var terms = {"answers":[
	{"pwd": "print working directory"}, 
	{"hostname": "my computer's network name"},
	{"mkdir": "make directory"}, 
	{"cd": "change directory"}, 
	{"ls": "list directory"}, 
	{"rmdir": "remove directory"}, 
	{"pushd": "push directory"}, 
	{"popd": "pop directory"}, 
	{"cp": "copy directory"}, 
	{"mv": "move a file or directory"}, 
	{"less": "page through a file"}, 
	{"cat": "print the whole file"}, 
	{"xargs": "execute arguments"}, 
	{"find": "find files"}, 
	{"grep": "find things inside files"}, 
	{"man": "read a manual page"}, 
	{"apropos": "find what man page is appropriate"}, 
	{"env": "look at your environment"}, 
	{"echo": "print some arguments"}, 
	{"export": "export/set a new environment variable"}, 
	{"exit": "exit the shell"}, 
	{"sudo": "DANGER! become super root user root DANGER!"}, 
	{"chmod": "change permission modifiers"}, 
	{"chown": "change ownership"},
	{"$|$": "Takes the output from the left command and pipes it to the command on the right"}, 
	{"$<$": "sends input from the right to the program or command on the left"}, 
	{"$>$": "takes the output of the command on the left and writes it to the file on the right"}, 
	{"$>>$": "takes the output of the command on the left and appends it to the right"}]
};

function generate_prompt(use_case){
	switch (use_case){
		case "end quiz":
			$("#prompt").append("Congratulations - you've finished all the questions.<br>");
			break;
		case "continue quiz":
			$("#prompt").append("Correct! Here is another.<br>");
			break;
		case "input":
			$("#prompt").append("<div id=\"prompt_cursor\">></div> <form id=\"target\"><input type=\"text\" name=\"response\" autofocus><br>");
			break;
		case "incorrect answer":
			$("#prompt").append("Incorrect. Type out the correct answer to practice - <br>");
			break;
		case "quiz prompt":
			$("#prompt").append("What command performs this function?<br>");
			break;
	}	
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return a;
}

function quiz(key_terms){
	console.log(key_terms.length);
	key_terms = shuffle(key_terms);
	var answer = Object.keys(key_terms[0]);
	var question = key_terms[0][answer];
	generate_prompt("quiz prompt");
	$("#prompt").append(question + "<br>");
	generate_prompt("input");
	$("#target").submit(function(event){
		event.preventDefault();
		var response = $("input:first").val();
		evaluate_response(key_terms, response, answer);
	});
}
// takes user response. If correct, removes that term from the hash and asks another question. If incorrect,
// user is given the answer and prompted to write it out.
function evaluate_response(key_terms, response, answer){
	if (response == answer){
		key_terms.shift();
		if (key_terms.length < 1){
			alert('QUIZ ENDED');
			generate_prompt("end quiz");
		}
		else {
			generate_prompt("continue quiz");
			$("#prompt").text("");
			quiz(shuffle(key_terms));
		}
	}
	else {
		$("#prompt").text("");
		generate_prompt("incorrect answer");
		$("#prompt").append(answer + "<br>");
		generate_prompt("input");
		$("#target").submit(function(event){
			event.preventDefault();
			$("#prompt").text("");
			quiz(shuffle(key_terms));
		});
	}
}

$(document).ready(function(){
	quiz(terms.answers);
	$("input").click();
});
