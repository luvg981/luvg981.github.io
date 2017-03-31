	var canvas2 = document.getElementById('backgroundImage');						//creating variables to identify canvas
	var ctx2 = canvas2.getContext("2d");											//creating  canvas objects to draw image on canvas

	var imageLoader = document.getElementById('imageLoader');
    	imageLoader.addEventListener('change', uploadImage, false);						//calling function onclick

	var img = new Image();															

	img.onload = function(){														//this function automatically draws background image				
		ctx2.drawImage(img, 0,0,img.width, img.height,0,0,canvas2.width,canvas2.height);
	}
	img.src = "imgx1.png";

	function uploadImage(e){														//this function used to upload image
		var canvas1 = document.getElementById('imageCanvas');
		var ctx1 = canvas1.getContext('2d');
	    var reader = new FileReader();
	    reader.onload = function(event){
	        var img = new Image();
	        img.onload = function(){
	            ctx1.drawImage(img,0,0,img.width,img.height,0,0,canvas1.width,canvas1.height);
	            ctx2.drawImage(canvas1, 225, 210, 344, 178);						//this draws the uploaded image to the background image
	        }
	        img.src = event.target.result;										
	    }
	    reader.readAsDataURL(e.target.files[0]);
		
	}

	document.getElementById('download').addEventListener('click', function(){		//called on click
		downloadCanvas(this, 'backgroundImage', 'screenshot.png');
		}, false);

	function downloadCanvas(link, canvasId, filename) {								//this is used to download the image
		link.href = document.getElementById(canvasId).toDataURL();
    	link.download = filename;
	}
