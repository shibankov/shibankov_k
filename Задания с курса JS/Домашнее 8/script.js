
//Первый div
window.onload=function one_div(){

  var div=document.createElement('div');
    div.style.background='green';
    div.style.height='100px';
    div.style.width='100px';
    div.style.position='absolute';
  document.body.appendChild(div);
//Созданиe
document.getElementById('work').onclick=function work_div(){
	var div=document.createElement('div');
    div.style.background='green';
    div.style.height='100px';
    div.style.width='100px';
    div.style.position='relative';
    //смещение
    right=div.offsetLeft;
    right=right+120;
    div.style.left=right+"px";
    document.body.appendChild(div);
}
//Вверх
document.getElementById('up').onclick= function move_top() {
  up = div.offsetTop;
  up = up -20;
  if(up<30){
  	up=30;
  }
  div.style.top = up +"px";
}
//Вниз
document.getElementById('down').onclick= function move_down() {
  down = div.offsetTop;
  down = down +20;
  if(down>900){
  	down=900;
  }
  div.style.top = down +"px";
}
//Вправо
document.getElementById('right').onclick= function move_right () {
  right = div.offsetLeft;
  right = right + 20;
  if(right>900){
  	right=900;
  }
  div.style.left = right+"px";

}
//Влево
document.getElementById('left').onclick= function move_left() {
  left = div.offsetLeft;
  left = left - 20;
  if(left<0){
  	left=10;
  }
  div.style.left = left+"px";
}
//Цвет
document.getElementById('color').onclick=function making_color(){
	var colors=['orange','yellow','red','green'];
    var smena = parseInt(Math.random()*4);
	div.style.background=colors[smena];
}
}