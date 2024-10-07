// cotação de moedas do dia
const USD = 5.49
const EUR = 6.02
const GBP = 7.17

// obtendo os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
})

// captando o evento de submit do formulário
form.onsubmit = (event) => {
  event.preventDefault()

  switch(currency.value) {
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

// função para converter a moeda.
function convertCurrency(amount, price, symbol) {
  try {
    // exibindo a cotação da moeda selecionada
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    // calcula o total
    let total = amount * price

    // exibir o reusltado total
    result.textContent = formatCurrencyBRL(total)



    // aplica a classe que exibe o footer.
    footer.classList.add("show-result")
  } catch (error) {
    // remove a clase que exibe o footer e avisa sobre o erro.
    console.log(error)
    footer.classList.remove("show-result")
    alert("Não foi possível converter. Tente novamente mais tarde.")
  }
}

// formata a moeda em Real Brasileiro
function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}