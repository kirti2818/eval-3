// fill in javascript code here
document.querySelector("form").addEventListener("submit",myFunction)
function myFunction(event){
    event.preventDefault()
    var nam=document.querySelector("form").name.value;
    var id=document.querySelector("form").employeeID.value;
    var dep=document.querySelector("form").department.value;
    var ex=document.querySelector("form").exp.value;
    var mail=document.querySelector("form").email.value;
    var mobile=document.querySelector("form").mbl.value;
    console.log(nam,id,dep,ex,mail,mobile)

    var row=document.createElement("tr")
    var td1=document.createElement("td")
    td1.innerText=nam

    var td2=document.createElement("td")
    td2.innerText=id;

    var td3=document.createElement("td")
    td3.innerText=dep;

    var td4=document.createElement("td");
    td4.innerText=ex;

    var td5=document.createElement("td")
    td5.innerText=mail;

    var td6=document.createElement("td")
    td6.innerText=mobile;

    var td7=document.createElement("td")
   
    if(ex<=1){
        td7.innerText="Fresher"
    }
    else if(ex<=2 || ex<=5){
        td7.innerText="Junior"
    }
    else if(ex>5){
        td7.innerText="Senior"
    }

    var td8=document.createElement("td")
    td8.innerText="Delete"
    td8.style.cursor="pointer"
    td8.addEventListener("click",remove)
    function remove(event){
        event.target.parentNode.remove();
    }
    row.append(td1,td2,td3,td4,td5,td6,td7,td8)
    document.querySelector("tbody").append(row)
    
}