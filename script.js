function do_something() {
    document.getElementById("test").hidden=true;
}
function unhide() {
    document.getElementById("test").hidden=false;
}

var text = document.getElementById("test").innerHTML;
var message = "Hello "+text;
alert(message);