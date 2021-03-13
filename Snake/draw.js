const canvas=document.getElementById('canvas');
const ctx=canvas.getContext("2d");

const scale=10;
const rows=canvas.height/scale;
const colms=canvas.width/scale;

var snake;
var current_dir="Right";
(function setup(){
  snake = new Snake();
  food = new Food();
  food.pickLocation();

  window.setInterval(()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    food.draw();
    snake.update();
    snake.draw();

    if(snake.checkEat(food)){
      food.pickLocation();
    }
    document.getElementById('score').innerText="Score : "+snake.total;
    snake.colide();

  },250);

}());


window.addEventListener('keydown',((evt)=>{
    const direction= evt.key.replace('Arrow','');
      if((direction=="Up" && current_dir!="Down")|| (direction=="Down" && current_dir!="Up")
      || (direction=="Left" && current_dir!="Right") || (direction=="Right" && current_dir!="Left") ) {
      current_dir=direction;
      snake.changeDirection(direction);
    }
}))
