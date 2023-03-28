let formPrincipal = document.querySelectorAll(".paciente");

for (let i = 0; i < formPrincipal.length; i++) {
  let paciente = formPrincipal[i];

  let tdPeso = paciente.querySelector(".info-peso");
  let tdAltura = paciente.querySelector(".info-altura");
  let tdImc = paciente.querySelector(".info-imc");
  let peso = tdPeso.textContent;
  let altura = tdAltura.textContent;

  tdImc.textContent = validaImc(peso, altura);

  console.log(tdImc.textContent);
}
