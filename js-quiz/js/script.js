function submitAnswers () {
	var totalQues = 5;
	var score = 0;

	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;

	//validation
	for (var i = 1; i <= totalQues; i++) {
		if (eval('q' + i) == null || eval('q' + i) == '') {
			alert(`Please answer question ${i}`);
			return false;
		}
	}
	
	//correct answers
	var answers = ["a", "b", "d", "b", "d"];

	//check answers
	for (var i = 1; i <= totalQues; i++) {
		if (eval('q' + i) == answers[i-1]) {
			score += 1;
		}
	}


    var result = document.getElementById('results');
    var newElement = document.createElement('h3');
    newElement.setAttribute('id', 'score');
    newElement.innerHTML = `You scored ${score} out of ${totalQues}.`;
    result.appendChild(newElement);
	
	document.getElementById('submitButton').disabled = true;
	//alert(`You scored ${score} out of ${totalQues}.`);
	
	return false;

}
