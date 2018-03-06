function validateForm() {
    var x = document.forms["myForm"]["email"].value;
	var y = document.forms["myForm"]["name"].value;
	var z = document.forms["myForm"]["message"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (y == "") {
        alert("Name must be filled out");
        return false;
    }
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;
    }
	if (z == "") {
        alert("Don't forget to enter your message!");
        return false;
    }
}
