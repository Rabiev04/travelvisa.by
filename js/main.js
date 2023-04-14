const burgerBtn = document.querySelector("#burger-btn");
const navBox = document.querySelector("#nav-box");
burgerBtn.addEventListener("click", function () {
  navBox.classList.toggle("active");
});

function bookAppointment(el) {
  const fullName = el.fullname.value;
  const phoneNumber = el.appointment_contacts.value;
  let error = "";

  if (fullName === "" || phoneNumber === "") {
    error = "* Пожалуйста, заполните все поля формы!";
  } else if (fullName.length < 5) {
    error = "* Пожалуйста, введите действительное имя!";
  } else if (phoneNumber.length < 9) {
    error = "* Номера телефонов должны состоять более чем из 9 цифр!u";
  }
  if (error != "") {
    document.getElementById("booking-appointment-error").textContent = error;
  } else {
    alert("Заявка успешно отправлена! Мы с вами свяжемся в течении 30 минут!");
  }

  return false;
}

const srchInput = document.getElementById("top-srch-input");
const srchBtn = document.getElementById("top-srch-btn");

srchBtn.addEventListener("click", () => {
  if (srchInput.value == "Новости" || srchInput.value == "новости") {
    window.location = "news.html";
  } else if (srchInput.value == "Африка" || srchInput.value == "африка") {
    window.location = "africa.html";
  } else if (srchInput.value == "Азия" || srchInput.value == "азия") {
    window.location = "asia.html";
  } else if (srchInput.value == "Европа" || srchInput.value == "европа") {
    window.location = "europe.html";
  } else if (srchInput.value == "Литва" || srchInput.value == "литва") {
    window.location = "litva.html";
  } else if (srchInput.value == "Шенген" || srchInput.value == "шенген") {
    window.location = "shengen.html";
  } else if (srchInput.value == "Контакты" || srchInput.value == "контакты") {
    window.location = "contacts.html";
  } else if (srchInput.value == "Главная" || srchInput.value == "главная") {
    window.location = "main.html";
  }
});

const commentAreaBox = document.getElementById("section-4");
const leaveComment = document.getElementById("leave-comment");
const commentArea = document.getElementById("comment-area");
const submitComment = document.getElementById("submint-comment");
leaveComment.addEventListener("click", () => {
  commentAreaBox.classList.toggle("comment-field-active");
});
function sendComment() {
  alert("Ваш комментарий был отправлен! Спасибо за ваше уделённое время");
}
