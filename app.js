const btn = document.querySelector("#send");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const name = document.querySelector("#name");
  const nameValue = name.value;

  const amount = document.getElementById("amount").value;

  const valueOfEachEnergyDrink = 4.5;
  const totalPrice = amount * valueOfEachEnergyDrink;

  const icms = totalPrice * 0.18;
  const ipi = totalPrice * 0.04;
  const pis = totalPrice * 0.0186;
  const cofins = totalPrice * 0.0854;
  const totalWithTributes = icms + ipi + pis + cofins + totalPrice;
  const totalTributes = icms + ipi + pis + cofins;

  const moneyFormat = { style: "currency", currency: "BRL" };
  const lang = "pt-BR";

  const formatedICMS = icms.toLocaleString(lang, moneyFormat);
  const formatedIPI = ipi.toLocaleString(lang, moneyFormat);
  const formatedPIS = pis.toLocaleString(lang, moneyFormat);
  const formatedCOFINS = cofins.toLocaleString(lang, moneyFormat);
  const formatedTotalWithTributes = totalWithTributes.toLocaleString(lang, moneyFormat);
  const formatedTotalTributes = totalTributes.toLocaleString(lang, moneyFormat);

  const textArea = document.getElementById("text_area");

  textArea.innerText = `Cliente: ${nameValue}; ICMS: ${formatedICMS}; IPI: ${formatedIPI}; PIS: ${formatedPIS}; COFINS: ${formatedCOFINS}; Total dos Impostos: ${formatedTotalTributes}; Total Geral: ${formatedTotalWithTributes};`;
});
