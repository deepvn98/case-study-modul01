function checkForm(input){
    if(input == ''){
        return true;
    }
    return false;
}
function check1(){
    let firstName = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    let gmail = document.getElementById("gmail").value;
    if(checkForm(firstName)|| checkForm(lastName)|| checkForm(gmail)){
        alert("Bạn cần điền đầy đủ thông tin")
    }else {
        window.location = "/casetudy/index.html";
    }
}
