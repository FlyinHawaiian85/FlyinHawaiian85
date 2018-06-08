function start() {
	sjs.open("target",800,500);

	var background = new sjs.Image("Images/space6.png");
		background.setSize(sjs.getWidth(), sjs.getHeight()); 

	//Player Properties below here
	var player = new sjs.Image("Images/blue_right.png"); 
		player.type = "player";
		player.setSize(55,55); 
		player.friction = .15;
		player.accel = .3; 

		sjs.keyDown(RIGHT_KEY, function(){ 
			player.setImage("Images/blue_right.png");
			player.pushRight();
	}); 

		sjs.keyDown(LEFT_KEY, function(){ 
			player.setImage("Images/blue_left.png");
			player.pushLeft();
	}); 

		sjs.keyDown(UP_KEY, function(){ 
			player.setImage("Images/blue_up.png");
			player.pushUp();
			
	}); 

		sjs.keyDown(DOWN_KEY, function(){ 
			player.setImage("Images/blue_down.png");
			player.pushDown();
			
	}); 

		//Power ship
		setInterval(function(){
			var powerUp = new sjs.Image("Images/battleship_down.png");
			powerUp.type = "powerUp";
			powerUp.setGravity();
			powerUp.setSize(25,35);
			powerUp.noBounds = true;
			powerUp.moveTo(x, y); 
			powerUp.friction = 0.2; 
		}, 5000);

		sjs.onHit("powerUp","bottom_screen",function(x,y){
		 x.destroy();
		}); 

		sjs.onHit("player","powerUp",function(x,y){
		x.grow(20,20);
		setTimeout(function(){
		x.grow(-20,-20);
		}, 3000);
		y.destroy();
		}); 



} //end start
