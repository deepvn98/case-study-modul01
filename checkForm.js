function checkForm(input){
    if(input == ''){
        return true;
    }
    return false;
}
function check1(){
    let firstName = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    if(checkForm(firstName)|| checkForm(lastName)){
        alert("Bạn cần điền đầy đủ thông tin")
    }else {
        alert("chào mừng "+firstName+" "+lastName+" chúc bạn chơi game vui vẻ!");
        window.location = "index.html";
    }
}
