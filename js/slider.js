$(document).ready(function(){
    var imgItems = $('.slider li').length;//numero de slides o imagenes
     var paginacionItems = $('.paginacion li').length;//numero de slides o imagenes
    var imgPos = 1;
    var imgPre = 1;
   
    // Agrego la paginacion con un ciclo for
    //for(i = 1; i <=imgItems; i++){
        
      //   $('.paginacion').append('<li><span><i class="fa fa-circle" aria-hidden="true"></i></span></li>');}
    
    
    //...............................
     
    $('.slider li').hide();//ocultamos los slides
    $('.slider li:first').show();//mostramos solo el primer slide con li:first seudoclase.
    //$('.paginacion .li1').css({'background-color': 'red'});//Damos estilos al primer item de la p paginacion
 
    //Ejecutamos las funciones
    /*$('.paginacion li').css({
                              'width': '4rem',
    'height': '4rem',
    'border-radius': '50%',
    'line-height': '4rem'});*/
    $('.paginacion li').click(paginacion);
    $('.right').click(nextSlider);
    $('.left span').click(prevSlider);
    
    //funciones......................................................
    
    
    
    function paginacion() {
        
  var paginacionPos = $(this).index()+1;

  switch(paginacionPos) {
          
    case 1:
          
      $('.slider li').hide();
      $('.paginacion li').removeClass("active");
      $(this).addClass("active");
      $('.slider li:nth-child('+ paginacionPos +')').toggle('slide');
          
      break;
    case 2:
       $('.slider li').hide();
           $('.paginacion li').removeClass("active");
      $(this).addClass("active");
        $('.slider li:nth-child('+ paginacionPos +')').toggle('slide');
      break;
    case 3:
       $('.slider li').hide();
              $('.paginacion li').removeClass("active");
      $(this).addClass("active");
        $('.slider li:nth-child('+ paginacionPos +')').toggle('slide');
      break;
    case 4:
       $('.slider li').hide();
              $('.paginacion li').removeClass("active");
      $(this).addClass("active");
        $('.slider li:nth-child('+ paginacionPos +')').toggle('slide');
      break;
    case 5:
       $('.slider li').hide();
              $('.paginacion li').removeClass("active");
      $(this).addClass("active");
        $('.slider li:nth-child('+ paginacionPos +')').toggle('slide');
      break;
    case 6:
       $('.slider li').hide();
       $('.paginacion li').removeClass("active");
      $(this).addClass("active");
        $('.slider li:nth-child('+ paginacionPos +')').toggle('slide');
      break;
    
  }
  
}
     
    function nextSlider(){
        
        if( imgPos >= imgItems){
            
             imgPos = 1;
        }else{
                
                imgPos++;
           
        }
        
         $('.paginacion li').css({'background-color': '#000000'});
          $('.paginacion li:nth-child('+ imgPos +')').css({'background-color': '#E5B326'});
        
        $('.slider li').hide();
        $('.slider li:nth-child('+ imgPos +')').toggle('slide');
    }
    

    
});









