
function calcular (){
   let strA = document.getElementById("valorA").value;
   let strB = document.getElementById("valorB").value;
   let strC = document.getElementById("valorC").value;


   //comparación estricta para validar que no vengan variables vacias
   if (strA ===  ""){
    warning("Valor A en blanco");
   } else if (strB === ""){
    warning("Valor B en blanco");
   } else if (strC === ""){
    warning("Valor C en blanco");
   }else{
    //si viene informacion convierte la variable a entero
    let a = parseInt(strA);
    let b = parseInt(strB);
    let c = parseInt(strC);

    //validando variables, a no puede ser cero y el discriminante no puede ser negativo

    if (a === 0)
        {
            warning("el valor de a no puede ser cero");
        }else
        {
            let discriminante = (b*b) - (4*a*c);
        
            if (discriminante >= 0)
                {
                let x1 = (-b + Math.sqrt(discriminante))/(2*a);
                let x2 = (-b - Math.sqrt(discriminante))/(2*a);

                document.getElementById("valorX1").value = x1;
                document.getElementById("valorX2").value = x2;

            }else
            {
                warning("La raiz cuadrada no puede ser negativa");
            }
        }

    }
   

}

function limpiar ()
{
    document.getElementById("valorA").value = "";
    document.getElementById("valorB").value = "";
    document.getElementById("valorC").value = "";
    document.getElementById("valorX1").value = "";
    document.getElementById("valorX2").value = "";

}

function warning (mensaje){
    Swal.fire({
        icon: "error",
        title: "Ciudado...",
        text: mensaje,
        
      });
}


