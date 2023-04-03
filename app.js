let inputage=document.getElementById('q_age');
let phone=document.getElementById('q_owns_phone');
let err=document.getElementById('errors-holder');
let res=document.getElementById('result-holder');
let age=inputage.value;
function ageChange(e)
{
    e.preventDefault();
    if(age<5)
    {
        if(age==0)
             {
                   err.innerHTML='Please choose age';
             }
             else{
                err.innerHTML='You need to be atleast 5 years old to participate';
             } 
    }
}

function handleSubmit(e)
{
    e.preventDefault();
    if(phone.checked)
    {
        if(age<13)
        {
            res.innerHTML='You are too young to have a phone';
        }
        else{
            res.innerHTML='Use your phone in moderation';
        }
    }
    else{
        if(age<13)
        {
            res.innerHTML='You will get a phone soon';
        }
        else
        {
            res.innerHTML='You should get a phone';
        }
    }
}