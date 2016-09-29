$(document).ready(function(){


	$("#quant").click(function(){

			$('#qscore').html(localStorage.getItem('qpoints'));
			
			$('#qanswered').html(localStorage.getItem('qanswered'));

			$('#qcorrect').html(parseInt(localStorage.getItem('qpoints'))/10);

	});

	$("#reading").click(function(){

			$('#rscore').html(localStorage.getItem('rpoints'));
			
			$('#ranswered').html(localStorage.getItem('ranswered'));

			$('#rcorrect').html(parseInt(localStorage.getItem('rpoints'))/10);

	});


	$("#total").click(function(){

			$('#score').html(localStorage.getItem('points'));
			
			$('#answered').html(localStorage.getItem('answered'));

			$('#correct').html(parseInt(localStorage.getItem('points'))/10);

	});

	$("#av").click(function(){

			$('#vscore').html(localStorage.getItem('vpoints'));
			
			$('#vanswered').html(localStorage.getItem('vanswered'));

			$('#vcorrect').html(parseInt(localStorage.getItem('vpoints'))/10);

	});


});