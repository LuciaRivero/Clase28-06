$(document).ready(function(){
	$(".mov").on("click", function(){
			//e.preventDefault();
			idA= $(this).data('id');
			id='#'+ idA;
			$("html,body").animate({scrollTop:$(id).offset().top},800)
		});





	$(".verMas").on("click",function(){
			var vid= $(this).data('id');
			var id= '#'+ vid;
			if($(id).css('display')==="none"){
				$('.extra').hide();
				$(id).css('display','block');
			}else{
				if($(id).css('display')==="block"){
				$(id).css('display','none');
			}
		}
	});
	$('.chiquita').on('click', function(){	
		id = $(this).data('id');
		img = id;
		console.log('estoy');
		$('#imagenGrande').attr('src', img);
			});	//TERMINA CHIQUITA

});