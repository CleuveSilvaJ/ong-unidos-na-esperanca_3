// js/formValidator.js

// Função principal que valida o formulário
export function validateForm(form) {
  let isValid = true;

  // Captura os campos do formulário
  const nome = form.querySelector("#nome");
  const email = form.querySelector("#email");
  const cpf = form.querySelector("#cpf");
  const telefone = form.querySelector("#telefone");
  const cep = form.querySelector("#cep");
  const termos = form.querySelector("[name='termos']");

  // Validação do nome (mínimo 3 letras)
  if (nome.value.trim().length < 3) {
    alert("Por favor, insira um nome válido com pelo menos 3 letras.");
    isValid = false;
  }

  // Validação do e-mail (formato padrão)
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailValido.test(email.value)) {
    alert("Por favor, insira um e-mail válido.");
    isValid = false;
  }

  // Validação do CPF (somente números, 11 dígitos)
  const cpfLimpo = cpf.value.replace(/\D/g, "");
  if (cpfLimpo.length !== 11) {
    alert("CPF inválido. Deve conter exatamente 11 números.");
    isValid = false;
  }

  // Validação do telefone (somente números, 11 dígitos)
  const telLimpo = telefone.value.replace(/\D/g, "");
  if (telLimpo.length !== 11) {
    alert("Telefone inválido. Deve conter exatamente 11 números.");
    isValid = false;
  }

  // Validação do CEP (somente números, 8 dígitos)
  const cepLimpo = cep.value.replace(/\D/g, "");
  if (cepLimpo.length !== 8) {
    alert("CEP inválido. Deve conter exatamente 8 números.");
    isValid = false;
  }

  // Verificação dos termos
  if (!termos.checked) {
    alert("Você precisa aceitar os termos para continuar.");
    isValid = false;
  }

  return isValid;
}
