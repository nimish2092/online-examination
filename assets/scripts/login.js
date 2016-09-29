$(document).ready(function(){

	$("#login").click(function(){
		var user = $('#username').val();
		var pwd = $('#password').val();
		if(user === "sjsu" && pwd === "sjsu"){
			window.location.href='question1.html';
			return false;
		}
		else{
			alert("Username: sjsu and Password: sjsu");
		}
	});

});