
/*_________________________________________________________________________NAV______________________________________________________________________________*/
var nav=document.getElementById("nav");
var home=document.createElement("i");
home.classList.add("fa","fa-home", "home");
nav.appendChild(home);
var homeText=document.createElement("a");
homeText.textContent="Inicio";
nav.appendChild(homeText);
var bell=document.createElement("i");
bell.classList.add("fa","fa-bell-o","bell");
var bellText=document.createElement("a");
bellText.textContent="Notificaciones";
nav.appendChild(bell);
nav.appendChild(bellText);
var direct=document.createElement("i");
direct.classList.add("fa","fa-envelope-o", "direct");
nav.appendChild(direct);
var directText=document.createElement("a");
directText.textContent="Mensajes";
nav.appendChild(directText);


var bird=document.createElement("img");
bird.setAttribute("src","asset/img/bird.png");
bird.classList.add("bird");
nav.appendChild(bird);

var input=document.createElement("input");
var search=document.createElement("i");
search.classList.add("fa","fa-search", "search");
nav.appendChild(input);
nav.appendChild(search);
input.placeholder="Buscar en twitter";

/*________________________________________________________________CONTADOR REGRESIVO DE CARACTERES_____________________________________________________________*/


var area = document.getElementById("comment");
var tweetButton=document.getElementById("btn");
var message = document.getElementById("message");
var maxLength=140; //máximo de caracteres permitidos en twitter.
var checkLength = function() {  /*muy orgullosa de mi función ya que la original es solo una linea , me inspire en esa para transformalo en
 un if-else que cumpliera con los requerimientos*/
    if(area.value.length===0 || area.value.length>140){
        tweetButton.disabled=true; /*el boton de twittear se desactiva si no hay caracteres o si los caractereres son más de 140*/
        message.innerHTML=(maxLength-area.value.length);
        message.style.color="red";
    }                                 
	else if(area.value.length>=0 && area.value.length<=120){
		message.innerHTML=(maxLength-area.value.length);
        tweetButton.disabled=false;
		message.style.color="blue";
	} else if(
		area.value.length>120 && area.value.length<=130
		){ 
		message.innerHTML=(maxLength-area.value.length);
        tweetButton.disabled=false;
		message.style.color="gold";
	} else if(
		area.value.length>130){
		message.innerHTML=(maxLength-area.value.length);
		message.style.color="violet";
        tweetButton.disabled=false;
	}
}

setInterval(checkLength, 300); /*Uso el setInterval para que el contador se actualize cada 300 milisegundos*/


function add(){
    var tweetButton=document.getElementById("btn");
	var comment= document.getElementById("comment").value;

		document.getElementById("comment").value="";
		var newComments=document.createElement("div");
		var cont = document.getElementById("cont");
    	var check = document.createElement("input");
    	
    	check.classList.add("check");
    	check.type = "checkbox";
    	var paragraph = document.createElement("p");
    	var photo= document.createElement("img");
    	photo.setAttribute("src", "asset/img/donald.jpg");
   	 	var nameSpan = document.createElement("span");
    	var dateSpan = document.createElement("span");
    	nameSpan.classList.add("username");
    	dateSpan.classList.add("userdate");
    	paragraph.classList.add("color");
    	//crear un nodo de text.. hijo de paragraph.. y tomo la variable donde estará depositado el comentario
    	var nodoText = document.createTextNode(comment);
    	//agregarlo dentro de p(padre)
    	paragraph.appendChild(nodoText);
   	 	// variable para crear el corazón
    	var heart = document.createElement("i");
    	//crear clase para corazón
    	heart.classList.add("fa","fa-heart", "heart");
    	var trash = document.createElement("i");
    	//crear clase para trash
    	trash.classList.add("fa","fa-trash", "trash");
    	newComments.appendChild(photo);
    	newComments.appendChild(nameSpan);
    	newComments.appendChild(dateSpan);
    	newComments.appendChild(check);
    	newComments.appendChild(trash);
    	newComments.appendChild(heart);
    	newComments.appendChild(paragraph);
    	cont.appendChild(newComments);
    	nameSpan.textContent = "Donald Trump  ";
    	dateSpan.textContent = new Date();

    	check.addEventListener("click" , function(){
    	    paragraph.classList.toggle("strike-out");

    	})

		trash.addEventListener('click', function(){
    	   cont.removeChild(newComments);
 		})
		heart.addEventListener("click", function(){
    	   heart.classList.toggle("red");
		})
		cont.insertBefore(newComments, cont.children[0]);

}






