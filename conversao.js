function conversaoDolar(){
let Real, Dolar
Real = parseFloat(frmReal.valorReal.value.replace(",","."))
Dolar = parseFloat(frmReal.valorDolar.value.replace(",","."))
Resultado = Dolar * Real
frmReal.valorResultado.value = Resultado

}