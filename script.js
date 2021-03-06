let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];

snake[0] = {
	x: 8*box,
	y: 8*box
}

let direcao="right";
let comida = {
	x: Math.floor(Math.random() * 15 + 1) * box,
	y: Math.floor(Math.random() * 15 + 1) * box
}


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


function drawFood(){
	context.fillStyle="green";
	context.fillRect(comida.x, comida.y, box, box);
}


document.addEventListener("keydown",atualizar);

function atualizar(event){
	if(event.keyCode===39 && direcao != "left") direcao = "right";
	if(event.keyCode===38 && direcao != "up") direcao = "down";
	if(event.keyCode===37 && direcao != "right") direcao = "left";
	if(event.keyCode===40 && direcao != "down") direcao = "up";
}

function iniciarGamer(){

	if(snake[0].x > 15*box && direcao ==="right") snake[0].x=0;
	if(snake[0].x < 0 && direcao ==="left") snake[0].x=16*box;
	if(snake[0].y > 15*box && direcao ==="up") snake[0].y=0;
	if(snake[0].y < 0 && direcao ==="down") snake[0].y=16*box;

	for(i=1;i<snake.length;i++){
		if(snake[0].x === snake[i].x && snake[0].y === snake[i].y){
			clearInterval(game);
			alert("Gamer Over");
		}
	}

	criarBackGround();
	criarSnake();
	drawFood();

	let snakeX=snake[0].x;
	let snakeY=snake[0].y;

	/* direita e esquerda */
	if(direcao==="right") snakeX=snakeX+box;
	if(direcao==="left") snakeX=snakeX-box;
	/* cima - baixo */
	if(direcao==="up") snakeY=snakeY+box;
	if(direcao==="down") snakeY=snakeY-box;

	if(snakeX != comida.x || snakeY != comida.y){
		snake.pop()
	}else{
		comida.x = Math.floor(Math.random()*15+1)*box;
		comida.y = Math.floor(Math.random()*15+1)*box;
	}


	let addHead={
		x:snakeX,
		y:snakeY
	}

	snake.unshift(addHead);

}

let game = setInterval(iniciarGamer, 100);
