/*global $*/
 
$(function() {
    var i = 0;
        $("#top-nav-resume").click(function(){
        i=0;
    });

        $('#resume').hover(function(){  
            if( i == 0){
            $('progress').each(function() {
                var max = 0; 
                max = $(this).val();
                $(this).val(0).animate({ value: max }, 
                { duration: 2000});
    	    });
    	    i =10;
            }
        })
        
    
})
