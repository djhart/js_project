$(document).ready(function(){
	
	var reset = function(row){
		for (i = 0; i<row; i++){
			for (j = 0; j<row; j++){
				$('#wrapper').append("<div class = 'block'></div>");
			};
		};
	};
	var rand = function(){
		$('.block').on('mouseenter',function(){
			$(this).css('background-color','#'+ Math.floor(Math.random()*16777215).toString(16));
		});
	};
	var trail = function(op){
		$('.block').fadeTo('fast',.01);
		$('.block').on('mouseenter',function(){
			$(this).css('opacity','1');
			$(this).fadeTo('slow',op);
		});
	};
	var solid = function(color){
		
		$('.block').on('mouseenter',function(){
			$(this).css('background-color',color);
		});
	};

	var color = 'blue';
	var row = 16;
	reset(row);
	solid(color);

	$('#reset').on('click', function(){
		$('#wrapper').empty();
		row = prompt("How many rows", row);
		reset(row);
		$('.block').css({'height':960/row + 'px','width':960/row  + 'px'});
		solid(color);
		document.getElementById("trail").checked = false;
	});

	$('#trail').on('click',function(){
		var trailBox = document.getElementById("trail").checked;
		if(trailBox === true){
			var op = .01;
			trail(op);
		} else {
			$('#wrapper').empty();
			reset(row);	
			solid(color);					
		};
	});

	$('#rainbow').on('click',function(){
		rand();
	});

	$('#solid').on('click',function(){
		color = prompt("what color");
		solid(color);
	});	
});