$(document).ready(function(){

	$('.amount').click(function(){
		var input = $("input[name='amount']:checked").val();
		$('#value').html(input);	
	});
	
	$('.company').click(function(){
		var input = $("input[name='company']:checked").val();
		$('#industry').html(input);
	});

	$("#submit").click(function(){
		if($("#ans1").is(":checked") && $("#ans2").is(":checked")){
			localStorage['points'] = parseInt(localStorage.getItem('points')) + 10;
			localStorage['rpoints'] = parseInt(localStorage.getItem('rpoints')) + 10;
		}

		if ($("input[name='amount']:checked").val()){
			localStorage['answered'] = parseInt(localStorage.getItem('answered')) + 1;
			localStorage['ranswered'] = parseInt(localStorage.getItem('ranswered')) + 1;
		}
	});

	$("#clear").click(function(){
		$("[name=company]").removeAttr("checked");
		$("[name=amount]").removeAttr("checked");
	});
});