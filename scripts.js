// Cotação das moedas
const USD = 5.13
const EUR = 6.06
const GBP = 6.95

// Obtendo os elementos do formulpario
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = documento.getElementById("result")

// Manipulando o input amount para receber somente números
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;  // expressão que verifica se o caracter ou texto NÃO é um número
  amount.value = amount.value.replace(hasCharactersRegex, "");
})

// Captando o evento de submit do formulário
form.onsubmit = (event) => {
  event.preventDefault() // Ao realizar o submit, via botão ou apertando ENTER, a página não recarrega automaticamente

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
}

// Função para converter a moeda
function convertCurrency(amount, price, symbol) {
  try {
    // Exibindo a cotação da moeda selecionada
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    // Calcula o total
    let total = amount * price
    
    //Aplica a classe que exibe o footer para mostrar o resultado
    footer.classList.add("show-result")
  } catch (error) {
    // Remove a classe do footer removendo ele da tela
    footer.classList.remove("show-result")

    console.log(error)
    alert("Não foi possível converter. Tente novamente mais tarde.")
  }
}

function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
}