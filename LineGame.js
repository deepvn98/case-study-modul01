function disPlay(index){
    document.getElementById("question").innerHTML=object.quizs[index].question;
    document.getElementById("img").src=object.quizs[index].img;
    console.log(object.quizs[index])
    for( let i = 1; i <=object.quizs[index].answer.length; i++){
        document.getElementById("ans"+ i).innerHTML=object.quizs[index].answer[i-1];
    }
}
disPlay(0)
function nextQuiz(){
    if(object.current < object.number - 1 ){
        object.current++;
        disPlay(object.current);

    }else {
        alert("Hoàn thành")
    }

}
function chooseAns(id){
    let ans = document.getElementById("id").innerHTML;
    object.chooseAnser(ans);

}