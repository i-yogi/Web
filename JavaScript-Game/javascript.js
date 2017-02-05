		var blockCreated;
		var clickedTime;

		function displayBlock(){

			var time = Math.random();
			time = time*3000;

			// document.getElementById("time").innerHTML ="Block will be display in "+time+" seconds";

			setTimeout(function() { 

				var top = Math.random();
				top = top*600;
				var left = Math.random();
				left = left*600;

				document.getElementById("box").style.top = top+"px";
				document.getElementById("box").style.left = left+"px";
				document.getElementById("box").style.backgroundColor = getColor();
				document.getElementById("box").style.borderRadius = getShape();
				document.getElementById("box").style.display = "Block"; 
				blockCreated = Date.now();
			}, time);
		}

		function getColor(){
			var colorCode = '0123456789ABCDEF'.split('');
			var color = '#';

			for(var i=0; i<6; i++){
				color += colorCode[Math.round(Math.random()*15)];
			}

			return color;
		}

		function getShape(){
			var radius = ["0px", "50px"];
			var shape = radius[Math.round(Math.random())];

			return shape;
		}

		displayBlock();

		document.getElementById("box").onclick= function (){

			this.style.display = "none";

			clickedTime = Date.now();
			var result = (clickedTime-blockCreated);
			result = result/1000;
			
			document.getElementById("heading").style.color = getColor();

			document.getElementById("rTime").style.display = "Block";
			document.getElementById("rTime").innerHTML ="Responce time = "+result+" sec";
			
			displayBlock();
		}