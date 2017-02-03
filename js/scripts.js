function main(){
	
	'use strict';
	var esMenu = false;
	
	/*-------------------------------------*/
	/*Botón IrArriba*/
	/*-------------------------------------*/
	$(window).scroll(function() {
		if($(this).scrollTop() !== 0) {
			$('#btnIrArriba').fadeIn();	
		} else {
			$('#btnIrArriba').fadeOut();
		}
	});
	
	$('#btnIrArriba').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});

	/*-------------------------------------*/
	/*-------------------------------------*/
	var irModulo = function(modulo){
		$('html, body').animate({
			scrollTop: $(modulo).offset().top
		}, 1000);
	}

	$( ".menu li" ).click(function() {
		var modulo = '';
		
		switch($(this).index()){
			case 0: modulo = '.mod-filosofia'; break;
			case 1: modulo = '.mod-demo'; break;
			case 2: modulo = '.mod-documentacion'; break;
			default: modulo = ''; 
		}
		
		irModulo(modulo);

		if(esMenu){
			$("header").removeClass("abierto");
			esMenu = false;
		}

	});

	/*-------------------------------------*/
	/*-------------------------------------*/
	$('#btnIrFilosofia').click(function() {
		irModulo('.mod-filosofia');
	});

	/*-------------------------------------*/
	$( "#btn-menu" ).click(function() {
		esMenu = true;
		$("header").toggleClass("abierto");
	});

}

$(document).ready(main);