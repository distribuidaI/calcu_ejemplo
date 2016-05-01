
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


Un buen aporte del apunte de Uqbar
http://algo3.uqbar-project.org/temario/03-intro-web/03-web-client-side/web-client-side

es:

Eval is Evil?

Como vemos, el eval me permite generar porciones de código y mandarlas a ejecutar: eso tiene mucho power pero es también motivo de debate filosófico: Douglas Crockford afirma "Eval is evil. Avoid it" casi sin explicación. John Riesig aporta una visión más ecléctica. No queremos participar por el momento de esa discusión, sólo decir:
que la necesidad de generar código dinámico existe
y que es antagónica a las cualidades de
seguridad: tenemos menor control sobre el código que se ejecuta y estamos más expuestos a que el String haga cosas que no debiera
simplicidad: eval(operando1 + operacion + operando2) es menos directo que operando1 + operando2;
facilidad de depuración: al ser más compleja la solución es más difícil de debuggear/tracear

*****/
