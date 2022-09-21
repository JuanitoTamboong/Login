 function validate()
        {
           var username = document.getElementById('username').value;
           var password = document.getElementById('password').value;
           if(username == "IQpips" && password == "Block1"){
           alert("Login Succesfully");
           window.location = "https://iq-pips.netlify.app/";
               return true;
           }
         
           else if(username !== "IQpips" && password !== "Block1"){
               alert("wrong username or password");
               return false;
            }
        }
        function toggle(){
            var ShowPass = document.getElementById('password');
            if(ShowPass.type === "password"){
            ShowPass.type = "text";
            }
            else{
                ShowPass.type = "password"
            }
        }
