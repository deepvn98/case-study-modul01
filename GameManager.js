class GameManager {
    constructor( number ) {
        this.count = 3 ;
        this.quizs = [];
        this.number = number;
        this.current = 0;
        this.point = 0;
    }
    checkAnswer(ans){
        if(ans === this.quizs[this.current].correct){
            this.point += 10;
            return true;
        }else {
            this.count--;
            showCount()
            return false;
        }
    }
    endGame(){
        if(this.count == 0){
            alert("bạn đã trả lời sai, vui lòng chơi lại từ đầu!" + "Điểm của bạn là: " + this.point);
            this.current = 0;
            this.count = 3;
            this.point =0;
            showCount()
        }
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


