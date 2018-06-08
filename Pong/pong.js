function start() {
	sjs.open("target",500,400);

	//Ball Object and Properties
	var ball = new sjs.Image("Images/pong-ball.png");
		ball.type = "ball";
		ball.setSize(15,15);
		ball.center();
		ball.friction = 0;
		ball.bounce();
		ball.pushRight(3);
		ball.pushUp(4);

	//Paddle 1
	var paddle1 = new sjs.Image("Images/pong-ball.png");
		paddle1.type = "paddle1";
		paddle1.setSize(20, 100)
		paddle1.centerV();
		paddle1.offset(20, 0);


	//Paddle 2
	var paddle2 = new sjs.Image("Images/pong-ball.png");
		paddle2.type = "paddle2";
		paddle2.setSize(20, 100)
		paddle2.centerV();
		paddle2.offset(460, 0);
		paddle2.followy(sjs.mouse);

		//Score
		var score1 = 0;
		var score2 = 0;
		var score_txt1 = new sjs.Text("Score: 0", 21, "white");
		var score_txt2 = new sjs.Text("Score: 0", 21, "white");
		score_txt2.right();

	sjs.keyDown(UP_KEY, function(){
		paddle1.pushUp();
	}); 

	sjs.keyDown(DOWN_KEY, function(){
		paddle1.pushDown();
	}); 

	//Sounds
	var soundEffect = new Audio('Music/pop.mp3');

	sjs.onHit("ball","paddle1", function(ball,paddle){
		score1 = score1 + 1;
		score_txt1.setText("Score: "+score1);
		//soundEffect.play();
		sjs.bounceOff(ball,paddle)
	});
	sjs.onHit("ball","paddle2", function(ball,paddle){
		score2 = score2 + 1;
		score_txt2.setText("Score: "+score2);
		//soundEffect.play();
		sjs.bounceOff(ball,paddle)
	});


} //end start
