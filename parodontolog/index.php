<?php session_start(); ?>
<!DOCTYPE html>
<html class="no-js" lang="ru">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Лечение пародонтоза пародонтита гингивита Винница - "Стомалайн"</title>
        <meta name="description" content="Пародонтолог в Виннице⭐Лечение пародонтита⭐Пародонтоза⭐Десны в клинике Стомалайн⭐Бесплатная консультация ☎0974408040">
        <meta name="robots" content="noindex, nofollow">
        <meta name="viewport" content="initial-scale=1.0, width=device-width"

        <link href='https://fonts.googleapis.com/css?family=Roboto+Condensed:400,300italic,300,400italic,700,700italic&subset=latin,cyrillic-ext' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/magnific-popup.css">
        <link rel="stylesheet" href="css/main.css">
        <link rel="stylesheet" href="css/glightbox.min.css">
        <script src="js/vendor/modernizr-2.8.3.min.js"></script>
    </head>
    <body>
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a
                    href="https://browsehappy.com/" rel="nofollow" target="_blank">upgrade your browser</a> to improve
                your experience.</p>
        <![endif]-->
        <header>
            <div class="wrapper">
                <div class="wrapper-indent">
                <a href="/"><img src="img/logo.png" alt="" class="logo"></a>

                <div class="header_phones"><span>+38 (097)</span> 440-80-40</div>

                <a href="#call_back_block" id="call_back_button" class="call_back_button green_button rounded">Заказать звонок</a>
                <div class="burger-menu"></div>

                    <div class="main-menu">
                        <nav>
                            <ul>
                                <li><a href="#about">Что такое скейлинг?</a></li>
                                <li><a href="#stages">Этапы лечения</a></li>
                                <li><a href="#doctor">Врач-пародонтолог</a></li>
                                <li><a href="#photos">До и после</a></li>
                                <li><a href="#feedback">Отзывы</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>

        <section class="blue_section consultation">
            <div class="white_mask_bottom"></div>
            <div class="wrapper">

                <h1>Скейлинг (Scaling) пародонтальных карманов - лучший метод лечения десен, эффективный в 100% случаев!</h1>

                <h3>После скейлинга приостанавливается процесс резорбции (рассасывания) кости!</h3>

				<a name="zapis"></a>
                <div class="consultation_description">
                    <div class="description_title">Преимуществом данного<br> <span>вида лечения является:</span></div>
                    <ul>
                        <li>Исчезновение кровоточивости десен и возвращение им естественного вида!</li>
                        <li>Исчезновение неприятного запаха изо рта!</li>
                        <li>Стабилизация шатающихся зубов!</li>
                    </ul>
                </div>
                <form class="consultation_form" method="post" action="/actions/">
                    <div class="form_title"><strong>Не откладывайте свой визит,</strong> <br>эффективность любого лечения выше на ранних стадиях заболевания!</div>
                    <p><input type="text" name="name" value="<?=$_SESSION["temp"]["no_error"]["name"]?>" placeholder="Ваше имя"<? if ($_SESSION["temp"]["error"]["name"]) { echo " class=\"has-error\""; } ?>></p>
                    <p><input type="email" name="email" value="<?=$_SESSION["temp"]["no_error"]["email"]?>" placeholder="Ваш E-Mail"<? if ($_SESSION["temp"]["error"]["email"]) { echo " class=\"has-error\""; } ?>></p>
                    <p><input type="text" name="phone" value="<?=$_SESSION["temp"]["no_error"]["phone"]?>" placeholder="Контактный телефон"<? if ($_SESSION["temp"]["error"]["phone"]) { echo " class=\"has-error\""; } ?>></p>
                    <p style="margin-top: 1.2em;"><button type="submit" name="pAction" value="get_zapis">Записаться на консультацию</button></p>
                </form>



                <div class="clearfix"></div>

            </div>
        </section>

        <section class="white_section about">
            <div class="wrapper">

                <a name="about"></a>
                <h2>Что такое <span>скейлинг?</span></h2>

                <img src="img/about_img.jpg" class="section_img" alt="" title="">

                <div class="section_text">
                    <p>
                        <strong>СКЕЙЛИНГ ПАРОДОНТАЛЬНЫХ КАРМАНОВ</strong> - это механическое удаление твердых и мягких зубных отложений, сглаживание поверхности корня, а также снятие инфицированных тканей вокруг корня зуба.
                    </p>
                </div>

                <div class="clearfix"></div>

            </div>
        </section>

        <section class="green_section stages">
            <div class="white_mask_top"></div>
            <div class="white_mask_bottom"></div>
            <div class="wrapper">
                <div class="wrapper-indent">
                <a name="stages"></a>
                <h2>ЭТАПЫ ЛЕЧЕНИЯ <span>КРОВОТОЧИВОСТИ ДЕСЕН И ПАРОДОНТИТА</span></h2>

                <dl>
                    <dt><span>1</span><strong>Постановка</strong> плана лечения</dt>
                    <dd>Осмотр, расшифровка рентген снимков, заполнение пародонтологической карты</dd>
                </dl>

                <dl>
                    <dt><span>2</span><strong>Возвращение зубам</strong> естественной белизны</dt>
                    <dd>Снятие зубного камня и налета с зубов при помощи ультразвука</dd>
                </dl>

                <dl>
                    <dt><span>3</span><strong>Скейлинг</strong> пародонтальных карманов</dt>
                    <dd>Максимальное снижение количества бактериальной флоры и закрытие пародонтальных карманов</dd>
                </dl>

                <dl>
                    <dt><span>4</span><strong>Антибактериальная</strong> терапия</dt>
                    <dd>Влияние на количество бактерий которые размножаются в пародонтальных карманах</dd>
                </dl>

                <dl>
                    <dt><span>5</span><strong>Поддерживающая</strong> терапия</dt>
                    <dd>Стабилизация позитивного результата лечения</dd>
                </dl>
                </div>
            </div>
        </section>

        <section class="white_section doctor">
            <div class="wrapper">
                <div class="wrapper-indent">
                <a name="doctor"></a>
                <h2>Процедуру кюретажа десен <span>проводит врач-пародонтолог</span></h2>

                <img src="img/doctor_img.jpg" class="section_img" alt="" title="">

                <h3>Царик Наталия Петровна<br> <small>врач-пародонтолог</small></h3>

                <h4>Кратко <span>о специалисте:</span></h4>

                <p style="color: #000;">
                    Царик Наталия Петровна. Член ассоциации врачей-пародонтологов Украины.
                </p>
                <ul class="blue">
                    <li><span>В 2011 году</span> закончила стоматологический факультет Винницкого национального медицинского университета им Н.И. Пирогова.</li>

                    <li><span>2013 год</span> закончила магистратуру на кафедре челюстно-лицевой хирургии и хирургической стоматологии ВНМУ им. Н. И. Пирогова. Написана научная работа на тему: "Особенности течения хронического генерализованного пародонтита на фоне тонзиллита".</li>
                </ul>
                <div class="clearfix"></div>
                <ul class="green">
                    <li><span>2012 год</span> брала участие в международном лектории - "Современные технологии лечения и профилактики в практической стоматологии".</li>
                    <li><span>2012 год</span> прошла курс "Азбука ручного скейлинга".</li>
                    <li><span>2013 год</span> прошла курс "Нехирургическая пародонтология. Основная концепция ведения пародонтологического приема".</li>
                    <li><span>2013 год</span> прошла курс "Хирургическая пародонтология. Хирургические методы лечения заболеваний пародонта".</li>
                    <li><span>2013 год</span> участие в научной программе "Местные анестетики и аллергия".</li>
                    <li><span>2013 год</span> прошла мастер-класс "Plazmolifting в стоматологии".</li>
                    <li><span>2014 год</span> прошла курс "3D technologies in endodontics".</li>
                    <li><span>2014 год</span> прошла курс "Micro Endodontics. Re - definition of success of endodontic treatment".</li>
                    <li><span>2017 год</span> прошла курс "Микробные биопленки в стоматологии".</li>
                    <li><span>2017 год</span> прошла курс "Лоскутная пародонтальная хирургия".</li>
                    <li><span>2017 год</span> прошла курс "Нехирургическое пародонтологическое лечение. Работа ручными инструментами".</li>
                    <li><span>2017 год</span> прошла курс "Мукогингивальная хирургия на зубах и имплантатах".</li>
                    <li><span>2017 год</span> прошла курс "Пародонтальная регенерация".</li>
                    <li><span>2017 год</span> прошла курс "Перио. Орто. Протетика".</li>
                </ul>
                <p style="color: #777;">
                    Постоянно повышает свой профессиональный уровень, участвует в симпозиумах, семинарах, выставках и научно-практических конференциях. В работе руководствуется принципом индивидуального подхода к каждому пациенту. Для достижения максимального результата лечения, в сложных клинических ситуациях, работает в команде с стоматологом-терапевтом, ортопедом, ортодонтом и имплантологом.
                </p>
                </div>
            </div>
        </section>

        <section class="grey_section certificates">
            <div class="wrapper" class="glider-contain">
                <div class="wrapper-indent">
                <div class="glider">
                    <div class="gallery-cell"><a href="img/paro_sert_1.jpg" class="glightbox"><img src="img/paro_sert_med_1.jpg" alt="" title=""></a></div>
                    <div class="gallery-cell"><a href="img/paro_sert_2.jpg" class="glightbox"><img src="img/paro_sert_med_2.jpg" alt="" title=""></a></div>
                    <div class="gallery-cell"><a href="img/paro_sert_3.jpg" class="glightbox"><img src="img/paro_sert_med_3.jpg" alt="" title=""></a></div>
                    <div class="gallery-cell"><a href="img/paro_sert_4.jpg" class="glightbox"><img src="img/paro_sert_med_4.jpg" alt="" title=""></a></div>
                    <div class="gallery-cell"><a href="img/paro_sert_5.jpg" class="glightbox"><img src="img/paro_sert_med_5.jpg" alt="" title=""></a></div>
                    <div class="gallery-cell"><a href="img/paro_sert_6.jpg" class="glightbox"><img src="img/paro_sert_med_6.jpg" alt="" title=""></a></div>
                    <div class="gallery-cell"><a href="img/paro_sert_7.jpg" class="glightbox"><img src="img/paro_sert_med_7.jpg" alt="" title=""></a></div>
                    <div class="gallery-cell"><a href="img/paro_sert_8.jpg" class="glightbox"><img src="img/paro_sert_med_8.jpg" alt="" title=""></a></div>
                    <div class="gallery-cell"><a href="img/paro_sert_9.jpg" class="glightbox"><img src="img/paro_sert_med_9.jpg" alt="" title=""></a></div>
                    <div class="gallery-cell"><a href="img/paro_sert_10.jpg" class="glightbox"><img src="img/paro_sert_med_10.jpg" alt="" title=""></a></div>
                </div>
                    <div id="dots"></div>
                    <a class="glider-prev">&laquo;</a>
                    <a class="glider-next">&raquo;</a>
                </div>
            </div>
        </section>
        
        <section class="blue_section photos">
            <div class="white_mask_bottom"></div>
            <div class="grey_mask_top"></div>
            <div class="wrapper">
                <div class="wrapper-indent">
                <a name="photos"></a>
                <h2>До и <span>после скейлинга</span></h2>

                <div class="row">

                    <div class="grid-50 beaf">

                        <p>До</p>
                        <div class="ba-slider">
                            <a href="https://stomaline.com.ua/parodontolog/img/scaling_before-1.jpg" class="glightbox"><img src="https://stomaline.com.ua/parodontolog/img/scaling_before-1.jpg"></a>
                        </div>

                    </div>

                    <div class="grid-50 beaf">

                        <p>После</p>
                        <div class="ba-slider">
                            <a href="https://stomaline.com.ua/parodontolog/img/scaling_after-1.jpg" class="glightbox"><img src="https://stomaline.com.ua/parodontolog/img/scaling_after-1.jpg"></a>
                        </div>

                    </div>

                    <div class="grid-50 beaf">

                        <p>До</p>
                        <div class="ba-slider">
                            <a href="https://stomaline.com.ua/parodontolog/img/scaling_before-2.jpg" class="glightbox"><img src="https://stomaline.com.ua/parodontolog/img/scaling_before-2.jpg"></a>
                        </div>

                    </div>

                    <div class="grid-50 beaf">

                        <p>После</p>
                        <div class="ba-slider">
                            <a href="https://stomaline.com.ua/parodontolog/img/scaling_after-2.jpg" class="glightbox"><img src="https://stomaline.com.ua/parodontolog/img/scaling_after-2.jpg"></a>
                        </div>

                    </div>

                </div>
                <div class="clearfix"></div>
                </div>
            </div>
        </section>

        <section class="white_section feedback">
            <div class="wrapper">
                <div class="wrapper-indent">
                <a name="feedback"></a>
                <h2>Отзывы <span>наших клиентов</span></h2>

                <div class="row">

                    <div class="one_otziv grid-30">
                        <div class="img"><img src="https://stomaline.com.ua/upload/users/7cd70666250c385eab0509235b2586ec.jpg" alt="Юлия Колесницкая"><span></span></div>
                        <div class="otziv_name"><b>Юлия</b> Колесницкая</div>
                        <div class="otziv_profession">Графический дизайнер</div>
                        <div class="otziv_text">Стомалайн - единственная клиника, в которою я каждый раз вхожу без страха и волнения) Меня встречает и угощает чайком приятная и общительная администратор Лиза, мой ортодонт, Кудря Ирина Николаевна, очень позитивный и добродушный человек, и я с удовольствием прохожу у нее долгосрочное лечение. Даже такая неприятная процедура, как удаление зубов, прошла с шутками, смехом и в дружественной атмосфере) Еще нравится, то что клиника предоставляет рассрочку на дорогостоящее лечение, для многих клиентов это неоценимый бонус, который мало где еще можно найти. Спасибо всем!!!</div>
                    </div>
                    <div class="one_otziv grid-30">
                        <div class="img"><img src="https://stomaline.com.ua/upload/users/b2679f291415c01e25ee35df04689110.jpg" alt="Роман Корченюк"><span></span></div>
                        <div class="otziv_name"><b>Роман</b> Корченюк</div>
                        <div class="otziv_profession">Адвокат</div>
                        <div class="otziv_text">Отличная клиника, профессиональные специалисты, высокое качество сервиса, европейский уровень. При этом высокий уровень доверия. Всем рекомендую.</div>
                    </div>
                    <div class="one_otziv grid-30">
                        <div class="img"><img src="https://stomaline.com.ua/upload/users/9475bd05b997f3ef4fbf2402f9ff62d9.jpg" alt="Оксана Кірієнко"><span></span></div>
                        <div class="otziv_name"><b>Оксана</b> Кірієнко</div>
                        <div class="otziv_profession">Викладач ЛНУ ім. Івана Франка</div>
                        <div class="otziv_text">Загалом уважний персонал від лікарів та медсестер, до менеджера у реєстратурі.
                            Лікар-ортодонт Кудря Ірина Миколаївна за час лікування (1 рік 8 місяців) виявила ґрунтовні професійні якості та цілковиту орієнтацію на інтереси пацієнта та його побажання. Окремо хотілося б відзначити гнучкий графік щомісячного відвідування ортодонта, що було особливо важливим для мене, оскільки працюю та мешкаю у місті Львів. Результат лікування саме у ортодонта Кудрі І. М. можу оцінити у 100 балів зі ста.
                            Лікар Гунченко В. Л. займався реставрацією частини зубів. Під час роботи виявив професіоналізм та зорієнтованість на побажання пацієнта. Загалом можу усім порекомендувати заклад StomaLine, що реалізує принцип - орієнтація на лікування та оптимальний результат у відповідності з інтересами пацієнта, а не суто бізнес! Усім дякую :)
                        </div>
                    </div>

                </div>
                <div class="clearfix"></div>
                </div>
            </div>
        </section>

        <section class="green_section callback">
            <div class="white_mask_top"></div>
            <div class="wrapper">
                <div class="wrapper-indent">
                <h2>Не оставайтесь наедине со своими вопросами, <span>задайте их на консультации профессиональному пародонтологу</span></h2>

                <p class="call_text"><strong>Закажите у нас обратный звонок</strong>, наш администратор свяжется с Вами в удобное время и запишет Вас на консультацию</p>

                <p style="text-align: center;"><a href="#call_back_block"
                                                  class="green_button rounded call_back_button">Заказать обратный звонок</a></p>
                </div>
            </div>
        </section>

        <section class="map">
            <div class="green_mask_top"></div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5210.229771975557!2d28.474277!3d49.236311!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5b65b3b256d3%3A0x644339c7be5605b8!2zU3RvbWFMaW5lIC0g0YHRgtC-0LzQsNGC0L7Qu9C-0LPQuNGH0LXRgdC60LDRjyDQutC70LjQvdC40LrQsCDQsiDQktC40L3QvdC40YbQtQ!5e0!3m2!1suk!2sua!4v1448122981006" width="100%" height="475" frameborder="0" allowfullscreen></iframe>
        </section>

        <footer>
            <div class="wrapper">
                <div class="wrapper-indent">
                <a href="/"><img src="img/logo.png" alt="" class="logo"></a>

                <div class="footer_phones"><span>+38 (097)</span> 440-80-40</div>

                <a href="#call_back_block" class="call_back_button green_button rounded">Заказать звонок</a>
                </div>
            </div>
        </footer>

        <div id="call_back_block" class="blue-popup mfp-hide">
            <p class="show_on_small">Наш номер телефона:<br><large><b>+38 (097) 440-80-40</b></large></p>
            <h3>Заказать <strong>обратный звонок</strong></h3>
            <form action="mail.php" method="post" class="rounded">
                <p>
                    <input type="text" name="name" value="<?=$_SESSION["temp"]["no_error"]["name"]?>" placeholder="Ваше имя *"<? if ($_SESSION["temp"]["error"]["name"]) { echo " class=\"has-error\""; } ?> required>
                </p>
                <p>
                    <input type="text" name="phone" value="<?=$_SESSION["temp"]["no_error"]["phone"]?>" placeholder="Ваш номер телефона *"<? if ($_SESSION["temp"]["error"]["phone"]) { echo " class=\"has-error\""; } ?>>
                </p>
                <p style="text-align: center;">
                    <button type="submit" name="pAction" value="get_callback" class="green_button rounded">Заказать звонок</button>
                </p>
            </form>
        </div>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script defer type="text/javascript" src="https://stomaline.com.ua/themes/default/js/sweetalert.min.js"></script>
        <script src="js/plugins.js"></script>
        <script src="js/jquery.magnific-popup.min.js"></script>
        <script type="text/javascript" src="js/glider.min.js"></script>
        <script type="text/javascript" src="js/glightbox.min.js"></script>
        <script src="js/main.js"></script>

        <script type="text/javascript">
            new Glider(document.querySelector('.glider'),{
                slidesToScroll: 2,
                slidesToShow: 2,
                duration: .5,
                draggable: true,
                dots: '#dots',
                    arrows: {
                    prev: '.glider-prev',
                    next: '.glider-next'
                    },
                responsive: [
                    {
                        // screens greater than >= 775px
                        breakpoint: 450,
                        settings: {
                            // Set to `auto` and provide item width to adjust to viewport
                            slidesToShow: 3,
                            slidesToScroll: 3,
                        }
                    },{
                        // screens greater than >= 775px
                        breakpoint: 768,
                        settings: {
                            // Set to `auto` and provide item width to adjust to viewport
                            slidesToShow: 4,
                            slidesToScroll: 4,
                        }
                    },{
                        // screens greater than >= 775px
                        breakpoint: 1024,
                        settings: {
                            // Set to `auto` and provide item width to adjust to viewport
                            slidesToShow: 5,
                            slidesToScroll: 5,
                        }
                    },
                ]
                });
            var lightboxDescription = GLightbox({
  selector: 'glightbox'
});
        </script>
		
		<?php if ($_SESSION["temp"]["no_error"]["zapis_sended"]): ?>
		<script type="text/javascript">
			$(document).ready(function() {
				swal({
					title: "Спасибо!",
					text: "Мы рассмотрим Вашу заявку и свяжемся з Вами в ближайшее время.",
					type: "success",
					showConfirmButton: false,
					allowOutsideClick: true,
					showCancelButton: true,
					cancelButtonText: "Закрыть"
				});
			});
		</script>
		<?php endif; ?>
		
		<?php if ($_SESSION["temp"]["no_error"]["callback_sended"]): ?>
		<script type="text/javascript">
			$(document).ready(function() {
				swal({
					title: "Ждите!",
					text: "Мы перезвоним в течении 30 мин.",
					type: "success",
					showConfirmButton: false,
					allowOutsideClick: true,
					showCancelButton: true,
					cancelButtonText: "Закрыть"
				});
			});
		</script>
		<?php endif; ?>

		<?php if ($_SESSION["temp"]["error"]["callback_error"]): ?>
		<script type="text/javascript">
			$(document).ready(function() {
				$('#call_back_button').trigger('click');
			});
		</script>
		<?php endif; ?>

    </body>
</html>
<?php unset($_SESSION["temp"]); ?>