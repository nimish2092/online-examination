$(document).ready(function(){


	$("#submit").click(function(){
		if($("#ans").is(":checked")){
			localStorage['points'] = parseInt(localStorage.getItem('points')) + 10;
			localStorage['vpoints'] = parseInt(localStorage.getItem('vpoints')) + 10;
		}

		if ($("input[name='solution']:checked").val()){
			localStorage['answered'] = parseInt(localStorage.getItem('answered')) + 1;
			localStorage['vanswered'] = parseInt(localStorage.getItem('vanswered')) + 1;
		}
	});

	$("#clear").click(function(){
		$("[name=solution]").removeAttr("checked");
	});
});