// ==============================
// INTRO
// ==============================

const intro = document.getElementById("intro");
const main = document.querySelector("main");

setTimeout(() => {

  intro.style.display = "none";

  main.classList.remove("hidden");

}, 2500);


// ==============================
// MODAL DOS BARBEIROS
// ==============================

const barberCards = document.querySelectorAll(".barber-card");

const modal = document.getElementById("modal");

const modalName = document.getElementById("modal-name");

const modalDesc = document.getElementById("modal-desc");

const modalImg = document.getElementById("modal-img");

const modalClose = document.getElementById("modal-close");


barberCards.forEach(card => {

  card.addEventListener("click", () => {

    const name = card.dataset.name;

    const role = card.dataset.role;

    const image = card.querySelector("img").src;

    modalName.textContent = name;

    modalDesc.textContent = role;

    modalImg.src = image;

    modal.style.display = "flex";

  });

});


modalClose.addEventListener("click", () => {

  modal.style.display = "none";

});


window.addEventListener("click", (event) => {

  if (event.target === modal) {

    modal.style.display = "none";

  }

});


// ==============================
// BOTÕES DOS SERVIÇOS
// ==============================

const serviceButtons =
  document.querySelectorAll(".service-button");

const serviceSelect =
  document.getElementById("service");


serviceButtons.forEach(button => {

  button.addEventListener("click", () => {

    const service = button.dataset.service;

    serviceSelect.value = service;

    document
      .getElementById("agendamento")
      .scrollIntoView({
        behavior: "smooth"
      });

  });

});


// ==============================
// DATA MÍNIMA
// Impede escolher uma data passada
// ==============================

const dateInput =
  document.getElementById("date");


const today =
  new Date().toISOString().split("T")[0];


dateInput.min = today;


// ==============================
// FORMULÁRIO DE AGENDAMENTO
// ==============================

const bookingForm =
  document.getElementById("booking-form");


bookingForm.addEventListener("submit", (event) => {

  event.preventDefault();


  const service =
    document.getElementById("service").value;


  const barber =
    document.getElementById("barber").value;


  const date =
    document.getElementById("date").value;


  const time =
    document.getElementById("time").value;


  const name =
    document.getElementById("name").value;


  const phone =
    document.getElementById("phone").value;


  // ==============================
  // CONFIGURAÇÃO DO WHATSAPP
  // ==============================

  // TROQUE ESTE NÚMERO PELO
  // WHATSAPP DA BARBEARIA

  const whatsapp =
    "5547999999999";


  // ==============================
  // FORMATAR DATA
  // ==============================

  const dateParts =
    date.split("-");

  const formattedDate =
    `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;


  // ==============================
  // MENSAGEM
  // ==============================

  const message =
`Olá! Gostaria de agendar um horário.

*Barbearia Premium*

Nome: ${name}
WhatsApp: ${phone}

Serviço: ${service}
Barbeiro: ${barber}

Data: ${formattedDate}
Horário: ${time}

Gostaria de confirmar esse horário.`;


  // ==============================
  // ABRIR WHATSAPP
  // ==============================

  const url =
    `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;


  window.open(url, "_blank");

});


// ==============================
// MENU MOBILE
// ==============================

// No momento o menu é simples.
// Podemos criar um menu hambúrguer
// posteriormente.


console.log(
  "Site da Barbearia Premium carregado!"
);