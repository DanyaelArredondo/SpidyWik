$(document).ready(function(){
	$('.menu li:has(ul)').click(function(e){
		e.preventDefault(); /*evita que cambie la direccion de la página*/
		/*this:hace referencia a el elemento clickeado*/
		if($(this).hasClass('activado')){ /*Ciclo if para el deslizamineto de las barras*/
			$(this).removeClass('activado');
			$(this).children('ul').slideUp();
		}
		else{
			$('.menu li ul').slideUp();
			$('.menu li').removeClass('activado');
			$(this).addClass('activado')
			$(this).children('ul').slideDown();
		}
	});
	
	$('btn-menu').click(function(){
		$('.contenedor-menu .menu').slideToggle();
	});
	
	$(window).resize(function(){
		if ($(document).width() > 450){
			$('.contenedor-menu .menu').css({'display' : 'block'})
		}
		if ($(document).width() < 450){
			$('.contenedor-menu .menu').css({'display' : 'none'})
			$('.menu li ul').slideUp();
			$('.menu li').removeClass('activado');
		}			
	});
	
	$('.menu li ul li a').click(function(){
		window.location.href = $(this).attr("href");
	});
});

