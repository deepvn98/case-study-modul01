//Hiển thị
function disPlay ( index ) {
    myMusic()
    document.getElementById("question").innerHTML = object.quizs[ index ].question;
    document.getElementById("img").src=object.quizs[ index ].img;
    for( let i = 1; i <= object.quizs[index].answer.length; i++){
        document.getElementById("ans"+ i).innerHTML = object.quizs[ index ].answer[ i-1 ];
    }
    alert( "Bạn đã trả lời đúng: " + object.quizs[ index - 1 ].explain);
}
disPlay(0)
//Điều kiện để tiếp tục chơi
function nextQuiz(){
    if(object.current < object.number - 1 ){
        object.current++;
        disPlay(object.current);
    }else {
        alert("Xin chúc mừng, Bạn đã chiến thắng!!")
    }
}
//Điều kiên kết thúc trò chơi
function endGame(){
    if( object.count == 0 ){
        object.endGame();
        disPlay(object.current);
        showCount()
    }
}
//Các trường hợp người chơi chọn đáp án.
function chooseAns(id) {
    let ans = document.getElementById(id).innerHTML;
    if (object.checkAnswer(ans)) {
        musicTrue()
        showCount();
        nextQuiz();
    }else {
        musicFales()
        endGame()
    }
}
//Hiển thị điểm số
function showCount(){
    let number = object.count;
    let point = object.point;
    document.getElementById("count").innerHTML ="You also " +number+ " left turn";
    document.getElementById("apoint").innerHTML ="Point: " + point;
}
//nhạc khi trả lời đúng
function musicTrue(){
    document.getElementById("happy1").play();
}
function musicFales(){
    document.getElementById("ohno").play();
}
function myMusic(){
    let myMusic = document.getElementById("mymusic");
    let icon = document.getElementById("icon");
    icon.onclick = function (){
        if (myMusic.paused){
            myMusic.play()
            icon.src = "picter/pause.png"
        }else {
            myMusic.pause();
            icon.src = "picter/play.png"

        }

    }
}
