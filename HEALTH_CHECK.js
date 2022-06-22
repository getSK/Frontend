$(document).ready(function(){
    $("#checkup").validate({ 
        rules:{
            customer:{
                required:true,
                maxlength:20
            },
            Address:{
                required:true
            },
            mobilenumber:{
                required:true,
                maxlength:10
            },
            patient_age:{
                required:true,
                minlength:1,
                maxlength:3
            },
            gender:{
                required:true
            },
            tests:{
                required:true
            },
        
        }, 
        messages:{
            customer:{
                required:"Enter your name"
            },
            Address:{
                required:"Enter your address"
            },
            mobilenumber:{
                required:"Please enter your mobile number",
                maxlength:"10 digit mobile number"
            },
            patient_age:{
                required:"Please enter your age",
                minlength:"Atleast enter one digit",
                maxlength:"Maximum 3 digits"
            },
            gender:{
                required:"Please select one option"
            },
            tests:{
                required:"Select any of the test to proceed"
            }

        }

    });
});