const ejercicio01 = () => {
  //Funciona Correctamente

  let Agregar = true;
  let i = 0;
  let placa = [];
  let amarillo = 0,
    rosa = 0,
    rojo = 0,
    verde = 0,
    azul = 0;

  let terminar = false;
  while (terminar === false) {
    Agregar = parseInt(prompt("Desea agragar un Nuevo auto? 1 = Si 2 = NO"));

    if (Agregar == 1) {
      let final = parseInt(prompt("Digite el Final placa"));

      if (final == 1 || final == 2) {
        amarillo++;
      } else if (final == 3 || final == 4) {
        rosa++;
      } else if (final == 5 || final == 6) {
        rojo++;
      } else if (final == 7 || final == 8) {
        verde++;
      } else {
        azul++;
      }
      i++;
    } else if (Agregar == 2) {
      terminar = true;

      alert("la cantidad total de autos fue " + i);
      alert(
        "la cantidad de carros amarillos fueron :" +
          amarillo +
          "\nla cantidad de carros rosa fueron :" +
          rosa +
          "\nla cantidad de carros rojos fueron :" +
          rojo +
          "\nla cantidad de carros verdes fueron :" +
          verde +
          "\nla cantidad de carros azul fueron :" +
          azul
      );
    }
  }
};

const ejercicio2 = () => {
  // Funcionando Correctamente

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
        let edad = parseFloat(
          prompt("Digite la edad del Elefante #" + (i + 1))
        );
        if (edad < 0) {
          alert("Edad Ingresada No Aceptada");
        } else if (edad >= 0 && edad <= 1) {
          categoria1 = categoria1 + 1;
        } else if (edad > 1 && edad < 3) {
          categoria2 = categoria2 + 1;
        } else if (edad >= 3) {
          categoria3 = categoria3 + 1;
        }
      }
    }

    if (Eleccion == 2) {
      for (var i = 0; i < 5; i++) {
        let edad = parseFloat(
          prompt("Digite la edad de la jirafa #" + (i + 1))
        );
        if (edad < 0) {
          alert("Edad Ingresada No Aceptada");
        } else if (edad >= 0 && edad <= 1) {
          categoria1 = categoria1 + 1;
        } else if (edad > 1 && edad < 3) {
          categoria2 = categoria2 + 1;
        } else if (edad >= 3) {
          categoria3 = categoria3 + 1;
        }
      }
    }

    if (Eleccion == 3) {
      for (var i = 0; i < 5; i++) {
        let edad = parseFloat(
          prompt("Digite la edad del Chimpaces #" + (i + 1))
        );
        if (edad < 0) {
          alert("Edad Ingresada No Aceptada");
        } else if (edad >= 0 && edad <= 1) {
          categoria1 = categoria1 + 1;
        } else if (edad > 1 && edad < 3) {
          categoria2 = categoria2 + 1;
        } else if (edad >= 3) {
          categoria3 = categoria3 + 1;
        }
      }
    }
  } else {
    alert("la opcion ingresadad no esta registrada");
  }

  let porcentaje1, porcentaje2, porcentaje3;
  console.log(categoria1);
  porcentaje1 = (categoria1 / 5) * 100;
  porcentaje2 = (categoria2 / 5) * 100;
  porcentaje3 = (categoria3 / 5) * 100;
  console.log(
    "El procentaje de animales con la edad de 0 a 1 es de : " +
      porcentaje1 +
      "%"
  );
  console.log(
    "El procentaje de animales con la edad de mas de 1 y menos de 3 años es de : " +
      porcentaje2 +
      "%"
  );
  console.log(
    "El procentaje de animales con la edad de 3 o mas años es de : " +
      porcentaje3 +
      "%"
  );
};

const Ejercicio3 = () => {
  // funciona correctamente

  let horas_trabajadas = prompt("Digite las horas trabajadas");
  var total_pagar, pagar, pagar_extras;
  if (horas_trabajadas <= 40) {
    pagar = horas_trabajadas * 20;
    alert("EL total a pagar al trabajador es :" + pagar);
  }
  if (horas_trabajadas > 40) {
    extras = horas_trabajadas - 40;
    pagar = 40 * 20;
    pagar_extras = extras * 25;
    total_pagar = pagar + pagar_extras;
    alert("El total a pagar al trabajador es " + total_pagar);
  }
};

