import validator from './validator.js';

// esta parte no funciona porque hay que ejecutar unos comandos en el servidor para que se pueda importar de esta forma algo asi entiendo 
// import validator from './validator.js';

// console.log(validator);
document.write('<script src="validator.js"></script>');


// funcion que lleva a la segunda pantalla
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
   container.style.display = "none";
   container2.style.display = "block";
   container3.style.display = "none";
})

// funcion que lleva a la tercera pantalla
let backBtn = document.getElementById('back-btn');
backBtn.addEventListener('click', () => {
	
	 var NumeroTarj_ =document.getElementById('NumeroTarj').value;
  
  // convierto el numero que digitaron en Entero ya que lo recupera como String "cadena de texto"
  NumeroTarj_ = parseInt(NumeroTarj_);
  
 // valida si el campo esta vacio 
  if (NumeroTarj_ == " ") 
  { 
// si esta vacio entra en esta condicion y manda un alerta al usuario que el campo esta vacio 
// console.log(); puedes imprimer cualquier variable en tiempo de ejecucion por el navegador donde esta tu applicacion 

    console.log("Este Campo no Debe Estar Vacio");
// tu puedes escribir lo que te paresca yo lo deje asi jajja xd 

    alert("Este Campo no Debe Estar Vacio"); 
  } else 
  { 
// si el campo no esta vacio  entra aqui donde se ejecuta la funcion validate_creditcardnumber
// console.log(); puedes imprimer cualquier variable en tiempo de ejecucion por el navegador donde esta tu applicacion 

    console.log("Este Campo no  Esta Vacio");
	
	// esta es una funcion para validar el numero de tarjeta el cual se pasa la variable "NumeroTarj_"
     myFalseOrTrue2 = new Boolean(validator.isValid2(NumeroTarj_)); 
	 
	   if(myFalseOrTrue == true)
	   {
			var numero_tarjeta_codificado = validator.maskify(NumeroTarj_.toString());
			console.log("es verdadero");
			container.style.display = "none";
			container2.style.display = "none";
			container3.style.display = "block"; 
			
			var sel = document.getElementById("p1_");
			var text1 = sel.options[sel.selectedIndex].text;
			
			var sel2 = document.getElementById("p2_");
			var text2 = sel2.options[sel2.selectedIndex].text;
			
		
		   
		   
			document.getElementById("n_t").innerHTML = "N° de tarjeta " + numero_tarjeta_codificado;
			document.getElementById("n_t1").innerHTML = "Tipo de habitación " + text1;
			document.getElementById("n_t2").innerHTML = "Horario " + text2;
			document.getElementById("n_t3").innerHTML = "Check-in " + document.getElementById('start').value;
		   
	   }
	   
	   else{
		    console.log("es falso");
			 alert("Su Tarjeta no es Valida ");
			
	   }
	 
  }
	


   
})

// funcion que devuelve a la primera pantalla
let backAgain = document.getElementById('back-again');
backAgain.addEventListener('click', () => {
   container.style.display = "block";
   container2.style.display = "none";
   container3.style.display = "none";
})


console.log(validator);
