let input = document.getElementById('searchInput');
 
/*Строка фильтра*/

input.addEventListener('keyup',()=>{
  let filter,ul,li,i;
  filter = input.value.toUpperCase();
  ul = document.getElementById('list');
  li=ul.getElementsByTagName('li');
  for(i=0;i<li.length;i++){
    let a = li[i].getElementsByTagName('a')[0];
    if(a.innerHTML.toUpperCase().indexOf(filter)> -1){
      li[i].style.display = '';
    }else{
      li[i].style.display = 'none';
    }
  }
})

/*Кнопка добавления элемента*/

addButton.onclick = ()=>{
  let elementLi,elementLink,elementUl;
  if(input.value == ""){
    alert("Введите текст!")
  }else{
    elementLi = document.createElement('li');
    elementLink = document.createElement('a');
    elementLi.append(elementLink);
    elementLink.innerHTML = input.value;
    elementUl = document.getElementById('list');
    elementUl.append(elementLi);
  }
}




