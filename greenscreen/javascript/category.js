$(document).ready(function()
{
    var status=0;
    
    $("#category").click(function()        //for category dropdown
        
        {
            
            if(status===0)
            {
                $("#category-list").fadeTo("slow",1);
                status=1;
                console.log("block");
            }

            else if(status===1)
            {
                $("#category-list").fadeTo("slow",0); 
                status=0;
                console.log("none");
            }
            
        }
    );




    $(".developer").click(function()         //for footer
    {
        $(".infodown").slideToggle("fast");
    });


    $(".btn-login").click(function()      //for login box to appear
    {
        $(".login").css("display","flex");
        $(".login").fadeTo(800,1);

        console.log("login on");


    });

    $(".cross").click(function()            //for login box to disappear
    {
        $(".login").fadeTo(500,0);
        console.log("login off");
    })
    

});