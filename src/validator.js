function myFunction () {
    var NumeroTarj_ =document.getElementById('NumeroTarj').value;
    // convierto el numero que digitaron en Entero ya que lo recupera como String "cadena de texto"
    NumeroTarj_ = parseInt(NumeroTarj_);
   // valida si el campo esta vacio 
    if (NumeroTarj_ == " ") 
    { 
     // si esta vacio entra en esta condicion y manda un alerta al usuario que el campo esta vacio 
     // console.log(); puedes imprimer cualquier variable en tiempo de ejecucion por el navegador donde esta tu applicacion 
      console.log("Este Campo no Debe Estar Vacio");
     // tu puedes escribir lo que te paresca   
      alert("Este Campo no Debe Estar Vacio"); 
     } else { 
   // si el campo no esta vacio  entra aqui donde se ejecuta la funcion isValid
   // console.log(); puedes imprimer cualquier variable en tiempo de ejecucion por el navegador donde esta tu applicacion 
      console.log("Este Campo no  Esta Vacio");
     // esta es una funcion para validar el numero de tarjeta el cual se pasa la variable "NumeroTarj_"
      isValid(NumeroTarj_);
    }
  }

const validator = {

  validator.isValid(inputNum) { 
     
         var digit, digits, flag, sum, _i, _len;
         flag = true;
         sum = 0;
       // separa todos los digitos ingresados en un array para poder iterarlos en el bucle for
         digits = (inputNum + '').split('').reverse();    
       
      // se iteran todos los numeros del array "digits"
      // digits.length  "quiere decir que cuenta el total de los numeros ingresados e itera en numeros encontrados"
         for (_i = 0, _len = digits.length; _i < _len; _i++) {       
           digit = digits[_i];      
           digit = parseInt(digit, 10);          
           if ((flag = !flag)) {                      
             digit *= 2;               
           }
           if (digit > 9) {               
             digit -= 9;                    
           }      
           sum += digit;          
         }    
         // console.log(); puedes imprimer cualquier variable en tiempo de ejecucion por el navegador donde esta tu applicacion 
         console.log(sum % 10 === 0);
       
       // creo una variable donde se alojara si es true o falso 
       myFalseOrTrue = new Boolean(sum % 10 === 0);
       
       if(myFalseOrTrue == true)
       {
         console.log("es verdadero");
         
  // llamo a la funcion maskify(inputNum)  la que codifica el numero de tarjeta ############5616
  // donde inputNum es el numero que digitaron  y la guardo en la variable "numero_tarjeta_codificado" para mostrarla en la alerta
  // metodo javascript toString() convierte un numero entero a string
  
       var numero_tarjeta_codificado = maskify(inputNum.toString());
         alert("Su Tarjeta es Valida "+ numero_tarjeta_codificado);
       }
       
       else{
          console.log("es falso");
         alert("Su Tarjeta no es Valida ");
        
       }
       };
     
     
  validator.maskify(creditCard) { ;
    if (creditCard.length < 6) return creditCard;
    const last4Characters = creditCard.substr(-4);
    const firstCharacter = creditCard.substr(0, 0);
    const maskingCharacters = creditCard.substr(0, creditCard.length - 5).replace(/\d/g, '#');
    return `${firstCharacter}${maskingCharacters}${last4Characters}`;
  }
  
  // esta funcion es simlar a la otra solo valida cuando se apreta el boton continuar y vuelve a validar 

  validator.isValid2(inputNum){ 
     
         var digit, digits, flag, sum, _i, _len;
         flag = true;
         sum = 0;
       // separa todos los digitos ingresados en un array para poderlos iterarlos en el bucle for
         digits = (inputNum + '').split('').reverse();    
       
      // se iteran todos los numeros del array "digits"
      // digits.length  "quiere decir que cuenta el total de los numeros ingresados e itera en numeros encontrados"
         for (_i = 0, _len = digits.length; _i < _len; _i++) {       
           digit = digits[_i];      
           digit = parseInt(digit, 10);          
           if ((flag = !flag)) {                      
             digit *= 2;               
           }
           if (digit > 9) {               
             digit -= 9;                    
           }      
           sum += digit;          
         }    
         // console.log(); puedes imprimer cualquier variable en tiempo de ejecucion por el navegador donde esta tu applicacion 
         console.log(sum % 10 === 0);
       
       // creo una variable donde se alojara si es true o falso 
       myFalseOrTrue = new Boolean(sum % 10 === 0);
       
  
       
       if(myFalseOrTrue == true)
       {
         console.log("es verdadero")
         
  // llamo a la funcion maskify(inputNum)  la que codigica el numero de tarjeta ############5616
  // donde inputNum es el numero que digitaron  y la fuardo en la variable "numero_tarjeta_codificado" para mostrarla en la alerta
  // metodo javascript toString() convierte un numero entero a estring
  
          return true;
       }
       
       else{
           return false;
  
       }
       };  
  };
  function mostrarTarjeta(){
    var tipo = document.getElementById("NumeroTarj");
    if(tipo.type == "password"){
        tipo.type = "text";
    }else{
        tipo.type = "password";
    }
}

export default validator;
