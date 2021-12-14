var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
//Code below is for  rectangle
ctx.beginPath();
ctx.rect(200, 150, 400, 200);
ctx.stroke();
//Code below is for Circle black color
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(400, 210, 40, 0, 2*Math.PI);
ctx.stroke();
//Code below is for Circle blue color
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(300, 210, 40, 0, 2*Math.PI);
ctx.stroke();
//Code below is for Circle red color
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(500, 210, 40, 0, 2*Math.PI);
ctx.stroke();
//Code below is for Circle yellow color
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(500, 210, 40, 0, 2*Math.PI);
ctx.stroke();
//Code below is for Circle red color
ctx.beginPath();
ctx.strokeStyle = "#fcba03";
ctx.lineWidth = 5;
ctx.arc(350, 250, 40, 0, 2*Math.PI);
ctx.stroke();
//Code below is for Circle green color
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(450, 250, 40, 0, 2*Math.PI);
ctx.stroke();

