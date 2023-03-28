function validaImc(peso, altura) {
  let imcCalculado = peso / (altura * altura);

  return imcCalculado.toFixed(2);
}
