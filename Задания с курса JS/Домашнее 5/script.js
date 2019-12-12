var arr = [];
var element,newElement;

var createElm = createElements();
function createElements(){
  element = prompt("Кол-во элементов?");
  for( var i = 0; i < element; i++){
    newElement = prompt('Введите элемент');
    arr.push(newElement);
  }
return arr;
}

function getMax(arr){
 var max = arr[0]; 
  for (var i = 0; i < arr.length; i++) { 
    if (max < arr[i]) max = arr[i]; 
  }
  return max;
}
 
function getMin(arr){
 var min = arr[0];
   for (var i = 0; i < arr.length; i++) {
     if (min > arr[i]) min = arr[i];
  }
  return min;
}

function getSum(arr){
 var sum=0;
   for(var i=0;i<arr.length;i++){
     sum += parseInt(arr[i]);
  }
  return sum;
}

alert("Число элементов введеные пользователем = "+element+"."+"\r\Элементы пользователя "+arr+"."+"\r\Самый большое элемент = "+getMax(arr)+"."+"\r\Самый маленький элемент = "+getMin(arr)+"."+"\r\Cума всех элементов = "+getSum(arr)+".");
