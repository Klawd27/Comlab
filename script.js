const wrapper = document.getElementById("wrapper");
const btn = document.getElementById("switch");
const title = document.getElementById("title");
const text = document.getElementById("text");

let login = false;

btn.addEventListener("click", () => {
  wrapper.classList.toggle("active");
  login = !login;

  title.textContent = login ? "Welcome Back!" : "Hello, Welcome";
  text.textContent = login
    ? "Don't have an account?"
    : "Already have an account?";
  btn.textContent = login ? "Sign Up" : "Log In";
});
