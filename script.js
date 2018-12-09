document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<div id="timerObj"></div>');
var timerObj= document.getElementById('timerObj');
timerObj.style.textAlign = 'center';
timerObj.style.frontSize = 72+"pt";
timerObj.style.display = 'none';

document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd','<div id="helloText">Нажмите клавишу ENTER чтобы начать игру </div>');
var helloText = document.getElementById('helloText');
helloText.style.display = 'block';
helloText.style.textAlign = 'center';
helloText.style.frontSize = 72+"pt";

document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<div id="scoreObj"></div');
var scoreObj= document.getElementById('scoreObj');
scoreObj.style.textAlign = "center";
scoreObj.style.frontSize = 72+"pt";
var score=0;
scoreObj.style.display = 'none';


scoreObj.style.position = 'none';
document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="img/orange.png" id="orange">'); //orange
var orange = document.getElementById('orange');
orange.style.position = 'fixed';
orange.style.display = 'none';


document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="img/pig.png" id="pig">');//pig
var pig = document.getElementById('pig');
pig.style.position = 'fixed';
pig.style.display = 'none';

function cntdwn (){
	timer-=1;
	setTimer(timer);
	if (timer ==0) {
		clearInterval(intervalId);
		document.removeEventListener('mousemove', mouseListener);
		helloText.innerHTML="Конец игры,результат: "+ score+ ". <br> Чтобы начать игру заново,нажмите ENTER.";
	}
}

var timer = 15;
var intervalId;

//В StartGame
intervalId = setInterval(
	function (){cntdwn();},1000);


var mouseListener = function (event){mouseMoveFunc(event)};

var enterListener = function(event){startGame(event)};

function startGame(event){
	if (event.keyCode ==13) {
		score = 0;
		setScore (0);

		helloText.style.display = 'none';
		scoreObj.style.display = 'block';
		orange.style.display = 'block';
		pig.style.display = 'block';

        document.addEventListener("keydown",enterListener);
        document.addEventListener("mousemove", mouseListener);


        spawnOrange();
        setScore(8);
        timerObj.style.display = 'block';
        timer = 15;
        setTimer(timer);

	}
}





function mouseMoveFunc(event){
	pig.style.left=event.clientX -64 + 'px';
	pig.style.top=event.clientY -64 + 'px';
	checkCollision();
}
function checkCollision(){
	console.log();
	 if (
	 	Math.sqrt(Math.pow(pig.offsetLeft - orange.offsetLeft,2)+ Math.pow(pig.offsetTop - orange.offsetTop,2)) <128)
	 {
	 	spawnOrange();
	 	score+=5;
	 	setScore(score);

	 }
}


spawnOrange();
function spawnOrange (){
	orange.style.left=Math.random()*(window.innerWidth -128) + 'px';
	orange.style.top=Math.random()*(window.innerHeight -128) + 'px';
}
 
 function setScore(scoreToSet){
 	scoreObj.innerHTML = "Очки: "+scoreToSet;
 }

 function setTimer(timerToSet){
 	console.log(timer);
 	timerObj.innerHTML = "Время: " + timerToSet;
 }

document.addEventListener("keydown",enterListener);
//document.addEventListener("mousemove", mouseListener);
