function validateAlphabet(x) 
{
    var val = x.value;
    
    if (!val.match(/^[a-zA-Z\s]+$/))
    {
        alert("Only Alphabets Allowed");
        return false;
    }
    
    return true;
}

function validateNumber(x) 
{
    var val = x.value;
    
    if (!val.match(/[0-9]|\./))
    {
        alert("Only Numbers Allowed");
        return false;
    }
    
    return true;
}


function validateEmail(x) 
{
    var val = x.value;
    
    if (!val.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
    {
        alert("Enter Valid Email");
        return false;
    }

    return true;
}


function validatePhonenumber(x) 
{
    var val = x.value;
    
    if (!val.match(/^\d{10}$/))
    {
        alert("Enter Valid Phone Number");
        return false;
    }
    
    return true;
}



function validatePassword(x) 
{
    var val = x.value;
    
    if (!val.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/))
    {
        alert("(6 to 20 characters) Should contain at least one numeric digit, one uppercase and one lowercase letter");
        return false;
    }
    
    return true;
}

function validateRePassword(x) 
{
    var val = x.value;
    var pass= document.getElementById('password');
    if (!val.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/))
    {
        alert("(6 to 20 characters) Should contain at least one numeric digit, one uppercase and one lowercase letter");
        return false;
    }
    if(val!=pass)
    {
      alert("Password Does not match");
      return false;
    }
    
    return true;
}

function validateDOB(x) 
{
   var pickeddate =  new Date(x.value);
    var todayDate =  new Date();
    if (pickeddate>todayDate)
    {
      x.value="";
        alert("Enter Valid Date");
        return false;
    }
    return true;
}
