const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  buscarConselhos();
});

async function buscarConselhos() {
  const url = "https://api.adviceslip.com/advice";
  const resposta = await fetch(url);
  const json = await resposta.json();

  document.getElementById("title").innerHTML = `Advice #${json.slip.id}`;
  document.getElementById("text").innerHTML = `"${json.slip.advice}"`;
}
