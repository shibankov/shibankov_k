<?php
$connection=$mysqli = new mysqli("localhost","root","","mybase");/*Отправка запроса к БД*/
$mysqli->query("SET NAMES 'utf8'");/*установка кодировки запроса*/

/*С какой заметки будет осуществляться вывод*/
$startFrom=$_POST['startFrom'];

/*Запрос к базе данных и действия с базой удалени/добавление*/
$result_set = $mysqli->query("SELECT * FROM `notes`ORDER BY 'id' LIMIT  10");

/*Формируем массив из 10 статей */
$articles=array();
while ($row = mysqli_fetch_assoc($result_set)) {
	$articles[]=$row;
}
/*Работа с датой*/


/*Добавление в бд*/
$mysqli->query("INSERT INTO 'notes'(title,description,date)VALUES('".$_POST['title']."','".$_POST['description']."','".$_POST['date']."')");



/*Приобразование кода в json запрос */
json_encode($articles);

$mysqli->close();


?>

