document.getElementById('main-form').addEventListener("submit", chekForm);

function chekForm(event) {
event.preventDefault();
var el = document.getElementById('main-form');    

var name = el.name.value;
var pass = el.pass.value;
var repass = el.repass.value;
var state = el.state.value;

var fail = "";

if(name == "" || pass == "" || state == "")
    fail = "Enter the Their Field";
else if(name.lenght <= 1 || name.lenght > 50)
    fail = "Enter the correct name";
else if(pass != repass)
    fail ="Password is not identic"
else if(pass.split("&").lenght > 1)
    fail="Uncorrect Password";

if(fail !="") {
    document.getElementById('error').innerHTML = fail;
    return false;
} else {
    alert("Correctly field in")
    window.location='profile.html';
}
    return false;
}
