<?php
#Расчет валютного курса
$kurs_dollara=28;
$kurs_evro=32;
#Формирование текущей валюты для отображения на странице
$hrivny='гривне';
$dollar='Dollar USA';
$euro='Euro';
if (isset($_POST['value']) AND ($_POST['value']) == 'one')

	$current_valuta=$dollar;
else

$current_valuta=$hrivny;
$valuta_2=$dollar;
$valuta_3=$euro;

#Цена на импланты и абатменты в закупке.
$price_connect=80; #Долларов
$price_tekka=140; #Евро
$price_straumann_ti=199+20; #Евро
$price_straumann_ti_zr=225+20; #Евро
$price_straumann_slactive=285+20; #Евро

#Расчет стоимости установки имплантов
$set_connect=($price_connect+200)*$kurs_dollara; #280$
$set_tekka=($price_tekka+200)*$kurs_evro; #340евро
$set_straumann_ti=($price_straumann_ti+200)*$kurs_evro; #419евро
$set_straumann_ti_zr=($price_straumann_ti_zr+230)*$kurs_evro; #445евро
$set_straumann_slactive=($price_straumann_slactive+270)*$kurs_evro; #505евро

#Расчет стоимости установки формирователя
$set_shaper_connect=40*$kurs_dollara;
$set_shaper_tekka=40*$kurs_evro;
$set_shaper_straumann=(20+30)*$kurs_evro;

#Стоимость технической работы, $
$temp_crown_lab=7; #Обычная временная коронка
$temp_crown_f_lab=14; #Временная коронка фрезерованная, Лавренюк
$crown_mk_lab=25; #Металлокерамическая коронка, Лавренюк
$crown_zr_lab=90; #Циркониевая коронка, Лавренюк
$crown_e_max_lab=80; #Коронка E-max, Лавренюк

#Формирование и стоимость протезной работы


?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <style>
    	table {
    	width: 100%;
		}

    </style>
</head>
<body>
<table cellpadding="8" cellspacing="0" border="1" width="100%" height="100%">
<caption><h2>Цены на имплантацию зубов и протезирование</h2></caption>
<thead>
	<tr>
		<th rowspan="2">Системы имплантов</th>
		<th rowspan="2">Имплант с установкой, грн</th>
		<th rowspan="2">Период между установкой импланта и протезированием на верхней челюсти</th>
		<th rowspan="2">Период между установкой импланта и протезированием на нижней челюсти</th>
		<th rowspan="2">Установка формирователя десны, грн</th>
		<th rowspan="2">Период между установкой формирователя десны и началом протезирования</th>
		<th colspan="2">Временное протезирование (факультативно)</th>
		<th colspan="4">Постоянное протезирование</th>
		<th rowspan="2">Общая стоимость имплантации и протезирования зубов, грн.</th>
	</tr>
			<tr>
				<td>Временная коронка на временном абатменте</td>
				<td>Период между временным и постоянным протезированием</td>

				<td>Оттиски, грн</td>
				<td>Лабораторный этап изготовления коронок, дней</td>
				<td>Установка абатмента</td>
				<td>Коронка с установкой на имплант, грн</td>				
			</tr>
	
</thead>
<tbody>
		<tr>
			<td>Connect, Украина</td>
			<td><?php echo $set_connect;?></td>
			<td>3 - 5 месяцев</td>
			<td>3 - 4 месяца</td>
			<td><?php echo $set_shaper_connect;?></td>
			<td>10 - 20 дней</td>
			<td>7</td>
			<td>8</td>
			<td>9</td>
			<td>10</td>
			<td>11</td>
			<td>12</td>
			<td>13</td>
		</tr>
		
		<tr>
			<td>Tekka, In-Kone®, Франция</td>
			<td><?php echo $set_tekka;?></td>
			<td>3 - 5 месяцев</td>
			<td>3 - 4 месяца</td>
			<td><?php echo $set_shaper_tekka;?></td>
			<td>10 - 20 дней</td>
			<td>7</td>
			<td>8</td>
			<td>9</td>
			<td>10</td>
			<td>11</td>
			<td>12</td>
			<td>13</td>
		</tr>
		
		<tr>
			<td>Straumann, Ti-SLA, Швейцария</td>
			<td><?php echo $set_straumann_ti;?></td>
			<td>3 - 5 месяцев</td>
			<td>3 - 4 месяца</td>
			<td><?php echo $set_shaper_straumann;?></td>
			<td>10 - 20 дней</td>
			<td>7</td>
			<td>8</td>
			<td>9</td>
			<td>10</td>
			<td>11</td>
			<td>12</td>
			<td>13</td>
		</tr>

		<tr>
			<td>Straumann, Roxolid, TiZr-SLA, Швейцария</td>
			<td><?php echo $set_straumann_ti_zr;?></td>
			<td>3 - 5 месяцев</td>
			<td>3 - 4 месяца</td>
			<td><?php echo $set_shaper_straumann;?></td>
			<td>10 - 20 дней</td>
			<td>7</td>
			<td>8</td>
			<td>9</td>
			<td>10</td>
			<td>11</td>
			<td>12</td>
			<td>13</td>
		</tr>

		<tr>
			<td>Straumann, Roxolid, TiZr-SLActive, Швейцария</td>
			<td><?php echo $set_straumann_slactive;?></td>
			<td>3 - 5 месяцев</td>
			<td>3 - 4 месяца</td>
			<td><?php echo $set_shaper_straumann;?></td>
			<td>10 - 20 дней</td>
			<td>7</td>
			<td>8</td>
			<td>9</td>
			<td>10</td>
			<td>11</td>
			<td>12</td>
			<td>13</td>
		</tr>

</tbody>
</table>
<p>* План хирургической и ортопедической реабилитации, представленный в таблице, составлен с учетом идеальной клинической ситуации и может отличаться от Вашего клинического случая.</p>
<p><?php echo $_POST['value'];?></p>
<form name="some_form" method="post" action="/parodontologiya/table.php">
<p>Стоимость услуг указана в <?php echo $current_valuta;?>. Перейдите по ссылкам, чтобы сконвертировать цену в валюту <a href="/parodontologiya/table.php" class="converter" value="one"><?php echo $valuta_2;?></a> или <a href="/parodontologiya/table.php" class="converter" value="two"><?php echo $valuta_3;?></a>.</p>
	<input type="hidden" name="value" value="nojs" id="for_send_value">
</form>
<script>
$(function(){
	$("a.converter").click(function() { // все ссылки с классом .converter
		$("#for_send_value").val( $(this).attr("value") ); 
		$(this).parents("form").submit();
		return false;
	});
});
</script>
</body>
</html>
