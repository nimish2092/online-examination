$(document).ready(function(){

	localStorage['answered'] = 0;
	localStorage['points'] = 0;
	localStorage['qanswered'] = 0;
	localStorage['qpoints'] = 0;
	localStorage['ranswered'] = 0;
	localStorage['rpoints'] = 0;
	localStorage['vanswered'] = 0;
	localStorage['vpoints'] = 0;

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