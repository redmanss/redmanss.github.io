
  <?php

			  function mail_utf8($to, $from, $subject, $message)
			{
			    $subject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
			 
			    $headers  = "MIME-Version: 1.0\r\n"; 
			    $headers .= "Content-type: text/plain; charset=utf-8\r\n";
			    $headers .= "From: $from\r\n";
			 
			    return mail($to, $subject, $message, $headers);
			}
			 


		if (isset($_POST['send1'])) {

			$body = "Форма обратной связи CellGSM\r\n\r\nИмя: ".$_POST['name']."\r\nТелефон: ".$_POST['phone'];

			$subj = "Форма обратной связи CellGSM";

			mail_utf8('0667762112gsm@gmail.com', 'no-reply@example.ru', $subj, $body);

			if ($_POST['false']) {

            echo "<center><h1>Мы с вами свяжемся :)</h1></center>";

			} else {

				header("Location: http://cellgsm.top/");
			}
		
		}




		?>
