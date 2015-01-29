
var canvas;
var ctx;
var w;
var h;


$(document).ready( function (){

// canvas stuff
    canvas = $('#canvas')[0];
    ctx = canvas.getContext("2d");
    w = $('#canvas').width();
    h = $('#canvas').height();
    
// paint the Canvas
ctx.fillStyle = "white";
ctx.fillRect(0, 0, w, h);
ctx.strokeStyle = "black";
ctx.strokeRect(0,0,w,h); 

    drawCoordSytem(w, h);
    drawMyPath();
 
}
)


function drawMyPath (){
    ctx.beginPath();
    ctx.lineWidth = "3";
    ctx.strokeStyle = "green";
    ctx.moveTo(50, 50);
    ctx.lineTo(350, 350);
    ctx.stroke();
}

function drawCoordSytem (width, height){
    //abstand
    var abstand =20;
    
    // Y-Achsis
    ctx.beginPath();
    ctx.lineWidth = "3";
    ctx.strokeStyle = "black";
    ctx.moveTo(width/2,abstand);
    ctx.lineTo(width/2, height-abstand);
    ctx.stroke(); 
    
    //x-Achsis
    ctx.beginPath();
    ctx.lineWidth = "3";
    ctx.strokeStyle = "black";
    ctx.moveTo(abstand, height/2);
    ctx.lineTo(width-abstand, height/2);
    ctx.stroke(); 
}