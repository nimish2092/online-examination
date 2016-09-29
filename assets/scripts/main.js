var a_canvas = document.getElementById("a");
var a_context = a_canvas.getContext("2d");

/*Drawing the grid*/
for(var x = 0.5; x < 500; x += 10){
	a_context.moveTo(x,0);
	a_context.lineTo(x,400);
}
for(var y = 0.5; y < 375; y += 10){
	a_context.moveTo(0,y);
	a_context.lineTo(500,y);
}
a_context.strokeStyle = "#d9d9d9";
a_context.stroke();


/*Drawing X axis*/
a_context.beginPath();
a_context.moveTo(0, 331.5);
a_context.lineTo(500, 331.5);
/*Drawing X arrow*/
a_context.moveTo(490, 326.5);
a_context.lineTo(500, 331.5);
a_context.lineTo(490, 336.5);


/*Drawing Y axis*/
a_context.moveTo(49.5, 0);
a_context.lineTo(49.5, 375);
/*Drawing Y arrow*/
a_context.moveTo(44.5,10);
a_context.lineTo(49.5, 0);
a_context.lineTo(54.5,10);

/*Drawing line for equation*/
a_context.moveTo(49.5,331.5);
a_context.lineTo(450.5,20.5);

a_context.strokeStyle = "#000";
a_context.stroke();

/*Plotting points*/
a_context.fillStyle = "#f00";
a_context.fillRect(342.5,100.5,4,4); //Top point
a_context.fillRect(213.5,200.5,4,4); //Bottom point

/*Writing text*/
a_context.font = "bold 12px sans-serif";
a_context.fillStyle = "#000";
a_context.fillText("(x1,y1)",335,120); // (x1,y1)
a_context.fillText("(x2,y2)",206,220); // (x2,y2)
a_context.fillText("x-axis",240,345);  // x-axis
a_context.fillText("y - axis",5,175);  // x-axis