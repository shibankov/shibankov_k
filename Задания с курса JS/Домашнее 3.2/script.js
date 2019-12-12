var name= prompt("Как вас зовут?","");
var age = prompt("Введите ваш возраст","");

if((age%10==1)&&(age%100!=11)){
	alert(name +" "+ age+" "+"год"+".");
}

else if((age%10>1)&&(age%10<5)&&(age%100!=12)&&(age%100!=13)&&(age%100!=14)){
    alert(name +" "+ age+" "+"годa"+".");
}
else   {
	alert(name +" "+ age+" "+"лет"+".");
}
