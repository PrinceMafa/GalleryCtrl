$("#btn-save").click( function() {
    event.preventDefault();
    var text = $("#textarea").val();
    var filename = $("#input-fileName").val()
    var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
    saveAs(blob, filename+".txt");
  });
  

//form1 is for the signup, form2 is for the loginpage
const form = document.getElementById("form");
const form = document.getElementById("form");
const username = document.getElementById("user");
const password = document.getElementById("password");
const name = document.getElementById("name");
const surnname = document.getElementById("surname");
const username = document.getElementById("username");
const phone = document.getElementById("phonenumber");
const email = document.getElementById("email");
const passwod1 = document.getElementById("passwordSign");
const passwod2 = document.getElementById("passwordComfirm");

var regularEmail = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
function validation()
{
    if(username=="admin" && password == "user")
    {
        alert("login successfully");
        return false;
    }
    else
    {
        if(email.match(regularEmail))
        {
            if (document.getElementById("dot1").checked || document.getElementById("dot2").checked || document.getElementById("dot3"))
            {
                if (phone.length == 10)
                {
                    if(passwod1==passwod2)
                    {
                        alert("Success!!!");
                    }
                }
                else
                {
                    alert("phone number must be 10 digits in length!");
                }
            }
            else
            {
                alert("Please select your gender");
            }
        }
        else
        {
            alert("Invalid email address")
        }
    }
}