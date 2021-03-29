
function disPlay ( index ) {
    // showCount()
    document.getElementById("question").innerHTML = object.quizs[ index ].question;
    document.getElementById("img").src=object.quizs[ index ].img;
    for( let i = 1; i <= object.quizs[index].answer.length; i++){
        document.getElementById("ans"+ i).innerHTML = object.quizs[ index ].answer[ i-1 ];
    }
    alert( "Bạn đã trả lời đúng: " + object.quizs[ index -1 ].explain);


}
disPlay(0)
function nextQuiz(){
    if(object.current < object.number - 1 ){
        object.current++;
        disPlay(object.current);
    }else {
        alert("Xin chúc mừng, Bạn đã chiến thắng!!")
    }
}
function endGame(){
    if( object.count == 0 ){
        object.endGame();
        disPlay(object.current);
        showCount()
    }
}
function chooseAns(id) {
    let ans = document.getElementById(id).innerHTML;
    if (object.checkAnswer(ans)) {
        showCount()
        nextQuiz()
    }else {
        endGame()
    }
}function showCount(){
    let number = object.count;
    let point = object.point;
    document.getElementById("count").innerHTML ="You also " +number+ " left turn";
    document.getElementById("apoint").innerHTML = point;
}


