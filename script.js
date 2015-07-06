$(document).ready(function(){
	var row = 16;
	
		for (i = 0; i<row; i++){
			for (j = 0; j<row; j++){
				$('#wrapper').append("<div class = 'block'></div>");
			};
		};
	$('.block').on('mouseenter',function(){
		$(this).css('background-color','#'+ Math.floor(Math.random()*16777215).toString(16));
	});

	$('button').on('click', function(){
		$('#wrapper').empty();

		row = prompt("How many rows", row);
		for (i = 0; i<row; i++){
			for (j = 0; j<row; j++){
				$('#wrapper').append("<div class = 'block'></div>");
			};
		};
		$('.block').css({'height':960/row + 'px','width':960/row + 'px'});
		$('.block').on('mouseenter',function(){
			$(this).css('background-color','#'+ Math.floor(Math.random()*16777215).toString(16));
		});
	});
	//$('.block').on('mouseenter',function(){
		//$(this).css('background-color','blue');//'#'+ Math.floor(Math.random()*16777215).toString(16));
	//});
});