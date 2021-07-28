function calc(){
    
    var amount = document.getElementById("amount").value;
    var totPerson = document.getElementById("noper").value;
    var QoS = document.getElementById("opt").value;
    if(QoS == 0){
        alert("Select quality of service");
        return false;
    }

    if(amount == '' || amount <= 0){
        alert("Enter correct amount");
    }

    if(totPerson == "" || totPerson <= 1){
        document.getElementById("tip").style.display = "none";
    }
    else{
        document.getElementById("tip").style.display = "block";
    }
    
    var total = (amount*QoS)/totPerson;
    total = total.toFixed(2);
    document.getElementById('res').style.display = "block";
    document.getElementById("tip").innerText = total;
    
}



function reset(){
    document.getElementById("tip").style.display = "none";
    document.getElementsById('myForm').reset();
    
}