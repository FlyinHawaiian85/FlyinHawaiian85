function start() {
	sjs.open("target",500,400);

	//Ball Object and Properties
	var ball = new sjs.Image("Images/ball.png");
	ball.type = "ball";
	ball.setSize(100,100);
	ball.center();
	ball.friction = 0;
	ball.bounce();
	ball.pushRight(3);
	ball.pushUp(4);








} //end start
