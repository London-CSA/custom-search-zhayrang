function toggleButton(){
    if(document.getElementById("txtSearch").value == "")
    {
        document.getElementById("btnSearch").disabled = true;
    }
    else{
        document.getElementById("btnSearch").disabled = false;
    }
}

function getDate(){
    const d = new Date();
    document.getElementById("date").innerHTML = d;
}
