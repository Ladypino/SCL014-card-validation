const validator = {

  isValid:(inputNum) => { 
    var NumeroTarj_ =document.getElementById('NumeroTarj').value; 
    NumeroTarj_ = parseInt(NumeroTarj_);
    if (NumeroTarj_ == " ") { 
      alert("Este Campo no Debe Estar Vacio"); 
     }

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
  // llamo a la funcion maskify(inputNum)  la que codigica el numero de tarjeta ############5616
  // donde inputNum es el numero que digitaron  y la fuardo en la variable "numero_tarjeta_codificado" para mostrarla en la alerta
  // metodo javascript toString() convierte un numero entero a estring
       },
     
     
  maskify:(creditCard) => { 
    if (creditCard.length < 6) return creditCard;
    const last4Characters = creditCard.substr(-4);
    const firstCharacter = creditCard.substr(0, 0);
    const maskingCharacters = creditCard.substr(0, creditCard.length - 5).replace(/\d/g, '#');
    return `${firstCharacter}${maskingCharacters}${last4Characters}`;
  },
  
  // esta funcion es simlar a la otra solo valida cuando se apreta el boton continuar y vuelve a validar 

  isValid2:(inputNum) => { 
     
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
       const myFalseOrTrue = new Boolean(sum % 10 === 0);
       
       if(myFalseOrTrue == true)
       {
  // llamo a la funcion maskify(inputNum)  la que codigica el numero de tarjeta ############5616
  // donde inputNum es el numero que digitaron  y la fuardo en la variable "numero_tarjeta_codificado" para mostrarla en la alerta
  // metodo javascript toString() convierte un numero entero a estring
  
          return true;
       }
       
       else{
           return false;
  
       }
       },
  };
  var showCardBtn= document.getElementById('mostrarTarjeta');
  showCardBtn.addEventListener('click', () => {
    var tipo = document.getElementById("NumeroTarj");
    if(tipo.type == "password"){
        tipo.type = "text";
    }else{
        tipo.type = "password";
    }
})

export default validator;