var uAnswer=16;
var uChoice=1;
$(document).ready(function(){
	gridInit(16);
	funk(uChoice);
	$('#blkwht').click(function(){
		uChoice=1;
		funk(uChoice);
	});
	$('#color').click(function(){
		uChoice=2;
		funk(uChoice);
	});
	$('#clro').click(function(){
		uChoice=3;
		funk(uChoice);
	});
	$('#trail').click(function(){
		uChoice=4;
		funk(uChoice);
	});
	$('#clr').click(function(){
		$('.piece').css("background-color","green");
		funk(uChoice);
	});
	$('#new').click(function(){
		uAnswer=prompt("Enter grid size:","16");
		while(!$.isNumeric(uAnswer) || uAnswer<1 || uAnswer>100){
			alert("Invalid input! Must be a number between 1 and 100");
			uAnswer=prompt("Enter grid size:","16");
		}
		gridInit(uAnswer);
		funk(uChoice);
	});
});
var gridInit=function(gsize){
	$('#grid').empty();
	for(i=1;i<=gsize*gsize;i++)
	$('#grid').append($("<div class='piece'></div"));
	$('.piece').height(1200/gsize);
	$('.piece').width(1200/gsize);
}
var funk=function(int){
	switch(int){
		case 1:
			$('.piece').mouseenter(function(){
				$(this).css("background-color","white");
		});
		break;
		case 2:
			$('.piece').mouseenter(function(){
				var randC ="rgb("+ Math.floor(Math.random()*254 +1) + "," + Math.floor(Math.random()*254 +1) + "," + Math.floor(Math.random()*254 +1)+")";
				$(this).css("background-color",randC);
		});
		break;
		case 3:
			$('.piece').mouseenter(function(){
				alert($(this).css('background-color'));
		});
		break;
		case 4:
			$('.piece').mouseenter(function(){
				$(this).fadeTo(0,0);
				$(this).css("background-color","white");
			});
			$('.piece').mouseleave(function(){
				$(this).fadeTo('slow',1);
				$(this).css("background-color","green");
			});
		break;
	}
}