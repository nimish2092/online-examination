$(document).ready(function(){


	$("#submit").click(function(){
		if($("#ans").is(":checked")){
			localStorage['points'] = parseInt(localStorage.getItem('points')) + 10;
			localStorage['qpoints'] = parseInt(localStorage.getItem('qpoints')) + 10;
		}

		if ($("input[name='solution']:checked").val()){
			localStorage['answered'] = parseInt(localStorage.getItem('answered')) + 1;
			localStorage['qanswered'] = parseInt(localStorage.getItem('qanswered')) + 1;
		}
	});

	$("#clear").click(function(){
		$("[name=solution]").removeAttr("checked");
	});
});