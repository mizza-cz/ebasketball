<?php

$recepient = "alexeyvavilov1992@yandex.ru";
$siteName = "HTML-шаблон";

$team = trim($_POST['team']);
$name = trim($_POST['name']);
$surname = trim($_POST['surname']);
$nickname = trim($_POST['nickname']);
$email = trim($_POST['email']);
$narozky = trim($_POST['narozky']);
$state = trim($_POST['state']);
$id = trim($_POST['id']);



$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>



