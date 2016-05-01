
function calcula(operacion) {
  var operando1 = document.getElementById("op1").value;
  var operando2 = document.getElementById("op2").value;
  var result = eval(operando1 + operacion + operando2);
  document.getElementById("resultado").innerHTML = result;
}

/*****

- Si no son números?
- Si el divisor es 0?
- Si queremos resetear

- Mejoras a realizar ahora
-- solo habilitemos el control si los operandos son correctos
-- el resultado, si es negativo, mostrarlo en rojo, si es positivo, en verde (modificando el atributo "style")


*****/
