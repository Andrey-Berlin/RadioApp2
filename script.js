let style = document.getElementById('style');
style.innerHTML = `
  audio{
    margin: 30px 0px 0px 0px;
    
  }
  
  ul {
    padding: 0px 30px 0px 50px;
  }
  
  p{
    color:rgb(255,255,255);
    background:#000000;
    
    
  }
  
  `;
let header = document.getElementById('header');
header.innerHTML = `
<h1>RadioApp</h1>
<p>Внимание! Это приложение еще в стадии разроботки.</p>
`;
let section = document.getElementById('section');
section.innerHTML = `
<div id="audio_player">



<audio controls id="audio">

<source src="https://kanliveicy.media.kan.org.il/icy/kanreka_mp3" type="audio/mp3">

</audio>

<hr />
<ul>Радиостанции:
<hr />
<li>Кан - Рэка/ Общественное Израильское радио.

<br>
<a href="https://kanliveicy.media.kan.org.il/icy/kanreka_mp3">
▶️ Кан Река   
</a>
<hr />
<li> Европа Плюс/ Музыкальное радио.

<br>
<a href="https://emgregion.hostingradio.ru:8064/moscow.europaplus.mp3">
▶️ Европаплюс
</a>
<hr />
<li> Радио Свобода/ Общественное Европейское радио.
<br>
<a href="https://n0d.radiojar.com/hcrb063nn3quv?rj-ttl=5&rj-tok=AAABf0cR0TcAuolkyeDIQy7HGg">
▶️ Радио Свобода
</a>
</li>
<hr />

<li> Авторадио/ Музыкальное радио.
<a href="https://pub0302.101.ru:8443/stream/air/aac/64/100">
▶️ Авторадио  
</a>
</li>
<hr />
<li>Наше Радио/ Музыкальное радио.
<a href="https://nashe1.hostingradio.ru/nashe-256">
▶️ Наше Радио  
</a>
</li>
<hr />
</ul>
</div>`;
section.style.textAlign = 'center';




let audio_player = document.getElementById("audio_player"); //сохранение аудиоплеер

let links = audio_player.getElementsByTagName('a'); //сохранение <a> с интернет ресурсами
console.log(links.length);

for (var i = 0; i < links.length; i++) { //Поиск всех <a> с интернет ресурсами 
    console.log(links[i]);
    console.log(i);
    links[i].onclick = function(e) { //Событие нажатия - вызов функции по работе с <a> с интернет ресурсами
        //Загрузка данных из плей листа ->
        e.preventDefault(); //Метод, который не допускает загрузку ресурсов по умолчанию
        console.log(e);

        let href = this.getAttribute("href"); //Поиск и сохранение интернет ресурсов по аттрибуту href
        console.log(href);


        let source = document.querySelectorAll("#audio_player audio source"); //Поиск и сохранение аудио тега c аттрибутом src
        source[0].src = href; //Сохранение интернет ресурсов по аттрибуту href в аттрибут src
        console.log(source);

        // -> в аудиоплеер
        let audio = document.querySelector("#audio_player audio"); //Поиск и сохранение аудио тега
        audio.removeAttribute('poster');
        audio.load(); //загрузка в аудиоплеер интернет ресурс
        audio.play(); //включение аудиоплеера с интернет ресурсом
        console.log(audio);







        /* video.buffer();*/
    }

}
/*section.style.margin = '1em';*/
/*let audio1 = document.getElementById("audio1");
audio1.innerHTML = `<source id = "source1" type="audio/mpeg">`;
let audio2 = document.getElementById('audio2');
audio2.innerHTML = `<source id = "source2" type="audio/mpeg">`;
let audio3 = document.getElementById('audio3');
audio3.innerHTML = `<source id = "source3" type="audio/mpeg">`;
audio.style.fontSize = '50px';*/

/*let links = ['https://kanliveicy.media.kan.org.il/icy/kanreka_mp3','https://emgregion.hostingradio.ru:8064/moscow.europaplus.mp3','https://n0d.radiojar.com/hcrb063nn3quv?rj-ttl=5&rj-tok=AAABf0cR0TcAuolkyeDIQy7HGg'];

let source1 = document.getElementById("source1");
source1.src = links[0];
let source2 = document.getElementById('source2');
source2.src = links[1];
let source3 = document.getElementById('source3');
source3.src = links[2];*/
