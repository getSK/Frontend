$(document).ready(function(){
    $("#index_signin").validate({

        rules:{
            mobile_number:{
                required:true,
                digits:true,
                minlength:10,
                maxlength:12
            }


        },
        messages:{
            mobile_number:{
                required:"enter your mobilenumber"
                
            }
        }

    })


})