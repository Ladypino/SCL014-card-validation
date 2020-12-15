const validator = {


    isValid:(inputNum) => { 

      var NumeroTarj_ = document.getElementById('NumeroTarj'); 
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
          // console.log(sum % 10 === 0);
         
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
        
    };
 
  export default validator;