const ejercicio4 = () => {
  //Funciona Correctamente

  const cantidad_est = parseInt(
    prompt("digite la cantidad la cantidad de estudiantes")
  );
  let i = 0;
  if (isNaN(cantidad_est) || cantidad_est <= 0) {
    alert("digite correctamente el numero de estudiantes");
    return;
  }

  const datos_estudiantes = [];
  while (i < cantidad_est) {
    let sexo = prompt("1 = hombre\n 2= mujer");
    sexo = sexo.toUpperCase();
    if (sexo !== "1" && sexo !== "2") {
      alert("Género no valido, inténtelo nuevamente ");
      continue;
    }
    const edad = parseInt(prompt("Cuál es la edad del estudiante #" + (i + 1)));
    if (edad === undefined || edad <= 0) {
      alert("ingrese una edad correcta");
      continue;
    }
    datos_estudiantes.push({ sexo_est: sexo, edades: edad });
    i++;
  }
  const edad_h = datos_estudiantes.filter(
    (student) => student.sexo_est === "1"
  );
  const sumaedad_h = edad_h.reduce((acc, student) => acc + student.edades, 0);
  const datosh = edad_h.length;
  const promedio_h = sumaedad_h / datosh;

  const promedio_m =
    datos_estudiantes
      .filter((student) => student.sexo_est === "2")
      .reduce((acc, student) => acc + student.edades, 0) /
    datos_estudiantes.filter((student) => student.sexo_est === "2").length;
  const Promedio_total =
    datos_estudiantes.reduce((acc, student) => acc + student.edades, 0) /
    datos_estudiantes.length;

  alert(
    "El promedio de edad de los hombres es" +
      promedio_h +
      "\nEl promedio de edad de las mujeres es " +
      promedio_m +
      "\nel promedio de edad del todos lo estudiantes es:" +
      Promedio_total
  );
};

const Ejercicio5 = () => {
  // Funciona Correctamente

  let cant_Numeros, num_menor;
  console.log(num_menor);
  cant_Numeros = parseFloat(
    prompt("Digite la cantidad de numeros a ingresar :")
  );
  for (let i = 0; i < cant_Numeros; i++) {
    let ingresado_numero = parseFloat(prompt("Digite un numero:"));
    if (i == 0) {
      num_menor = ingresado_numero;
    }

    if (ingresado_numero < num_menor) {
      num_menor = ingresado_numero;
    }
  }
  typeof console.log(num_menor);
  alert("El numero menor es :" + num_menor);
};

const ejercicio7 = () => {
  //funciona todo

  let continueProduct = true;
  let total = 0;
  let productList = [];

  while (continueProduct) {
    let name = prompt("Escriba el nombre del producto");
    let price = parseInt(prompt("Precio del producto"));
    let amount = parseInt(prompt("Cantidad de producto"));
    let productTotal = price * amount;

    let product = {
      name: name,
      price: price,
      amount: amount,
      productTotal: productTotal,
    };
    productList.push(product);

    total = total + productTotal;

    continueProduct = prompt("¿Desea Agregar otro producto? 1 = Si 2 = No");

    if (continueProduct == "1") {
      continueProduct = true;
    } else {
      continueProduct = false;
    }
  }

  productList.forEach((product, index) => {
    alert(
      "Product" +
        (index + 1) +
        ":\nNombre Producto: " +
        product.name +
        "\nPrecio: " +
        product.price +
        "\nCantidad: " +
        product.amount +
        "\nTotal del producto: " +
        product.productTotal +
        "\n"
    );
  });

  alert("El total a pagar es $ " + total);

  console.log(productList);
  console.log(total);
};

const Ejercicio8 = () => {
  // Funciona todo correcto

  let continuar = true;
  let cantidadDescuento = 0;
  let descuentoTotal = 0;
  let valorEntrada= parseFloat(prompt("Escriba el valor de la entrada"));

  while (continuar) {

    let edad= parseFloat(prompt("Escriba la edad del cliente"));
    let descuento = 0;

    if (edad >= 5) {
      
      if (edad <= 14) {
        descuento =  (valorEntrada * 0.35)
        console.log("1 ",descuento);
       
      }
      if (edad >= 15 && edad < 20) {
        descuento =(valorEntrada* 0.25)
        console.log("2 ",descuento);
      }
      if (edad >= 20 && edad < 46) {
        descuento = (valorEntrada * 0.10)
        console.log("3 ",descuento);
      }
      if (edad >= 46 && edad < 66) {
        descuento = (valorEntrada * 0.25)
        console.log("4 ",descuento);
      }
      if (edad >= 66) {
        descuento = (valorEntrada * 0.35)
        console.log("5 ",descuento);
      }

      
      descuentoTotal = descuentoTotal+descuento;

    } else {
      alert("No puede ingresar al cine")
   
    }

    continuar = prompt("¿Ingresar otro cliente? 1 = Si, 2. = No");
    if (continuar != "1") {
      continuar = false;
    }
  }

  alert("El descuento total fue de "+ descuentoTotal);

};


