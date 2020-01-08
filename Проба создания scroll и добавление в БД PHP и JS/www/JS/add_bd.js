/*Добавление в БД записи*/

$(document).ready(function(){
  $("#create").click(function() {
    let data_ret = $("#add_note").serialize();
    alert(data_ret);
    $.ajax({
      url:'php/main.php',
      type:'POST',
      data:data_ret,
      success:function(data){
        if (data) {
          alert("Новость вставлена");
        }
        else {
          alert("Ошибка");
        }
      }
    });
  
  });      

})

/* Сортировка по дате*/

  $(document).ready(function(){
    $("#sort_data").click(function(){
      let date = $("#sort").serialize();
      alert(date);
    });
  });

