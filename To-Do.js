var output="";
function ajax(){

    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4&&this.status==200){
            var json= JSON.parse(this.responseText);
            output=json.length;
            for(i=0;i<json.length;i++){
                myFunction();
                function myFunction() {
                    var table = document.getElementById("table");
                    var row = table.insertRow();
                    var cell1 = row.insertCell();
                    var cell2 = row.insertCell();
                    cell1.innerHTML = json[i].title;
                    if(json[i].completed===true){
                        var input=document.createElement("INPUT");
                        input.setAttribute("type", "checkbox");
                        input.setAttribute("checked", true);
                        input.setAttribute("disabled", true);
                        cell2.appendChild(input);
                    }
                    else{
                        var input2=document.createElement("INPUT");
                        input2.setAttribute("type", "checkbox");
                        input2.setAttribute("name", "cb");
                        input2.setAttribute("onclick","func()");

                        cell2.appendChild(input2); 

  
                    }
                  }
            }
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}
ajax();
function func(){
    var x=document.getElementsByName("cb");
    var j=x.length;
    var count=0;
    for(var i=0;i<j;i++){
        if(x[i].checked==true){
             count++;
            }
        } 
        var promise=new Promise(function(resolve,reject){ 
        if(count==5){
            return resolve("You have completed 5 Tasks");
        }      
        else{
            return reject("select five items");
        }

    });
promise
.then(function(s){
    alert(s);
})
.catch(function(y){
    console.log(y);
})
}
