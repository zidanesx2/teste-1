// Função para redirecionar para a página de informações
function irParaInfo() {
  window.location.href = "info.html";
}

// Função para enviar o link do grupo para o servidor
async function convidarBot() {
  const link = document.getElementById("linkGrupo").value;
  const respostaEl = document.getElementById("resposta");

  if (!link || !link.includes("chat.whatsapp.com/")) {
    respostaEl.innerText = "❌ Link inválido!";
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/api/convidar-bot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ link }),
    });

    const data = await response.json();
    respostaEl.innerText = data.message || "⚠️ Algo aconteceu!";
  } catch (error) {
    console.error("Erro na conexão com o servidor:", error);
    respostaEl.innerText = "⚠️ Erro ao conectar com o servidor.";
  }
}
