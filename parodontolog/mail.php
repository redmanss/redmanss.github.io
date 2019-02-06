<?php

session_start();
error_reporting(E_ALL);

include $_SERVER["DOCUMENT_ROOT"]."/sturtup.inc.php";
include (LIBS_PATH."functions.php");
$lang = 1;

switch ($_POST["pAction"]) {
	    case "get_callback":

        $name = addslashes(trim($_POST["name"]));
        if ($name == "") {
            $_SESSION["temp"]["error"]["name"] = true;
        } else {
            $_SESSION["temp"]["no_error"]["name"] = $name;
        }

        $phone = addslashes(trim($_POST["phone"]));
        if ($phone == "") {
            $_SESSION["temp"]["error"]["phone"] = true;
        } else {
            $_SESSION["temp"]["no_error"]["phone"] = $phone;
        }

        if (!$_SESSION["temp"]["error"]) {

			date_default_timezone_set('Europe/Kiev');
            $text_email = "<h3>Дата создания сообщения: " . date("H:i:s | d-m-Y") . "</h3>";

            $text_email .= "<p>Имя клиента: " . $name . "</p>";
            $text_email .= "<p>Телефон: " . $phone . "</p>";
            $text_email .= "<p>Страница: <a href=\"".$_SERVER["HTTP_REFERER"]."\">" . $_SERVER["HTTP_REFERER"] . "</a></p>";
			
			$db->query("INSERT INTO call_back_logs (add_time,name,phone,ref_link) VALUES (".time().",'{$name}','{$phone}','{$_SERVER['HTTP_REFERER']}')");
			
			
            require_once($_SERVER['DOCUMENT_ROOT'].'/libs/mail.class.php');
            $mailer = new FreakMailer();
            $mailer->isHTML(true);
            $mailer->Subject = 'Заказ обратного звонка - '.$_SERVER["SERVER_NAME"];
            $mailer->Body = $text_email;
            $mailer->From = "noreplay@".$_SERVER["SERVER_NAME"];
  //          $emails = explode(",",getConfig("admin_email"));
            $emails = explode(",",'stomaline@ukr.net');
            foreach ($emails as $email) {
                $mailer->AddAddress(trim($email));
                $mailer->Send();
                $mailer->ClearAddresses();
                $mailer->ClearAttachments();
            }

            unset($_SESSION["temp"]);
            $_SESSION["temp"]["no_error"]["callback_sended"] = true;
            $back_url = $_SERVER["HTTP_REFERER"];
        } else {
            $_SESSION["temp"]["error"]["callback_error"] = true;
            $back_url = $_SERVER["HTTP_REFERER"];
        }
        header("Location: ".$back_url);
        exit;

    break;
       /* case 'get_zapis':{
            $_SESSION["temp"]["no_error"]["get_zapis"] = true;
            $back_url = $_SERVER["HTTP_REFERER"];
            header("Location: ".$back_url);
            exit;
            break;
        }
    case 'get_callback':{
        $_SESSION["temp"]["no_error"]["get_callback"] = true;
        $back_url = $_SERVER["HTTP_REFERER"];
        header("Location: ".$back_url);
        exit;
        break;
    }*/
    }

?>


