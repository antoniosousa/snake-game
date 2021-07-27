let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];

snake[0] = {
	x: 8*box,
	y: 8*box
}

let direcao="right";

function criarBackGround(){
	context.fillStyle = "lightgreen";
	context.fillRect(0,0,16*box,16*box);
}

/* criando a snake */
function criarSnake(){
	for(i=0;i<snake.length;i++){
		context.fillStyle="red";
		context.fillRect(snake[i].x,snake[i].y,box,box);
	}
}

function iniciarGamer(){
	criarBackGround();
	criarSnake();

	let snakeX=snake[0].x;
	let snakeY=snake[0].y;

	/* direita e esquerda */
	if(direcao==="right") snakeX=snakeX+box;
	if(direcao==="left") snakeX=snakeX-box;
	/* cima - baixo */
	if(direcao==="up") snakeY=snakeY+box;
	if(direcao==="down") snakeY=snakeY-box;

	snake.pop();

	let addHead={
		x:snakeX,
		y:snakeY
	}

	snake.unshift(addHead);
}

let game = setInterval(iniciarGamer, 100);
