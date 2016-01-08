/*
     Name: Milissa McClelland
     Date: Jan. 7, 2016
     Class & Section:  WIA-0116
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

    /*******************************************
     FILE SETUP

     // Setup up 7 different Canvases in index.html one for each problem.
     //Link Modernizr.js
     // Link the main.js file
     // Setup the call to that canvas and get it's 2d context
     //Use Modernizr to verify that your browser supports canvas, include a fallback message


     /*******************************************
     PART 1

     Draw a rectangle starting at point (0 ,0)
     That has a width of 50 px and a heigh of 100px
     Set the color of the rectangle to a shade of blue.
     Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

     Reminder - set the style first then draw.
     ********************************************/

if(Modernizr.canvas){
    var theCanvas = document.getElementById("Canvas1");

    if(theCanvas){
        var ctx = theCanvas.getContext("2d");

        if(ctx){
            ctx.strokeStyle = "black";
            ctx.fillStyle = "blue";
            ctx.lineWidth = 5;
            ctx.strokeRect(0,0,50,100);
            ctx.fillRect(0,0,50,100);

        }
    }

}else{

}


    /*******************************************
     PART 2

     Draw a circle starting at point (50 ,50)
     That has a radius of 20 px
     Set the color of the circle to a shade of red and set the alpha to .5
     Set the stroke color to black and use a radius of 30px for this circle.

     Reminder - set the style first then draw.
     Use the arc method
     ********************************************/


if(Modernizr.canvas){
    var theCanvas = document.getElementById("Canvas2");

    if(theCanvas){
        var ctx = theCanvas.getContext("2d");

        if(ctx){
            var degrees = 360;
            var radians = (degrees/180)*Math.PI;

            ctx.strokeStyle = "black";
            ctx.fillStyle = "red";
            ctx.lineWidth = 5;

            ctx.beginPath();
            ctx.arc(50,50,20,0, radians);
            ctx.fill();
            ctx.stroke();

        }
    }

}else{

}


    /*******************************************
     PART 3

     Practice using Path drawing.
     Create a 5-point star shaped pattern using the lineTo method.
     Begin this shape at (100, 100)

     Height and width and color are up to you.

     ********************************************/


if(Modernizr.canvas){
    var theCanvas = document.getElementById("Canvas3");

    if(theCanvas){
        var ctx = theCanvas.getContext("2d");

        if(ctx){

            ctx.strokeStyle = "black";
            ctx.fillStyle = "goldenrod";
            ctx.lineWidth = 3;

            ctx.beginPath();
            ctx.moveTo(100,100);
            ctx.lineTo(150,20);
            ctx.lineTo(150,100);
            ctx.lineTo(100,40);
            ctx.lineTo(180,40);
            ctx.lineTo(100,100);

            ctx.fill();
            ctx.stroke();

            }
    }

}else{

}


    /*******************************************
     PART 4

     Practice drawing with Bezier curves.
     Try drawing the top to an umbrella.
     This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

     Position, height, width and color are your choice.
     Do not overlap any other object.

     ********************************************/

if(Modernizr.canvas){
    var theCanvas = document.getElementById("Canvas4");

    if(theCanvas){
        var ctx = theCanvas.getContext("2d");

        if(ctx){

            ctx.strokeStyle = "black";
            ctx.fillStyle = "green";
            ctx.lineWidth = 3;

            ctx.beginPath();
            ctx.moveTo(20,150);
            ctx.bezierCurveTo(50,100,100,50,150,150);
            ctx.moveTo(20,150);
            ctx.bezierCurveTo(50,135,50,135,85,150);
            ctx.moveTo(85,150);
            ctx.bezierCurveTo(100,135,85,135,150,150);

            ctx.fill();
            ctx.stroke();

        }
    }

}else{

}

    /*******************************************
     PART 5

     Practice using text.
     Draw text into your canvas.  It can said whatever you would like in any color.

     ********************************************/

if(Modernizr.canvas){
    var theCanvas = document.getElementById("Canvas5");

    if(theCanvas){
        var ctx = theCanvas.getContext("2d");

        if(ctx){

            var text = "This is text on canvas.";

            ctx.font = "15pt Veranda";
            ctx.fillStyle = "purple";

            ctx.fillText(text,10,50);

        }
    }

}else{

}

    /*******************************************
     PART 6

     Pixel manipulation.
     Draw the image logo.png into the canvas in the following 3 ways.
     1. The image exactly as it is.
     2. Shrink the image by 50%
     3. Slice a section of the logo out and draw that onto the canvas.

     Reminder to use the drawImage method for all 3 of the ways.

     ********************************************/

if(Modernizr.canvas){
    var theCanvas = document.getElementById("Canvas6");

    if(theCanvas){
        var ctx = theCanvas.getContext("2d");

        if(ctx){

            var srcImg = document.getElementById("logo");

            ctx.drawImage(srcImg, 0,0);
            ctx.drawImage(srcImg,0,1100,300,100);
            ctx.drawImage(srcImg,339,602,316,399,15,1200,100,100);


        }
    }

}else{

}


    /*******************************************
     PART 7

     Putting it all together.

     Using a combination of all the methods.
     Create a complex scene.
     You must use at least 3 different methods.

     ********************************************/

if(Modernizr.canvas){
    var theCanvas = document.getElementById("Canvas7");

    if(theCanvas){
        var ctx = theCanvas.getContext("2d");

        if(ctx){

            ctx.strokeStyle = "black";
            ctx.lineWidth = 3;

            ctx.beginPath();
            ctx.moveTo(20,150);
            ctx.bezierCurveTo(50,100,100,50,150,150);
            ctx.moveTo(20,150);
            ctx.bezierCurveTo(50,135,50,135,85,150);
            ctx.moveTo(85,150);
            ctx.bezierCurveTo(100,135,85,135,150,150);
            ctx.moveTo(85,150);
            ctx.lineTo(85,200);
            ctx.moveTo(85,200);
            ctx.bezierCurveTo(70,230,50,200,50,200);

            ctx.stroke();

        }
    }

}else{

}