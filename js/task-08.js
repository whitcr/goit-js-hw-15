const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  const data = {
    userEmail: email.value,
    userPassword: password.value,
  };

  if (data.userEmail === "" || data.userPassword === "") {
    alert("Всі поля повинні бути заповнені");
    return;
  }

  console.log(data);
  event.currentTarget.reset();
}
