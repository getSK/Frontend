$(document).ready(function(){
    $("#Bookings_form").validate({
        rules:{
            customer:{
                required:true
            },
            mobilenumber:{
                required:true,
                minlength:10,
                maxlenth:10
            },
            mobilenumber:{
                required:true,
                minlength:10,
                maxlenth:10
            },
            patient_age:{
                required:true,
                maxlength:3
            },
            gender:{
               required:true
            }

        },
        messages:{
            customer:{
                required:"Please enter your name"
            },
            mobilenumber:{
                required:"Please enter a contact number ",
                minlength:"Enter a valid number ",
                maxlength:"Enter a valid number "
            },
            patient_age:{
                required:"Enter your age",
                maxlength:"Enter a valid age"
            },
            gender:{
                required:"Please select anyone"
            }
        }
    });
});