const Ejercicio9 = () => {
  //Funciona todo Correcto
  const vector_ventas = [];
  for (let i = 0; i < 100; i++) {
  vector_ventas.push({
  id: i + 1,
  vendio: Math.floor(Math.random() * 9000000000)});
  }

  const salesCommission = vector_ventas.map((ventas) => {
    const { id, vendio } = ventas;
    let commission = 0;
    if (ventas <= 20000000) {
      commission = vendio * 0.1;
    } else if (vendio > 20000000 && vendio < 40000000) {
      commission = vendio * 0.15;
    } else if (vendio >= 40000000 && vendio < 80000000) {
      commission = vendio * 0.2;
    } else if (vendio >= 80000000 && vendio < 160000000) {
      commission = vendio * 0.25;
    } else {
      commission = vendio * 0.3;
    }
    return ("El vendedor con la ID:" +id +"\nTiene un total de ventas de : " +vendio +"\npor las ventas realizadas obtuvo una comicion de:" + commission );
  });
  console.log(salesCommission.join("\n"));
  const totalSales = vector_ventas.reduce((acc, venta_total) => {
    return acc + venta_total.vendio;}, 0);
 
  const bestSeller = vector_ventas.reduce((acc, sale) => {
      return acc.sales > sale.vendio ? acc : sale;
    },
    { sales: 0 }
  );

};


const EJercicio10 = () => {
  // Funciona todo
  var candidato1, candidato2, candidato3, mayor, suma;

  candidato1 = parseInt(
    prompt("Digite la cantidad de votos obtenidos por el candidato #1")
  );
  if (isNaN(candidato1) || candidato1 === undefined) {
    alert("Dato no valido Digitelo de nuevo ");
    return;
  }

  candidato2 = parseInt(
    prompt("Digite la cantidad de votos obtenidos por el candidato #2")
  );
  if (isNaN(candidato2) || candidato2 === undefined) {
    alert("Dato no valido Digitelo de nuevo ");
    return;
  }
  candidato3 = parseInt(
    prompt("Digite la cantidad de votos obtenidos por el candidato #3")
  );
  if (isNaN(candidato3) || candidato3 === undefined) {
    alert("Dato no valido Digitelo de nuevo ");
    return;
  }
  suma = candidato1 + candidato2 + candidato3;
  console.log("candidato#1 = " + candidato1);
  console.log("candidato#2 = " + candidato2);
  console.log("candidato#3 = " + candidato3);
  if (suma == 50000) {
    if (candidato1 == candidato2 && candidato1 == candidato3) {
      alert("Todos los candidatos tienen la votacion de " + candidato1);
    }
    if (candidato1 == candidato2 && candidato3 > candidato2) {
      alert(
        "la votacion de los candidatos #1 y #2 es igual con un numero de " +
          candidato1 +
          " votos, pero el ganador es el candidato #3 con una votacion de " +
          candidato3
      );
      return;
    }
    if (candidato1 == candidato3 && candidato2 > candidato1) {
      alert(
        "la votacion de los candidatos #1 y #3 es igual con un numero de " +
          candidato1 +
          " votos, pero el ganador es el candidato #3 con una votacion de " +
          candidato2
      );
      return;
    }
    if (candidato2 == candidato3 && candidato1 > candidato2) {
      alert(
        "la votacion de los candidatos #2 y #3 es igual con un numero de " +
          candidato2 +
          " votos, pero el ganador es el candidato #3 con una votacion de " +
          candidato1
      );
      return;
    }

    if (candidato1 > candidato2 && candidato1 > candidato3) {
      alert(
        "El candidato ganador es el Candidato #1, con la cantidad de votos :" +
          candidato1
      );

      return;
    }
    if (candidato2 > candidato1 && candidato2 > candidato3) {
      alert(
        "El candidato ganador es el Candidato #2, con la cantidad de votos :" +
          candidato2
      );
    }
    if (candidato3 > candidato1 && candidato3 > candidato2) {
      alert(
        "El candidato ganador es el Candidato #3, con la cantidad de votos :" +
          candidato3
      );
    }
  } else {
    alert(
      "La cantidad total de los votos de los 3 candidatos debe ser de 50000, la cantidad de votos entregados fue de " +
        suma
    );
  }
};


