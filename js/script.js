/* =========================================================
   PERSONALIZE AQUI — dados do cliente
   Troque os exemplos pelos dados reais antes de apresentar.
========================================================= */
const CONFIG = {
  nome: "Ateliê Bella",
  whatsapp: "5511999999999", // DDI + DDD + número, somente números
  mensagem: "Olá! Gostaria de consultar os horários disponíveis para agendamento.",
  instagram: "https://www.instagram.com/SEU_PERFIL/",
  endereco: "Rua Exemplo, 123 — Centro, Sua cidade / UF",
  mapa: "https://www.google.com/maps/search/?api=1&query=Rua+Exemplo+123+Sua+Cidade",
  servicos: [
    {
      numero: "01",
      nome: "Manicure tradicional",
      descricao: "Cuidado completo das mãos, cutículas e esmaltação.",
      preco: "A partir de R$ 35"
    },
    {
      numero: "02",
      nome: "Alongamento em gel",
      descricao: "Alongamento com acabamento natural e elegante.",
      preco: "A partir de R$ 120"
    },
    {
      numero: "03",
      nome: "Esmaltação em gel",
      descricao: "Brilho intenso e durabilidade para sua rotina.",
      preco: "A partir de R$ 65"
    },
    {
      numero: "04",
      nome: "Manutenção",
      descricao: "Manutenção cuidadosa para manter suas unhas lindas.",
      preco: "A partir de R$ 80"
    },
    {
      numero: "05",
      nome: "Nail art",
      descricao: "Detalhes personalizados para expressar seu estilo.",
      preco: "Consultar"
    },
    {
      numero: "06",
      nome: "Spa dos pés",
      descricao: "Um cuidado especial para relaxar e renovar.",
      preco: "A partir de R$ 50"
    }
  ]
};

// Monta um link de WhatsApp com mensagem pronta.
const whatsappUrl = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.mensagem)}`;

document.querySelectorAll("[data-whatsapp]").forEach(link => {
  link.href = whatsappUrl;
  link.target = "_blank";
  link.rel = "noopener";
});

document.querySelectorAll("[data-instagram]").forEach(link => {
  link.href = CONFIG.instagram;
});

document.querySelectorAll("[data-maps]").forEach(link => {
  link.href = CONFIG.mapa;
});

document.getElementById("addressText").textContent = CONFIG.endereco;
document.getElementById("year").textContent = new Date().getFullYear();
document.title = `${CONFIG.nome} — Nail Designer`;

// Cria os cards de serviços automaticamente a partir da lista acima.
const serviceGrid = document.getElementById("serviceGrid");
serviceGrid.innerHTML = CONFIG.servicos.map(servico => `
  <article class="service-card">
    <span class="service-number">${servico.numero}</span>
    <h3>${servico.nome}</h3>
    <p>${servico.descricao}</p>
    <div class="service-bottom">
      <strong>${servico.preco}</strong>
      <a href="${whatsappUrl}" target="_blank" rel="noopener">AGENDAR ↗</a>
    </div>
  </article>
`).join("");

// Menu mobile.
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const aberto = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", aberto);
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
