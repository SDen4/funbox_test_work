# FunBox test work
### by Denis Skryabin
### for Junior Frontend Developer (HTML/CSS/JS)

---

## Level I

>Q1
>
> Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения
> пользователя;
> менеджера проекта;
> дизайнера;
> верстальщика;
> клиентского программиста;
> серверного программиста.

**Пользователь**: интуитивно понятный интерфейс, логичность, отсутствие раздражающих факторов, например, неработающей (некорректно работающей) кнопки.

**Менеджер** проекта: хорошее приложение - когда заказчик доволен.

**Дизайнер**: хорошее приложение - есть возможность применить последние смелые тенденции в дизайне, а не интерфейс "а-ля 15-летней давности"

**Верстальщик**: хорошее приложение - просто и красиво можно сверстать, без излишних причуд дизайнера.

**Клиентский программист**: хрошее приложение - это понятный, красивый, продуманный дизайн, быстрая загрузка, возможность масштабирования, продуманность деталей. Если речь идет о своем приложении, то это приложение, которое не стыдно показать, приложение, которым можно гордиться и говорить, что ты причастен к его созданию.

**Серверный программист**: хорошее приложение - можно больше логики перенести на фронтенд, а, ну, и отсутствие косяков верстальщика, как, например, фоточку с сервера надо передать, а она сверстана бэкграундом.

>Q2
>
> Опишите основные особенности верстки крупных многостраничных сайтов, дизайн которых может меняться в процессе реализации и поддержки.
> Расскажите о своем опыте верстки подобных сайтов: какие методологии, инструменты и технологии вы применяли на практике.

В верстке больших проектов, на мой взгляд, разумным будет использовать компонентный подход с помощью выбранного фреймворка, чтобы при изменении или переносе того или иного блока, его можно было легко заменить или изменить внутри, не прибегая при этом к перекраиванию кода всего приложения. Если несколько разработчиков занимаются версткой данного проекта, необходимо придерживаться единых правил в оформлении кода, наименовании классов, переменных и т.п.

В своих проектах стараюсь придерживаться БЭМ-нейминга от Яндекса. Среди инструментов, облегчающих и ускоряющих работу, препроцессор PUG/JADE, SCSS или PCSS. Ну сейчас никуда без сборщиков, основной - это webpack, был опыт с gulp.

>Q3
>
> Опишите основные особенности верстки сайтов, которые должны одинаково хорошо отображаться как на любом современном компьютере, так и на смартфонах и планшетах под управлением iOS и Android. Расскажите о своем опыте верстки подобных сайтов: какие инструменты и технологии вы применяли, как проверяли результат на различных устройствах, какие именно устройства требовалось поддерживать.

Для корректного отображения сайта на различных устройствах в верстке использую медиазапросы. Также для мобильных и десктопных версий можно подгружать изображения разного разрешения + отдельно для ретины ios. Для иконок можно использовать SVG.

Тестирую отображение мобильной верстки в chrome device toolbar, плюс на ресурсе iloveadaptive.com, плюс на своем смартфоне. Как правило, основное требование - поддержка на всех мобильных устройствах с минимальным разрешение не ниже 320px.

>Q4
>
> Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода.

PUG/JADE, CSCC. Сейчас активно изучаю react, был опыт учебного проекта на vue, также делал одно тестовое задание на angular. Пока не приходилось работать с bootstrap, многие его используют для ускорения верстки.

>Q5
>
> Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на Windows. Код писали не вы, доступа к сходникам у вас нет. Ваши действия? Сталкивались ли вы с подобными проблемами на практике?

Сталкивался с подобным на одном из учебных проектов. Первое, проверить, использовал ли разработчик, что писал этот код, инструменты для корректного отображения стилей в разных браузерах. Можно посмореть в браузере в dev tools наличие префиксов. Если их нет, то подключить какой-нибудь Autoprefixer CSS. Если же префиксы присутствуют, разбираться, где именно поехала верстка, и почему тот или иной префикс не сработал.

>Q6
>
> Дизайнер отдал вам макет, в котором не показано, как должны выглядеть интерактивные элементы при наведении мыши. Ваши действия?

В первую очередь постараюсь уточнить у дизайнера. Если непосредственно в этот момент времени это не удается (дизайнер не доступен), не буду терять время, займусь остальной версткой. Если к окончанию верстки дизайнер на связь не вышел, сделаю hover на свое усмотрение: с небольшим изменением оттенка цвета + плавность на transition через переменные в css, чтобы быстро можно было изменить на верные данные, когда дизайнер выйдет на связь.

>Q7
>
> Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее).
> Какое направление развития вам более близко: JS-программирование, HTML/CSS-верстка или и то, и другое?
> Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам интересны?

Habr, StackOverflow, Loftschool, medium, cssbattle, codewars, vc.

CodeDojo, JavaScript.Ninja, jack coder, loftblog.

Более интересен фронтенд, верста и чистый js, но для общего развития и дабы увидеть всю полноту картины сейчас пишу админку для одного сайта на react, а к ней backend на php + база данный mysql.

Нравится поковыряться в чистом js, решал задачки на codewars. Для тренировки стилей батлился на cssbattle.))
В ближайшем будущем планирую более детально углубиться в один из фреймворков, пока кандидат - react.

>Q8
>
> Расскажите нам о себе и предоставьте несколько ссылок на последние работы, выполненные вами.

Есть большой бэкграунд в коммерции, в частности, в формировании ассортимента для различных, в том числе и крупных компаний. Проработал в самом крупном Интренет-магазине УрФО на позиции руководителя товарного направления 4 года, пока тот не закрылся)). Работал в IT стартапе на должности категорийного менеджера (формировал ассортимент для новой площадки торговых сетей), в тесном контакте с командой программистов. Принимал участие в запуске и тестировании. К слову, проект не взлетел((. Увлекаюсь плаванием, за 4 года тренировок по замерам вольным стилем от любителя вырос до уровня 3 взрослого разряда (50 м за 30 сек.).

[Учебный проект Портфолио](https://sden4.github.io/portfolio/)

[Учебный проект бургерной](https://sden4.github.io/burger_project/dist/)

[Дашборд статистики covid-19 в РФ](https://skriabin.site/)

---

## Level II

>На этом уровне находится практическое задание, макет к которому вы найдете в том же архиве, что и этот файл. Скачать тестовое задание целиком можно здесь: https://dl.funbox.ru/qt-html-css-js.zip.
>
>**Браузеры**: Chrome, Firefox, Safari, IE11;
>
>**Стандарты**: на ваше усмотрение;
>
>**Структура** проекта: на ваше усмотрение;
>
>**Инструменты**: любой сборщик на платформе Node.js;
>
>**Библиотеки**: приветствуется React, но можно и без него;
>
>**Результат**: ссылка на страницу, которая корректно отображается на любых современных десктопных компьютерах, смартфонах и планшетах, а также git-репозиторий с исходниками верстки.
>
>Task 1
>
>Сверстайте страницу, показанную на рисунке. Внешний вид должен полностью соответствовать макету, а поведение — описанию задачи. Макет находится в папке **prototype**, описание задачи ниже.


### Watch on [github-pages](https://sden4.github.io/funbox_test_work/)

###  Stack:
```sh
html
scss
react
```

###  Run development mode:
```sh
$ git clone https://github.com/SDen4/funbox_test_work.git/
$ cd funbox_test_work
$ npm i
$ npm run dev
```

<!-- github pages -->
<!-- git add dist && git commit -m "Initial dist subtree commit" -->
<!-- git subtree push --prefix dist origin gh-pages -->