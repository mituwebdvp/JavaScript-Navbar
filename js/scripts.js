document.getElementById("menubar").onclick = function() {
    document.getElementById("navbar").style.display = "block";
    document.getElementById("close").style.display = "block";
}

document.getElementById("close").onclick = function() {
    document.getElementById("navbar").style.display = "none";
    document.getElementById("close").style.display = "none";
}



            // login form onclick


var submitButton = document.getElementById("submit");
var nameValue = document.getElementById("name");


submitButton.onclick = function(e) {
    e.preventDefault();
    var value = nameValue.value ;
    // console.log(value);
    document.getElementById("lorem").innerText = value;
}


var select = document.getElementById("selectId");
    

// show value

select.onchange = function() {
    console.log(select.value);
}


