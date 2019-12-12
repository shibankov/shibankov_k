var name=prompt("Как вас зовут?","");
var age = prompt("Сколько вам лет?","");
var smoking=confirm("Вы курите?");
if(age<18) {
   if(smoking == true){
   	alert(name+" маме расскажу!");
 }else{
 	alert(name+" так держать!");
 }
  }else{
  	 if(smoking == true){
   	alert(name+" ну и зря!");
 }else{
 	alert(name+" молодец и не надо!");
 }
  }