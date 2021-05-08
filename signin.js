let user=document.getElementById("user");
let pass=document.getElementById("pass");


function validation(){
    if(user.value==""||pass.value==""){
        alert("Cannot be Empty");
        return false;
    }
    else if(user.value=="admin"&&pass.value==12345){
        return true;
    }
    else{
        alert("Username or Password is Invaild");
        return false;
    }
}
