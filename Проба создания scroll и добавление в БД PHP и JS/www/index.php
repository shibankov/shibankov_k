<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="css/main.css">
	<script type="text/javascript" src="/js/jquery.js"></script>
	<script type="text/javascript" src="/js/add_bd.js"></script>
	<?php include "php/main.php";?>
	<title>Приложение</title>
</head>
<body>
  <div id="articles">
  	<form id="add_note" method="POST">
      <p><label>Заголовок:</label></p>
	    <p><input type="text" name="title" placeholder="Заголовок"/></p>
	    <p><label>Описание:</label></p>
	    <p><textarea name="description" cols="40" rows="10"></textarea></p>
	    <p><label>Дата:</label></p>
	    <p><input type="text" name="date" placeholder="Дата"/></p>
	    <p><input id="create" type="submit" value="Создать заметку"/></p>
    </form>
    <form id="sort" method="POST"> 
      <p><input id="sort_data" type="submit" value="Сортировать по дате"/><p>
    </form> 
    <?php foreach ($articles as $article): ?>
    <p class="title"><?php echo $article['title'];?></p>
    <p class="decription"><?php echo $article['description'];?></p> 
    <p class="date">Дата:<?php echo $article['date']=date('Y-m-d ', $article['date']);?></p>  
  <?php endforeach;?>
  </div>
</body>
</html>