let authContainer = document.querySelector("main > .auth");
let usernameInput = document.querySelector("main > .auth input.username");
let passwordInput = document.querySelector("main > .auth input.password");
let tipWrong = document.querySelector("main > .auth .wrong");


users = {
  "sigma": "krutoi",
  "johnny": "depp",
  "krosh": "smeshariki",
  "simba": "lionking"
};

function checkInputs() {
  console.log(usernameInput.value);
  console.log(passwordInput.value);
  if (usernameInput.value == "") {
    usernameInput.style.borderColor = "#b13f3f";
    authContainer.style.animation = "parallax-form 0.5s";

    if (passwordInput.value == "") {
      passwordInput.style.borderColor = "#b13f3f";
      authContainer.style.animation = "parallax-form 0.5s";
    };
  } else {
    if (passwordInput.value == "") {
      passwordInput.style.borderColor = "#b13f3f";
      authContainer.style.animation = "parallax-form 0.5s";
    } else {
      for (let username in users) {
        if (usernameInput.value == username) {
          if (passwordInput.value == users[username]) {
            window.open(`pages/${username}.html`);
          } else {
            tipWrong.style.display = "block";
          };
        } else {
          tipWrong.style.display = "block";
        };
      };
    };
  };

  timeout = setTimeout(() => {
    usernameInput.style.borderColor = "#ebebeb";
    passwordInput.style.borderColor = "#ebebeb";
    authContainer.style.animation = "none";
  }, 500)
};
