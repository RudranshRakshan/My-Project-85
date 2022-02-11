canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
carWidth = 100;
carHeight = 90;

background_img = "parkingLot.jpg";
greencar_img = "car2.png";

carY = 340;
carX = 10;

function add() {
	background_image = new Image();
	background_image.onload = uploadBackground;
	background_image.src = background_img;

	greencar_image = new Image();
	greencar_image.onload = uploadgreencar;
	greencar_image.src = greencar_img;
}

function uploadBackground() {
	ctx.drawImage(background_image, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_image, carX, carY, carWidth, carHeight);

}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (keyPressed == '38') {
		up();
		console.log("up");
	}

	if (keyPressed == '40') {
		down();
		console.log("down");
	}

	if (keyPressed == '37') {
		left();
		console.log("left");
	}

	if (keyPressed == '39') {
		right();
		console.log("right");
	}


}

function up() {
    if (carY>=0){
        carY=carY-10;
        uploadBackground();
        uploadgreencar();
    }
}

function down() {
    if (carY<=canvas.height-100){
        carY=carY+10;
        uploadBackground();
        uploadgreencar();
    }
}

function left() {
    if (carX>=0){
        carX=carX-10;
        uploadBackground();
        uploadgreencar();
    }
}

function right() {
    if (carX<=canvas.width-110){
        carX=carX+10;
        uploadBackground();
        uploadgreencar();
    }
}
