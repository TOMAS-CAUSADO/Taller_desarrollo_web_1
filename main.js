
const ejercicio01 = ()=>{//Funciona Correctamente
  
  let Agregar = true;
  let i =0;
  let placa = [];
 let amarillo=0, rosa=0, rojo=0,verde=0, azul=0;

          let terminar= false;
  while (terminar===false) {
      
  Agregar =   parseInt(prompt("Desea agragar un Nuevo auto? 1 = Si 2 = NO")); 

  if (Agregar ==1) {
   
    let final = parseInt(prompt("Digite el Final placa"))
  
    if (final == 1|| final ==2) {
     amarillo++;
      
    }else if (final == 3 || final == 4) {
     rosa++;
    }else if (final == 5 || final == 6) {
      rojo++;
    }else if (final == 7 || final == 8) {
      verde++;
    }else{
     azul++;
    }
    i++;
    
  }else if (Agregar==2) {
      terminar=true;
  
    alert("la cantidad total de autos fue "+i)
    alert("la cantidad de carros amarillos fueron :"+amarillo+"\nla cantidad de carros rosa fueron :"+rosa+"\nla cantidad de carros rojos fueron :"+rojo+"\nla cantidad de carros verdes fueron :"+verde+"\nla cantidad de carros azul fueron :"+azul)
   
    
      }
  }
  
  }

  
  const ejercicio2 = () => { // Funcionando Correctamente

    alert("opciones: digite el numero del animal a trabajar");
  
    let Eleccion = prompt(
      "opciones: 1 = Elefantes. opcion 2 = Jirafa. opcion 3 = Chimpaces"
    );
    var lefante = 0,
      jirafa = 0,
      chimpances = 0;
    var categoria1 = 0,
      categoria2 = 0,
      categoria3 = 0;
  
    if (Eleccion >= 1 && Eleccion <= 3) {
      if (Eleccion == 1) {
        for (var i = 0; i < 5; i++) {
          let edad = parseFloat(prompt("Digite la edad del Elefante #" + (i + 1)))
          if (edad < 0) {
            alert("Edad Ingresada No Aceptada");
          } else if (edad >= 0 && edad <= 1) {
            categoria1 = categoria1 + 1
            } else if (edad > 1 && edad < 3) {
                categoria2 = categoria2 + 1
              } else if (edad >= 3) {
                  categoria3 = categoria3 + 1
                }
              }
            }
          
      
      
            if (Eleccion == 2) {
              for (var i = 0; i < 5; i++) {
                let edad = parseFloat(prompt("Digite la edad de la jirafa #" + (i + 1)))
                if (edad < 0) {
                  alert("Edad Ingresada No Aceptada");
                } else if (edad >= 0 && edad <= 1) {
                  categoria1 = categoria1 + 1
                  } else if (edad > 1 && edad < 3) {
                      categoria2 = categoria2 + 1
                    } else if (edad >= 3) {
                        categoria3 = categoria3 + 1
                      }
                    }
                  }
      
                  if (Eleccion == 3) {
                    for (var i = 0; i < 5; i++) {
                      let edad = parseFloat(prompt("Digite la edad del Chimpaces #" + (i + 1)))
                      if (edad < 0) {
                        alert("Edad Ingresada No Aceptada");
                      } else if (edad >= 0 && edad <= 1) {
                        categoria1 = categoria1 + 1
                        } else if (edad > 1 && edad < 3) {
                            categoria2 = categoria2 + 1
                          } else if (edad >= 3) {
                              categoria3 = categoria3 + 1
                            }
                          }
                        }
        }else{
          alert("la opcion ingresadad no esta registrada")
        }
        
      
   
    let porcentaje1, porcentaje2, porcentaje3;
    console.log(categoria1);
    porcentaje1 = (categoria1 / 5) * 100;
    porcentaje2 = (categoria2 / 5) * 100;
    porcentaje3 = (categoria3 / 5) * 100;
    console.log(
      "El procentaje de animales con la edad de 0 a 1 es de : " + porcentaje1+"%"
    );
    console.log(
      "El procentaje de animales con la edad de mas de 1 y menos de 3 años es de : " +
        porcentaje2+"%"
    );
    console.log(
      "El procentaje de animales con la edad de 3 o mas años es de : " +
        porcentaje3+"%"
    );
  };
 

  const Ejercicio3 = ()=>{ // funciona correctamente
  
      
    let horas_trabajadas = prompt("Digite las horas trabajadas");
            var total_pagar, pagar, pagar_extras;
        if (horas_trabajadas<= 40) {
            pagar = horas_trabajadas*20;
            alert("EL total a pagar al trabajador es :" + pagar)
        }if (horas_trabajadas>40) {
            extras = horas_trabajadas-40;
            pagar=40*20;
            pagar_extras = extras*25;
            total_pagar=pagar+pagar_extras;
            alert("El total a pagar al trabajador es " + total_pagar)
        }
    
    
    }
 
  
//ejercicio01()
//ejercicio2();
//Ejercicio3();
 


