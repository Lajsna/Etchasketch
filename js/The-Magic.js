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
	$('#grid').append($("<div class='piece' data-red='0' data-green='0' data-blue='0' data-i='0'></div"));
	$('.piece').height(1200/gsize);
	$('.piece').width(1200/gsize);
}
var funk=function(int){
	$('.piece').data('i',0);
	$('.piece').unbind("mouseenter mouseleave");
	switch(int){
		case 1:
			$('.piece').bind("mouseenter",function(){
				$(this).css("background-color","white");
		});
		break;
		case 2:
			$('.piece').bind("mouseenter",function(){
				$(this).css("background-color","rgb("+Math.floor(Math.random()*254+1)+","+Math.floor(Math.random()*254+1)+","+Math.floor(Math.random()*254+1)+")");
		});
		break;
		case 3:
			$('.piece').bind("mouseenter",function(){
				if($(this).data("i")===0){
					$(this).data("red", Math.floor(Math.random()*254 +1));
					$(this).data("green", Math.floor(Math.random()*254 +1));
					$(this).data("blue", Math.floor(Math.random()*254 +1));
					$(this).css("background-color","rgb("+$(this).data('red')+","+$(this).data('green')+","+$(this).data('blue')+")");
					$(this).data("i",1);
				}
				else if($(this).data('i')<=10){
					var i=$(this).data('i');
					var pcrvena = Math.floor($(this).data('red')/10 * i);
					var pzelena = Math.floor($(this).data('green')/10 * i);
					var pplava = Math.floor($(this).data('blue')/10 * i);
					i++;
					$(this).css("background-color","rgb("+($(this).data('red')-pcrvena)+","+($(this).data('green')-pzelena)+","+($(this).data('blue')-pplava)+")");
					$(this).data('i',i);
				}
			});
		break;
		case 4:
			$('.piece').bind("mouseenter",function(){
				$(this).fadeTo(0,0);
				$(this).css("background-color","white");
			});
			$('.piece').bind("mouseleave",function(){
				$(this).fadeTo('slow',1);
				$(this).css("background-color","green");
			});
		break;
	}
}