const Ejercicio11 =()=>{


  let primos =[];
  let numero=2;
  let cantidad = parseInt(prompt("Escriba la cantidad de números primos a generar"));
 
  while(primos.length!=cantidad){

    if(esPrimo(numero)){

      primos.push(numero);
    }
    numero++;

  }
  console.log(primos);
  
  alert("los numeros primos generados estan en consola")
  alert("El promedio de los numeros primos fue: "+(sumatoria(primos)/cantidad)+"\nLa sumatoria de los numeros primos fue:" +sumatoria(primos)+"\nLa multiplicacion de los numeros primos fue: "+multiplicar(primos));
  
}

const sumatoria =(array)=>{
  let suma =0;
  for (let index = 0; index < array.length; index++) {
    suma = suma+ array[index];
    
  }
  return suma;

}
const multiplicar =(array)=>{

  let mult =1;
  for (let index = 0; index < array.length; index++) {
    mult = mult*array[index];
    
  }
  return mult;

}
const esPrimo = (numero)=>{

  for (let index = 2; index < numero; index++) {

    if(numero%index==0){
      return false;
    }
  }
  return true;
}



const Ejercicio12_1 = () => {
  //Funciona todo
  //De los n elementos de la serie de fibonacci diga cuantos son pares, cuantos impares y cuantos ceros.
  var pares = 0,
    impares = 0,
    ceros = 0;
  var Numero = parseInt(
    prompt("Digite el numero a aplicar la serie Fibonacci")
  );
  if (Numero === 0) {
    alert("EL unico elemento en este caso es el cero en contrado una vez");
    return;
  }
  if (Numero === 1) {
    alert(
      "la cantidad de pares en este casos son : 0 \nla cantidad de impares son: 0\nla cantidad de cero en este casos son : 1"
    );
    return;
  }
  vector = [0, 1];
  for (let i = 2; i <= Numero; i++) {
    vector[i] = vector[i - 1] + vector[i - 2];
  }
  for (i = 0; i <= Numero; i++) {
    if (vector[i] % 2 == 0) {
      pares = pares + 1;
    } else {
      impares = impares + 1;
    }
  }

  alert(
    "La serie Fibbonacci quedo :" +
      vector +
      "\nla cantidad de pares en este casos son :" +
      pares +
      " teniendo encuenta el cero\nla cantidad de impares son:" +
      impares +
      "\nla cantidad de cero en este casos son :1"
  );
};

const Ejercicio14 = () => {
  //Funciona todo

  const num1 = parseInt(prompt("Ingrese el primer número"));
  const num2 = parseInt(prompt("Ingrese el segundo número"));

  if (num1 <= 0 && num2 <= 0) {
    alert("Digite valores superiores a cero");
  }
  const mcd = MCD(num1, num2);
  alert(
    "El maximo como un divisor entre " + num1 + " y " + num2 + " es " + mcd
  );
};

const MCD = (num1, num2) => {
  let mcd = 0;
  for (let i = 1; i <= num1 && i <= num2; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      mcd = i;
    }
  }
  return mcd;
};

const Ejercicio15 = () => {
  //Funciona todo

  var Pais_A = 25;
  var Pais_B = 19.9;
  var N_años = 0,
    final = 0;

  while (Pais_A > Pais_B) {
    Pais_A = Pais_A + Pais_A * 0.02;
    Pais_B = Pais_B + Pais_B * 0.03;
    N_años = N_años + 1;
  }

  final = 1994 + N_años;
  typeof console.log("años total=" + final);
  console.log(N_años);
  alert(
    "La cantidad de años que se necesitaron para que el pais B superara la poblacion del Pais A es de " +
      N_años +
      " lo que significa que ocurrio en el año " +
      final
  );
};

//ejercicio01();
//ejercicio2();
//Ejercicio3();
//ejercicio4();
//Ejercicio5();
//ejercicio7();
//Ejercicio8();
//Ejercicio9();
//EJercicio10();
//Ejercicio11();
//Ejercicio12_1();
//Ejercicio14();
//Ejercicio15();
