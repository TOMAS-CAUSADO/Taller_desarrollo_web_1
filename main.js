
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
 
 
 
  
//ejercicio01()
 


