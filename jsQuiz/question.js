class Question {
   constructor (text, choices, answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
}

class Quiz {
		constructor(questions) {
			this.score = 0;
	this.questions = questions;
			this.questionIndex = 0;
}	

	
	getQuestion() {

		return this.questions[this.questionIndex];
	
}

}

	isCorrectAnswer(choice){
   			 return this.answer === choice;
    		}



	guess(answer) {
    if(this.getQuestion().isCorrectAnswer(answer)) {
   	 this.score++;
    		}
		
		this.questionIndex++;
}
