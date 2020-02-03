console.log(document.body);
var body = document.body;
// es más divertido si es una página al azar que ya incluya cosas en ella (como la plataforma de aprendizaje, por ejemplo).
body. innerHTML = "Hello World";
var bod = document.body;
for (var i = 0; i < 10; i ++){
  bod. innerHTML += "<p>This has gone through the loop completely: " +i+ " times</p>";
}
var paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);
for (var i = 0; i &lt; paragraphs.length; i ++){
  console.log(paragraphs[i].addEventListener);
  paragraphs[i].addEventListener('click', function(){
    this.style.background='blue';
  });
}
