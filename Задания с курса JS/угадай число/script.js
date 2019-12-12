var vvod,computerNum,max,min,go;

max=30;
min=0;
go=0;

computerNum=Math.floor((Math.random()*(max-min+1))+min);
console.log(computerNum);

function ugadka(){
vvod=prompt("Введите число от 0 до 30 ","");
vvod=parseInt(vvod);
if  (vvod>computerNum){
  go++;
  alert('Число больше !');
  ugadka();
}
else if (vvod<computerNum){
  go++;
 alert('Число меньше !');
 ugadka();
}
else if(vvod==computerNum){
  go++;
  alert('Вы угадали!'+"\r\Попыток "+ go+" .");
}
}
ugadka();
