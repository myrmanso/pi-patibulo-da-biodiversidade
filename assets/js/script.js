$(document).ready(function(){

    //abre menu hamburguer
    $('.menuHamburguer').click(function(event){  
        $('.menuDropdown').slideToggle();     
    });

    // scroll suave para seções a partir do menu hamburguer
    $('.menuDropdown--link').click(function(event){  
        $('.menuDropdown').slideToggle();
        if(this.hash !== ""){
            let hash = this.hash;
            $('html, body').animate({
                scrollTop:$(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }        
    });

});