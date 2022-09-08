function add(key) { 
   var result = getResultado();
   if (result!='0' || isNaN(key)) setResultado(result + key);
   else setResultado(key);
}
function getResultado() {
   return(document.getElementById('btnResult').innerHTML);
}
function setResultado(value) {
   document.getElementById('btnResult').innerHTML = value;
}

function calcular() {
   var result = eval(getResultado()); 
   setResultado(result);
}
function borrar() { 
   setResultado(0);
}