window.onload = function(){
    creat_Element();
    validation();
}

// -----------------
// creat all tags
//----------------------
function creat_Element(){
    var main_box = document.getElementById("main-box");
    var form = document.createElement("form");
    form.id = "form";
    form.style.padding = "20px";

    var first_name = document.createElement("input");
    first_name.id ="first-name";
    first_name.type = "text";
    first_name.name = "first_name";
    // first_name.required = "required";
    first_name.placeholder = "Enter your first name";
    first_name.setAttribute("onchange","test()");

    var fname_notice = document.createElement("p");
    fname_notice.innerHTML = "";
    fname_notice.id = "fname_notice";

    var last_name = document.createElement("input");
    last_name.type = "text";
    last_name.placeholder = "Enter your last name";
    last_name.name = "last_name";
    // last_name.required = "required";
    last_name.id = "last-name";

    var lname_notice = document.createElement("p");
    lname_notice.innerHTML = "";
    lname_notice.id = "lname_notice";


    var email = document.createElement("input");
    email.type = "email";
    email.placeholder = "Enter your email id";
    email.id = "email";
    email.name = "email";
    // email.required = "required";

    var email_notice = document.createElement("p");
    email_notice.innerHTML = "";
    email_notice.id = "email_notice";

    var phone = document.createElement("input");
    phone.type = "number";
    phone.name = "phone";
    phone.id = "phone-number";
    phone.placeholder = "Enter your number";
    // phone.required = "required";

    var phone_notice = document.createElement("p");
    phone_notice.innerHTML = "";
    phone_notice.id = "phone_notice";

    var dob = document.createElement("input");
    dob.type = "date";
    dob.id = "dob";
    dob.placeholder = "Select your date of birth";
    // dob.required = "required";
    dob.name = dob;

    var password = document.createElement("input");
    password.type = "password";
    password.name = "password";
    password.id ="password";
    password.placeholder = "Enter your password";
    // password.required = "required";

    var password_notice = document.createElement("p");
    password_notice.innerHTML = "";
    password_notice.id = "password_notice";

    var con_password = document.createElement("input");
    con_password.type = "password";
    con_password.name = "confirm_password";
    con_password.id = "confirm-password";
    con_password.placeholder = "Confirm your password";
    // con_password.required = "required";

    var con_password_notice = document.createElement("p");
    con_password_notice.innerHTML = "";
    con_password_notice.id = "con_password_notice";

    var address = document.createElement("textarea");
    address.placeholder = "Enter your address";
    address.id ="address";
    address.name = "address";
    address.style.width = "100%";
    address.style.height = "100px";

    var submit_btn = document.createElement("button");
    submit_btn.type = "submit";
    submit_btn.innerHTML = "SUBMIT";
    submit_btn.id = "button";
    

    main_box.append(form);

    form.append(first_name);
    form.append(fname_notice);
    createBr(2, form);
    form.append(last_name);
    form.append(lname_notice);
    createBr(2, form);
    form.append(email);
    form.append(email_notice);
    createBr(2, form);
    form.append(phone);
    form.append(phone_notice);
    createBr(2, form);
    form.append(dob);
    createBr(2, form);
    form.append(password);
    form.append(password_notice);
    createBr(2, form);
    // form.append(con_password);
    // form.append(con_password_notice);
    // createBr(2, form);
    form.append(address);
    createBr(2, form);
    form.append(submit_btn);
}

function createBr(number, id) {

    for(let i=0;i<number;i++) {
        id.appendChild( document.createElement('br'));
    }
}

