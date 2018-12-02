document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<div id="scoreObj"></div');
var scoreObj= document.getElementById('scoreObj');
scoreObj.style.textAling = "center";
scoreObj.style.frontSize = 72 +"pt";
var score=0;
document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="img/orange.png" id="orange">');
var orange = document.getElementById('orange');
orange.style.position = 'fixed';
document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="img/pig.png" id="pig">');
var pig = document.getElementById('pig');
pig.style.position = 'fixed';
var mouseListener = function (event){mouseMoveFunc(event)};




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
	 	score++
	 	setScore(score);

	 }
}


spawnOrange();
function spawnOrange (){
	orange.style.left=Math.random()*(window.innerWidth -128) + 'px';
	orange.style.top=Math.random()*(window.innerHeight -128) + 'px';
}
 
 function setScore(setToSet){
 	scoreObj.innerHTML = "Очки: "+scoreToSet;
 }


document.addEventListener("mousemove", mouseListener);
