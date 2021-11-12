//form1 is for the signup, form2 is for the loginpage
const form = document.getElementById("form");
const form = document.getElementById("form");
const username = document.getElementById("user");
const password = document.getElementById("password");
const name = document.getElementById("name");
const surnname = document.getElementById("surname");
const username = document.getElementById("username");
const phone = document.getElementById("phonenumber");
const passwod1 = document.getElementById("passwordSign");
const passwod2 = document.getElementById("passwordComfirm");

function validation()
{
    if(username=="admin" && password == "user")
    {
        alert("login successfully");
        return false;
    }
    else
    {
        //
    }
}