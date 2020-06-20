import validator from "./validator.js";
// funcion que lleva a la segunda pantalla
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  let container = document.getElementById("container");
  let container2 = document.getElementById("container2");
  let container3 = document.getElementById("container3");
  container.style.display = "none";
  container2.style.display = "block";
  container3.style.display = "none";
});

let showCardBtn = document.getElementById("mostrarTarjeta");
  showCardBtn.addEventListener("click", () => {
    var tipo = document.getElementById("NumeroTarj");
    if (tipo.type == "password") {
      tipo.type = "text";
    } else {
      tipo.type = "password";
    }
});

const validatorBtn = document.getElementById("myFunction");
validatorBtn.addEventListener("click", () => {
  var NumeroTarj_ = document.getElementById("NumeroTarj").value;
  // convierto el numero que digitaron en Entero ya que lo recupera como String "cadena de texto"
  NumeroTarj_ = parseInt(NumeroTarj_);
  // valida si el campo esta vacio
  if (NumeroTarj_ == " ") {
    // console.log("Este Campo no Debe Estar Vacio");
    alert("Este Campo no Debe Estar Vacio");
    return;
  }


  const myFalseOrTrue = new Boolean(validator.isValid(NumeroTarj_));
  if (myFalseOrTrue == true) {
    let numero_tarjeta_codificado = validator.maskify(NumeroTarj_.toString());
    alert("Su Tarjeta es Valida " + numero_tarjeta_codificado);

    // funcion que lleva a la tercera pantalla
    let backBtn = document.getElementById("back-btn");
    backBtn.addEventListener("click", () => {
      let container = document.getElementById("container");
      let container2 = document.getElementById("container2");
      let container3 = document.getElementById("container3");
      container.style.display = "none";
      container2.style.display = "none";
      container3.style.display = "block";
    });

    var sel = document.getElementById("p1_");
    var text1 = sel.options[sel.selectedIndex].text;

    var sel2 = document.getElementById("p2_");
    var text2 = sel2.options[sel2.selectedIndex].text;

    document.getElementById("n_t").innerHTML =
      "N° de tarjeta " + numero_tarjeta_codificado;
    document.getElementById("n_t1").innerHTML = "Tipo de habitación " + text1;
    document.getElementById("n_t2").innerHTML = "Horario " + text2;
    document.getElementById("n_t3").innerHTML =
      "Check-in " + document.getElementById("start").value;
  } else {
    alert("Su Tarjeta no es Valida ");
  }
});

// funcion que devuelve a la primera pantalla
let backAgain = document.getElementById("back-again");
backAgain.addEventListener("click", () => {
  let container = document.getElementById("container");
  let container2 = document.getElementById("container2");
  let container3 = document.getElementById("container3");
  container.style.display = "block";
  container2.style.display = "none";
  container3.style.display = "none";
});

//console.log(validator);
