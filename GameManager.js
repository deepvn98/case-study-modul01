class GameManager {
    constructor( number ) {
        this.quizs = [];
        this.number = number;
        this.current = 0;
    }
    checkAnswer(ans){
        if(ans === this.quizs[this.current].correct){
            return true;
        }else {
            return false;
        }
    }
    endGame(){
       alert("bạn đã trả lời sai, vui lòng chơi lại từ đầu!");
       this.current = 0;
    }
    addQuiz(quiz){
        this.quizs.push(quiz)
    }
}
let object = new GameManager(19);
object.addQuiz( quiz1 );
object.addQuiz( quiz2 );
object.addQuiz( quiz3 );
object.addQuiz( quiz4 );
object.addQuiz( quiz5 );
object.addQuiz( quiz6 );
object.addQuiz( quiz7 );
object.addQuiz( quiz8 );
object.addQuiz( quiz9 );
object.addQuiz( quiz10 );
object.addQuiz( quiz11 );
object.addQuiz( quiz12 );
object.addQuiz( quiz13 );
object.addQuiz( quiz14 );
object.addQuiz( quiz15 );
object.addQuiz( quiz16 );
object.addQuiz( quiz17 );
object.addQuiz( quiz18 );
object.addQuiz( quiz19 );