function validation(){
    var form = document.getElementById("form");
    var first_name = document.getElementById("first-name");
    var fname_notice = document.getElementById("fname_notice");
    var last_name = document.getElementById("last-name");
    var lname_notice = document.getElementById("lname_notice");
    var email = document.getElementById("email");
    var email_notice = document.getElementById("email_notice");
    var phone = document.getElementById("phone-number");
    var phone_notice = document.getElementById("phone_notice");
    var dob = document.getElementById("dob");
    var password = document.getElementById("password");
    var password_notice = document.getElementById("password_notice");
    var address = document.getElementById("address");
    var button = document.getElementById("button");
    var check_con_password ;

    first_name.oninput = function(){
        if(this.value != "")
        {
            if(!isNaN(this.value))
            {
                fname_notice.style.display = "block";
                fname_notice.style.color = "red";
                fname_notice.style.fontWeight = "bold";
                fname_notice.innerHTML = "** only characters are allowed !";
            }
           
        }
        else{
            fname_notice.style.display = "none";
        }
      
    }
    first_name.onchange = function(){
         if((this.value.length <= 2) || (this.value.length >= 20))
        {
            fname_notice.style.display = "block";
            fname_notice.style.color = "red";
            fname_notice.style.fontWeight = "bold";
            fname_notice.innerHTML = " ** Username length must be between 2 and 20 !";
        }
        else{
            fname_notice.style.display = "none";
        }
    }
    //--------------------
    // last name validation
    //-------------------------
    last_name.oninput = function(){
        if(this.value != "")
        {
            if(!isNaN(this.value))
            {
                lname_notice.style.display = "block";
                lname_notice.style.color = "red";
                lname_notice.style.fontWeight = "bold";
                lname_notice.innerHTML = "** only characters are allowed !";
                
            }

        }
        else{
            lname_notice.style.display = "none";
        }
       
    }
    last_name.onchange = function(){
        if((this.value.length <= 2) || (this.value.length >= 20))
       {
                lname_notice.style.display = "block";
                lname_notice.style.color = "red";
                lname_notice.style.fontWeight = "bold";
                lname_notice.innerHTML = " ** Username length must be between 2 and 20 !";
       }
       else{
            lname_notice.style.display = "none";
       }
   }
    //-----------------
    //email validation
    //---------------------
    // email.oninput = function(){
    //     if(this.value != "")
    //     {
    //         if(this.value.charAt(0).match('@') <= 0)
    //         {
    //             email_notice.style.display = "block";
    //             email_notice.innerHTML = "** @ Invalid Position !";
    //             email_notice.style.color = "red";
    //             email.style.fontWeight = "bold";
    //         }
    //         else if(this.value.match('@') <=0 || this.value.match('gmail.com') <=0 || this.value.match('yahoomail.com') <= 0)
    //         {
    //             email_notice.style.display = "block";
    //             email_notice.innerHTML = "** @ please enter correct email !";
    //             email_notice.style.color = "red";
    //             email.style.fontWeight = "bold";
    //         }
            
    //     }
    //     else{
    //         email_notice.style.display = "none";
    //     }
    // }
    // ------------------
    // phone validation
    // ----------------------
    phone.oninput = function(){
        if(this.value != "")
        {
            if(this.value.length != 10)
            {
                phone_notice.style.display = "block";
                phone_notice.innerHTML = "** @ please enter a valid number !";
                phone_notice.style.color = "red";
                phone.style.fontWeight = "bold";
            }
            else if(isNaN(this.value))
            {
                phone_notice.style.display = "block";
                phone_notice.innerHTML = "** @ please enter a valid number !";
                phone_notice.style.color = "red";
                phone.style.fontWeight = "bold";
            }
            else{
                phone_notice.style.display = "none";
            }
        }
        else{
            phone_notice.style.display = "none";
        }
    }
    // ------------
    // password
    // ----------------
    password.oninput = function(event){
        var upper = /[A-Z]/g;
        var lower = /[a-z]/g;
        var num = /[0-9]/g;
        var alpha = /[~|`|!|@|#|$|%|^|&|*|(|)|_|-|=|=]/g;
        password_notice.style.color = "red";
        password_notice.style.fontWeight = "bold";
                        var check_upper = this.value.charAt(0).match(upper) ? this.value : alert("First letter should be capital");
                          var check_lower = check_upper.match(lower) ? check_upper : alert("use at least one small number");
                          var check_number = check_lower.match(num) ? check_lower : alert("use at least one number");
                          var check_alpha = check_number.match(alpha) ? check_number : alert("use at least one alpha numeric number");
                          
                          
        
    }
    // data 
    form.onsubmit = function(){
        var data = {first_name : first_name.value,last_name:last_name.value,email:email.value,phone:phone.value,dob:dob.value,password:password,address:address.value};
        var string = JSON.stringify(data);
        alert("your data :"+" "+string);
    }
    
   
}


