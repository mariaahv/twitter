
var container=document.getElementById('encabezado');
// elemento  h1//
var h1=document.createElement('h1');
h1.textContent='twitter';
h1.style.color="red";
h1.setAttribute('align','center');
container.appendChild(h1);

//
var p=document.createElement('p');
var parrafo=document.createElement('p');
var parrafo02=document.createElement('p');
var parrafo03=document.createElement('h6');
p.textContent='Reto de codigo';
p.setAttribute('id','p1');
parrafo.textContent='hola,';
parrafo02.textContent='soy Front-End Developer jr';
parrafo03.textContent='CODIGO';

firstSquare.appendChild(p);
firstSquare.appendChild(parrafo);
firstSquare.appendChild(parrafo02);


var line=document.createElement('hr');
firstSquare.appendChild(line);
line.setAttribute('id','line');


firstSquare.appendChild(parrafo03);
parrafo03.style.color='blue';


//

var area = document.getElementById('insert');
var boton = document.getElementById('save');
var lista = document.getElementById('containertexts');
var fecha=document.createElement('p');

var maximo=140;
boton.addEventListener('click', function(event) {
    if(area.value) {
        var li = document.createElement('li');
        var link = document.createElement('p');
       link.textContent = area.value;


        li.appendChild(link);
        lista.appendChild(li);
        containertexts.insertBefore(li,containertexts.firstChild);

        var tiempo = new Date();
        var hora = tiempo.getHours();
        var minuto = tiempo.getMinutes();
        var segundo = tiempo.getSeconds();
        var imprimible=hora +":"+minuto+":"+segundo;
      li.appendChild(fecha);
      fecha.value='';
fecha.innerHTML=imprimible;




        area.value = '';
        caracteres.value=maximo;

// obteniendo la hora del envio



    }

});
// cuenta los caracteres del textarea
var caracteres=document.getElementById('caracteres');
area.addEventListener("keyup", function(){
  var contador = '';
  contador = area.value.length;
    caracteres.value = maximo - contador;
    if(contador>140){
      boton.disabled=true;
      boton.style.background='gray';


    }else{
      boton.disabled=false;
      boton.style.background='skyblue';

    }

})



area.addEventListener('keydown', autosize);

function autosize(){
  var el = this;
  setTimeout(function(){

    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}
